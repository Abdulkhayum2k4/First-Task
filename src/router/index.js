import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Practice from "../views/Practice.vue";
import DocumentReservation from "../components/documents/DocumentReservation.vue";
import DocumentApproval from "../components/documentApproval/DocumentApproval.vue";
import IDProof from "../components/proof/IDProof.vue";
import MissingProofs from "../components/proof/MissingProofs.vue";

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
    path:"/missingproofs",
    component:MissingProofs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
