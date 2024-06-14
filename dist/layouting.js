/**
 * Applies auto layout to a given frame node with the specified padding and layout type.
 * @param frame - The frame node to apply auto layout to.
 * @param padding - The padding value for the auto layout.
 * @param layout - The layout type, either "VERTICAL" or "HORIZONTAL".
 * @returns None.
 */
export function applyAutoLayout(frame, padding, layout) {
    // Set the layout mode, padding, item spacing, and counter axis sizing mode for the frame
    frame.layoutMode = layout; // Set layout mode to VERTICAL or HORIZONTAL
    frame.paddingTop = padding;
    frame.paddingRight = padding;
    frame.paddingBottom = padding;
    frame.paddingLeft = padding;
    frame.itemSpacing = padding / 2;
    frame.counterAxisSizingMode = "AUTO";
}
export function applyHorizontalAutolayout(frame, primaryAxisSizingMode = "AUTO", counterAxisSizingMode = "AUTO", layoutWrap = "NO_WRAP", primaryAxisAlignItems = "CENTER", counterAxisAlignItems = "CENTER", counterAxisAlignContent = "AUTO", paddingTop = 10, paddingBottom = 10, paddingLeft = 10, paddingRight = 10, itemSpacing = 10, counterAxisSpacing = 10, itemReverseZIndex = false) {
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisSizingMode = primaryAxisSizingMode;
    frame.counterAxisSizingMode = counterAxisSizingMode;
    frame.layoutWrap = layoutWrap;
    frame.primaryAxisAlignItems = primaryAxisAlignItems;
    frame.counterAxisAlignItems = counterAxisAlignItems;
    frame.counterAxisAlignContent = counterAxisAlignContent;
    frame.paddingTop = paddingTop;
    frame.paddingBottom = paddingBottom;
    frame.paddingLeft = paddingLeft;
    frame.paddingRight = paddingRight;
    frame.itemSpacing = itemSpacing;
    frame.counterAxisSpacing = counterAxisSpacing;
    frame.itemReverseZIndex = itemReverseZIndex;
}
export function applyVerticalAutolayout(frame, primaryAxisSizingMode = "AUTO", counterAxisSizingMode = "AUTO", layoutWrap = "NO_WRAP", primaryAxisAlignItems = "CENTER", counterAxisAlignItems = "CENTER", counterAxisAlignContent = "AUTO", paddingTop = 10, paddingBottom = 10, paddingLeft = 10, paddingRight = 10, itemSpacing = 10, counterAxisSpacing = 10, itemReverseZIndex = false) {
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = primaryAxisSizingMode;
    frame.counterAxisSizingMode = counterAxisSizingMode;
    frame.layoutWrap = layoutWrap;
    frame.primaryAxisAlignItems = primaryAxisAlignItems;
    frame.counterAxisAlignItems = counterAxisAlignItems;
    frame.counterAxisAlignContent = counterAxisAlignContent;
    frame.paddingTop = paddingTop;
    frame.paddingBottom = paddingBottom;
    frame.paddingLeft = paddingLeft;
    frame.paddingRight = paddingRight;
    frame.itemSpacing = itemSpacing;
    frame.counterAxisSpacing = counterAxisSpacing;
    frame.itemReverseZIndex = itemReverseZIndex;
}
