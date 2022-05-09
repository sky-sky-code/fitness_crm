import {createRouter, createWebHistory} from "vue-router";
import Office from "@/pages/office/Office";
import AddOffice from "@/pages/office/AddOffice";
import DetailOffice from "@/pages/office/DetailOffice";

import GymRoom from "@/pages/gymroom/GymRoom";
import DetailGymRoom from "@/pages/gymroom/DetailGymRoom";
import AddGymRoom from "@/pages/gymroom/AddGymRoom";

import GymLesson from "@/pages/gymLesson/GymLesson";
import GymLessonDetail from "@/pages/gymLesson/GymLessonDetail";
import AddGymLesson from "@/pages/gymLesson/AddGymLesson";

const routes = [
    { path: '/office', component: Office },
    { path: '/office/add', component: AddOffice },
    { path: '/office/:uid', component: DetailOffice, name: 'officeDetail',  props: true },

    { path: '/gymroom',component: GymRoom },
    { path: '/gymroom/:uid', name: 'GymRoomDetial', component: DetailGymRoom, props: true },
    { path: '/gymroom/add', name: 'AddGymRoom', component: AddGymRoom },

    { path: '/gymlesson', component: GymLesson},
    { path: '/gymlesson/:uid', name: "GymLessonDetial", component: GymLessonDetail, props: true },
    { path: '/gymlesson/add', name: 'AddGymLesson', component: AddGymLesson},
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;