import { createRouter, createWebHistory } from "vue-router";
import Practice from "../views/Practice.vue";
import DocumentReservation from "../components/documents/DocumentReservation.vue";
import DocumentApproval from "../components/documentApproval/DocumentApproval.vue";
import Dummy from "../components/proof/Dummy.vue";
import DummyTwo from "../components/proof/DummyTwo.vue";
import DummyThree from "../components/proof/DummyThree.vue";
import PaymentDetailsDummy from "../components/proof/PaymentDetailsDummy.vue";
import PaymentsDummy from "../components/proof/PaymentsDummy.vue";
import AdvanceDummy from "../components/proof/AdvanceDummy.vue";
import Promotions from "../components/proof/Promotions.vue";
import Anuna from "../components/proof/Anuna.vue";
import verificationRoutes from "../verification/verificationRoutes.js";
import Verification from "../verification/Verification.vue";

const routes = [
  {
    path: "/",
    component: DocumentReservation,
  },
  {
    path: "/documentApproval",
    component: DocumentApproval,
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

  {
    path: "/paymentdetailsdummy",
    component: PaymentDetailsDummy,
  },
  {
    path: "/paymentdummy",
    component: PaymentsDummy,
  },
  {
    path: "/advancedummy",
    component: AdvanceDummy,
  },
  {
    path: "/promotions",
    component: Promotions,
  },
  {
    path: "/anuna",
    component: Anuna,
  },
  {
    path: "/verification",
    component: Verification,
  },
  {
    path:"/practice",
    component: Practice
  },
  ...verificationRoutes,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
