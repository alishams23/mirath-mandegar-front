<template>



    <div class="relative rounded-3xl overflow-hidden shadow-2xl w-[350px] h-[400px]">

        <img class="w-full" :src="image" alt="Thumbnail">

        <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 flex items-center justify-center">
            <button class="bg-white rounded-full p-4 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14.752 11.168l-5.504 3.168a1 1 0 0 1-1.504-.864V10.56a1 1 0 0 1 1.504-.864l5.504 3.168z" />
                </svg>
            </button>
        </div>

        <div class="absolute top-[256px] left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
            <h3 class="text-2xl text-center mb-5 text-white font-bold">{{ songname }}</h3>
            <p class="text-sm text-center mb-3 text-gray-400">By: {{ aouther }}</p>
            <p class="text-base text-center text-white">{{ views }} views | {{ hour }} hour ago</p>
        </div>
    </div>


</template>

<script>
export default {
    props: ['image', 'songname', 'aouther', 'views', 'hour']
}
</script>