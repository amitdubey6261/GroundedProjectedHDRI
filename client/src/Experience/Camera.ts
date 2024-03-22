import * as _ from 'three' ; 
import Experience from './Experience';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export default class Camera{
    experience : Experience ;     
    camera  : _.PerspectiveCamera ; 
    controls : OrbitControls ; 
    constructor(){
        this.experience = new Experience() ; 
        this.camera = new _.PerspectiveCamera(50 , window.innerWidth/window.innerHeight , .1 , 200 ) ; 
        this.camera.position.set( -4,4,4 ) ; 
    }

    intitOrbit(){
        this.controls  = new OrbitControls( this.camera , this.experience.canvas ) ; 
        this.controls.enableDamping = true 
        this.controls.dampingFactor = 0.05
        this.controls.minDistance = 0.1
        this.controls.maxDistance = 100
        this.controls.maxPolarAngle = Math.PI / 1.5
        this.controls.target.set(0, 0.5, 0)
    }

    update(){
        this.controls.update() ; 
    }
}