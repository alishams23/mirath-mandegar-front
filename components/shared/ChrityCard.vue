<template>
    <div class="max-w-[355px] rounded-3xl overflow-hidden shadow-lg">
        <img class="w-full h-[256px] object-cover" :src="data.imageBlog.photo" alt="Sunset in the mountains">
        <div dir="rtl" class="px-6 py-4">
            <span
                class="inline-flex items-center rounded-full px-6 py-1 text-sm font-medium ring-1 ring-inset ring-blue-700/10"
                :class="data.bagcolor, data.bagtextcolor">{{
            data.bag }}</span>
            <h2 class=" text-gray-900 my-2 text-lg font-semibold">{{ data.title }}</h2>
            <p class="text-gray-700 text-base">
                {{ data.body }}
            </p>
            <nuxt-link tag="button" :to="'/blog/' + data.id"
                class=" bg-[#8b4513] text-white text-md py-2 px-6 rounded-2xl inline-flex items-center mt-3">
                <span>مشاهده </span>
            </nuxt-link>
        </div>
        <!-- <div dir="rtl" class="px-6 pt-4 pb-2 flex items-center">
                <img class="w-12 h-12 rounded-full mr-4 object-cover" :src="item.authorurl" alt="Author's avatar">
                <div class="text-base mr-2">
                    <p class="text-gray-900 leading-none">{{ item.authorname }}</p>
                </div>
            </div> -->
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {
            // nonsense: [
            //     { imgurl: 'https://uncrate.com/p/2018/01/m-b-g-class-1.jpg', bag: 'پووووول', bagcolor: 'bg-blue-100', bagtextcolor: 'text-blue-700', name: 'بیایید در این کار خیر شریک باشید', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها', authorurl: 'https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?rs=1&pid=ImgDetMain', authorname: "حسن علی بقال" },
            //     { imgurl: 'https://th.bing.com/th/id/OIP.6IrEBsn7FcPbUlp3LX4UNwHaE7?rs=1&pid=ImgDetMain', bag: ' پووووول بیشتررر', bagcolor: 'bg-green-100', bagtextcolor: 'text-green-700', name: 'بیایید در این کار خیر شریک باشید', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها', authorurl: 'https://th.bing.com/th/id/R.85403a45ac6ea9ef4f4ce8680372b6a4?rik=F41Y7gSvNk2q5Q&pid=ImgRaw&r=0', authorname: "اصغررررر" },
            //     { imgurl: 'https://th.bing.com/th/id/R.6de835ee461b1724e7a9888daff50ceb?rik=EWiSSvnwtIMYCA&pid=ImgRaw&r=0', bag: ' پووووول بیشترررررر', bagcolor: 'bg-purple-100', bagtextcolor: 'text-purple-700', name: 'بیایید در این کار خیر شریک باشید', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها', authorurl: 'https://st.depositphotos.com/1008939/2959/i/600/depositphotos_29596623-stock-photo-screaming-man.jpg', authorname: "قدرررررررت" },
            // ]
        }
    }
}
</script>