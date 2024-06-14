<template>
    <div class=" bg-white rounded-3xl w-[290px] h-[378.8px] shadow-3">
        <div>
            <img class=" w-full h-[150px] object-cover rounded-t-3xl bg-cover bg-center contain "
                :src="data.image[0].photo" alt="">
        </div>
        <div dir="rtl" class="">
            <div class=" mb-5 px-2">
                <h2 class=" text-md font-semibold my-3 mr-4">{{ data.title }}</h2>
                <p class=" text-base h-14 text-sm mr-4 font-normal">{{ data.description }}</p>
            </div>
            <div class=" border-t">
                <div class="flex justify-around items-center p-4">
                    <div class=" relative top-3 flex flex-col">

                        <p class=" text-xl font-semibold ">
                            <span
                                class=" w-3 h-1 rounded-3xl bg-red-600 text-white font-semibold text-base px-1 py-[1px] relative bottom-[2px] left-[5px]">{{
                    data.discount
                }}%</span>
                            {{ data.price - (data.price * data.discount / 100) }}
                            <span class="text-sm  text-gray-400">تومان</span>
                        </p>
                        <p class=" relative top-3 text-xl font-medium text-gray-300">
                            <hr class="line bg-gray-400">
                            {{ data.price }}
                        </p>
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