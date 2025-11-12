import React from 'react';
/**
 * Render a tip tap JSON node and all its children
 * @param {TipTapNode} node JSON node to render
 * @param {NodeHandlers} handlers a handler for each node type
 * @returns tree of components as react elements
 */
export declare function TipTapRender(props: {
    node: TipTapNode;
    handlers: NodeHandlers;
}): JSX.Element;
interface Attrs {
    readonly [attr: string]: any;
}
export interface TipTapNode {
    type: string;
    attrs?: Attrs;
    marks?: Attrs[];
    content?: TipTapNode[];
    readonly [attr: string]: any;
}
export interface NodeProps {
    children?: React.ReactNode;
    node: TipTapNode;
}
export type NodeHandler = (props: NodeProps) => JSX.Element;
export interface NodeHandlers {
    readonly [attr: string]: NodeHandler;
}
export {};
//# sourceMappingURL=tip-tap-render.d.ts.map