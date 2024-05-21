<template>
    <div class="bg-[#002820] flex justify-center">
        <header class=" fixed z-10 lg:w-2/3 bg-gradient-to-br from-[#CCA47C] to-[#bf8553] md:w-full xs:w-full rounded-b-[30px] mt-0 px-8 ">
            <nav class="mx-auto h-[70px] flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <IconChessKnightFilled size="40" class=" md:text-[#caba8f] sm:text-[#caba8f] lg:text-[#002820]">
                        </IconChessKnightFilled>
                        <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" /> -->
                    </a>
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
                <div dir="rtl" class="hidden cursor-pointer lg:flex lg:flex-1 lg:justify-start">
                    <a @click="open = true" class="text-base font-black leading-6 text-[#5b4f1c]">ورود/ثبت نام
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
                            <!-- <img class="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
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
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import { IconChessKnightFilled } from '@tabler/icons-vue'

const component = { IconChessKnightFilled }
const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const mobileMenuOpen = ref(false)
const open = ref(false)
</script>