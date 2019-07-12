const Mobile = () => import('@/views/mobile/Mobile')
const Home = () => import('@/views/mobile/home/Home')
const uploadTest = () => import('@/views/mobile/home/uploadTest')
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
      },
      {
        path:'/mobile/uploadtest',
        name:'uploadTest',
        component:uploadTest
      }
    ]
  }
]
