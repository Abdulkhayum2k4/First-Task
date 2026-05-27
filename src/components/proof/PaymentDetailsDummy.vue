    <template>
        <div class="container-fluid py-3 bod,yy">
            <div class="col-3 vh-100">
                <div class="card rounded shadow-sm border-0 ">
                    <div class="card-header bg-white d-flex justify-content-between align-items-center">
                        <p class=" fw-bold">
                            Payment details - Advance 1
                        </p>
                    </div>

                    <div class="card-body  border px-2 py-1" style="">
                        <div class="d-flex gap-3 p-2">
                            <p>
                                <img :src="pd1" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    Advance 1
                                </p>
                                
                            </div>
                        </div>
                        <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd2" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    TID :
                                </p>
                                <p class="fw-medium"> 
                                    78476554
                                </p>
                            </div>
                        </div>
                         <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd3" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    Payment Status :
                                </p>
                                <p class="fw-medium"> 
                                    Success
                                </p>
                            </div>
                        </div>
                         <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd4" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    Payment Date
                                </p>
                                <p class="fw-medium"> 
                                    02-05-2001 21:09:20
                                </p>
                            </div>
                        </div>
                         <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd5" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    Transaction ID :
                                </p>
                                <p class="fw-medium"> 
                                    7632847673
                                </p>
                            </div>
                        </div>
                         <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd6" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    Payment ID :
                                </p>
                                <p class="fw-medium"> 
                                    8763487647678476
                                </p>
                            </div>
                        </div>
                         <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd7" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    Signature on charge slip :
                                </p>
                                <p class="fw-semibold" style="color: var(--primary-green);"> 
                                    Signed <img :src="greendone" alt="" class=" align-content-center">
                                </p>
                            </div>
                        </div>
                         <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd6" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    RRN :
                                </p>
                                <p class="fw-medium"> 
                                    8763487647678476
                                </p>
                            </div>
                        </div>
                         <div class="d-flex gap-3 px-2 py-1">
                            <p>
                                <img :src="pd6" alt="">
                            </p>
                            <div class="d-flex gap-2">
                                <p class="fw-semibold">
                                    Auth Code :
                                </p>
                                <p class="fw-medium"> 
                                    8763487647678476
                                </p>
                            </div>
                        </div>
                        <div class="mt-5">
                            
                            <p class="pt-5 text-end pe-3">
                                
                                <button class="text-white border-0 rounded fw-semibold py-1 px-2" style="background-color: var(--primary-red);">
                                    Actions
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>


<script setup>
import pd1 from '../../assets/pd1.png'
import pd2 from '../../assets/pd2.png'
import pd3 from '../../assets/pd3.png'
import pd4 from '../../assets/pd4.png'
import pd5 from '../../assets/pd5.png'
import pd6 from '../../assets/pd6.png'
import pd7 from '../../assets/pd7.png'
import greendone from '../../assets/greendone.png'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Cedarville+Cursive&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=League+Spartan:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&display=swap');

.bodyy {
    font-family: "Inter", sans-serif;
}
</style>