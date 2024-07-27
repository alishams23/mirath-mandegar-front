<template>
    <div class=" bg-white rounded-3xl w-[230px] h-[300.8px] shadow-3 lg:w-[250px] md:w-[290px]">
        <div>
            <img class=" w-full h-[150px] object-cover rounded-t-3xl bg-cover bg-center contain "
                :src="data.image[0].photo" alt="">
        </div>
        <div dir="rtl" class="">
            <div class=" mb-5 px-2 h-14 overflow-hidden">
                <h2 class=" text-md font-semibold my-3 mr-4 line-clamp-2">{{ data.title }}</h2>
                <!-- <p class=" text-base  text-sm mr-4 line-clamp-2 font-normal">{{ data.description }}</p> -->
            </div>
            <div class=" border-t">
                <div class="flex justify-around items-center p-4 ">
                    <div class=" relative  flex flex-col">

                        <p class=" text-sm font-semibold ">

                            {{ data.price - (data.price * data.discount / 100) }}
                            <span class="text-xs font-light text-gray-400">تومان</span>
                        </p>
                        <div class="flex items-center ">
                            <p class=" line-through  text-xs  text-gray-500">

                                {{ data.price }}
                            </p>
                            <span
                                class=" rounded-3xl bg-red-600 text-white  text-xs h-6 w-6 flex justify-center items-center   pt-1  mr-3">{{
                    data.discount
                }}%</span>
                        </div>
                    </div>
                    <nuxt-link tag="button" :to="'/shop/' + data.id"
                        class=" bg-[#8b4513] text-white text-sm py-2 px-6 rounded-2xl inline-flex items-center">
                        <span>مشاهده </span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.line {
    position: absolute;
    top: 39%;
    width: 50%;
    height: 2px;
    z-index: 1;
}
</style>
<script>
export default {
    props: ['data']
    , data() {
        return {

        }
    }
}
</script>