<template>



    <div class="relative mb-[30px] rounded-3xl overflow-hidden w-[250px] h-[300px]">

        <img class="w-full h-full object-cover" :src="image" alt="Thumbnail">

        <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-[#241802] opacity-90 flex items-center justify-center">
            <button class="bg-white rounded-full p-4 focus:outline-none">
                <PlayIcon class="h-8 w-8 text-[#815830]" />
            </button>
        </div>

        <div class="absolute top-[206px] bottom-0 left-0 right-0 p-4  from-red via-transparent to-transparent">
            <h3 class="text-md text-center mb-5 text-white font-bold">{{ songname }}</h3>

        </div>
    </div>


</template>

<script>
import { PlayIcon } from '@heroicons/vue/20/solid'

export default {
    props: ['image', 'songname', 'aouther', 'views', 'hour'],
    components: { PlayIcon }
}
</script>