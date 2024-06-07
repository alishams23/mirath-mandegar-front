<template>




    <div class=" min-h-screen flex flex-col items-center justify-start">
        <div class="bg-[#002820] py-40 w-full">

        </div>
        <div class="bg-white shadow-2 rounded-3xl w-full max-w-6xl mx-3 mt-[-200px]">

            <img :src="images[currentImageIndex].src" alt="Large Picture"
                class="w-full h-64 rounded-t-3xl object-cover" />

            <div dir="rtl" class="p-4">

                <h2 class="text-2xl font-semibold mb-4">{{ images[currentImageIndex].title }}</h2>
                <p class="text-gray-600 mb-4">شماره تماس: {{ images[currentImageIndex].phone }}</p>
                <p class="text-gray-600 mb-4">{{ images[currentImageIndex].detail }}</p>

                <div class="flex justify-between items-center mb-2 mt-5">
                    <button class="bg-[#8b4513] text-white font-bold px-5 py-2 rounded-2xl ">اطلاعات
                        بیشتر</button>
                </div>
                <div class="grid grid-cols-3 gap-x-4 p-4">
                    <div v-for="(image, index) in images">
                        <img :src="image.src" @click="currentImageIndex = index" alt="Small Picture 1"
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
export default {
    props: ["src", "title", "address", "phone", "detail"],
    data() {
        return {
            images: [
                { src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/attractions-of-yazd.jpg", title: "مکان اول", address: " یه جایی در دور دست ها", phone: "09124654875", detail: "توضیحات" },
                { src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/old_town_Yazd.jpg", title: "مکان دوم", address: " یه جایی در دور دست ها", phone: "0912789456", detail: "توضیحات" },
                { src: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/house-of-Lari-family-.jpg", title: "مکان سوم", address: " یه جایی در دور دست ها", phone: "0912741258", detail: "توضیحات" },
                // { id: 2, image: "https://img.huffingtonpost.com/asset/5bad7c762400005000962785.jpeg?ops=scalefit_720_noupscale", title: "بیمارستان به پول شما خیرین نیاز دارد", address: " یه جایی در دور دست ها", phone: "0912369852", detail: "خب این یه بیمارستان اه در بساط ندارد همینجوری که میبینی توقع چه توضیحی داری " },
            ],
            currentImageIndex: 0
        }
    },

    methods: {

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