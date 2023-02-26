import { updateElement } from "../spa/render/renderer";

function attachGlobalMethods(methods: Array<(args0: any)=> unknown | void>): void {
  const GLOBAL:any = window;
  const PREFIX = "SPA_DEV"
  const devMethods: any = {}
  methods.forEach((method) => {
    devMethods[method.name] = method;
  });
  GLOBAL[PREFIX] = devMethods;
}


export default function attachDevMethods(){
  attachGlobalMethods([updateElement])
}
