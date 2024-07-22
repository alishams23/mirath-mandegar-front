<template>
    <div class=" mx-[15px] my-10 rounded-[30px]  bg-[#fef0e4]  opacity-100 lg:mx-10">
        <div class=" relative top-[40px] flex items-center justify-end">
            <h2 class=" text-xl font-black text-[#8b4513] my-3 mr-4  ">ویدیو ها</h2>
            <div class="h-12 w-12 bg-white flex justify-center items-center  mr-10 rounded-2xl">
                <PlayIcon class=" w-8 h-8 text-[#8b4513]" />
            </div>

        </div>

        <div v-if="loading" class='flex space-x-1 justify-center items-center  h-[386px]'>
            <span class='sr-only'>Loading...</span>
            <div class='h-5 w-5 bg-[#4f2d14] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-5 w-5 bg-[#4f2d14] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-5 w-5 bg-[#4f2d14] rounded-full animate-bounce'></div>
        </div>

        <swiper v-else :modules="modules" :slides-per-view="'auto'" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in videos" class="mb-9">
                <div class=" rounded-3xl flex justify-center items-center ml-4 mt-[70px]">
                    <VideoCard :data="item" />
                </div>
            </swiper-slide>
            ...
        </swiper>
    </div>
</template>
<script>
import VideoCard from "../shared/VideoCard.vue";
import { apiStore } from "~/store/api";
import axios from "axios";
import { useUserStore } from "~/store/user";
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
        PlayIcon,
        VideoCard
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
    data: () => ({
        videos: [],
        loading: true,
    }),
    methods: {
        getData() {
            this.loading = true;
            axios
                .get(`${apiStore().address}/api/video/videos/`, {
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    this.videos = response.data;
                    this.loading = false;
                });
        }
    },
    mounted() {
        this.getData()
    }
}
</script>