<template>
    <div class="">
        <swiper :modules="modules" :slides-per-view="3.65" :space-between="10" :pagination="{ clickable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="item in items" class="mb-9 mx-5 py-12 mt-[50px]">
                <div class=" flex justify-center items-center ">
                    <Musical-cart :image="item.image" :title="item.title" :holdtime="item.holdtime"
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
                { image: "https://img.huffingtonpost.com/asset/5bad7c762400005000962785.jpeg?ops=scalefit_720_noupscale", title: "ساخت مدرسه", holdtime: '10/10/1403', address: 'Town Hall,Rome' },
                { image: "https://i.pinimg.com/564x/34/f1/7f/34f17fd4387d935d5202f833fa43686d.jpg", title: "تعمیر بیمارستان", holdtime: '15/12/1403', address: 'Central Hall' },
                { image: "https://i.pinimg.com/564x/52/20/79/522079525be5b65c8de673533fe53532.jpg", title: "تعمیر مدرسه", holdtime: '5/7/1403', address: 'Municipal Hall' },
                { image: "https://i.pinimg.com/564x/c8/e4/bf/c8e4bf1627bc7e2b724fdcf08aa0a721.jpg", title: "ساخت پارک", holdtime: '6/6/1403', address: 'Town Hall' },
                { image: "/assets/img/sacksifon.jpg", title: "تعمیر یه چیزی", holdtime: '3/3/1403', address: 'Central Hall' },
            ]
        }
    }
}
</script>