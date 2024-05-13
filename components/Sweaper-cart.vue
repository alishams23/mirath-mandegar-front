<template>
    <div class="">
        <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in items" class="mb-9">
                <div class=" rounded-3xl flex justify-center items-center mt-[100px]">
                    <Card :image="item.image" :title="item.title" :subtitle="item.subtitle" />
                </div>
            </swiper-slide>
            <!-- <swiper-slide>
                <div class=" rounded-3xl flex justify-center items-center mt-[100px]">
                    <Card />
                </div>

            </swiper-slide>
            <swiper-slide>
                <div class=" rounded-3xl flex justify-center items-center mt-[100px]">
                    <Card />
                </div>

            </swiper-slide>
            <swiper-slide>
                <div class=" rounded-3xl flex justify-center items-center mt-[100px]">
                    <Card />
                </div>

            </swiper-slide>
            <swiper-slide>
                <div class=" rounded-3xl flex justify-center items-center mt-[100px]">
                    <Card />
                </div>

            </swiper-slide> -->
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
                { image: "/assets/img/airpods max.jpg", title: "ایرپاد مکس", subtitle: 'با خرید این صاحب یک ایرپاد مکس میشوید 🤙' },
                { image: "/assets/img/1.jpg", title: "نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم مکس میشوید 🤙' },
                { image: "/assets/img/2.jpg", title: "2نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم2 مکس میشوید 🤙' },
                { image: "/assets/img/3.jpg", title: "3نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم3 مکس میشوید 🤙' },
                { image: "/assets/img/4.jpg", title: "4نمیدونم", subtitle: 'با خرید این صاحب یک نمیدونم4 مکس میشوید 🤙' },
            ]
        }
    }
}
</script>