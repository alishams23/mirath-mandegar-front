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
                <div class=" absolute top-[17px] right-[40px] w-56 ">
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                                class="inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                <img v-if="selectedLang.src !== null" :src="selectedLang.src" alt="زبان انتخابی"
                                    class="w-6 h-6 mr-2" />
                                {{ selectedLabel || 'زبان سایت' }}
                                <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <transition enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div class="px-1 py-1">
                                    <MenuItem v-for="item in lang" v-slot="{ active }">
                                    <button :class="[
                            active ? 'bg-gray-200 text-black' : 'text-gray-900',
                            'group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm',
                        ]" @click="selectItem(item.name); openModal()">
                                        <img :src="item.src" class=" w-7 h-7 object-cover mr-2">
                                        <span class=" text-base font-semibold">{{ item.name }}</span>
                                    </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
                <TransitionRoot appear :show="isOpen" as="template">
                    <Dialog as="div" @close="closeModal" class="relative z-10">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                            enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                            leave-to="opacity-0">
                            <div class="fixed inset-0 bg-black/25" />
                        </TransitionChild>

                        <div class="fixed inset-0 overflow-y-auto">
                            <div class="flex min-h-full items-center justify-center p-4 text-center">
                                <TransitionChild as="template" enter="duration-300 ease-out"
                                    enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                    leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                    leave-to="opacity-0 scale-95">
                                    <DialogPanel
                                        class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div class="mt-2 flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="w-14 h-w-14 animate-spin" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                                <path fill-rule="evenodd"
                                                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                            </svg>
                                        </div>
                                        <DialogTitle as="h3"
                                            class="text-lg text-center font-medium mt-6 leading-6 text-gray-900">
                                            درحال اپدیت
                                        </DialogTitle>

                                        <!-- <div class="mt-4">
                                            <button type="button"
                                                class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                @click="closeModal">
                                                Got it, thanks!
                                            </button>
                                        </div> -->
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </Dialog>
                </TransitionRoot>
                <div dir="rtl" class="hidden cursor-pointer lg:flex lg:flex-1 lg:justify-start">
                    <a v-if="userStore.userToken == null" @click="open = true"
                        class="text-base font-black leading-6 text-[#000000]">ورود/ثبت نام
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
    DialogTitle,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    TransitionRoot,
    TransitionChild,
    PopoverPanel, Menu, MenuButton, MenuItems, MenuItem
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
const lang = [
    { name: 'فارسی', src: 'https://th.bing.com/th/id/R.e8bac5cf97b9a7f4c847d02a46fa10a5?rik=bRXeTXg7O%2bVnmg&pid=ImgRaw&r=0' },
    { name: 'English', src: 'https://th.bing.com/th/id/OIP.e_bbO_MwobphE7AiIzUzyQHaEA?rs=1&pid=ImgDetMain' }
]

const selectedLabel = ref(null)
const selectedLang = ref({ name: 'فارسی', src: null })
function selectItem(label) {
    selectedLabel.value = label
    selectedLang.value = lang.find((item) => item.name === label)
}

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}

const userStore = useUserStore()


const mobileMenuOpen = ref(false)
const open = ref(false)
</script>