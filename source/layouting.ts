interface AutolayoutConfig {
    primaryAxisSizingMode: "FIXED" | "AUTO";
    counterAxisSizingMode: "FIXED" | "AUTO";
    layoutWrap: "NO_WRAP" | "WRAP";
    primaryAxisAlignItems: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN";
    counterAxisAlignItems: "MIN" | "MAX" | "CENTER" | "BASELINE";
    counterAxisAlignContent: "AUTO" | "SPACE_BETWEEN";
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
    itemSpacing: number;
    counterAxisSpacing: number;
    itemReverseZIndex: Boolean;
}

/**
 * Applies auto layout to a given frame node with the specified padding and layout type.
 * @param frame - The frame node to apply auto layout to.
 * @param padding - The padding value for the auto layout.
 * @param layout - The layout type, either "VERTICAL" or "HORIZONTAL".
 * @returns None.
 */
export function applyAutoLayout(frame: FrameNode, padding: number, layout: "VERTICAL" | "HORIZONTAL"): void {
    // Set the layout mode, padding, item spacing, and counter axis sizing mode for the frame
    frame.layoutMode = layout; // Set layout mode to VERTICAL or HORIZONTAL
    frame.paddingTop = padding
    frame.paddingRight = padding
    frame.paddingBottom = padding
    frame.paddingLeft = padding
    frame.itemSpacing = padding / 2
    frame.counterAxisSizingMode = "AUTO"
}

export function applyHorizontalAutolayout(frame: FrameNode,
    primaryAxisSizingMode: "FIXED" | "AUTO" = "AUTO",
    counterAxisSizingMode: "FIXED" | "AUTO" = "AUTO",
    layoutWrap: "NO_WRAP" | "WRAP" = "NO_WRAP",
    primaryAxisAlignItems: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN" = "CENTER",
    counterAxisAlignItems: "MIN" | "MAX" | "CENTER" | "BASELINE" = "CENTER",
    counterAxisAlignContent: "AUTO" | "SPACE_BETWEEN" = "AUTO",
    paddingTop: number = 10,
    paddingBottom: number = 10,
    paddingLeft: number = 10,
    paddingRight: number = 10,
    itemSpacing: number = 10,
    counterAxisSpacing: number = 10,
    itemReverseZIndex: boolean = false): void {
    frame.layoutMode = "HORIZONTAL"
    frame.primaryAxisSizingMode = primaryAxisSizingMode
    frame.counterAxisSizingMode = counterAxisSizingMode
    frame.layoutWrap = layoutWrap
    frame.primaryAxisAlignItems = primaryAxisAlignItems
    frame.counterAxisAlignItems = counterAxisAlignItems
    frame.counterAxisAlignContent = counterAxisAlignContent
    frame.paddingTop = paddingTop
    frame.paddingBottom = paddingBottom
    frame.paddingLeft = paddingLeft
    frame.paddingRight = paddingRight
    frame.itemSpacing = itemSpacing
    frame.counterAxisSpacing = counterAxisSpacing
    frame.itemReverseZIndex = itemReverseZIndex
}

export function applyVerticalAutolayout(frame: FrameNode,
    primaryAxisSizingMode: "FIXED" | "AUTO" = "AUTO",
    counterAxisSizingMode: "FIXED" | "AUTO" = "AUTO",
    layoutWrap: "NO_WRAP" | "WRAP" = "NO_WRAP",
    primaryAxisAlignItems: "MIN" | "MAX" | "CENTER" | "SPACE_BETWEEN" = "CENTER",
    counterAxisAlignItems: "MIN" | "MAX" | "CENTER" | "BASELINE" = "CENTER",
    counterAxisAlignContent: "AUTO" | "SPACE_BETWEEN" = "AUTO",
    paddingTop: number = 10,
    paddingBottom: number = 10,
    paddingLeft: number = 10,
    paddingRight: number = 10,
    itemSpacing: number = 10,
    counterAxisSpacing: number = 10,
    itemReverseZIndex: boolean = false): void {
    frame.layoutMode = "VERTICAL"
    frame.primaryAxisSizingMode = primaryAxisSizingMode
    frame.counterAxisSizingMode = counterAxisSizingMode
    frame.layoutWrap = layoutWrap
    frame.primaryAxisAlignItems = primaryAxisAlignItems
    frame.counterAxisAlignItems = counterAxisAlignItems
    frame.counterAxisAlignContent = counterAxisAlignContent
    frame.paddingTop = paddingTop
    frame.paddingBottom = paddingBottom
    frame.paddingLeft = paddingLeft
    frame.paddingRight = paddingRight
    frame.itemSpacing = itemSpacing
    frame.counterAxisSpacing = counterAxisSpacing
    frame.itemReverseZIndex = itemReverseZIndex
}