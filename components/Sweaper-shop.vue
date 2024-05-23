<template>
    <div class=" ">
        <div class="flex mt-[60px] mb-10 items-center justify-end">
            <h2 class=" text-2xl font-black text-right my-3 mr-4  ">محصولات</h2>
            <div class="h-12 w-12 bg-[#8b4513] flex justify-center items-center  mr-10 rounded-2xl">
                <ShoppingBagIcon class=" w-8 h-8 text-white" />
            </div>
        </div>
        <swiper :modules="modules" :slides-per-view="'auto'" :space-between="10" :loop="false"
          >
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
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
    data() {
        return {
            items: [
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "نام محصول", subtitle: "توضیحات محصول" },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "نام محصول", subtitle: "توضیحات محصول" },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "نام محصول", subtitle: "توضیحات محصول" },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "نام محصول", subtitle: "توضیحات محصول" },
                { image: "https://tedline.org/media/pexels-photo-8667422.webp", title: "نام محصول", subtitle: "توضیحات محصول" },
            ]
        }
    }
}
</script>

<style >
/* Add your Tailwind CSS classes here */


.swiper-slide {
  width: auto;
}
</style>