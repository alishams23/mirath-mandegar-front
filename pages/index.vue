<template>
    <main dir="rtl" class="  bg-gradient-to-tl from-[#01231d] to-[#033f33] isolate rounded-br-[200px]">
        <div class="relative isolate -z-10">
            <div class="overflow-hidden">
                <div class="mx-auto max-w-7xl px-6 pb-[50px] pt-36 sm:pt-60 lg:px-8 lg:pt-[0px]">
                    <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                            <h1 class=" text-4xl font-bold tracking-tight text-[#FFCD9B] sm:text-6xl"> میراثی ماندگار
                                برای
                            </h1>
                            <p class="relative pt-14 text-lg leading-8 text-[#CCA47C] sm:max-w-md lg:max-w-none">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
                            </p>
                        </div>
                        <div class="flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 holder">
                            <div
                                class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                <div class="relative">
                                    <img src="https://www.eghamat24.com/blog/wp-content/uploads/2024/03/New-Project-2024-04-05T141709.076.webp"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                    <div
                                        class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                            </div>
                            <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div class="relative">
                                    <img src="https://www.eghamat24.com/blog/wp-content/uploads/2024/03/New-Project-2024-04-05T142506.728.webp"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                    <div
                                        class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div class="relative">
                                    <img src="https://www.eghamat24.com/blog/wp-content/uploads/2024/03/New-Project-2024-04-05T143240.402.webp"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                    <div
                                        class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                            </div>
                            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div class="relative">
                                    <img src="https://www.eghamat24.com/blog/wp-content/uploads/2024/03/New-Project-2024-04-05T215635.728.webp"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                    <div
                                        class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div class="relative">
                                    <img src="https://www.eghamat24.com/blog/wp-content/uploads/2024/03/New-Project-2024-04-05T220432.041.webp"
                                        alt=""
                                        class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                    <div
                                        class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <section class=" ">
        <SweaperShop />
    </section>
    <section class="">
        <SweaperVideo />
    </section>
    <section class="">
        <Sweaper-musicalcart />
    </section>
    <footer class="mt-10 bg-[#002820] ">
        <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
            <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                <div v-for="item in footerNavigation.main" :key="item.name" class="pb-6">
                    <a :href="item.href" class="text-sm leading-6 text-[#FFCD9B]">{{
                    item.name }}</a>
                </div>
            </nav>
            <div class="mt-10 flex justify-center space-x-10">
                <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href"
                    class=" transition-all ease-in-out text-[#CCA47C] hover:text-[#FFCD9B] hover:scale-110 duration-150">
                    <span class="sr-only">{{ item.name }}</span>
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                </a>
            </div>
            <p class="mt-10 text-center text-xs leading-5 text-[#CCA47C]">&copy; 2020 Your Company, Inc. All rights
                reserved.</p>
        </div>
    </footer>
</template>
<script>
// import * as THREE from 'three';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
// import * as dat from 'dat.gui';
import { useUserStore } from '~/store/user';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontLoader } from 'three/examples/jsm/Addons.js';

export default {
    computed: {
        username() {
            return useUserStore().username
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        // const onSwiper = (swiper) => {
        //     console.log(swiper);
        // };
        // const onSlideChange = () => {
        //     console.log('slide change');
        // };
        // return {
        //     onSwiper,
        //     onSlideChange,
        //     modules: [Navigation, Pagination, Scrollbar, A11y],
        // };

    },
    // mounted() {
    //     const divContainer = this.$refs.container

    //     let scene;
    //     let camera;
    //     let renderer;

    //     function init() {
    //         scene = new THREE.Scene()

    //         camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    //         camera.position.z = 20

    //         renderer = new THREE.WebGLRenderer({ antialias: true })
    //         renderer.setSize(window.innerWidth, window.innerHeight)
    //         document.body.appendChild(renderer.domElement)

    //         const geometry = new THREE.DodecahedronGeometry(2, 5)
    //         const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    //         const circle = new THREE.Mesh(geometry, material)
    //         circle.position.x = 0
    //         scene.add(circle)

    //         const capsolGeometry = new THREE.CapsuleGeometry(.5, .5, 32, 64)
    //         const material2 = new THREE.MeshStandardMaterial({ color: 0xffff00 })
    //         const capsol = new THREE.Mesh(capsolGeometry, material2)
    //         const capsol2 = new THREE.Mesh(capsolGeometry, material2)
    //         const capsol3 = new THREE.Mesh(capsolGeometry, material2)
    //         capsol.position.x = -2
    //         capsol2.position.x = -10
    //         capsol3.position.x = -15
    //         scene.add(capsol)
    //         scene.add(capsol2)
    //         scene.add(capsol3)

    //         // Lights
    //         // ایجاد یک SpotLight سفید که از کنار تابیده می‌شود، بافت مدوله شده، و سایه می‌اندازد
    //         const spotLight = new THREE.SpotLight(0xffffff, 100);
    //         spotLight.position.set(10, 10, 10);
    //         spotLight.castShadow = true;

    //         // تنظیمات سایه
    //         spotLight.shadow.mapSize.width = 1024;
    //         spotLight.shadow.mapSize.height = 1024;
    //         spotLight.shadow.camera.near = 500;
    //         spotLight.shadow.camera.far = 4000;
    //         spotLight.shadow.camera.fov = 30;

    //         scene.add(spotLight)

    //         //GUI
    //         // create GUI
    //         // const gui = new dat.GUI()

    //         // const circleFolder = gui.addFolder('Circle')
    //         // circleFolder.add(circle.rotation, 'x', 0, Math.PI * 2);
    //         // circleFolder.add(circle.rotation, 'y', 0, Math.PI * 2);
    //         // circleFolder.add(circle.rotation, 'z', 0, Math.PI * 2);
    //         // circleFolder.open();

    //         // text geometry
    //         // const loader = new THREE.FontLoader();

    //         // async function createTextMesh() {
    //         //     const font = await new Promise((resolve, reject) => {
    //         //         loader.load('https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json', resolve, reject);
    //         //     });

    //         //     const textGeometry = new THREE.TextGeometry('Hello', {
    //         //         font: font,
    //         //         size: 80,
    //         //         depth: 5,
    //         //         curveSegments: 12,
    //         //         bevelEnabled: true,
    //         //         bevelThickness: 10,
    //         //         bevelSize: 8,
    //         //         bevelOffset: 0,
    //         //         bevelSegments: 5
    //         //     });

    //         //     const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    //         //     const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    //         //     textMesh.position.set(4, 4, 4);
    //         //     scene.add(textMesh);
    //         // }

    //         // createTextMesh().catch(error => console.error(error));


    //         const loader = new FontLoader()
    //         loader.load('https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json',
    //             (response) => {
    //                 const textGeometry = new textGeometry('Hello', {
    //                     font: response,
    //                     size: 80,
    //                     depth: 5,
    //                     curveSegments: 12,
    //                     bevelEnabled: true,
    //                     bevelThickness: 10,
    //                     bevelSize: 8,
    //                     bevelOffset: 0,
    //                     bevelSegments: 5
    //                 })

    //                 const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 })
    //                 const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    //                 textMesh.position.set(4, 4, 4)
    //                 scene.add(textMesh)


    //             }
    //         )

    //         let angel = 0
    //         let angel2 = 0
    //         let angel3 = 0
    //         function animate() {
    //             // circle.rotation.x += 0.01;
    //             circle.rotation.y += 0.01;
    //             // circle.rotation.z += 0.02;
    //             capsol.rotation.x += 0.02;
    //             capsol.rotation.y += 0.02;
    //             capsol.rotation.z += 0.02;
    //             capsol2.rotation.x += 0.02;
    //             capsol2.rotation.y += 0.02;
    //             capsol2.rotation.z += 0.02;
    //             capsol3.rotation.x += 0.02;
    //             capsol3.rotation.y += 0.02;
    //             capsol3.rotation.z += 0.02;
    //             angel += 0.01
    //             angel2 -= 0.01
    //             angel3 += 0.01
    //             let y = Math.sin(angel)
    //             let x = Math.sin(angel)
    //             let y2 = Math.sin(angel2)
    //             let x2 = Math.sin(angel2)
    //             let y3 = Math.sin(angel)
    //             let x3 = Math.sin(angel3)
    //             capsol.position.set(x * 6, y * 6, 0)
    //             capsol2.position.set(x2 * 6, -y2 * 6, 0)
    //             capsol3.position.set(x3 * 5, 0, 0)
    //             renderer.render(scene, camera);
    //             requestAnimationFrame(animate);
    //         }
    //         animate()


    //     }

    //     function addEventListener() {
    //         window.addEventListener('resize', onWindowResize)
    //     }

    //     function onWindowResize() {
    //         camera.aspect = window.innerWidth / window.innerHeight
    //         camera.updateProjectionMatrix()
    //         renderer.setSize(window.innerWidth, window.innerHeight)
    //     }

    //     init()
    //     addEventListener()

    //     // const divContainer = this.$refs.container

    //     // let scene
    //     // let camera
    //     // let renderer

    //     // function init() {
    //     //     scene = new THREE.Scene()

    //     //     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    //     //     camera.position.z = 20

    //     //     renderer = new THREE.WebGLRenderer({ antialias: true })
    //     //     renderer.setSize(window.innerWidth, window.innerHeight)
    //     //     document.body.appendChild(renderer.domElement)

    //     //     const geometry = new THREE.DodecahedronGeometry(2, 5);
    //     //     const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    //     //     const cube = new THREE.Mesh(geometry, material);
    //     //     scene.add(cube);
    //     //     cube.position.x = 0
    //     //     scene.add(cube)

    //     //     const geometry2 = new THREE.CapsuleGeometry(.5, .5, 32, 64)
    //     //     const material2 = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    //     //     const capsol = new THREE.Mesh(geometry2, material2)
    //     //     const capsol2 = new THREE.Mesh(geometry2, material2)
    //     //     const capsol3 = new THREE.Mesh(geometry2, material2)
    //     //     capsol.position.x = -2
    //     //     capsol2.position.x = -10
    //     //     capsol3.position.x = -15
    //     //     scene.add(capsol)
    //     //     scene.add(capsol2)
    //     //     scene.add(capsol3)

    //     //  Lights
    //     //  ایجاد یک SpotLight سفید که از کنار تابیده می‌شود، بافت مدوله شده، و سایه می‌اندازد
    //     // const spotLight = new THREE.SpotLight(0xffffff, 100);
    //     // spotLight.position.set(10, 10, 10);
    //     // spotLight.castShadow = true;

    //     //     // تنظیمات سایه
    //     //     spotLight.shadow.mapSize.width = 1024;
    //     //     spotLight.shadow.mapSize.height = 1024;
    //     //     spotLight.shadow.camera.near = 500;
    //     //     spotLight.shadow.camera.far = 4000;
    //     //     spotLight.shadow.camera.fov = 30;

    //     //     // اضافه کردن نور به صحنه
    //     //     scene.add(spotLight);

    //     // }
    //     // // scene.add(light)

    //     // let angel = 0
    //     // let angel2 = 0
    //     // let angel3 = 0
    //     // function animate() {
    //     //     // cube.rotation.x += 0.01;
    //     //     cube.rotation.y += 0.01;
    //     //     // cube.rotation.z += 0.02;
    //     //     capsol.rotation.x += 0.02;
    //     //     capsol.rotation.y += 0.02;
    //     //     capsol.rotation.z += 0.02;
    //     //     capsol2.rotation.x += 0.02;
    //     //     capsol2.rotation.y += 0.02;
    //     //     capsol2.rotation.z += 0.02;
    //     //     capsol3.rotation.x += 0.02;
    //     //     capsol3.rotation.y += 0.02;
    //     //     capsol3.rotation.z += 0.02;
    //     //     angel += 0.01
    //     //     angel2 -= 0.01
    //     //     angel3 += 0.01
    //     //     let y = Math.sin(angel)
    //     //     let x = Math.sin(angel)
    //     //     let y2 = Math.sin(angel2)
    //     //     let x2 = Math.sin(angel2)
    //     //     let y3 = Math.sin(angel)
    //     //     let x3 = Math.sin(angel3)
    //     //     capsol.position.set(x * 6, y * 6, 0)
    //     //     capsol2.position.set(x2 * 6, -y2 * 6, 0)
    //     //     capsol3.position.set(x3 * 5, 0, 0)
    //     //     renderer.render(scene, camera);
    //     //     requestAnimationFrame(animate);
    //     // }
    //     // init();
    //     // animate();
    // }

}
</script>