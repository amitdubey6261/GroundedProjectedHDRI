import * as _ from 'three' ; 
import { TextureLoader } from "three";
import { DRACOLoader, EXRLoader, GLTF, GLTFLoader, KTX2Loader, RGBELoader } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import { datatype, hdritype } from '../Utils/Assets';

type loadersType ={
    glbloader : GLTFLoader , 
    dracoloader : DRACOLoader , 
    exrloader : EXRLoader , 
    rgbeloader : RGBELoader , 
    textureloader : TextureLoader , 
    ktx2loader : KTX2Loader , 
}

export default class LoadModels{
    loaders : loadersType ; 
    experience : Experience ; 
    loadedModels : Map<string , GLTF> ; 
    loadedhdris : Map<string , { height : number , radius : number , hdri : any , texture : any  }>

    constructor(){
        this.experience = new Experience() ; 
        this.loadedModels = new Map() ; 
        this.loadedhdris = new Map() ;
        this.createLoaders() ; 
    }

    createLoaders(){
        this.loaders = {
            dracoloader : new DRACOLoader() , 
            glbloader : new GLTFLoader() ,
            exrloader : new EXRLoader() , 
            rgbeloader : new RGBELoader() , 
            textureloader : new TextureLoader() , 
            ktx2loader : new KTX2Loader() ,
        }

        this.loaders.exrloader.setDataType(_.FloatType);
        this.loaders.rgbeloader.setDataType(_.FloatType) ;

        this.loaders.dracoloader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/') ; 
        this.loaders.glbloader.setDRACOLoader(this.loaders.dracoloader) ; 
    }

    loadHDRI(){
        return new Promise((res)=>{
            this.experience.hdridata.forEach( async (elem : hdritype )=>{
                const hdri = await  this.loaders.exrloader.loadAsync(elem.path.hdri) ; 
                const texture =  await this.loaders.textureloader.loadAsync(elem.path.texture);
                hdri.mapping = _.EquirectangularReflectionMapping ; 
                hdri.minFilter = _.LinearFilter ;
                texture.mapping = _.EquirectangularReflectionMapping ; 
                texture.colorSpace = _.SRGBColorSpace ; 
    
                this.loadedhdris.set(elem.name , {
                    height : elem.hdricoords.height ,
                    radius : elem.hdricoords.radius ,
                    hdri , 
                    texture , 
                })
                res( this.loadedhdris ) ; 
            })
        })
    }

    loadglTF(){
        return new Promise((res)=>{
            this.experience.data.forEach(async(elm : datatype )=>{
                const glTF = await this.loaders.glbloader.loadAsync(elm.path) ;
                glTF.scene.traverse((e)=>{
                    if( e.type == 'Mesh' ){
                        e.castShadow = true ; 
                        e.receiveShadow = true ; 
                    }
                })
                this.loadedModels.set(elm.name , glTF ) ; 
                this.experience.scene.add(glTF.scene) ; 
            })
            res(this.loadedModels) ; 
        })
    }
}