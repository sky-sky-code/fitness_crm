import {createRouter, createWebHistory} from "vue-router";
import Office from "@/pages/Office";
import AddOffice from "@/pages/AddOffice";

const routes = [
    {
        path: '/office',
        component: Office
    },
    {
        path: '/office/add',
        component: AddOffice
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;