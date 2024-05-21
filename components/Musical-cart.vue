<template>
    <div class="bg-white shadow-2xl pr-2 w-[600px] h-[220px] rounded-3xl flex items-center justify-start space-x-4">
        <div class=" w-[190px] h-full mr-5 flex-shrink-0 ">
            <!-- Image goes here -->
            <img class="h-full w-full object-cover bg-cover rounded-l-3xl" :src="image" alt="Live Music Session">
        </div>
        <div dir="rtl" class="">
            <h2 class="text-3xl mb-3 font-bold text-black">{{ title }}</h2>
            <p class="text-gray-500">{{ holdtime }}</p>
            <p class="text-gray-500">{{ address }}</p>
            <button class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                دریافت اطلاعات
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['image', 'title', 'holdtime', 'address']
}
</script>