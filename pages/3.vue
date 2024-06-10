<template>
    <div ref="divContainer"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { IconHandThreeFingers } from '@tabler/icons-vue';
const divContainer = ref('divContainer')

onMounted(() => {
    console.log(divContainer)

    let camera
    let scene
    let renderer

    function init() {
        scene = new THREE.Scene()

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 20

        renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild(renderer.domElement)

        const geometry = new THREE.DodecahedronGeometry(2, 5)
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        const circle = new THREE.Mesh(geometry, material)
        circle.position.x = 0
        scene.add(circle)

        const capsolGeometry = new THREE.CapsuleGeometry(.5, .5, 32, 64)
        const material2 = new THREE.MeshStandardMaterial({ color: 0xffff00 })
        const capsol = new THREE.Mesh(capsolGeometry, material2)
        const capsol2 = new THREE.Mesh(capsolGeometry, material2)
        const capsol3 = new THREE.Mesh(capsolGeometry, material2)
        capsol.position.x = -2
        capsol2.position.x = -10
        capsol3.position.x = -15
        scene.add(capsol)
        scene.add(capsol2)
        scene.add(capsol3)

        // Lights
        // ایجاد یک SpotLight سفید که از کنار تابیده می‌شود، بافت مدوله شده، و سایه می‌اندازد
        const spotLight = new THREE.SpotLight(0xffffff, 100);
        spotLight.position.set(10, 10, 10);
        spotLight.castShadow = true;

        // تنظیمات سایه
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;

        scene.add(spotLight)

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.target = new THREE.Vector3(0, 0, -40)
        controls.update()

        //GUI
        // create GUI
        // const gui = new dat.GUI()

        // const circleFolder = gui.addFolder('Circle')
        // circleFolder.add(circle.rotation, 'x', 0, Math.PI * 2);
        // circleFolder.add(circle.rotation, 'y', 0, Math.PI * 2);
        // circleFolder.add(circle.rotation, 'z', 0, Math.PI * 2);
        // circleFolder.open();

        // text geometry
        const fontLoader = new FontLoader()

        fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (text) => {
            const textGeometry = new TextGeometry('Hello World', {
                depth: 2,
                size: 8,
                font: text
            })
            const textMaterial = new THREE.MeshNormalMaterial()
            const textMesh = new THREE.Mesh(textGeometry, textMaterial)
            textMesh.position.set(-27, 0, -10)

            scene.add(textMesh)
        })



        let angel = 0
        let angel2 = 0
        let angel3 = 0
        function animate() {
            // circle.rotation.x += 0.01;
            circle.rotation.y += 0.01;
            // circle.rotation.z += 0.02;
            capsol.rotation.x += 0.02;
            capsol.rotation.y += 0.02;
            capsol.rotation.z += 0.02;
            capsol2.rotation.x += 0.02;
            capsol2.rotation.y += 0.02;
            capsol2.rotation.z += 0.02;
            capsol3.rotation.x += 0.02;
            capsol3.rotation.y += 0.02;
            capsol3.rotation.z += 0.02;
            angel += 0.01
            angel2 -= 0.01
            angel3 += 0.01
            let y = Math.sin(angel)
            let x = Math.sin(angel)
            let y2 = Math.sin(angel2)
            let x2 = Math.sin(angel2)
            let y3 = Math.sin(angel)
            let x3 = Math.sin(angel3)
            capsol.position.set(x * 6, y * 6, 0)
            capsol2.position.set(x2 * 6, -y2 * 6, 0)
            capsol3.position.set(x3 * 5, 0, 0)
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate()


    }

    function addEventListener() {
        window.addEventListener('resize', onWindowResize)
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    init()
    addEventListener()
})
</script>