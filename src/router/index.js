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
import Folios from "../components/proof/Folios.vue";
<<<<<<< HEAD
import PaymentDetailsDummy from "../components/proof/PaymentDetailsDummy.vue";
import PaymentsDummy from "../components/proof/PaymentsDummy.vue";
import AdvanceDummy from "../components/proof/AdvanceDummy.vue";
=======
import Promotions from "../components/proof/Promotions.vue"

>>>>>>> 00b8e33312580725ec3280a71dc28ec3ef1e48a8
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
  {
    path: "/Folios",
    component: Folios,
  },
  {
<<<<<<< HEAD
    path: "/paymentdetailsdummy",
    component: PaymentDetailsDummy,
  },{
    path: "/paymentdummy",
    component: PaymentsDummy,
  },{
    path: "/advancedummy",
    component: AdvanceDummy,
  },
=======
    path:"/promotions",
    component: Promotions
  }
>>>>>>> 00b8e33312580725ec3280a71dc28ec3ef1e48a8
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
