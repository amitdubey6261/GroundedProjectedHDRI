import * as _ from 'three';
import { GroundProjectedSkybox } from "./GroundProjectedSkybox.js";
import Experience from './Experience';

export default class Environment {
    experince: Experience;
    gps: GroundProjectedSkybox;
    loadedHDRIS: Map<any, any>;

    constructor() {
        this.experince = new Experience();
        this.createEnv();
        this.sunlight() ; 
        this.groundShadow() ; 
    }

    async createEnv() {
        const loadedhdris: any = await this.experince.resources.loadHDRI();
        const hdridata = loadedhdris.get('DancingHall')
        this.gps = new GroundProjectedSkybox(hdridata.hdri);
        this.gps.scale.setScalar(100);
        this.gps.radius = hdridata.radius;
        this.gps.height = hdridata.height;
        //@ts-ignore
        this.gps.material.uniforms.map.value = hdridata.texture;
        this.experince.scene.environment = hdridata.hdri;
        this.experince.scene.add(this.gps);
        this.dayNight() ; 
    }

    sunlight() {
        let sunGroup = new _.Group();
        let sunLight = new _.DirectionalLight();
        sunLight.name = 'Dir.Light'
        sunLight.intensity = 1;
        sunLight.castShadow = true ; 
        sunLight.color.set('#ffffeb')
        sunLight.castShadow = true
        sunLight.shadow.camera.near = 0.1
        sunLight.shadow.camera.far = 50
        sunLight.shadow.camera.right = 15
        sunLight.shadow.camera.left = -15
        sunLight.shadow.camera.top = 15
        sunLight.shadow.camera.bottom = -15
        sunLight.shadow.mapSize.width = 1024
        sunLight.shadow.mapSize.height = 1024
        sunLight.shadow.radius = 1.95
        sunLight.shadow.blurSamples = 6
        sunLight.position.set(0, 8, 8);

        sunLight.shadow.bias = -0.0005
        //@ts-ignore
        sunGroup.add(sunLight);

        this.experince.scene.add(sunGroup)
    }

    groundShadow(){
        const plane = new _.Mesh( new _.PlaneGeometry(100,100) , new _.ShadowMaterial({opacity : .2 }) ) ; 
        plane.rotateX(-Math.PI/2) ; 
        plane.position.set( 0 , 0.01 , 0 ) ; 
        plane.receiveShadow = true ;
        this.experince.scene.add(plane) ; 
    }

    dayNight(){

        const elem = document.getElementById('day-night-switch') as HTMLInputElement  ; 

        elem?.addEventListener('input' , ()=>{
            if( elem.checked ){
                this.experince.renderer.renderer.toneMappingExposure = 1 ; 
            }
            else{
                this.experince.renderer.renderer.toneMappingExposure = .1 ; 
            }
        })
    }
}
