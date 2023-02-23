export type ElementTag = keyof HTMLElementTagNameMap;

export type VNode = {
    tagName: ElementTag,
    innerText?: string;
    children: VDom,
    classList?: string[],

}
export type VDom = Array<VNode>
