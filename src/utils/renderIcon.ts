import { h } from 'vue'
import { NIcon } from 'naive-ui'

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default renderIcon
