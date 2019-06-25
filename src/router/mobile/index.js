const Mobile = () => import('@/components/mobile/Mobile')
const Home = () => import('@/components/mobile/home/Home')
export default [
  {
    path: '/mobile',
    name: 'Mobile',
    component: Mobile,
    meta: {
      title: 'Mobile',
      KeepAlive: false // 不缓存
    },
    children: [
      {
        path: '/mobile/home',
        name: 'Home_m',
        component: Home,
        meta: {
          title: '首页',
          KeepAlive: false // 不缓存
        }
      }
    ]
  }
]
