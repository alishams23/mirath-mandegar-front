<template>
    <div class="bg-white shadow-1 pr-2 w-[400px] h-[180px] rounded-3xl flex items-center justify-start space-x-4">
        <div class=" w-[190px] h-full mr-5 flex-shrink-0 ">
            <!-- Image goes here -->
            <img class="h-full w-full object-cover bg-cover rounded-l-3xl" :src="data.photos[0].address"
                alt="Live Music Session">
        </div>
        <div dir="rtl" class="w-full px-5">
            <h2 class="text-md mb-2 font-bold text-black">{{ data.title }}</h2>

            <p class="text-gray-500 font-light text-sm mb-8">{{ data.address }}</p>
            <nuxt-link :to="'/location/' + data.id" tag="button"
                class="mt-5 bg-[#8b4513] text-sm text-white  py-2 px-4 rounded-2xl">
                مشاهده
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>