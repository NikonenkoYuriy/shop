import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'


export default new VueRouter({
	routes: [
		{
			path: '',
			name: 'home',
			component: Home
		},
		{
			path: '/ad/:ad',
			name: 'ad',
			component: Ad
		},
		{
			path: '/list',
			name: 'list',
			component: AdList
		},
		{
			path: '/new',
			name: 'newAd',
			component: NewAd
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/registration',
			name: 'registration',
			component: Registration
		},
		{
			path: '/orders',
			name: 'orders',
			component: Orders
		}
	],
	mode: 'history'
})