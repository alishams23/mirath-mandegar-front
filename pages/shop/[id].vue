<template>
    <div dir="rtl" class="bg-[#002820] w-full py-40">

    </div>
    <div v-if="loading == false"
        class="mx-auto max-w-2xl h-auto bg-white rounded-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-[-200px] shadow-1 mb-24">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <!-- Image gallery -->
            <TabGroup as="div" class="flex flex-col-reverse">
                <!-- Image selector -->
                <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                    <TabList class="grid grid-cols-4 gap-6">
                        <Tab v-for="image in product.image" :key="image.id"
                            class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                            v-slot="{ selected }">
                            <span class="sr-only">{{ image.name }}</span>
                            <span class="absolute inset-0 overflow-hidden rounded-md">
                                <img :src="image.photo" alt="" class="h-full w-full object-cover object-center" />
                            </span>
                            <span
                                :class="[selected ? 'ring-gray-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']"
                                aria-hidden="true" />
                        </Tab>
                    </TabList>
                </div>

                <TabPanels class="aspect-h-1 aspect-w-1 w-full h-full rounded-xl  ">
                    <TabPanel v-for="image in product.image" :key="image.id">
                        <img :src="image.photo" :alt="image.alt" class="h-full w-full object-cover  rounded-xl " />
                    </TabPanel>
                </TabPanels>
            </TabGroup>

            <!-- Product info -->
            <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">

                <h1 class="text-3xl font-bold tracking-tight text-black text-right">{{ product.title }}</h1>

                <div class="mt-3">
                    <h2 class="sr-only text-[#CCA47C]">Product information</h2>
                    <p class="text-3xl tracking-tight text-gray-600 text-right">{{ product.price - (product.price *
        product.discount / 100) }} <span class="text-base  text-gray-500 text-right">تومان</span></p>
                    <p dir="rtl" class="text-xs text-gray-500">
                        قیمت با اعمال <span class="text-red-800  text-sm font-black">{{ product.discount }} %</span>
                        تخفیف
                    </p>
                </div>

                <!-- Reviews -->
                <!-- <div class="mt-3">
                        <h3 class="sr-only">Reviews</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                    :class="[product.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                                    aria-hidden="true" />
                            </div>
                            <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                        </div>
                    </div> -->

                <div class="mt-6">
                    <h3 class="sr-only">Description</h3>

                    <div class="space-y-6 text-base text-gray-600 text-right" v-html="product.description" />
                </div>

                <form class="mt-6">
                    <!-- Colors -->
                    <!-- <div>
                        <h3 class="text-sm text-gray-500">رنگ</h3>

                        <RadioGroup v-model="selectedColor" class="mt-2">
                            <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                            <span class="flex  items-center space-x-3" style="direction: ltr;">
                                <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name"
                                    :value="color" v-slot="{ active, checked }">
                                    <div
                                        :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                        <RadioGroupLabel as="span" class="sr-only">{{ color.name }}
                                        </RadioGroupLabel>
                                        <span aria-hidden="true" class=""
                                            :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                                    </div>
                                </RadioGroupOption>
                            </span>
                        </RadioGroup>
                    </div> -->

                    <div class="sm:flex-col1 mt-10 flex">
                        <button type="submit"
                            class="flex max-w-xs flex-1 items-center justify-center rounded-3xl border border-transparent bg-[#8b4513] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">افزودن
                            به سبد خرید</button>

                        <!-- <button @click="toggleLikes" type="button"
                            class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-300 hover:bg-gray-200 ">
                            <IconHeartFilled class="h-6 w-6 flex-shrink-0" aria-hidden="true"
                                :class="likes ? 'text-[red]' : 'bg-transparent'" />
                            <span class="sr-only">Add to favorites</span>
                        </button> -->
                    </div>
                </form>

                <!-- <section aria-labelledby="details-heading" class="mt-12">
                    <h2 id="details-heading" class="sr-only">Additional details</h2>

                    <div class="divide-y divide-gray-200 border-t">
                        <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                            <h3>
                                <DisclosureButton
                                    class="group relative flex w-full items-center justify-between py-6 text-left">
                                    <span class=" text-gray-900">{{
                            detail.name
                        }}</span>
                                    <span class="ml-6 flex items-center">
                                        <PlusIcon v-if="!open"
                                            class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true" />
                                        <MinusIcon v-else class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true" />
                                    </span>
                                </DisclosureButton>
                            </h3>
                            <DisclosurePanel as="div" class="prose prose-sm pb-6">
                                <ul role="list">
                                    <li v-for="item in detail.items" :key="item">{{ item }}</li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </section> -->
            </div>
        </div>
    </div>
</template>

<script>
import { apiStore } from '~/store/api';
import axios from 'axios'
import {

    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/vue'

import { IconHeartFilled } from '@tabler/icons-vue'
const component = { IconHeartFilled }

export default {
    components: {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        IconHeartFilled
    },
    data: () => ({
        product: null,
        loading: true,
        like: false
    }),
    methods: {
        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/product/product-retrieve/${this.$route.params.id}/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            }).then((response) => {
                this.loading = false
                this.product = response.data

            })
        },
        toggleLikes() {
            this.like = !this.like
            console.log(this.like)
        }

    },
    mounted() {
        this.getData()
    }
}

const likes = ref(false)
function toggleLikes() {
    likes.value = !likes.value
    console.log(likes.value)
}
</script>