export function applyAutoLayoutHorizontal(
    frame: FrameNode,
    padding: number,
    frameName: string): void {
    frame.layoutMode = "HORIZONTAL"; // Set layout mode to VERTICAL or HORIZONTAL
    frame.name = frameName
    frame.paddingTop = padding
    frame.paddingRight = padding
    frame.paddingBottom = padding
    frame.paddingLeft = padding
    frame.itemSpacing = padding / 4
    frame.cornerRadius = padding / 8
    frame.fills = [{ type: 'SOLID', color: { r: 0.92, g: 0.92, b: 0.92 } }]
    frame.counterAxisSizingMode = "AUTO"
    frame.primaryAxisSizingMode = "AUTO"; // Set primary axis sizing mode to AUTO
}

export function applyAutoLayoutVertical(frame: FrameNode, padding: number, frameName: string): void {
  frame.layoutMode = "VERTICAL"; // Set layout mode to VERTICAL or HORIZONTAL
  frame.name = frameName
  frame.paddingTop = padding
  frame.paddingRight = padding
  frame.paddingBottom = padding
  frame.paddingLeft = padding
  frame.itemSpacing = padding / 4
  frame.cornerRadius = padding / 8
  frame.fills = [{ type: 'SOLID', color: { r: 0.92, g: 0.92, b: 0.92 } }]
  frame.counterAxisSizingMode = "AUTO"
  frame.primaryAxisSizingMode = "AUTO"; // Set primary axis sizing mode to AUTO
}