import render from "./render/renderer";
import {VNode} from "./render/types";
import makeComponentKey from "../utilities/makeComponentKey";


const rootNode: VNode = {
    children: [
        {
            classList: ["text-red", "background-black"],
            innerText: "HELLO WORLD!",
            key: makeComponentKey(),
            tagName: "h1",
            children: []
        },
        {
            classList: ["text-italic"],
            key: makeComponentKey(),
            tagName: "article",
            children: [
                {
                    key: makeComponentKey(),
                    tagName: "p",
                    innerText: "Lorem ipsum dolor, this is probably not the best article but at least there is some text here.",
                    children:  []
                }
            ]
        }
    ],
    classList: [],
    key: makeComponentKey(),
    tagName: "main"
}

export default function renderSpa(querySelector: string): void {
    render(querySelector, rootNode)
}

