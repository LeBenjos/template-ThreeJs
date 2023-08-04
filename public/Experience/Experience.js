import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"

export default class Experience{
    constructor(canvas){
        // Save the instance in window
        window.experience = this

        // Properties
        this.canvas = canvas
        this.sizes = new Sizes()
        this.time = new Time()

        // Listen events
        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('tick', () => {
            this.update()
        })
    }

    resize(){
        console.log('resize')
    }

    update(){
        console.log('update')
    }
}