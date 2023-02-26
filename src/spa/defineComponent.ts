import type {CssClassList, ElementTag, VNode} from "./render/types.js";
import makeComponentKey from "./../utilities/makeComponentKey";

export type ComponentProps = {
  tag: keyof HTMLElementTagNameMap;
  classList: CssClassList;
  textContent: string;
};
export type ComponentState = {
  htmlTag: string;
  classList: CssClassList;
  textContent: string;
}
export type ComponentSetup = (props?: ComponentProps) => ComponentState

type Render = (state: ComponentState) => VNode

type Component = {
  state: ComponentState;
  render: Render;
}

export default function defineComponent(setup: ComponentSetup, props?: ComponentProps, ): Component {
  return {
    state: setup(props),
    render: (state: ComponentState) => makeNodeFromComponentState(state)
  }
}

function makeNodeFromComponentState(state: ComponentState): VNode {
  return {
    key: makeComponentKey(),
    children: [],
    classList: [],
    innerText: state.textContent,
    tagName: state.htmlTag as ElementTag
  }
}
