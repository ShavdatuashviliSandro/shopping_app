import {createWebHistory, createRouter} from "vue-router";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/about",
        name: 'About Page',
        component: AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;