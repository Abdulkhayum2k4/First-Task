import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Practice from "../views/Practice.vue";
import DocumentReservation from "../components/documents/DocumentReservation.vue";
import DocumentApproval from "../components/documentApproval/DocumentApproval.vue";
import IDProof from "../components/proof/IDProof.vue";
import DefaultLayout from "../components/proof/DefaultLayout.vue";
import Dummy from "../components/proof/Dummy.vue";
import DummyTwo from "../components/proof/DummyTwo.vue";
import DummyThree from "../components/proof/DummyThree.vue";

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
    path: "/documentApproval",
    component: DocumentApproval,
  },
  {
    path: "/documentReservation",
    component: DocumentReservation,
  },
  {
    path: "/idProof",
    component: IDProof,
  },
  {
    path: "/defaultLayout",
    component: DefaultLayout,
  },
  {
    path: "/dummy",
    component: Dummy,
  },
  {
    path: "/dummytwo",
    component: DummyTwo,
  },
  {
    path: "/dummythree",
    component: DummyThree,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
