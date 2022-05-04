import {createRouter, createWebHistory} from "vue-router";
import Office from "@/pages/Office";

const routes = [
    {
        path: '/office',
        component: Office
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;