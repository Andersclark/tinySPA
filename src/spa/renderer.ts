

export type ElementTag = keyof HTMLElementTagNameMap;

export type VNode = {
    tagName: ElementTag,
    innerText?: string;
    children: VDom,
    classList?: string[],

}
export type VDom = Array<VNode>


export default function render(selector: string, vDom: VDom){
    const rootEl = document.querySelector(selector) as HTMLElement;
    renderDOM(vDom, rootEl)
}

function renderDOM(vDom: VDom, targetElement: HTMLElement) {
    vDom.forEach(node => {
        const element = makeElement(node)
        targetElement.appendChild(element);
        if(node.children.length > 0){
            renderDOM(node.children, element)
        }
    })
}

function makeElement(node:VNode): HTMLElement{
    const element = document.createElement(node.tagName);
    if(node.innerText){
        element.innerText = node.innerText;
    }
    if(node.classList){
        element.className = node.classList.join(" ");
    }
    return element;
}

