<template>
  <div class="bg-white">
    <div class="mx-auto grid grid-cols-4 gap-4  sm:px-6  lg:px-8">

      <div class=" bg-gray-200 rounded-s-[50px] rounded-e-xl px-5">
        <div class="flex justify-center">
          <div class="h-24 w-24 mt-5 bg-gray-300 rounded-full ">

          </div>
        </div>
        <div class="flex-grow flex flex-col mt-6">
          <div class="flex-grow  h-3 bg-gray-100 rounded-xl mx-4 mt-5"></div>
          <div class="flex-grow h-3 bg-gray-100 rounded-xl mx-4 mt-5"></div>
        </div>

      </div>
      <div class=" col-span-3 bg-[#fef0e4]  px-6 py-10  text-center  sm:rounded-e-[50px] rounded-s-xl  sm:px-16">
        <h2 class="mx-auto max-w-2xl text-md font-bold tracking-tight text-[#4f2d14] sm:text-2xl">کارت عضویت خود را
          دریافت کنید</h2>
        <p class="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#4f2d1490]">لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
          که لازم است و برای شرایط</p>
        <div class="mt-3 flex items-center justify-center gap-x-6">
          <nuxt-link tag="button" :to="'/interfaceCard'"
            class=" bg-[#8b4513]  text-white text-sm py-2 px-14 shadow-xl rounded-2xl inline-flex items-center mt-3">
            <span>مشاهده </span>
          </nuxt-link>

        </div>

      </div>
    </div>
  </div>
</template>