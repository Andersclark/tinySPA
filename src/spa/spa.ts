import type { VDom } from "./types";
import render from "./renderer";

export default function renderSpa(querySelector: string): void{
    const data:VDom = [{
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
    render(querySelector, data)
}

