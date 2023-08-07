import * as THREE from 'three'
import Experience from "../Experience";

export default class TestModel{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.resource = this.resources.items.logo
        this.time = this.experience.time

        this.setTexture()
        this.setModel()
    }
    
    setTexture(){
        this.textures = {}

        this.textures.matcap = this.resources.items.matcapTexture
    }

    setModel(){
        const material = new THREE.MeshMatcapMaterial()
        this.model = this.resource.scene

        this.model.traverse((child) => {
            if(child.isMesh && child.material.isMaterial){
                child.material = material
                child.material.matcap = this.textures.matcap
            }

            if(child.isMesh){
                child.castShadow = true
            }
        })

        this.scene.add(this.model)
    }

    update(){
        this.model.rotation.y = this.time.elapsed * 0.0001
    }
}