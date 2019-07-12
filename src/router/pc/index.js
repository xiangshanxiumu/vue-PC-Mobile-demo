const PC = () => import('@/views/pc/PC')
const Home = () => import('@/views/pc/home/Home')
export default [
  {
    path: '/pc',
    redirect: '/pc/home',
    name: 'PC',
    component: PC,
    meta: {
      title: 'PC',
      KeepAlive: false // 不缓存
    },
    children: [
      {
        path: '/pc/home',
        name: 'Home_p',
        component: Home,
        meta: {
          title: '首页',
          KeepAlive: false // 不缓存
        }
      }
    ]
  }
]
