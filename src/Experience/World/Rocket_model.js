import * as THREE from 'three'
import Experience from "../Experience";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


let rocket;
export default class RocketModel {


    constructor() {
        console.log('RocketModel constructor')
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        // Rocket loader
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        rocket = new THREE.Object3D();


        // Rocket Model 
        gltfLoader.load(
            '/models/rocket/scene.gltf',
            (gltf) => {

<<<<<<< HEAD
                gltf.scene.scale.set(0.04, 0.04, 0.04)
=======
                gltf.scene.scale.set(2, 2, 2)
>>>>>>> b39322682586c5ea715c657bf4bdec340e9ac559
                rocket = gltf.scene
                this.scene.add(rocket)

            }
        )

    }
    update() {

        //rocket.position.y += 0.1;
        //this.camera.instance.position.y +=  0.1;
    }
}