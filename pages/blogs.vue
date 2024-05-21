<template>
    <div class="bg-[#002820]">
        <div class=" grid grid-cols-8 grid-rows-8 gap-x-9 gap-y-3 bg-[#002820] h-screen pt-32">
            <main class=" col-start-2 col-span-4 row-span-8 bg-white rounded-3xl">
                <div class=" w-full h-[300px]">
                    <img class="w-full h-full rounded-t-3xl object-cover bg-cover"
                        src="https://i.pinimg.com/564x/34/f1/7f/34f17fd4387d935d5202f833fa43686d.jpg" alt="">
                </div>
                <div class=" mt-16 px-7">
                    <h2 class=" text-gray-800 font-bold text-2xl mb-8">Lorem ipsum dolor sit.</h2>
                    <p class=" text-gray-500 font-medium text-base">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Quasi
                        obcaecati maiores assumenda fugit odit sit, necessitatibus ipsum iste placeat reiciendis
                        officiis
                        rem dolores saepe minus quaerat? Non at illo consectetur!</p>
                </div>
                <div>
                    <div class=" flex justify-evenly mt-16">
                        <IconX class=" cursor-pointer" color="#6c7a91" size="35" title="X.com" />
                        <IconBrandYoutubeFilled class=" cursor-pointer" color="#ff0000" size="35" title="youtube.com" />
                        <IconBrandInstagram class=" cursor-pointer" color="#e4405f" size="35" title="instagram.com" />
                    </div>
                </div>
            </main>
            <aside class=" col-start-6 col-span-2 row-start-1 row-span-6 rounded-3xl bg-white">
                <div class="overflow-y-auto py-4 px-3">
                    <ul class="space-y-2">
                        <li class=" pl-5">
                            <p><span class=" text-gray-800 text-xl font-semibold">Aouther:</span> <span
                                    class=" text-gray-800 font-semibold text-xl">hassan ali baghal</span></p>
                        </li>
                        <!-- ... more items -->
                    </ul>
                </div>
            </aside>
        </div>
        <div class="grid grid-cols-8 grid-rows-8 gap-x-9 gap-y-3 bg-[#002820] h-screen mt-3">
            <main class="col-start-2 col-span-4 row-span-3 bg-white rounded-3x py-7 rounded-3xl flex">
                <div class=" w-1/3 h-[200px] pl-6 mr-8">
                    <img class=" w-full h-full object-cover bg-cover rounded-3xl"
                        src="https://i.pinimg.com/564x/52/20/79/522079525be5b65c8de673533fe53532.jpg" alt="">
                </div>
                <div class="w-2/3 pr-5">
                    <h2 class="text-gray-800 font-bold text-2xl mb-4 ">Lorem ipsum dolor sit amet consectetur.</h2>
                    <p class="text-gray-500 font-medium text-base">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Adipisci eum magni placeat eligendi veniam quis, explicabo omnis. Harum, assumenda explicabo?
                        Assumenda officia dolore minima rerum, facere mollitia nam eos eum.</p>
                </div>
            </main>
            <aside
                class=" relative top-[-50px] col-start-6 col-span-2 row-start-1 row-span-4 mb-14 rounded-3xl bg-white">
                <div class="overflow-y-auto py-4 px-3">
                    <ul class="space-y-2">
                        <li class=" pl-5">
                            <p><span class=" text-gray-800 text-xl font-semibold">Aouther:</span> <span
                                    class=" text-gray-800 font-semibold text-xl">ye nashenas</span></p>
                        </li>
                        <!-- ... more items -->
                    </ul>
                </div>
            </aside>
        </div>
    </div>
</template>
<script>
import { IconX, IconBrandYoutubeFilled, IconBrandInstagram } from '@tabler/icons-vue'
export default {
    components: { IconX, IconBrandYoutubeFilled, IconBrandInstagram }
}
</script>