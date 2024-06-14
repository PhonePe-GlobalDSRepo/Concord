export type ParentNode = FrameNode | ComponentNode | GroupNode | PageNode | SectionNode | ComponentSetNode | InstanceNode | BooleanOperationNode
export const titleFontSize = 28;
export const title2FontSize = 20;
export const title3FontSize = 16;
export const bodyFontSize = 12;
export const backgroundColor = { r: 0.92, g: 0.92, b: 0.92 }
export const darkBackgroundColor = { r: 0.86, g: 0.86, b: 0.86 }
export const green1 = { r: 0.82, g: 0.92, b: 0.82 }
export const padding1 = 24;
export const padding2 = 12;
export const padding3 = 4;
export const separatorColor = { r: 0.84, g: 0.84, b: 0.84 }
export const white = { r: 0.99, g: 0.99, b: 0.99 }

export enum PrimaryDataValues {
    Width,
    Height,
    Radius,
    Fill
}

export enum SecondaryDataValues {
    FontWeight,
    FontSize,
    Opacity,
    BorderColor,
    BorderWidth
}

export type RawDataValue = PrimaryDataValues | SecondaryDataValues

export type fillStyleNode = BooleanOperationNode | ComponentNode | ComponentSetNode | EllipseNode | FrameNode | HighlightNode | InstanceNode | LineNode | PolygonNode | RectangleNode | SectionNode | ShapeWithTextNode | StampNode | StarNode | StickyNode | TableCellNode | TableNode | TextNode | TextSublayerNode | VectorNode | WashiTapeNode
export type backgroundStyleNode = ComponentNode | ComponentSetNode | FrameNode | GroupNode | InstanceNode
export type effectStyleNode = BooleanOperationNode | ComponentNode | ComponentSetNode | EllipseNode | FrameNode | GroupNode | HighlightNode | InstanceNode | LineNode | PolygonNode | RectangleNode | StampNode | StarNode | TextNode | VectorNode | WashiTapeNode
export type gridStyleNode = ComponentNode | ComponentSetNode | FrameNode | InstanceNode
export type strokeStyleNode = BooleanOperationNode | ComponentNode | ComponentSetNode | ConnectorNode | EllipseNode | FrameNode | HighlightNode | InstanceNode | LineNode | PolygonNode | RectangleNode | ShapeWithTextNode | StampNode | StarNode | TextNode | VectorNode | WashiTapeNode
