<template>
  <div class="bg-white  mt-28">
    <div class="mx-auto grid grid-cols-4 gap-4  ">

      <div class=" bg-gray-200  rounded-e-xl  hidden lg:block md:block">
        <div class="flex justify-center">
          <div class="h-24 w-24 mt-5 bg-gray-300 rounded-full ">

          </div>
        </div>
        <div class="flex-grow flex flex-col mt-2">
          <div class="flex-grow  h-3 bg-gray-100 rounded-sm mx-4 mt-2"></div>
          <div class="flex-grow h-3 bg-gray-100 rounded-sm mx-4 mt-2"></div>
        </div>

      </div>
      <div
        class=" col-span-4 md:col-span-3 lg:col-span-3 bg-[#fef0e4] rounded-s-xl  py-5  text-center   ">
       
       
        <h2 class="mx-auto mt-5 max-w-2xl text-md font-bold tracking-tight text-[#4f2d14] sm:text-2xl">کارت عضویت خود را
          دریافت کنید</h2>
       
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <nuxt-link tag="button" :to="'/interfaceCard'"
            class=" bg-[#8b4513]  text-white text-sm py-2 px-14 shadow-xl rounded-2xl inline-flex items-center mt-3">
            <span>مشاهده </span>
          </nuxt-link>

        </div>

      </div>
    </div>
  </div>
</template>