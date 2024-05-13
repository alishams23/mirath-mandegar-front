<template>
    <div class="">
        <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in items" class="mb-9">
                <div class=" rounded-3xl flex justify-center items-center mt-[100px]">
                    <Song-cart :image="item.image" :songname="item.songname" :aouther="item.aouther" :views="item.views"
                        :hour="item.hour" />
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
                { image: "/public/img/Skyfall2.jpg", songname: "Skyfall", aouther: 'ADELE', views: '10k', hour: '5' },
                { image: "/assets/img/1.jpg", songname: "The box", aouther: 'Roddy Ricch', views: '5k', hour: '6' },
                { image: "/assets/img/2.jpg", songname: "Way Down We Go", aouther: 'KALEO', views: '20k', hour: '4' },
                { image: "/assets/img/3.jpg", songname: "Demons", aouther: 'imagine Dragon', views: '100k', hour: '9' },
                { image: "/assets/img/4.jpg", songname: "Mount Everest", aouther: 'Labrinth', views: '60k', hour: '10' },
            ]
        }
    }
}
</script>