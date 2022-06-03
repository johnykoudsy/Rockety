import * as THREE from 'three'
import Experience from "./Experience"

export default class Camere {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.setInstance()
    }
    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            75,
            this.sizes.width / this.sizes.height,
            0.1,
            1000
        )
        this.instance.position.set(0, 0, 5)
        this.scene.add(this.instance)
    }
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }
    update() {

    }
}