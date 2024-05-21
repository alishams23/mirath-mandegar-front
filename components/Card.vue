<template>
    <div class=" bg-white rounded-3xl w-[290px] shadow-xl">
        <div>
            <img class=" w-full h-[150px] object-cover rounded-t-3xl bg-cover bg-center contain " :src="image" alt="">
        </div>
        <div dir="rtl" class="">
            <div class=" mb-5">
                <h2 class=" text-xl font-semibold my-3 mr-4">{{ title }}</h2>
                <p class=" text-base mr-4 font-normal">{{ subtitle }}</p>
            </div>
            <div class=" border-t">
                <div class="flex justify-around items-center p-4">
                    <p class=" text-xl font-semibold">549$</p>
                    <button class=" bg-[#8b4513] text-white  py-2 px-6 rounded-2xl inline-flex items-center">
                        <span>مشاهده </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['image', 'title', 'subtitle']
    , data() {
        return {

        }
    }
}
</script>