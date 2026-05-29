    <template>
        <div class="container-fluid py-3 bod,yy">
            <div class="col-3 vh-100">
                <div class="card rounded shadow-sm border-0 ">
                    <div class="card-header bg-white d-flex justify-content-between align-items-center">
                        <p class=" fw-bold">
                            2 Payments
                        </p>
                    </div>

                    <div class="card-body  border p-2" style="">
                        <div class=" rounded" style="border: 1px solid var(--primary-red);">


                            <div class="d-flex justify-content-between align-items-center bg-secondary-subtle px-2 mt-1"
                                style="height: 30px;">

                                <div class="d-flex align-items-center gap-2">
                                    <div style="background-color: var(--primary-red); height: 21px; width: 5px;"
                                        class="rounded">
                                    </div>

                                    <p class="fw-medium mb-0">
                                        Trx iD on terminal : 18293
                                    </p>
                                </div>

                                <p class="mb-0 fw-semibold" style="color:var(--primary-green)">Success</p>

                            </div>
                            <div class="p-3">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex gap-3">
                                        <p>
                                            <img :src="whitepin" alt="" class="p-1 rounded"
                                                style="background-color: var(--primary-red);">
                                        </p>
                                        <div class="d-flex flex-column">
                                            <p class="fw-semibold pb-0 mb-0">Advance 1 <i
                                                    class="ri-arrow-right-s-line"></i>
                                            </p>

                                            <em>
                                                <p class="small mt-0">02/01/2001 02:30</p>
                                            </em>
                                        </div>
                                    </div>
                                    <div class="fw-bolder " style="color:var(--primary-green)">
                                        <p class="fs-5">₹ 2,000.00</p>

                                    </div>
                                </div>
                                <div class="d-flex justify-content-center border rounded py-1">
                                    <img :src="cardoff" alt="" width="15" height="15" class=" align-self-center">
                                    <span class="ms-2 fw-semibold" style="color: #2100DD;">Card not present</span>
                                </div>
                            </div>
                        </div>
                        <div class="border rounded mt-3" style="">


                            <div class="d-flex justify-content-between align-items-center bg-secondary-subtle px-2 mt-1"
                                style="height: 30px;">

                                <div class="d-flex align-items-center gap-2">
                                    <div style="background-color: var(--primary-red); height: 21px; width: 5px;"
                                        class="rounded">
                                    </div>

                                    <p class="fw-medium mb-0">
                                        Trx iD on terminal : 18293
                                    </p>
                                </div>

                                <p class="mb-0 fw-semibold" style="color:var(--primary-green)">Success</p>

                            </div>
                            <div class="p-3">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex gap-3">

                                        <div class="d-flex flex-column">
                                            <p class="fw-medium pb-0 mb-0">Payment 2 <i
                                                    class="ri-arrow-right-s-line"></i>
                                            </p>

                                            <em>
                                                <p class="small mt-0">02/01/2001 02:30</p>
                                            </em>
                                        </div>
                                    </div>
                                    <div class="fw-bolder ">
                                        <p class="mb-0 pb-0 fs-5" style="color:var(--primary-green)">₹ 1,72,238.30</p>
                                        <p class="mt-0 pt-0 fw-medium small text-end">
                                            <span>
                                                Sale completed
                                            </span>
                                        </p>

                                    </div>
                                </div>
                                <div class="d-flex justify-content-center border rounded py-1"
                                    style="background-color: #fcf2e4;">
                                    <img :src="prevent" alt="" width="15" height="15" class=" align-self-center">
                                    <span class="ms-2 fw-semibold" style="color: #ED8C05;">Pre Auth</span>
                                </div>
                            </div>
                            <div class="" :style="{ backgroundImage: `url(${bglav})`,  backgroundSize: '480px'}">
                                <div class="d-flex justify-content-between p-2">
                                    <div class="">
                                        <p class="mb-0 pb-0 fw-semibold">₹ 25,92,099.20</p>
                                        <p class="mt-0 pt-0">Initiated</p>
                                    </div>
                                    <div class="">
                                        <p class="mb-0 pb-0 fw-semibold">₹ 12,099.20</p>
                                        <p class="mt-0 pt-0">Reversed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>


<script setup>
import whitepin from '../../assets/whitepin.png';
import cardoff from '../../assets/cardoff.png';
import prevent from '../../assets/prevauthor.png'
import bglav from '../../assets/bglav.png'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Cedarville+Cursive&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=League+Spartan:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap');

.bodyy {
    font-family: "Inter", sans-serif;
}
</style>