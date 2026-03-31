//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' }

        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // beforeEnter: (to, from, next) => {
                    //     console.log('前置路由守卫', to, from);
                    //     // 判断是否需要权限
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'atguigu') {
                    //             next()
                    //         } else {
                    //             alert('没有权限查看')
                    //         }
                    //     } else {
                    //         next()
                    //     }
                    // }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props: {a:1,b:'hello'}
                            // props的第二种写法，值为布尔值，若布尔值为true，则会把该路由收到的所有params参数，以props的形式传给Detail组件
                            // props: true
                            // props的第三种写法，值为函数，该函数返回的对象中的所有key-value都会以props的形式传给Detail组件
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }

            ]
        }
    ]
})
// 全局前置路由守卫（在路由跳转之前进行判断）
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守卫', to, from);
//     // 判断是否需要权限
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('没有权限查看')
//         }
//     } else {
//         next()
//     }
// })
// //全局后置路由守卫（在路由跳转之后进行一些操作）初始化的时候被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    document.title = to.meta.title || '硅谷系统'
})

//暴露router对象
export default router