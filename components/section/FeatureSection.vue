<template>
    <div class="bg-white ">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
       
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="w-full  flex  items-center justify-center">
                    <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#d08f4d]">
                      <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                </div>
               <div class="text-center"> {{ feature.name }}</div>
              </dt>
              <dd class="mt-1 flex  flex-auto flex-col justify-center text-center text-base leading-7 text-gray-600">
                <p class="flex-auto " style="direction: rtl;">{{ feature.description }}</p>
                <p class="mt-6">
                  <!-- <a :href="feature.href" class="text-sm font-semibold leading-6 text-[#175b44]">بیشتر بخوانید <span aria-hidden="true">→</span></a> -->
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: ' احیاء بافت های تاریخی آسیب دیده  ',
      description:
        ' ما در تلاش برای احیای بافت‌های تاریخی آسیب دیده به منظور حفظ تاریخ و ارزش‌های میراثی شهر خود هستیم. با همت، همدلی و همکاری جامعه، رویای یزد باستانی را زنده خواهیم کرد.',
      href: '#',
      icon: InboxIcon,
    },
    {
      name: '  میراث بانان جوان',
      description:
        'ما با همکاری داوطلبین، جامعه محلی، دانشگاه‌ها، سازمان‌های مردم‌نهاد و زندانیان، به دنبال حفظ و احیای بافت‌های تاریخی هستیم. اگر شما نیز تمایل به پیوستن به این تیم دارید، خوشحال می‌شویم با ما همراه باشید .',
      href: '#',
      icon: UsersIcon,
    },
    {
      name: 'خشت رهایی',
      description:
        ' با همراهی شما سعی داریم تا با ارتقاء مهارت‌ها و افزایش خودباوری، زندانیان را به رهایی و بازگشت موفق به جامعه کمک کنیم. تمامی عواید حاصل از طرح صرف مخارج خانواده های زندانیان و آزاد سازی زندانیان جرائم غیرعمد خواهد شد ',
      href: '#',
      icon: TrashIcon,
    },
  ]
  </script>