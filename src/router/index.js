import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Cart from '../components/Cart'
import Order from '../components/Order'
import Goods from '../components/Goods'
import Favorite from '../components/Favorite'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/goods',
            name: 'Goods',
            component: Goods
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/favorite',
            name: 'Favorite',
            component: Favorite
        }
    ]
}) 
