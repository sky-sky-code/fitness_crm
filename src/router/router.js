import {createRouter, createWebHistory} from "vue-router";
import Office from "@/pages/office/Office";
import AddOffice from "@/pages/office/AddOffice";
import DetailOffice from "@/pages/office/DetailOffice";
import GymRoom from "@/pages/gymroom/GymRoom";
import DetailGymRoom from "@/pages/gymroom/DetailGymRoom";
import AddGymRoom from "@/pages/gymroom/AddGymRoom";

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
        path: '/office/:uid',
        component: DetailOffice,
        name: 'officeDetail',
        props: true
    },
    {
        path: '/gymroom',
        component: GymRoom
    },
    {
        path: '/gymroom/:uid',
        name: 'GymRoomDetial',
        component: DetailGymRoom,
        props: true
    },
    {
        path: '/gymroom/add',
        name: 'AddGymRoom',
        component: AddGymRoom
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;