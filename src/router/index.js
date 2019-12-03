import Vue from 'vue'
import Router from 'vue-router'
import { Layout, Content } from "../layout"; // 页面整体布局

process.env.NODE_ENV === "development" ? Vue.use(Router) : null;

/**
 * 1、roles:后台返回的权限结构;
 * 
 */
//手动跳转的页面白名单
const whiteList = [
	'/'
];
/**
 * path:''与path:'*'的区别：
 * 1、path:'*', 会匹配所有路径
 * 2、path:''，也是会匹配到路由
 * 
 */
//默认不需要权限的页面
export const constantRouterMap = [
	{
		path: '',
		component: Layout,
		redirect: '/videoPlaza/videoList',
		hidden: true
	},
	{ path: '/login', name: 'login', component: () => import('@/page/login'), hidden: true },
	{
		path: '/videoPlaza',
		name: 'videoPlaza',
		component: Layout,
		meta: {
			title: '视频广场',
			icon: 'iconinfo',
		},
		noDropdown: true,
		children: [
			{
				path: 'videoList',
				meta: {
					title: '视频广场',
					icon: 'iconinfo',
					routerType: 'leftmenu'
				},
				component: () => import('@/page/videoPlaza/videoList'),
			}
		]
	},
]

//注册路由
export default new Router({
	mode: 'history', // 默认为'hash'模式
	base: '/permission/', // 添加跟目录,对应服务器部署子目录
	routes: constantRouterMap
})

//异步路由（需要权限的页面）
export const asyncRouterMap = [
	{
		path: '/videoBack',
		name: 'videoBack',
		component: Layout,
		meta: {
			title: '录像回看',
			icon: 'iconinfo',
		},
		noDropdown: true,
		children: [
			{
				path: 'videoBackList',
				name: "videoBackList",
				meta: {
					title: '录像回看',
					icon: 'iconinfo',
					routerType: 'leftmenu'
				},
				component: () => import('@/page/videoBack/videoBackList'),
			},
			{
				path: 'videoBackDetail',
				name: "videoBackDetail",
				meta: {
					title: '录像回看',
					icon: 'iconinfo',
					routerType: 'leftmenu'
				},
				hidden: true,
				component: () => import('@/page/videoBack/videoBackDetail'),
			},

		]
	},
	{
		path: '/channelConfig',
		name: 'channelConfig',
		component: Layout,
		meta: {
			title: '通道配置',
			icon: 'iconinfo',
		},
		noDropdown: true,
		children: [
			{
				path: 'channelConfig',
				meta: {
					title: '通道配置',
					icon: 'iconinfo',
					routerType: 'leftmenu'
				},
				component: () => import('@/page/channelConfig/channelConfig'),
			}
		]
	},
	{
		path: '/basicConfig',
		name: 'basicConfig',
		component: Layout,
		meta: {
			title: '基础配置',
			icon: 'iconinfo',
		},
		noDropdown: true,
		children: [
			{
				path: 'basicConfig',
				meta: {
					title: '基础配置',
					icon: 'iconinfo',
					routerType: 'leftmenu'
				},
				component: () => import('@/page/basicConfig/basicConfig'),
			}
		]
	},
	{
		path: '/versionInfo',
		name: 'versionInfo',
		component: Layout,
		meta: {
			title: '版本信息',
			icon: 'iconinfo',
		},
		noDropdown: true,
		children: [
			{
				path: 'versionInfo',
				meta: {
					title: '版本信息',
					icon: 'iconinfo',
					routerType: 'leftmenu'
				},
				component: () => import('@/page/versionInfo/versionInfo'),
			}
		]
	}
];

/**
 *  路由设置要求：
 * 1、该路由有子菜单,可以设置多层嵌套路由children;如果没有子菜单,不需要设置children;通过item.children.length来判断路由的级数;
 * 2、登录成功后,定位到系统首页时,需要加载页面整体布局组件Layout并进行子路由定向加载;
 *
 *
 *
 *
 */

