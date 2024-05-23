<template>
    <div class="mb-[100px]">
        <div class="flex mt-[100px] mb-10 items-center justify-end">
            <h2 class=" text-2xl font-black text-right my-3 mr-4  "> مکان ها</h2>
            <div class="h-12 w-12 bg-[#8b4513] flex justify-center items-center  mr-10 rounded-2xl">
                <MapIcon class=" w-8 h-8 text-white" />
            </div>
        </div>
        <swiper :modules="modules" :slides-per-view="'auto'" :space-between="10"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in items" class="mb-9 mx-5 pb-12 pt-5 ">
                <div class=" flex justify-center items-center ">
                    <LocationCard :image="item.image" :title="item.title" :holdtime="item.holdtime"
                        :address="item.address" />
                </div>
            </swiper-slide>
            ...
        </swiper>
    </div>
</template>
<script>
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
        MapIcon
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
                { image: "https://img.huffingtonpost.com/asset/5bad7c762400005000962785.jpeg?ops=scalefit_720_noupscale", title: "ساخت مدرسه", holdtime: '10/10/1403', address: 'Town Hall,Rome' },
                { image: "https://i.pinimg.com/564x/34/f1/7f/34f17fd4387d935d5202f833fa43686d.jpg", title: "تعمیر بیمارستان", holdtime: '15/12/1403', address: 'Central Hall' },
                { image: "https://i.pinimg.com/564x/52/20/79/522079525be5b65c8de673533fe53532.jpg", title: "تعمیر مدرسه", holdtime: '5/7/1403', address: 'Municipal Hall' },
                { image: "https://i.pinimg.com/564x/c8/e4/bf/c8e4bf1627bc7e2b724fdcf08aa0a721.jpg", title: "ساخت پارک", holdtime: '6/6/1403', address: 'Town Hall' },
               
            ]
        }
    }
}
</script>