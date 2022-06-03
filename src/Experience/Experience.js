import * as THREE from 'three'
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import World from './World/World.js';
import Ground from './World/Ground.js';
import RocketModel from './World/Rocket_model.js';

let instance = null

export default class Experience {
    constructor(canvas) {
        if (instance) {
            return instance
        }
        instance = this
        this.canvas = canvas;
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        this.ground = new Ground()
        this.rocket = new RocketModel()
        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('tick', () => {
            this.update()
        })

    }
    resize() {
        this.camera.resize()
        this.renderer.resize()
    }
    update() {
        this.camera.update()
        this.renderer.update()
        this.world.update()
        this.ground.update()
        this.rocket.update()
    }
}