<template>
    <div class=" mx-10 my-10 rounded-[50px]  bg-gradient-to-br from-[#f7e1cb] to-[#fbd2ad] opacity-100 ">
        <div class=" relative top-[40px] flex items-center justify-end">
            <h2 class=" text-2xl font-black text-[#8b4513] my-3 mr-4  ">ویدیو ها</h2>
            <div class="h-12 w-12 bg-white flex justify-center items-center  mr-10 rounded-2xl">
                <PlayIcon class=" w-8 h-8 text-[#8b4513]" />
            </div>

        </div>
        <swiper :modules="modules" :slides-per-view="'auto'" :space-between="10" 
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in items" class="mb-9">
                <div class=" rounded-3xl flex justify-center items-center mx-5 mt-[70px]">
                    <VideoCart :image="item.image" :songname="item.songname" :aouther="item.aouther" :views="item.views"
                        :hour="item.hour" />
                </div>
            </swiper-slide>
            ...
        </swiper>
    </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { PlayIcon } from '@heroicons/vue/20/solid'

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
        PlayIcon
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
                { image: "	https://tedline.org/media/pexels-photo-8667422.webp", songname: "Skyfall", aouther: 'ADELE', views: '10k', hour: '5' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", songname: "The box", aouther: 'Roddy Ricch', views: '5k', hour: '6' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", songname: "Way Down We Go", aouther: 'KALEO', views: '20k', hour: '4' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", songname: "Demons", aouther: 'imagine Dragon', views: '100k', hour: '9' },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", songname: "Mount Everest", aouther: 'Labrinth', views: '60k', hour: '10' },
            ]
        }
    }
}
</script>