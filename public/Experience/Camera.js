import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import Experience from "./Experience"

export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        // Set Camera Instance and Controls
        this.setInstance()
        this.setControls()
    }

    setInstance(){
        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.aspectRatio, 
            0.1, 
            100)
        this.instance.position.set(6, 4, 8)
        // this.instance.lookAt(new THREE.Vector3(0, 0, 0))

        this.scene.add(this.instance)
    }

    setControls(){
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize(){
        this.instance.aspect = this.sizes.aspectRatio
        this.instance.updateProjectionMatrix()
    }

    update(){
        this.controls.update()
    }
}