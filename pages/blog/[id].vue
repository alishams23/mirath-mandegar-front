<template>
    <div class="">
        <div class="bg-[#002820] py-40 w-full ">

        </div>
        <!-- <div v-if="loading == true" class="mt-[-200px] grid grid-cols-8 grid-rows-8 gap-x-9 gap-y-3 h-screen">
            <div class="col-start-2 shadow-1 col-span-6 row-span-8 bg-white rounded-3xl">
                <div class=" pt-20 flex justify-center items-center">
                    <div class="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]   text-blue-700"
                        role="status">
                        <span
                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="mt-[-200px] grid grid-cols-8 grid-rows-8 gap-x-9 gap-y-3 ">
            <main
                class=" col-start-2 shadow-1 col-span-6 row-span-8 md:col-start-2 lg:col-start-2 md:col-span-4 lg:col-span-4 bg-white rounded-3xl">
                <div v-if="loading"
                    class='flex space-x-1 justify-center items-center bg-white w-full h-[532px] md:w-full lg:w-full rounded-3xl'>
                    <span class='sr-only'>Loading...</span>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce'></div>
                </div>
                <div v-if="loading == false">
                    <div v-if="blog !== null">
                        <div class=" w-full h-[300px]">
                            <img class="w-full h-full rounded-t-3xl object-cover bg-cover" :src="blog.imageBlog.photo"
                                alt="">
                        </div>
                        <div class=" mt-16 px-7 rtl text-right">
                            <h2 class=" text-gray-800 font-bold text-2xl mb-8">{{ blog.title }}</h2>
                            <p v-html="blog.body" class=" text-gray-500 font-medium text-base mb-20 mr-2"></p>
                        </div>
                    </div>
                </div>

            </main>
            <aside
                class=" hidden md:grid lg:grid shadow-2 col-start-6 col-span-2 row-start-1 row-span-4 rounded-3xl bg-white">
                <div v-if="loading"
                    class='flex space-x-1 justify-center items-center bg-white w-full h-[396px] rounded-3xl'>
                    <span class='sr-only'>Loading...</span>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce'></div>
                </div>
                <div v-else class="">
                    <div class="flex  flex-wrap m-4 ">
                        <div v-for="item in 5"  class="mx-1 px-3 py-2 bg-[#faece0] border border-[#ffdac0] rounded-full text-xs my-2">
                           دسته بندی {{ item }}
                        </div>
                    </div>
                   <div class="text-sm m-4  mt-9 text-right">تاریخ انتشار: ۳ تیر ۱۴۰۳</div>
                </div>
            </aside>
        </div>
        <div class="grid grid-cols-8 grid-rows-4 gap-x-9 gap-y-3 my-5 md:hidden lg:hidden ">
            <div class="rounded-3xl bg-white shadow-2 col-start-2 col-span-6 row-span-4 md:hidden lg:hidden">
                <div v-if="loading"
                    class='flex space-x-1 justify-center items-center bg-white w-full h-[60px] md:w-full lg:w-full md:h-full lg:h-full rounded-3xl'>
                    <span class='sr-only'>Loading...</span>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div class='h-5 w-5 bg-[#8b4513] rounded-full animate-bounce'></div>
                </div>
                <div v-else>
                    <div v-if="blog !== null">
                        <div class="overflow-y-auto py-4 px-3">
                            <ul class="space-y-2">
                                <li class=" pl-5 text-right">
                                    <p> {{ blog.author.username }} <span
                                            class=" text-gray-800 text-xl font-semibold">:نویسنده</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
import { apiStore } from '~/store/api';
import { HeartIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { IconX, IconBrandYoutubeFilled, IconBrandInstagram } from '@tabler/icons-vue'
export default {
    components: { IconX, IconBrandYoutubeFilled, IconBrandInstagram },
    data: () => ({
        blog: null,
        loading: true,
    }),
    methods: {
        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/blog/blog-retrieve-main-page/${this.$route.params.id}/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: this.isLogin == true ? `Token ${useUserStore().userToken}` : '',
                },
            }).then((response) => {
                this.blog = response.data
                this.loading = false

            })
        },

    },
    mounted() {
        this.getData()
    }
}
</script>