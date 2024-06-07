<template>
    <div class=" bg-white rounded-3xl w-[290px] shadow-3">
        <div>
            <img class=" w-full h-[150px] object-cover rounded-t-3xl bg-cover bg-center contain " :src="data.image"
                alt="">
        </div>
        <div dir="rtl" class="">
            <div class=" mb-5 px-2">
                <h2 class=" text-md font-semibold my-3 mr-4">{{ data.title }}</h2>
                <p class=" text-base h-14 text-sm mr-4 font-normal">{{ data.subtitle }}</p>
            </div>
            <div class=" border-t">
                <div class="flex justify-around items-center p-4">
                    <p class=" text-xl font-semibold">549 <span class="text-sm  text-gray-400">تومان</span></p>
                    <nuxt-link tag="button" :to="'/shop/' + data.id"
                        class=" bg-[#8b4513] text-white text-md py-2 px-6 rounded-2xl inline-flex items-center">
                        <span>مشاهده </span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data']
    , data() {
        return {

        }
    }
}
</script>