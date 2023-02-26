import type {VNode} from "./types";

export default function render(targetSelector: string, rootNode: VNode){
    const rootEl = document.querySelector(targetSelector) as HTMLElement;
    renderNode(rootNode, rootEl)
}

function renderNode(rootNode: VNode, targetElement: HTMLElement) {
        const element = makeElement(rootNode)
        targetElement.appendChild(element)
        if(rootNode.children.length > 0){
            rootNode.children.forEach(childNode => renderNode(childNode, element))
        }
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

