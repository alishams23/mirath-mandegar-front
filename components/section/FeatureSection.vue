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
              <dd class="mt-1 flex flex-auto flex-col justify-center text-center text-base leading-7 text-gray-600">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm font-semibold leading-6 text-[#175b44]">بیشتر بخوانید <span aria-hidden="true">→</span></a>
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
      name: 'متن تستی',
      description:
        'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
      href: '#',
      icon: InboxIcon,
    },
    {
      name: 'متن تستی',
      description:
        'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
      href: '#',
      icon: UsersIcon,
    },
    {
      name: 'متن تستی',
      description:
        'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
      href: '#',
      icon: TrashIcon,
    },
  ]
  </script>