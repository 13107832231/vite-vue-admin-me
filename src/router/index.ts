import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { DefineComponent } from "vue";
const layout = () => import("@/views/layout/layout.vue");

const files = import.meta.globEager("./modules/*.ts");

const modules: any = {};
Object.keys(files).forEach((key) => {
  if (key === "./index.js") return;
  let keyName: string = key.replace(/(\.\/|\.ts)/g, "").replace("modules/", "");
  modules[keyName] = files[key].default;
});
console.log(modules, "modulesmodulesmodules");
export interface Routers {
  path: string;
  component?: DefineComponent | Function;
  name?: string;
  redirect?: string;
  meta?: {
    title: string;
    icon?: string;
  };
  children?: Routers[];
}
const router: Routers[] = [
  {
    path: "/",
    redirect: "/test",
    name: "layout",
    component: layout,
    children: [modules.test, modules.testb],
  },
];
const cRouter = createRouter({
  history: createWebHashHistory(),
  routes: router as RouteRecordRaw[],
});
export default cRouter;
