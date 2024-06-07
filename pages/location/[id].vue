<template>
    <div class=" min-h-screen flex flex-col items-center justify-start">
        <div class="bg-[#002820] py-40 w-full">

        </div>
        <div v-if="loading" class="flex justify-center items-center relative bottom-36">
            <div class="inline-block h-32 w-32 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] bg-white  text-blue-700"
                role="status">
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
        </div>
        <div v-else class="bg-white shadow-2 rounded-3xl w-full max-w-6xl mx-3 mt-[-200px]">

            <img :src="building.photos[0].address" alt="Large Picture" class="w-full h-64 rounded-t-3xl object-cover" />

            <div dir="rtl" class="p-4">

                <h2 class="text-2xl font-semibold mb-4">{{ building.title }}</h2>
                <p class="text-gray-600 mb-4">شماره تماس: {{ building.phone_number }}</p>
                <p class="text-gray-600 mb-4">{{ building.description }}</p>
                <p class="text-gray-600 mb-4">{{ building.location }}</p>

                <div class="flex justify-between items-center mb-2 mt-5">
                    <button class="bg-[#8b4513] text-white font-bold px-5 py-2 rounded-2xl ">اطلاعات
                        بیشتر</button>
                </div>
                <div class="grid grid-cols-3 gap-x-4 p-4">
                    <!-- <div v-if="imgLoading">
                        <div class="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] bg-white  text-blue-700"
                            role="status">
                            <span
                                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                        </div>
                    </div> -->
                    <div v-for="(image, index ) in building.photos">
                        <img :src="image.address" @click="currentImageIndex = index" v-if="index < 3"
                            alt="Small Picture 1"
                            class="w-full h-28 object-cover bg-cover rounded-3xl cursor-pointer" />
                        <!-- <img :src="image.src" @click="changeImage(index)" alt="Small Picture 2"
                        class="w-full h-28 object-cover bg-cover rounded-3xl cursor-pointer" />
                    <img :src="image.src" @click="changeImage(index)" alt="Small Picture 3"
                        class="w-full h-28 object-cover bg-cover rounded-3xl cursor-pointer" /> -->
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.36662893734!2d54.277689856013005!3d31.9414901371338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fa611c762c5cfeb%3A0xbca5673f21355f7f!2sShahediyeh%2C%20Yazd%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1716459029304!5m2!1sen!2snl"
                    class="w-full rounded-3xl" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


        </div>
    </div>
</template>
<script>
import { apiStore } from '~/store/api';
import axios from 'axios'
import { useUserStore } from '~/store/user';
export default {
    props: ["src", "title", "address", "phone", "detail"],
    data: () => ({
        building: null,
        loading: true,
    }),

    methods: {
        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/project/Buildings/${this.$route.params.id}/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: this.isLogin == true ? `Token ${useUserStore().userToken}` : '',
                },
            }).then((response) => {
                this.building = response.data
                this.loading = false
                console.log(this.building)

            })
        },
        // getImage() {
        //     this.imgLoading = true
        //     axios.get(`${apiStore().address}/api/project/Buildings/`, {
        //         headers: {
        //             "Content-type": "application/json",
        //             Accept: "application/json",
        //         },
        //     }).then((response) => {
        //         this.images = response.data
        //         this.imgLoading = false
        //         console.log(this.images)
        //     })
        // }
    },
    mounted() {
        this.getData()
        // this.getImage()
    }
}
</script>
<style>
.detail {
    padding-right: 110px;
}

@media (max-width: 750px) {
    .abolo {
        margin-top: 90px
    }

    .detail {
        padding-right: 0px;
    }

    .imgholder {
        height: 25%;
        margin-bottom: 3rem;
    }

    .img {
        height: 500px;
    }
}
</style>