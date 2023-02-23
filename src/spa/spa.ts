import render, {type VDom} from "./renderer";

export default function renderSpa(querySelector: string): void{
    const data:VDom = [{
        children: [{
            tagName: "h2",
            innerText: "Recursive rendering works!",
            children: []
        }],
        innerText: "HELLO WORLD",
        tagName: "h1"
    }];
    render(querySelector, data)
}
