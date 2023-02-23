import {VDom, VNode} from "./types";
import generateUUID from "../utilities/guid";

//TODO: State should be sourced from something else later
const baseState: VDom = [{
  children: [{
    tagName: "h2",
    innerText: "Recursive rendering works!",
    classList: [],
    children: [
      {
        tagName: "h3",
        innerText: "CSS-classes works",
        classList: ["red-background"],
        children: [],
      }
    ]
  }],
  innerText: "HELLO WORLD",
  tagName: "h1"
}];

function attachKeysToState(vDom:VDom):VDom{
  vDom.forEach(node => {
    attachKey(node)
    attachKeysToState(node.children)
  })
  return vDom;
}

function attachKey(node:VNode): VNode {
  if(!node.key){
    node.key = generateUUID()
  }
  return node;
}

const state = attachKeysToState(baseState)
export default state;
