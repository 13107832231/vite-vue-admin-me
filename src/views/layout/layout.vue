<template>
  <n-layout class="sys-container" has-sider>
    <div class="sys-menu">
      <Menu></Menu>
    </div>
    <div class="sys-content">
      <div class="sys-header">
        <div></div>
        <div class="header-right">
          <span class="name">用户001</span>
          <n-dropdown
            trigger="hover"
            @select="handleSelect"
            :options="options"
            :show-arrow="true"
          >
            <n-avatar
              class="avatar"
              round
              size="small"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </n-dropdown>
        </div>
      </div>
      <div class="sys-main">
        <router-view></router-view>
      </div>
    </div>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from '@/views/layout/components/menu.vue'
export default defineComponent({
  components: {
    Menu,
  },
  setup() {
    const handleSelect = (key: string) => {
      console.log(key)
    }
    return {
      options: [
        {
          label: '个人中心',
          key: 'userCenter',
        },
        {
          label: '退出登录',
          key: 'logOut',
        },
      ],
      handleSelect,
    }
  },
})
</script>

<style lang="less" scoped>
.sys-container {
  width: 100%;
  height: 100vh;
  display: flex;
  .sys-menu {
    background-color: lightblue;
  }
  .sys-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .sys-header {
      height: 60px;
      border-bottom: 1px solid #efefef;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
      .header-right {
        display: flex;
        align-items: center;
        .name {
          margin-right: 10px;
        }
        .avatar {
          cursor: pointer;
        }
      }
    }
    .sys-main {
      padding: 10px;
      flex: 1;
      overflow: scroll;
    }
  }
}
</style>
