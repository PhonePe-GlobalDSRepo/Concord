import { applyAutoLayout } from "./layouting";
import * as Constants from "./constants";
import * as Utils from "./utils";
import * as HandoffManager from "./handoff_manager"
import * as LintReportManager from "./lintReport_manager"
import * as NodeCreator from "./node_manager";
import { lintTypography } from "./rules/lint_typography";
import { validFill, lintFill } from "./rules/lint_fill";
import { lintSize, isFixed } from "./rules/lint_sizing";
import { lintCornerRadius, nonZeroCornerRadius } from "./rules/lint_cornerRadius";
import { lintPadding, nonZeroPadding } from "./rules/lint_padding";
import { lintBorderWidth, validBorderWidth } from "./rules/lint_borderWidth";
import { isDetached, lintDetach } from "./rules/lint_detach";
import { validItemSpacing,lintItemSpacing } from "./rules/lint_itemSpacing";
import { validBoxShadow,lintBoxShadow } from "./rules/lint_boxShadow";
import { validBorderColor,lintBorderColor } from "./rules/lint_borderColor";

// Initialising instances of token JSONs for lint
let semanticJSON : any;
let componentJSON : any;

/** Namespace for linting utilities */
namespace LintUtilities {

    /** List of Lintable Nodes */
    enum LintNodes {
        text = "TEXT",
        rectangle = "RECTANGLE",
        vector = "VECTOR",
        frame = "FRAME",
        instance = "INSTANCE",
        line = "LINE"
    }

    /** List of Lint Rules */
    enum LintRules {
        Fill,
        Typography,
        Size,
        CornerRadius,
        Padding, 
        BorderWidth,
        Detach,
        ItemSpacing,
        BoxShadow,
        BorderColor
    }

    /** Method to check if a node is lintable */
    export function isLintableNode(type: string): type is LintNodes {
        return Object.values(LintNodes).includes(type as LintNodes);
    }

    /** Method to fetch tokens inside composition token (if applicable) */
    function fetchCompositionTokens(node: SceneNode, semanticJSON: any, componentJSON : any): string[] {

        // Initialize an empty array to store sub tokens
        let sub_tokens = []; 

        // Check if "composition" token exists
        const compositionExists = node.getSharedPluginDataKeys("tokens").includes("composition"); 
    
        if (compositionExists) { 
            // Get the value of "composition" token
            let compToken = node.getSharedPluginData("tokens", "composition"); 
            // Remove surrounding quotes if present
            compToken = compToken.replace(/^"|"$/g, ''); 
            
            let value : any;
            // Split the token into path segments
            let tokenPath = compToken.split('.'); 
            if (tokenPath[0]=== `semantic`){
                value = semanticJSON; 
            } else if(tokenPath[0] === `component`){
                value = componentJSON;
            }
    
            // Traverse through the token path to find the corresponding value in semantic JSON
            tokenPath.forEach(key => {
                value = value[key]; 
            });
    
            // Push keys of the nested value object into sub_tokens array
            sub_tokens.push(...Object.keys(value.value));
        }
    
        return sub_tokens; 
    }

    /** Method to fetch rules of a node */
    export function getRules(node: SceneNode): LintRules[] {
        switch (node.type) {
            case LintNodes.text:
                return [LintRules.Fill, LintRules.Typography, LintRules.Padding];

            case LintNodes.vector:
                return [LintRules.Fill, LintRules.Padding,LintRules.CornerRadius, LintRules.BorderWidth]

            case LintNodes.rectangle:
                return [LintRules.Size, LintRules.CornerRadius, LintRules.Padding, LintRules.Fill]
                
            case LintNodes.frame:
                return [LintRules.Detach,LintRules.Size,LintRules.CornerRadius, LintRules.Padding, LintRules.BorderWidth, LintRules.ItemSpacing, LintRules.Fill, LintRules.BorderColor]

            case LintNodes.instance:
                return [LintRules.CornerRadius,LintRules.Size, LintRules.Padding, LintRules.BorderWidth, LintRules.ItemSpacing, LintRules.BoxShadow, LintRules.Fill, LintRules.BorderColor]

            case LintNodes.line:
                return [LintRules.Size, LintRules.BorderWidth, LintRules.BoxShadow, LintRules.Fill, LintRules.BorderColor]
    
            default:
                return [];
        }
    }

    /** Method to execute linting rules */ 
    export function executeRules(node: SceneNode, rules: LintRules[], lintCount: { passed: number; total: number; errors: {tokenErrors: [], generalErrors: []}; warnings: { tokenWarnings: [] } }): boolean {
        const compTokens = fetchCompositionTokens(node, semanticJSON, componentJSON)
        var lintPassed = false;

        rules.forEach(rule => {
            switch (rule) {
                case LintRules.Fill:
                    if(validFill(node)){
                        lintPassed = lintFill(node, lintCount, compTokens);
                    }
                    break;

                case LintRules.Typography:
                    lintPassed = lintTypography(node, lintCount);
                    break;

                case LintRules.Size:
                    if (isFixed(node,'horizontal') || isFixed(node,'vertical')){
                        lintPassed = lintSize(node, lintCount); 
                    }
                    break;

                case LintRules.CornerRadius:
                    if(nonZeroCornerRadius(node)){
                        lintPassed = lintCornerRadius(node, lintCount, compTokens);
                    }
                    break;

                case LintRules.Padding:
                    if(nonZeroPadding(node)){
                        lintPassed = lintPadding(node, lintCount);
                    }
                    break;

                case LintRules.BorderWidth:
                    if(validBorderWidth(node)){
                        lintPassed = lintBorderWidth(node, lintCount, compTokens);
                    }
                    break;
                
                case LintRules.Detach:
                    if(isDetached(node)){
                        lintPassed = lintDetach(node, lintCount);
                    }
                    break;

                case LintRules.ItemSpacing:
                    if(validItemSpacing(node)){
                        lintPassed = lintItemSpacing(node, lintCount);
                    }
                    break;

                case LintRules.BoxShadow:
                    if(validBoxShadow(node)){
                        lintPassed = lintBoxShadow(node, lintCount, compTokens);
                    }
                    break;
            
                case LintRules.BorderColor:
                    if(validBorderColor(node)){
                        lintPassed = lintBorderColor(node, lintCount, compTokens);
                    }
                    break;
            }
        });
        return lintPassed;
    }

    /** Calculation of cumulative passed percentage of node as parent (includes calculation of success percentage of children) */
    export function cumulativePercentage(cumulativeLintData : { passedLint : number , totalLint : number} , node: SceneNode) {

        if (!Utils.isOfTypeParentNode(node)) {
            return;
        }
        const comp = node as Constants.ParentNode;
        const children = comp.children;

        // For each child in the parent node
        children.forEach((child) => {
            let selfValue = selfPercentage(child, undefined, undefined, undefined, cumulativeLintData)
            cumulativePercentage(cumulativeLintData, child)
        });
    }

    /** Calculation of self pass percentage of node (does not include calculation of success percentage of children) */
    export function selfPercentage(node: SceneNode, tokenErrors: string[] | undefined, generalErrors: string[] | undefined, tokenWarnings: string[] | undefined, lintedData: { passedLint: number, totalLint: number}): number {
        if (isLintableNode(node.type)) {
            const nodeRules = getRules(node);
            const lintCount = { 
                passed: 0,
                total: 0,
                errors: {
                    tokenErrors: [],
                    generalErrors: []
                },
                warnings:{
                    tokenWarnings: []
                } 
            } as { passed: number; total: number; errors: { tokenErrors: []; generalErrors: [] }; warnings: { tokenWarnings: [] }};
            const check = executeRules(node, nodeRules, lintCount);

            const percentage = Utils.getRoundedDecimal((lintCount.passed / lintCount.total * 100));
            lintedData.passedLint += lintCount.passed;
            lintedData.totalLint += lintCount.total;
            if (tokenWarnings){ tokenWarnings.push(...lintCount.warnings.tokenWarnings); }
            if (tokenErrors) { tokenErrors.push(...lintCount.errors.tokenErrors); }
            if (generalErrors) { 
                generalErrors.push(...lintCount.errors.generalErrors); 
                if(tokenErrors && tokenErrors.length > 0 ){ generalErrors.push(`Missing tokens : ${tokenErrors.length}`) }
                if (tokenWarnings && tokenWarnings.length > 0){ generalErrors.push(`Lint warnings : ${tokenWarnings.length}`); }
            }
            return percentage;
        } else {
            return -1;
        }
    }
}

/** Namespace for network call to fetch tokens JSON */
export namespace NetworkCall{

    /** List of token files */
    enum TokenFiles {
        Component = 'Component',
        Semantic = 'Semantic'
    }

    /** List of URLs of token files */
    enum fileURL {
        Component = 'https://api.github.com/repos/PhonePe-GlobalDSRepo/LEGO/contents/tokens/%F0%9F%94%92%20Component.json?ref=Production',
        Semantic = 'https://api.github.com/repos/PhonePe-GlobalDSRepo/LEGO/contents/tokens/Semantic.json?ref=Production'
    }

    /** Method to fetch URLs of token files */  
    function getUrl(tokenType: string): string {
        switch (tokenType) {
            case TokenFiles.Component:
                return fileURL.Component;

            case TokenFiles.Semantic:
                return fileURL.Semantic;

            default:
                throw new Error(`Invalid URL type: ${tokenType}`);
        }
    }

    /** Method to decode content of response */ 
    function decodeBase64(input : string ) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
    
        input = input.replace(new RegExp('[^' + chars + ']', 'g'), '');
    
        let buffer = 0;
        let bufferLength = 0;
    
        for (let i = 0; i < input.length; i++) {
            buffer = (buffer << 6) | chars.indexOf(input.charAt(i));
            bufferLength += 6;
    
            if (bufferLength >= 8) {
                output += String.fromCharCode((buffer >> (bufferLength - 8)) & 255);
                bufferLength -= 8;
            }
        }
    
        return output;
    }
    
    /** Method to decode content of response */    
    export async function fetchJSON(tokenType : string) : Promise<any> {
        try {
            
            let url = getUrl(tokenType);
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`Failed to fetch json: ${response.statusText}`);
            }
    
            const data : any = await response.json();
            const content = data.content.replace(/\n/g, ''); 
            const decodedContent = decodeBase64(content);
    
            try {
                // Trim any extra trailing characters that might affect JSON parsing
                let trimmedContent = decodedContent;
                while (trimmedContent.charAt(trimmedContent.length - 1) !== '}') {
                    trimmedContent = trimmedContent.slice(0, -1);
                }
                
                const jsonContent = JSON.parse(trimmedContent);
                return jsonContent
            } catch (error) {
                if (error instanceof SyntaxError) {
                    console.error("Error parsing JSON: Unexpected data at the end. The content might not be properly formatted.");
                } else {
                    console.error("Error parsing JSON:", error);
                }
            }
    
        } catch (error) {
            console.error("An error occurred:", error);
            throw error;
        }
    }
}

/** Function to display lint data */
function displayLintData(data: number): string {
    return (data == 100)? `✅`:`${data}% Passed`
}

/** Function to create lint frame */
export function getLintResultFrame(data: number): FrameNode {
    const lintFrame = figma.createFrame();
    applyAutoLayout(lintFrame, Constants.padding3, "HORIZONTAL");
    lintFrame.fills = [];

    const displayData = displayLintData(data);
    let fontName = { family: "Inter", style: "Regular" };
    let checkNode = NodeCreator.getNewTextNode(displayData, { r: 0.46, g: 0, b: 0 }, fontName = fontName);
    lintFrame.appendChild(checkNode);

    return lintFrame;
}

/** Function to display general node errors */
export function getLintErrorFrame(generalErrors:string[]): FrameNode {

    const lintErrorFrame = figma.createFrame()
    applyAutoLayout(lintErrorFrame, Constants.padding2, "VERTICAL")
    lintErrorFrame.fills = [{type: 'SOLID', color: Constants.white}]
    lintErrorFrame.cornerRadius = 6

    let fontName = { family: "Inter", style: "Regular" };
    let newNode = NodeCreator.getNewTextNode(`Errors`);
    lintErrorFrame.appendChild(newNode);
    
    let line = NodeCreator.getVSpacer(1, Constants.separatorColor)
    line.layoutAlign = "STRETCH"
    lintErrorFrame.appendChild(line)

    let datumNodes: FrameNode[] = []
    generalErrors.forEach((error) => {
        const errorNode = NodeCreator.getNewTextNode(error, { r: 0.36, g: 0, b: 0 }, fontName = fontName);
        lintErrorFrame.appendChild(errorNode)
    })

    return lintErrorFrame;
}

/**
 * This function performs lint checking on a given Figma node.
 * If the node is lintable, it calculates the percentage of passed lint checks.
 * If the node is not lintable, the function returns -1 to indicate that lint checking is not applicable.
 * @param node The Figma node to perform lint checking on.
 * @returns A percentage value representing the ratio of passed lint checks to total lint checks.
 * If lint checking is not applicable for the node, returns -1.
 */
export function lintCheck(node: SceneNode, tokenErrors: string[], generalErrors: string[], tokenWarnings: string[], lintedData: { passedLint: number, totalLint: number}): number {
    // Assign the fetched JSON to global variables
    semanticJSON = LintReportManager.semanticJSON? LintReportManager.semanticJSON : HandoffManager.semanticJSON
    componentJSON = LintReportManager.componentJSON? LintReportManager.componentJSON : HandoffManager.componentJSON

    // Calculation of passed percentage of node as parent (includes success percentage of children)
    const cumulativeLintData = { passedLint : 0, totalLint : 0};
    LintUtilities.cumulativePercentage(cumulativeLintData, node)
    const cumulativePassPercentage = cumulativeLintData.passedLint * 100/ cumulativeLintData.totalLint;
    
    // Calculation of self pass percentage of node (does not include success percentage of children)
    const selfPassPercentage = LintUtilities.selfPercentage(node, tokenErrors, generalErrors, tokenWarnings, lintedData)
    return selfPassPercentage;
}