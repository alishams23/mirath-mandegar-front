<template>

    <!-- <div v-for="item in items" class=" bg-[#002820] flex justify-center">

        <div class=" w-[1300px] h-[680px] mt-36 bg-white rounded-3xl flex justify-center items-start abolo">
            <div class="flex flex-wrap pl-10 mt-24 md:flex-nowrap">

                <div style="width: 578px;" class=" md:w-1/2 imgholder">

                    <img class="w-[578px] h-[419px] rounded-3xl  object-cover bg-cover mb-4 img" :key="item.id"
                        :src="item.image" alt="Main Product Image">

                    <div class=" w-2/3 space-x-3 flex ">
                        <img class="w-1/4 h-[104px] object-cover bg-cover cursor-pointer rounded-3xl" :key="item.id"
                            :src="item.image">
                        <img class="w-1/4 h-[104px] object-cover bg-cover cursor-pointer rounded-3xl" :key="item.id"
                            :src="item.image">
                        <img class="w-1/4 h-[104px]  object-cover bg-cover cursor-pointer rounded-3xl" :key="item.id"
                            :src="item.image" alt="Thumbnail 3">
                    </div>
                </div>


                <div dir="rtl" class="w-full md:w-1/2 md:pl-8 pr-[110px] sm:pr-0 detail">

                    <h2 class="text-2xl font-bold mb-2 text-[#FFCD9B]">{{ item.title }}</h2>
                    <p class="text-xl font-semibold mb-2 text-[#CCA47C]">مکان:{{ item.address }}</p>
                    <p class="text-xl font-semibold mb-2 text-[#CCA47C]">شماره تماس: {{ item.phone }}</p>

                    <p class="text-[#CCA47C] mb-6">{{ item.detail }}</p>
                    <button
                        class="bg-[#CCA47C] text-white px-6 py-2 rounded-3xl hover:bg-[#c88849] focus:outline-none focus:ring-2 focus:ring-gray-300">برای
                        اطلاعات بیشتر کلیک کنید
                    </button>
                </div>

            </div>
        </div>
    </div> -->


    <!-- <div class="flex justify-center items-center min-h-screen bg-[#002820]">

        <div class="flex w-full max-w-6xl mx-4 bg-white rounded-lg overflow-hidden shadow-xl">

            <div class=" flex w-1/3 relative">

                <img src="https://i.pinimg.com/564x/52/20/79/522079525be5b65c8de673533fe53532.jpg"
                    alt="Botanical Poster" class="absolute inset-0 w-full h-full object-cover rounded-l-lg" />
                <div class=" flex space-x-2 w-[254px]">
                    <img class=" w-2/3 object-cover bg-cover"
                        src="https://i.pinimg.com/564x/c8/e4/bf/c8e4bf1627bc7e2b724fdcf08aa0a721.jpg" alt="">
                    <img class=" w-2/3 object-cover bg-cover"
                        src="https://i.pinimg.com/564x/52/20/79/522079525be5b65c8de673533fe53532.jpg" alt="">
                    <img class=" w-2/3 object-cover bg-cover"
                        src="https://i.pinimg.com/564x/34/f1/7f/34f17fd4387d935d5202f833fa43686d.jpg" alt="">
                </div>
            </div>

            <div dir="rtl" class="flex-1 p-6">

                <h2 class="font-bold text-2xl mb-4">پارک نیازمند کمک شما</h2>

                <p class="text-gray-700 text-lg mb-4">
                    شماره تماس: 0912487569
                </p>
                <p class="text-gray-700 text-lg mb-4">
                    خب این یه پارک خرابه هه همینجوری که میبینی توقع چه توضیحی داری
                </p>

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                    اطلاعات بیشتر
                </button>
            </div>
        </div>
    </div> -->


    <div class="bg-[#002820] p-6 min-h-screen flex flex-col items-center justify-start">

        <div class="bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-2xl mt-28">

            <img :src="currentImage.src" alt="Large Picture" class="w-full h-64 object-cover" />

            <div dir="rtl" class="p-4">

                <h2 class="text-2xl font-semibold mb-4">{{ currentImage.title }}</h2>
                <p class="text-gray-600 mb-4">شماره تماس: {{ currentImage.phone }}</p>
                <p class="text-gray-600 mb-4">{{ currentImage.detail }}</p>

                <div class="flex justify-between items-center mb-2 mt-5">
                    <button
                        class="bg-blue-600 text-white font-bold px-4 py-2 rounded-3xl hover:bg-blue-700 transition-colors">اطلاعات
                        بیشتر</button>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-x-4 p-4">
                <div v-for="(image, index) in images" :key="index">
                    <img :src="image.src" @click="changeImage(index)" alt="Small Picture 1"
                        class="w-full h-28 object-cover bg-cover rounded-3xl cursor-pointer" />
                    <!-- <img :src="image.src" @click="changeImage(index)" alt="Small Picture 2"
                        class="w-full h-28 object-cover bg-cover rounded-3xl cursor-pointer" />
                    <img :src="image.src" @click="changeImage(index)" alt="Small Picture 3"
                        class="w-full h-28 object-cover bg-cover rounded-3xl cursor-pointer" /> -->
                </div>
            </div>
        </div>
    </div>





</template>
<script>
export default {
    props: ["src", "title", "address", "phone", "detail"],
    data() {
        return {
            images: [
                { id: 1, src: "https://i.pinimg.com/564x/c8/e4/bf/c8e4bf1627bc7e2b724fdcf08aa0a721.jpg", title: "پارک نیازمند کمک شما خیرین", address: " یه جایی در دور دست ها", phone: "09124654875", detail: "خب این یه پارک خرابه هه همینجوری که میبینی توقع چه توضیحی داری " },
                { id: 2, src: "https://i.pinimg.com/564x/52/20/79/522079525be5b65c8de673533fe53532.jpg", title: "مدرسه نیازمند کمک شما خیرین", address: " یه جایی در دور دست ها", phone: "0912789456", detail: "خب این یه مدرسه خرابه هه همینجوری که میبینی توقع چه توضیحی داری " },
                { id: 3, src: "https://i.pinimg.com/564x/34/f1/7f/34f17fd4387d935d5202f833fa43686d.jpg", title: "مدرسه به پول شما خیرین نیاز دارد", address: " یه جایی در دور دست ها", phone: "0912741258", detail: "خب این یه مدرسه که پول مخواد همینجوری که میبینی توقع چه توضیحی داری " },
                // { id: 2, image: "https://img.huffingtonpost.com/asset/5bad7c762400005000962785.jpeg?ops=scalefit_720_noupscale", title: "بیمارستان به پول شما خیرین نیاز دارد", address: " یه جایی در دور دست ها", phone: "0912369852", detail: "خب این یه بیمارستان اه در بساط ندارد همینجوری که میبینی توقع چه توضیحی داری " },
            ],
            currentImageIndex: 0
        }
    },
    computed: {
        currentImage() {
            return this.images[this.currentImageIndex]
        }
    },
    methods: {
        changeImage(index) {
            this.currentImageIndex = index
            // this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
        }
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