import React from 'react';

/**
 * Render a tip tap JSON node and all its children
 * @param {TipTapNode} node JSON node to render
 * @param {NodeHandlers} handlers a handler for each node type
 * @returns tree of components as react elements
 */
declare function TipTapRender(props: {
    node: TipTapNode;
    handlers: NodeHandlers;
}): JSX.Element;
interface Attrs {
    readonly [attr: string]: any;
}
interface TipTapNode {
    type: string;
    attrs?: Attrs;
    marks?: Attrs[];
    content?: TipTapNode[];
    readonly [attr: string]: any;
}
interface NodeProps {
    children?: React.ReactNode;
    node: TipTapNode;
}
type NodeHandler = (props: NodeProps) => JSX.Element;
interface NodeHandlers {
    readonly [attr: string]: NodeHandler;
}

export { NodeHandler, NodeHandlers, NodeProps, TipTapNode, TipTapRender };
