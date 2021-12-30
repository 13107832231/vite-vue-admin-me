<template>
  <div>
    <div class="logo-box">
      <img src="@/assets/logo.png" :class="{ 'logo-img': collapsed }" alt="" />
      <span v-if="!collapsed"> vite-vue3-admin</span>
    </div>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :native-scrollbar="false"
      style="max-height: 320px"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :collapsed="collapsed"
        :options="menuOptions"
        :value="active"
      />
    </n-layout-sider>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import menuOptions from '@/utils/menu'
export default defineComponent({
  setup() {
    const route = useRoute()
    const active = computed(() => {
      return route.meta.defaultIndex
    })
    const collapsed = ref(false)
    return {
      active,
      menuOptions,
      collapsed,
    }
  },
})
</script>

<style lang="less" scoped>
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  img {
    width: 40px;
    height: 40px;
    // transition: width 1s, height 1s;
    transition: all 1s;
  }
  .logo-img {
    width: 50px;
    height: 50px;
  }
  span {
    margin-left: 10px;
    font-size: 18px;
  }
}
</style>
