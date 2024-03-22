import * as _ from 'three';

export type datatype = {
    name: string,
    path: string,
}

export const data: datatype[] = [
    // {
    //     name: 'Room',
    //     path: 'https://d3t7cnf9sa42u5.cloudfront.net/compressed_models/Room/Roop_physics_2.glb',
    // },
    // {
    //     name: 'blinds',
    //     path: 'https://d3t7cnf9sa42u5.cloudfront.net/compressed_models/Blinds/blind_03/Blinds_03_v01_draco.glb',
    // },
    // {
    //     name: 'chair',
    //     path: 'https://d3t7cnf9sa42u5.cloudfront.net/compressed_models/Chairs/chair_01/Chair_01_v01.glb'
    // },
    // {
    //     name: 'table',
    //     path: 'https://d3t7cnf9sa42u5.cloudfront.net/compressed_models/Tables/table/Table_Automatic_01_v01.glb',
    // },
    {
        name: 'Wall',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Wall.glb',
    },
    {
        name: 'Floor',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Floor.glb',
    },
    {
        name: 'Frame',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Frame.glb',
    },
    {
        name: 'Coffee_Table',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Coffee_Table.glb',
    },
    {
        name: 'Floor_Lamp',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Floor_Lamp.glb',
    },
    {
        name: 'Window',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Window.glb',
    },
    {
        name: 'Sofa',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Sofa.glb',
    },
    // {
    //     name: 'Chair',
    //     path: 'https://d2629xvaofl3d3.cloudfront.net/CollaborationV02/Chair.glb',
    // },
    // {
    //     name: 'Sofa',
    //     path: 'Sofa_Red_Velvet.glb',
    // },
]


export type hdritype = {
    name: string,
    path: { hdri: string, texture: string },
    hdricoords: { radius: number, height: number },
}

export const hdridata: hdritype[] = [
    {
        name: 'DancingHall',
        path: {
            hdri: 'HDRI/HDRI.exr',
            texture: 'HDRI/HDRI.avif',
        },
        hdricoords: {
            radius: 20,
            height: 3,
        }
    }
]

export type CustomMaterial = {
    name: string,
    category: string,
    ref_image: string,
    tiling: {
        x: number,
        y: number,
    },
    base_texture: string,
    normal_texture: string,
    height_texture: string,
    roughness_texture: string,
    metalic_texture: string,
    ao_texture: string,
    opacity_texture: string,
    specular_texture: string,
}

export const Materials:CustomMaterial[] = [
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : '' , 
        normal_texture : '' , 
        height_texture : '' , 
        roughness_texture : '' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    }
]