var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { applyAutoLayout } from "./layouting";
import * as NodeCreator from "./node_manager";
import * as Constants from "./constants";
import * as Utils from "./utils";
/**
 * Returns an array of instances representing each variant of the provided element,
 * from the same component set as the element's main component.
 * @param element - The element to retrieve variants for.
 * @returns An array of instances representing each variant of the provided element.
 */
function getVariants(element) {
    // If the provided element does not have a main component, return an empty array
    if (element.mainComponent == null) {
        return [];
    }
    // Get the component set node that contains the provided element's main component
    const setNode = element.mainComponent.parent;
    // If the set node is null, return an empty array
    if (!setNode) {
        return [];
    }
    // Create an array to store the resulting instances
    const instances = [];
    // Iterate over each child component node in the component set
    const children = setNode.children;
    children.forEach(child => {
        // Create an instance of the child component node
        const compNode = child;
        const instance = compNode.createInstance();
        // Get the main component of the newly created instance
        const mainComponent = instance.mainComponent;
        // Push the new instance to the array of instances
        instances.push(instance);
    });
    // Return the resulting array of instances
    return instances;
}
function parseKeyValuePairs(input) {
    // Split the input string into an array of strings, separated by commas
    const parts = input.split(',');
    // Map each part to a tuple of key-value pairs, separated by the '=' sign
    const pairs = parts.map(part => {
        // Split the part string into an array of strings, separated by the '=' sign
        const [key, value] = part.trim().split('=');
        // Return a tuple of the key-value pair, with the values not separated by a character
        return [key, value];
    });
    // Return the array of key-value pairs
    return pairs;
}
/**
 * Generates a frame containing a title and instances of each variant of the currently selected element.
 * @returns None.
 */
export function generateVariants() {
    // Define an async function to ensure that font loading and frame creation occur in the correct sequence
    (() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        // Load necessary fonts
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        // Get the selected element
        const selectedElement = figma.currentPage.selection[0];
        // If an element is selected
        if (selectedElement) {
            // Get all variants of the element
            const variants = getVariants(selectedElement);
            if (variants.length == 0) {
                // If the selected element has no variants, display a message and exit the plugin
                figma.notify("Selected item has no variants");
                return;
            }
            // Create a new frame for the variant display
            const space = Utils.findEmptySpace(figma.currentPage);
            let frame = figma.createFrame();
            // Apply auto layout and styling to the frame
            applyAutoLayout(frame, 24, "VERTICAL");
            frame.fills = [{ type: 'SOLID', color: Constants.backgroundColor }];
            frame.x = space.x + 24;
            frame.y = space.height;
            // Create a title for the frame based on the component set name
            let fontName = { family: "Inter", style: "Bold" };
            const instanceNode = selectedElement;
            const setNode = (_a = instanceNode.mainComponent) === null || _a === void 0 ? void 0 : _a.parent;
            const titleNode = NodeCreator.getNewTextNode(setNode.name, undefined, fontName);
            titleNode.fontSize = Constants.titleFontSize;
            frame.appendChild(titleNode);
            // Add spacing and alignment attributes to the title and frame
            const spacer = NodeCreator.getVSpacer(2);
            spacer.layoutAlign = "STRETCH";
            frame.layoutAlign = "STRETCH";
            frame.counterAxisSizingMode = "AUTO";
            frame.counterAxisAlignItems = "CENTER";
            frame.appendChild(spacer);
            // Add a variant instance and its name to the frame for each variant in the set
            variants.forEach(variant => {
                var _a, _b;
                let childFrame = figma.createFrame();
                applyAutoLayout(childFrame, 12, "HORIZONTAL");
                childFrame.appendChild(variant);
                let dataFrame = figma.createFrame();
                applyAutoLayout(dataFrame, 12, "VERTICAL");
                let propInfo = parseKeyValuePairs((_b = (_a = variant.mainComponent) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "");
                propInfo.forEach(prop => {
                    let datumNode = NodeCreator.getNewTextNode(`${prop[0]}: ${prop[1]}`);
                    dataFrame.appendChild(datumNode);
                });
                childFrame.appendChild(dataFrame);
                childFrame.counterAxisAlignItems = "CENTER";
                frame.appendChild(childFrame);
                const spacer = NodeCreator.getVSpacer(2);
                spacer.layoutAlign = "STRETCH";
                frame.appendChild(spacer);
            });
            // Scroll to and zoom in on the new frame to ensure it is visible in the viewport
            figma.viewport.scrollAndZoomIntoView([frame]);
            // Display a confirmation message and close the plugin
            figma.notify("Variants generated");
        }
        else {
            // Display an error message if no element is selected
            figma.notify("Please select an element on the canvas.");
        }
    }))();
}
