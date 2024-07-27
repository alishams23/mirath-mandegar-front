<template>
    <div class="w-[240px] rounded-3xl overflow-hidden shadow-1">
        <img class="w-full h-[140px] object-cover" :src="data.imageBlog.photo" alt="Sunset in the mountains">
        <div dir="rtl" class="px-6 py-4">
           
            <h2 class=" text-gray-900 my-2 mt-1 text-md font-semibold line-clamp-2">{{ data.title }}</h2>
            <p class="text-gray-700 text-sm mb-3 line-clamp-2">
                {{ data.body }}
            </p>
            <nuxt-link tag="button" :to="'/blog/' + data.id"
                class=" bg-[#8b4513]  text-white text-sm py-2 px-6 rounded-2xl inline-flex items-center mt-3">
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