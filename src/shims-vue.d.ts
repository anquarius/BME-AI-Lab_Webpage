/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Migration: vue 2 to vue 3
// declare module 'vue' {
//   import { CompatVue } from '@vue/runtime-dom'
//   const Vue: CompatVue
//   export default Vue
//   export * from '@vue/runtime-dom'
//   const { configureCompat } = Vue
//   export { configureCompat }
// }