import Verification from "./Verification.vue";
import IdProof from "./IdProof.vue";
import RegCard from "./RegCard.vue";
import Folios from "./Folios.vue";
import PosChecks from "./PosChecks.vue";
import Payments from "./Payments.vue";
import Other from "./Other.vue";
import Invoices from "./Invoices.vue";

const verificationRoutes = [
  {
    path: "/verification",
    component: Verification,
    children: [
      {
        path: "/idProof",
        component: IdProof,
      },
      {
        path: "/regCard",
        component: RegCard,
      },
      {
        path: "/folios",
        component: Folios,
      },
      {
        path: "/invoices",
        component: Invoices,
      },
      {
        path: "/posChecks",
        component: PosChecks,
      },
      {
        path: "/payment",
        component: Payments,
      },
      {
        path: "/other",
        component: Other,
      },
    ],
  },
];

export default verificationRoutes;
