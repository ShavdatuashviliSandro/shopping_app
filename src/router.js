import {createWebHistory, createRouter} from "vue-router";
import HomePage from "@/pages/HomePage";
import cartPage from "@/pages/CartPage";
import aboutPage from "@/pages/AboutPage";
import innerPage from "@/pages/InnerPage"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/cart",
        name: 'Cart Page',
        component: cartPage
    },
    {
        path: "/about",
        name: 'About Page',
        component: aboutPage
    },
    {
        path: "/inner",
        name: 'About Page',
        component: innerPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;