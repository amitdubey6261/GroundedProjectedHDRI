import * as _ from 'three' ; 
import Experience from './Experience';

export default class Render{
    experience : Experience ; 
    renderer : _.WebGLRenderer
    constructor(){
        this.experience = new Experience() ; 
        this.renderer = new _.WebGLRenderer({
            antialias: true , 
            alpha : true , 
            canvas : this.experience.canvas
        })
        this.renderer.setPixelRatio(window.devicePixelRatio) ; 
        this.renderer.setSize(window.innerWidth , window.innerHeight ) ; 
        this.renderer.shadowMap.enabled = true ; 
        this.renderer.shadowMap.type = _.VSMShadowMap ; 
        this.renderer.outputColorSpace = _.SRGBColorSpace ; 
        this.renderer.toneMapping = _.ACESFilmicToneMapping ; 
    }

    render(){
        this.renderer.render( this.experience.scene , this.experience.camera.camera ) ; 
    }
}