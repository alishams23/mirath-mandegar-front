<template>
    <div class=" mx-10 my-10 rounded-[50px]  bg-gradient-to-br from-[#f7e1cb] to-[#fbd2ad] opacity-100 ">
        <div class=" relative top-[40px] flex items-center justify-end">
            <h2 class=" text-2xl font-black text-[#8b4513] my-3 mr-4  ">ویدیو ها</h2>
            <div class="h-12 w-12 bg-white flex justify-center items-center  mr-10 rounded-2xl">
                <PlayIcon class=" w-8 h-8 text-[#8b4513]" />
            </div>

        </div>

        <swiper v-if="loading == false" :modules="modules" :slides-per-view="'auto'" :space-between="10"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in videos" class="mb-9">
                <div class=" rounded-3xl flex justify-center items-center mx-5 mt-[70px]">
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