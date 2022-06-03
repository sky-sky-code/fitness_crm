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

import Subscription from "@/pages/subscription/Subscription";
import SubscriptionPurchased from "@/pages/subscription/SubscriptionPurchased";
import SubscriptionDetail from "@/pages/subscription/SubscriptionDetail";
import AddSubscription from "@/pages/subscription/AddSubscription";

import Client from "@/pages/client/Client";
import ClientDetail from "@/pages/client/ClientDetail";
import AddClient from "@/pages/client/AddClient";
import ClientSubscription from "@/pages/client/ClientSubscription";
import ClientSubscriptionAdd from "@/pages/client/ClientSubscriptionAdd";
import ClientSubscriptionDetail from "@/pages/client/ClientSubscriptionDetail";

import Service from "@/pages/service/Service";
import ServiceDetail from "@/pages/service/ServiceDetail";
import ServiceAdd from "@/pages/service/ServiceAdd";

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

    { path: '/subscription', component: Subscription, name: "Subscription" },
    { path: '/subscription/purchased', component: SubscriptionPurchased, name: 'SubscriptionPurchased' },
    { path: "/subscription/:uid", component: SubscriptionDetail, name: "SubscriptionDetail", props: true },
    { path: "/subscription/add", component: AddSubscription, name: "AddSubscription" },

    { path: '/client', component: Client, name: 'Client' },
    { path: '/client/:uid', component: ClientDetail, name: "ClientDetail", props: true },
    { path: '/client/add', component: AddClient, name: 'AddClient' },
    { path: '/client/:uid/purchased/subscription', component: ClientSubscription, name: "ClientSubscription", props: true },
    { path: '/client/:uid/purchased/subscription/add', component: ClientSubscriptionAdd, name: 'ClientSubscriptionAdd', props: true},
    { path: '/client/purchased/subscription/:uid', component: ClientSubscriptionDetail, name: 'ClientSubscriptionDetail', props: true},

    { path: '/service', component: Service, name: 'Service'},
    { path: '/service/:uid', component: ServiceDetail, name: 'ServiceDetail', props: true},
    { path: '/service/add', component: ServiceAdd, name: 'ServiceAdd' }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;