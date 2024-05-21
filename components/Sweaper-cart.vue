<template>
    <div class=" ">
        <div class="flex mt-[60px] mb-10 items-center justify-end">
            <h2 class=" text-2xl font-black text-right my-3 mr-4  ">محصولات</h2>
            <div class="h-12 w-12 bg-[#8b4513] flex justify-center items-center  mr-10 rounded-xl">
                <ShoppingBagIcon class=" w-9 h-9 text-white" />
            </div>

        </div>
        <swiper :modules="modules" :slides-per-view="4.5" :space-between="10" :pagination="{ clickable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in items" class="mb-9 ">
                <div class=" rounded-3xl flex justify-center items-center  mx-5">
                    <Card :image="item.image" class="mb-16" :title="item.title" :subtitle="item.subtitle" />
                </div>
            </swiper-slide>
            ...
        </swiper>
    </div>

</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ShoppingBagIcon } from '@heroicons/vue/20/solid'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    computed: {
        username() {
            return useUserStore().username
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ShoppingBagIcon
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
    data() {
        return {
            items: [
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "ایرپاد مکس", subtitle: 'با خرید این صاحب یک ایرپاد مکس میشوید 🤙' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم مکس میشوید 🤙' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "2نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم2 مکس میشوید 🤙' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "3نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم3 مکس میشوید 🤙' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "4نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم4 مکس میشوید 🤙' },
            ]
        }
    }
}
</script>