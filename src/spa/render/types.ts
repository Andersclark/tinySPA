export type ElementTag = keyof HTMLElementTagNameMap;
export type CssClassList = Array<string>

export type VNode = {
    key: string;
    tagName: ElementTag;
    innerText?: string;
    children: VDom,
    classList?: CssClassList,
}
export type VDom = Array<VNode>
