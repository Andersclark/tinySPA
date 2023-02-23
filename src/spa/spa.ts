import render from "./renderer";
import state from "./state";

export default function renderSpa(querySelector: string): void {
    render(querySelector, state)
}

