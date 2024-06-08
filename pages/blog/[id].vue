<template>
    <div class="">
        <div class="bg-[#002820] py-40 w-full ">

        </div>
        <div v-if="loading == true" class="mt-[-200px] grid grid-cols-8 grid-rows-8 gap-x-9 gap-y-3 h-screen">
           <div class="col-start-2 shadow-1 col-span-6 row-span-8 bg-white rounded-3xl">
             <div class=" pt-20 flex justify-center items-center">
                <div class="inline-block h-20 w-20 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] bg-white  text-blue-700"
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
             </div>
           </div>
        </div>
        <div v-if="loading == false" class="mt-[-200px] grid grid-cols-8 grid-rows-8 gap-x-9 gap-y-3 ">
            <main v-if="blog != null" class=" col-start-2 shadow-1 col-span-4 row-span-8 bg-white rounded-3xl">
                <div class=" w-full h-[300px]">
                    <img class="w-full h-full rounded-t-3xl object-cover bg-cover" :src="blog.imageBlog.photo" alt="">
                </div>
                <div class=" mt-16 px-7 rtl text-right">
                    <h2 class=" text-gray-800 font-bold text-2xl mb-8">{{ blog.title }}</h2>
                    <p v-html="blog.body" class=" text-gray-500 font-medium text-base mb-20 mr-2"></p>
                </div>

            </main>
            <aside class=" col-start-6 shadow-2 col-span-2 row-start-1 row-span-6 rounded-3xl bg-white">
                <div class="overflow-y-auto py-4 px-3">
                    <ul class="space-y-2">
                        <li class=" pl-5 text-right">
                            <p> {{ blog.author.username }} <span
                                    class=" text-gray-800 text-xl font-semibold">:نویسنده</span>
                            </p>
                        </li>
                        <!-- ... more items -->
                    </ul>
                </div>
            </aside>
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