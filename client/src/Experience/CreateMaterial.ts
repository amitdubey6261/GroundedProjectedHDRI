import * as _ from 'three';
import Experience from './Experience';
import { loadersType } from './LoadModels';
import { GLTF } from 'three/examples/jsm/Addons.js';
import { Materials } from '../Utils/Assets';

export default class CreateMaterial {
    experience: Experience;
    loaders: loadersType;

    constructor() {
        this.experience = new Experience();
        this.loaders = this.experience.resources.loaders;
    }

    getMaterial(base: string, normal: string, height: string, rough: string, metallic: string, ao: string, opacity: string, specular: string, tiling: number[]): Promise<_.MeshPhysicalMaterial> {
        return new Promise(async (res) => {
            let baseT, normalT, heightT, roughT, mettalicT, aoT, opacityT, specularT;

            const material = new _.MeshPhysicalMaterial();

            if (base !== "") {
                baseT = await this.loaders.textureloader.loadAsync(base);
                baseT.wrapS = _.RepeatWrapping
                baseT.wrapT = _.RepeatWrapping
                baseT.repeat.set(tiling[0], tiling[1]);
                material.map = baseT;
            }
            if (normal !== "") {
                normalT = await this.loaders.textureloader.loadAsync(normal);
                normalT.wrapS = _.RepeatWrapping
                normalT.wrapT = _.RepeatWrapping
                normalT.repeat.set(tiling[0], tiling[1]);
                material.normalMap = normalT;
            }
            if (height !== "") {
                heightT = await this.loaders.textureloader.loadAsync(height);
                heightT.wrapS = _.RepeatWrapping
                heightT.wrapT = _.RepeatWrapping
                heightT.repeat.set(tiling[0], tiling[1]);
                material.bumpMap = heightT;
            }
            if (rough !== "") {
                roughT = await this.loaders.textureloader.loadAsync(rough);
                roughT.wrapS = _.RepeatWrapping
                roughT.wrapT = _.RepeatWrapping
                roughT.repeat.set(tiling[0], tiling[1]);
                material.roughnessMap = roughT;
            }
            if (metallic !== "") {
                mettalicT = await this.loaders.textureloader.loadAsync(metallic);
                mettalicT.wrapS = _.RepeatWrapping
                mettalicT.wrapT = _.RepeatWrapping
                mettalicT.repeat.set(tiling[0], tiling[1]);
                material.metalnessMap = mettalicT;
            }
            if (ao !== "") {
                aoT = await this.loaders.textureloader.loadAsync(ao);
                aoT.wrapS = _.RepeatWrapping
                aoT.wrapT = _.RepeatWrapping
                aoT.repeat.set(tiling[0], tiling[1]);
                material.aoMap = aoT;
            }
            if (opacity !== "") {
                opacityT = await this.loaders.textureloader.loadAsync(opacity);
                opacityT.wrapS = _.RepeatWrapping;
                opacityT.wrapT = _.RepeatWrapping;
                opacityT.repeat.set(tiling[0], tiling[1]);
            }
            if (specular !== "") {
                specularT = await this.loaders.textureloader.loadAsync(specular);
                specularT.wrapS = _.RepeatWrapping
                specularT.wrapT = _.RepeatWrapping
                specularT.repeat.set(tiling[0], tiling[1]);
                material.specularIntensityMap = specularT;
            }

            material.side = _.FrontSide;

            res(material);
        })
    }

    async ApplyMaterial(model: GLTF, v: number) {

        const material = await this.getMaterial(
            Materials[v].base_texture,
            Materials[v].normal_texture,
            Materials[v].height_texture,
            Materials[v].roughness_texture,
            Materials[v].metalic_texture,
            Materials[v].ao_texture,
            Materials[v].opacity_texture,
            Materials[v].specular_texture,
            [Materials[v].tiling.x, Materials[v].tiling.y]
        )

        if (v >= 8) {
            material.envMapIntensity = .7 ; 
            material.roughness = .7 ; 
            material.metalness  = 1 ; 
            model?.scene.traverse((elem) => {
                if (elem.type == 'Mesh') {
                    if (elem.name !== 'Rectangle005') {
                        //@ts-ignore
                        elem.material = material;
                    }
                }
            })
        }
        else {
            material.envMapIntensity = .2;
            model?.scene.traverse((elem) => {
                if (elem.type == 'Mesh') {
                    //@ts-ignore
                    elem.material = material;
                }
            })
        }
    }
}