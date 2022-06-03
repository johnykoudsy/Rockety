import * as THREE from 'three'
import Experience from "../Experience";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class RocketModel {


    constructor() {
        console.log('RocketModel constructor')
        this.experience = new Experience()
        this.scene = this.experience.scene

        // Rocket loader
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        var rocket = new THREE.Object3D();

        // Rocket Model 
        gltfLoader.load(
            '/models/try/rocket.gltf',
            (gltf) => {

                //gltf.scene.scale.set(1, 1, 1)
                rocket = gltf.scene
                this.scene.add(rocket)

            }
        )

    }
    update() {

    }
}