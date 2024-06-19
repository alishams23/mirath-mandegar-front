<template>
    <div class="mb-[50px]">
        <div class="flex mt-[50px] mb-10 items-center justify-end">
            <h2 class=" text-xl font-black text-right my-3 mr-4  "> پروژه ها</h2>
            <div class="h-12 w-12 bg-[#8b4513] flex justify-center items-center  mr-10 rounded-2xl">
                <MapIcon class=" w-8 h-8 text-white" />
            </div>
        </div>
        <div v-if="loading" class='flex space-x-1 justify-center items-center bg-white h-[284px]'>
            <span class='sr-only'>Loading...</span>
            <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce'></div>
        </div>
        <swiper v-else :modules="modules" :slides-per-view="'auto'" :space-between="10" @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="item in buldings" class="mb-9 mx-5 pb-12 pt-5 ">
                <div class=" flex justify-center items-center ">
                    <ProjectCard :data="item" />
                </div>
            </swiper-slide>
            ...
        </swiper>
    </div>
</template>
<script>
import ProjectCard from "~/components/shared/ProjectCard.vue"
import { apiStore } from "~/store/api";
import axios from "axios";
import { useUserStore } from "~/store/user";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { MapIcon } from '@heroicons/vue/20/solid'

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
        MapIcon,
        ProjectCard
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
        buldings: [],
        loading: true,
    }),
    methods: {
        getData() {
            this.loading = true;
            axios
                .get(`${apiStore().address}/api/project/Buildings/`, {
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    this.buldings = response.data;
                    this.loading = false;
                    console.log(this.buldings)
                });
        },
    },
    mounted() {
        this.getData()
    }
}
</script>