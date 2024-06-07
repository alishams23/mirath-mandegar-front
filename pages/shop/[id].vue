<template>
    <div dir="rtl" class="bg-gradient-to-tl from-[#01231d] to-[#033f33] pt-24">
        <div class="mx-auto max-w-2xl h-auto bg-white rounded-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <!-- Image gallery -->
                <TabGroup as="div" class="flex flex-col-reverse">
                    <!-- Image selector -->
                    <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                        <TabList class="grid grid-cols-4 gap-6">
                            <Tab v-for="image in product.images" :key="image.id"
                                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                v-slot="{ selected }">
                                <span class="sr-only">{{ image.name }}</span>
                                <span class="absolute inset-0 overflow-hidden rounded-md">
                                    <img :src="image.src" alt="" class="h-full w-full object-cover object-center" />
                                </span>
                                <span
                                    :class="[selected ? 'ring-gray-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']"
                                    aria-hidden="true" />
                            </Tab>
                        </TabList>
                    </div>

                    <TabPanels class="aspect-h-1 aspect-w-1 w-full">
                        <TabPanel v-for="image in product.images" :key="image.id">
                            <img :src="image.src" :alt="image.alt"
                                class="h-full w-full object-cover object-center sm:rounded-lg" />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>

                <!-- Product info -->
                <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    {{ $route.params.id }}
                    <h1 class="text-3xl font-bold tracking-tight text-black">{{ product.name }}</h1>

                    <div class="mt-3">
                        <h2 class="sr-only text-[#CCA47C]">Product information</h2>
                        <p class="text-3xl tracking-tight text-gray-600">{{ product.price }} <span
                                class="text-base  text-gray-500">تومان</span></p>
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

                        <div class="space-y-6 text-base text-gray-600" v-html="product.description" />
                    </div>

                    <form class="mt-6">
                        <!-- Colors -->
                        <div>
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
                        </div>

                        <div class="sm:flex-col1 mt-10 flex">
                            <button type="submit"
                                class="flex max-w-xs flex-1 items-center justify-center rounded-3xl border border-transparent bg-[#8b4513] px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">افضوووودن
                                به سبد خرید</button>

                            <button @click="toggleLikes" type="button"
                                class="mr-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-300 hover:bg-gray-200 ">
                                <IconHeartFilled class="h-6 w-6 flex-shrink-0" aria-hidden="true"
                                    :class="likes ? 'text-[red]' : 'bg-transparent'" />
                                <span class="sr-only">Add to favorites</span>
                            </button>
                        </div>
                    </form>

                    <section aria-labelledby="details-heading" class="mt-12">
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
                                            <MinusIcon v-else
                                                class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { IconHeartFilled } from '@tabler/icons-vue'
const component = { IconHeartFilled }
const product = {
    name: 'یه کیف',
    price: '1,400,000',
    rating: 4,
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
    ],
    description: `
       <p>
        ورم ایپسوم ن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        گرافیک
        است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
        فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        کتابهای
       </p>
    `,
    details: [
        {
            name: 'ویژگی ها',
            items: [
                'یه کاربردی داره',
                'زیبا',
                'جا دار',
                'مطمئن',
                'قابل شست و شو',
            ],
        },
        // More sections...
    ],
}
const likes = ref(false)
function toggleLikes() {
    likes.value = !likes.value
    console.log(likes.value)
}
const selectedColor = ref(product.colors[0])
</script>