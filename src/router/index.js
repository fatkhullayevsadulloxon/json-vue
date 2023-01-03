import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from "../components/Login.vue"
import Register from "../components/Register.vue"

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
