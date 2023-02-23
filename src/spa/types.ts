export type ElementTag = keyof HTMLElementTagNameMap;

export type VNode = {
    key: string;
    tagName: ElementTag;
    innerText?: string;
    children: VDom,
    classList?: string[],
}
export type VDom = Array<VNode>
