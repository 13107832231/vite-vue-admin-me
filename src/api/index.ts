/**
 * 引入所有api
 */
// const modules = import.meta.globEager('./modules/*.ts')
// let apiModules = {}
// Object.keys(modules).forEach((key) => {
//   apiModules = { ...apiModules, ...modules[key].default }
// })
const files = import.meta.globEager('./modules/*.ts')
const modules: any = {}
Object.keys(files).forEach((key) => {
  if (key === './index.js') return
  let keyName: string = key.replace(/(\.\/|\.ts)/g, '').replace('modules/', '')
  modules[keyName] = files[key].default
})
console.log(modules, 'modulesmodulesmodules')
export default {
  // ...apiModules,
  ...modules,
}
