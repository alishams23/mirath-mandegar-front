<template>
    <div class="bg-white py-40 w-full ">

    </div>
    <div class=" grid place-items-center bg-white">
        <div class="mx-2 relative isolate w-[480px] h-[270px] rounded-xl overflow-hidden shadow-2 bg-[#fddcb8] p-6">
           <div class=" absolute inset-0 -z-10 curved">

           </div>
           
            <div class="flex items-center h-full">
                <div>
               <img src="/images/slimi.png" class="pr-5 w-20" alt="">

               </div>
               <div>
                 <div class="w-32 h-32  bg-white rounded-full">
                     <img class="  mr-6 object-cover"
                       
                       >
                 </div>
               </div>
              
                <div class=" mb-[-10px] flex-grow">
                    <p class="text-[#523211] text-right leading-none text-2xl font-bold mb-3">علی محمدی</p>

                    <p class="text-[#7c4c19] text-right text-lg mt-5">متن مورد نظر</p>
                </div>
            </div>
            <div class="mt-4 flex justify-between">
                <div class=" ml-[2px] flex items-center">
                   
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { IconBrandInstagram, IconBrandX } from '@tabler/icons-vue'
export default {
    components: {
        IconBrandInstagram,
        IconBrandX
    }
}
</script>


<style>
   .curved {
        padding: 0px 0px 0px 0px;
        background-image: radial-gradient(ellipse 20% 100% at 15% 50%, rgb(1, 59, 19) 89.9%, #ffffff00 90%);
        text-align: center;
        font-family: sans-serif;
        text-transform: uppercase;

    }
</style>