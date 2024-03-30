import { GLTF } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import DragAndDrop from "./DragAndDrop";

export default class World{
    experience : Experience ; 
    loadedmodels : Map<string , GLTF> ; 
    DragAndDrop : DragAndDrop ; 
    constructor(){
        this.experience = new Experience() ; 
        this.init() 
    }
    
    async init(){
        this.loadedmodels = await this.experience.resources.loadglTF() ;
        // const sofa = this.loadedmodels.get('Sofa') ; 
        this.DragAndDrop = new DragAndDrop() ; 
        this.DragAndDrop.handleDragAndDrop() ; 
    }
}