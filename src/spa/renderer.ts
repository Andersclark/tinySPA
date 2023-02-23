import type {VDom, VNode} from "./types";

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

const KEY_ATTRIBUTE_NAME = "data-spa-key";

export function getElement(key: string) {
    const selector = `[${KEY_ATTRIBUTE_NAME}='${key}']`
    return document.querySelector(selector)
}

export function updateElement(node: VNode) {
    const element = getElement(node.key);
    if(!element){
        return
    }
    const nextElement = makeElement(node)
    element.replaceWith(nextElement);
}

export function makeElement(node:VNode): HTMLElement{
    const element = document.createElement(node.tagName);
    if(node.innerText){
        element.innerText = node.innerText;
    }
    if(node.classList){
        element.className = node.classList.join(" ");
    }
    if(node.key) {
        element.setAttribute(KEY_ATTRIBUTE_NAME, node.key)
    }
    return element;
}

