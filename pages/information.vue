<template>
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