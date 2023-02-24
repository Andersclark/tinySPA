import {VDom, VNode} from "./types";
import generateUUID from "../utilities/guid";

//TODO: State should be sourced from something else later
const baseState = [{
  tagName: "main",
  innerText: "HELLO WORLD",
  children: [
    {
      tagName: "h1",
      innerText: "First child of first level",
      classList: [],
      children: [],
    },
    {
      tagName: "article",
      classList: [],
      children: [
        {
          tagName: "h2",
          innerText: "First child of second level",
          classList: [],
          children: [],
        },
        {
          tagName: "p",
          innerText: "Second child of second level level... lorem ipsum, recursive rendering is a thing",
          classList: [],
          children: [],
        },
          {
          tagName: "p",
          innerText: "Third child of second level levelLorem ipsum, recursive rendering is a thing",
          classList: [],
          children: [],
        },


    ]
  },
  ],
}];

function attachKeysToState(state: any[]):VDom{
  const vDom = [...state]
  vDom.forEach(node => {
    attachKey(node)
    attachKeysToState(node.children)
  })
  return state;
}

function attachKey(node:VNode): VNode {
  if(!node.key){
    node.key = generateUUID()
  }
  return node;
}

const state = attachKeysToState(baseState)
export default state;
