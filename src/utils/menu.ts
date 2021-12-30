import { h, resolveComponent, ComponentOptions } from 'vue'
import renderIcon from '@/utils/renderIcon'
import icons from '@/utils/icons'

const menuOptions = [
  {
    label: () =>
      h(
        resolveComponent('router-link') as ComponentOptions,
        {
          to: {
            name: 'test',
            query: {},
          },
        },
        { default: () => '一级菜单' }
      ),
    key: 'test',
    icon: renderIcon(icons.AirplaneIcon),
  },
  {
    label: '二级菜单',
    key: 'testb',
    icon: renderIcon(icons.PersonIcon),
    children: [
      {
        label: () =>
          h(
            resolveComponent('router-link') as ComponentOptions,
            {
              to: {
                name: 'testbList',
                query: {},
              },
            },
            { default: () => '子级菜单' }
          ),
        key: 'testbList',
      },
    ],
  },
]

export default menuOptions
