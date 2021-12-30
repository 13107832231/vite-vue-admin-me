export default {
  path: '/testb',
  name: 'testb',
  component: () => import('@/views/testb/index.vue'),
  redirect: '/testb/list',
  meta: {
    defaultIndex: 'testb',
  },
  children: [
    {
      path: '/testb/list',
      name: 'testbList',
      component: () => import('@/views/testb/list.vue'),
      meta: {
        defaultIndex: 'testbList',
      },
    },
  ],
}
