<template>
    <div class="bg-[#002820] py-40 w-full ">

    </div>
    <div class=" grid place-items-center bg-gray-300">
        <div class="w-[550px] rounded-xl overflow-hidden shadow-lg bg-white p-6">
            <div class="flex items-center">
                <img class="w-32 h-32 rounded-full mr-6 object-cover"
                    src="https://th.bing.com/th/id/OIP.tGJVtwTpUn0WDP7-pVsIewAAAA?rs=1&pid=ImgDetMain"
                    alt="Avatar of Shaun">
                <div class=" mb-[-10px]">
                    <p class="text-gray-900 leading-none text-2xl font-bold mb-3">@Boden</p>
                    <p class="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
                        nihil eius ab tenetur minima minus explicabo corrupti.</p>
                </div>
            </div>
            <div class="mt-4 flex justify-between">
                <div class=" ml-[2px] flex items-center">
                    <a href="#"
                        class="block flex items-center justify-center bg-gray-200 rounded-full w-12 h-12 text-black hover:text-gray-800 mr-6">
                        <IconBrandInstagram size="35" />
                    </a>
                    <a href="#"
                        class="block flex items-center justify-center bg-gray-200 rounded-full w-12 h-12 text-black hover:text-gray-800">
                        <IconBrandX size="35" />
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { IconBrandInstagram, IconBrandX } from '@tabler/icons-vue'
export default {
    components: {
        IconBrandInstagram,
        IconBrandX
    }
}
</script>