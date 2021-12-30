<template>
  <div>main-container</div>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-space vertical>
      <n-input />
      <n-date-picker />
    </n-space>
    <n-button tertiary type="primary">1231 </n-button>
  </n-config-provider>
  <div>{{ test.count }}</div>
  <div class="b-box">1</div>
  <div class="b-box">1</div>
  <div class="b-box">1</div>
  <div class="b-box">1</div>
  <div class="b-box">1</div>
  <div class="b-box">1</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject } from 'vue'
import { useCounterStore } from '@/stores/test'
import useCurrentInstance from '@/utils/useCurrentInstance'
// theme
import { createTheme, inputDark, datePickerDark } from 'naive-ui'
// locale & dateLocale
import { zhCN, dateZhCN } from 'naive-ui'

export default defineComponent({
  components: {},
  setup() {
    const test = useCounterStore()
    const { $api } = useCurrentInstance().proxy
    console.log($api, '$api')
    $api.order.getList().then((res: any) => {
      console.log(res, 'res')
    })

    test.count++
    // with autocompletion ✨
    test.$patch({ count: test.count + 1 })
    // or using an action instead
    test.increment()
    return {
      darkTheme: createTheme([inputDark, datePickerDark]),
      zhCN,
      dateZhCN,
      test,
    }
  },
})
</script>

<style lang="less" scoped>
.b-box {
  padding: 100px 0px;
}
</style>
