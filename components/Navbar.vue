<template>

    <div class="bg-[#002820] flex justify-center">
        <header
            class=" fixed z-[999999] lg:w-2/3 bg-gradient-to-b from-[#e9a467] to-[#ba814f] md:w-full xs:w-full rounded-b-[50px] rounded-t-[10px] mt-0 px-8 ">
            <nav class="mx-auto h-[70px] flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <nuxt-link to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-10 w-auto" src="/images/logo.png" alt="" />
                    </nuxt-link>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#caba8f]"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-10 w-10" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                    <Popover class="relative">
                        <PopoverButton dir="rtl"
                            class="flex items-center gap-x-1 focus:ring-1 focus:border-black ring-transparent ring-inset text-base font-semibold leading-6 text-[#f9f2d7]">
                            مقالات
                            <ChevronDownIcon class="h-5 w-5 flex-none text-[#f9f2d7]" aria-hidden="true" />
                        </PopoverButton>

                        <transition enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                            <PopoverPanel
                                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#caba8f] shadow-lg ring-0">
                                <div class="p-4">
                                    <div v-for="item in products" :key="item.name"
                                        class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#b8a87f]">
                                        <div
                                            class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <component :is="item.icon"
                                                class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                aria-hidden="true" />
                                        </div>
                                        <div class="flex-auto">
                                            <a :href="item.href" class="block font-semibold text-[#002820]">
                                                {{ item.name }}
                                                <span class="absolute inset-0" />
                                            </a>
                                            <p class="mt-1 text-[#002820]">{{ item.description }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-[#b8a87f]">
                                    <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                                        class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#002820] hover:bg-[#c3b184]">
                                        <component :is="item.icon" class="h-5 w-5 flex-none text-[#002820]"
                                            aria-hidden="true" />
                                        {{ item.name }}
                                    </a>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>


                    <a dir="rtl" href="#" class="text-base font-semibold leading-6 text-[#f9f2d7]"> ویدئو ها</a>
                    <a dir="rtl" href="#" class="text-base font-semibold leading-6 text-[#f9f2d7]"> مکان ها</a>

                    <a dir="rtl" href="#" class="text-base font-semibold leading-6 text-[#f9f2d7]">محصولات</a>


                </PopoverGroup>
                <div class="relative left-[40px] top-[1px]">
                    <button @click="toggleDropdown"
                        class="px-4 py-2 bg-transparent text-white rounded-md flex items-center justify-between">
                        <img :src="selectedLanguage.flag" alt="" class="w-5 h-5 mr-2">
                        {{ selectedLanguage.name }}
                        <svg :class="{ 'transform rotate-180': dropdownOpen }" class="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <transition name="dropdown" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
                        @before-leave="beforeLeave" @leave="leave">
                        <div v-show="dropdownOpen"
                            class="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 transition-all duration-300 ease-in-out">
                            <ul class="py-1">
                                <li v-for="language in languages" :key="language.code" @click="selectLanguage(language)"
                                    class="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                                    <img :src="language.flag" alt="" class="w-5 h-5 mr-2">
                                    {{ language.name }}
                                </li>
                            </ul>
                        </div>
                    </transition>
                </div>
                <div dir="rtl" class="hidden cursor-pointer lg:flex lg:flex-1 lg:justify-start">
                    <a v-if="userStore.userToken == null" @click="open = true" class="text-base font-black leading-6 text-[#000000]">ورود/ثبت نام
                    </a>
                    <a v-else @click="userStore.logout()" class="text-base font-black leading-6 text-[#000000]">خروج
                    </a>

                    <TransitionRoot as="template" :show="open">
                        <Dialog as="div" class="relative z-10" @close="open = false">
                            <LoginPopup @close="() => { open = false }" />
                        </Dialog>
                    </TransitionRoot>

                </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-10" />
                <DialogPanel
                    class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <IconChessKnightFilled></IconChessKnightFilled>
                        </a>
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"
                            @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                                            aria-hidden="true" />
                                    </DisclosureButton>
                                    <DisclosurePanel class="mt-2 space-y-2">
                                        <DisclosureButton v-for="item in [...products, ...callsToAction]"
                                            :key="item.name" as="a" :href="item.href"
                                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            {{ item.name }}</DisclosureButton>
                                    </DisclosurePanel>
                                </Disclosure>
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                            </div>
                            <div class="py-6">
                                <a href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                    in</a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    TransitionRoot,
    PopoverPanel,
} from '@headlessui/vue'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { useUserStore } from '~/store/user';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import { IconChessKnightFilled } from '@tabler/icons-vue'

const products = [
    { name: 'ایتم اول', description: 'توضیحات', href: '#', icon: ChartPieIcon },
    { name: 'ایتم دوم', description: 'توضیحات', href: '#', icon: CursorArrowRaysIcon },
]
const callsToAction = [
    { name: 'اینستاگرام', href: '#', icon: PlayCircleIcon },
    { name: ' تماس با ما ', href: '#', icon: PhoneIcon },
]
const dropdownOpen = ref(false)
const languages = ref([
   
    { name: 'فارسی', flag: 'https://th.bing.com/th/id/R.ee0f24ea55971e8a658a74dae15f1bc5?rik=1bgkmVoTlCYeHg&pid=ImgRaw&r=0', code: 'es' },
    { name: 'English', flag: 'https://th.bing.com/th/id/OIP.U-h9wYdOSH047roWjY_1TgAAAA?rs=1&pid=ImgDetMain', code: 'en' },

])

const userStore = useUserStore()

const selectedLanguage = ref(languages.value[0])

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value
}

function selectLanguage(language) {
    selectedLanguage.value = language
    dropdownOpen.value = false
}

function beforeEnter(el) {
    el.style.opacity = '0'
    el.style.maxHeight = '0'
}

function enter(el, done) {
    setTimeout(() => {
        el.style.maxHeight = el.scrollHeight + 'px'
        el.style.opacity = '1'
        done()
    }, 10)
}

function afterEnter(el) {
    el.style.maxHeight = null
}

function beforeLeave(el) {
    el.style.maxHeight = el.scrollHeight + 'px'
}

function leave(el, done) {
    setTimeout(() => {
        el.style.maxHeight = '0'
        el.style.opacity = '0'
        done()
    }, 10)
}
const mobileMenuOpen = ref(false)
const open = ref(false)
</script>
<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>