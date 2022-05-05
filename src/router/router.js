import {createRouter, createWebHistory} from "vue-router";
import Office from "@/pages/Office";
import AddOffice from "@/pages/AddOffice";
import DetailOffice from "@/pages/DetailOffice";

const routes = [
    {
        path: '/office',
        component: Office
    },
    {
        path: '/office/add',
        component: AddOffice
    },
    {
        path: '/office/:officeUid',
        component: DetailOffice,
        name: 'officeDetail',
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;