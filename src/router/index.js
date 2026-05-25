import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Practice from "../views/Practice.vue";
import DocumentReservation from "../components/documents/DocumentReservation.vue";
import Dummy from "../views/Dummy.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/practice",
    component: Practice,
  },
  {
    path: "/documentReservation",
    component: DocumentReservation,
  },
  {
    path:"/dummy",
    component:Dummy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
