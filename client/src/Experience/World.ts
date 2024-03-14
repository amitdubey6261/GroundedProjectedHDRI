import { GLTF } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";

export default class World{
    experience : Experience ; 
    loadedmodels : Promise<Map<string , GLTF>>
    constructor(){
        this.experience = new Experience() ; 
        this.loadedmodels = this.experience.resources.loadglTF()  as Promise<Map<string , GLTF>>; 
        console.log(this.loadedmodels)
    }
}