<template>
    <div class=" h-[500px] relative  ">
        <div class="flex mt-[100px] mb-10 items-center justify-end">
            <h2 class=" text-xl font-black text-right my-3 mr-4  ">رسانه</h2>
            <div class="h-12 w-12 bg-[#8b4513] flex justify-center items-center  mr-10 rounded-2xl">
                <IconAlignBoxRightTopFilled class=" w-8 h-8 text-white" />
            </div>
        </div>
        <div v-if="loading" class='flex space-x-1 justify-center items-center bg-white h-[10rem]'>
            <span class='sr-only'>Loading...</span>
            <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce'></div>
        </div>
        <swiper v-else :modules="modules" :slides-per-view="'auto'" :space-between="0" :loop="false">
            <swiper-slide v-for="item in blogs" class="mb-9 ">
                <div class="  rounded-3xl flex justify-center items-center  ml-10">
                    <BlogCard class="mb-16" :data="item" />
                </div>
            </swiper-slide>
            ...
        </swiper>
    </div>
</template>
<script>
import { apiStore } from "~/store/api";
import axios from "axios";
import { useUserStore } from "~/store/user";
// import Blog from "~/components/shared/Blog.vue";
// import { DocumentTextIcon } from '@heroicons/vue/20/solid'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ShoppingBagIcon } from '@heroicons/vue/20/solid'
import { IconAlignBoxRightTopFilled } from '@tabler/icons-vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BlogCard from '~/components/shared/BlogCard.vue';

export default {
    computed: {
        username() {
            return useUserStore().username
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        ShoppingBagIcon,
        BlogCard,
        IconAlignBoxRightTopFilled
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    data: () => ({
        blogs: [],
        loading: true,
    }),
    methods: {
        getData() {
            this.loading = true;
            axios
                .get(`${apiStore().address}/api/blog/blog-list-main-page/`, {
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    this.blogs = response.data;
                    this.loading = false;
                    console.log(this.blogs)
                });
        },
        // async getData() {
        //     try {
        //         const response = await fetch('http://5.34.195.173:8000/api/blog/blog-list-main-page/');
        //         if (response.status === 200) {
        //             const data = await response.json();
        //             this.loading = false;
        //             this.blogs = data;
        //         } else if (response.status === 204) {
        //             // Handle the case when the response is empty (No Content)
        //             // You can set a default value or display a message to the user
        //             console.log('No data found.');
        //         } else {
        //             // Handle other status codes (e.g., 404 Not Found, 500 Internal Server Error)
        //             console.error(`Unexpected status code: ${response.status}`);
        //         }
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // }
    },
    mounted() {
        // this.getData();
        // console.log(this.blogs)
        this.getData()

    },
}
</script>