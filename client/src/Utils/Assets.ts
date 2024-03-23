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
        base_texture : 'Textures/Material1/base.png' , 
        normal_texture : 'Textures/Material1/normal.png' , 
        height_texture : 'Textures/Material1/height.png' , 
        roughness_texture : 'Textures/Material1/rough.png' , 
        metalic_texture : 'Textures/Material1/opacity.png' ,
        ao_texture : 'Textures/Material1/ao.png' , 
        opacity_texture : 'Textures/Material1/metal.png' , 
        specular_texture : 'Textures/Material1/specular.png'
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 4 , 
            y : 4 , 
        } , 
        base_texture : 'Textures/Material2/base.png' , 
        normal_texture : 'Textures/Material2/normal.png' , 
        height_texture : 'Textures/Material2/height.png' , 
        roughness_texture : 'Textures/Material2/rough.png' , 
        metalic_texture : 'Textures/Material2/metal.png' ,
        ao_texture : 'Textures/Material2/ao.png' , 
        opacity_texture : 'Textures/Material2/opacity.png' , 
        specular_texture : 'Textures/Material2/specular.png'
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material3/base.png' , 
        normal_texture : 'Textures/Material3/normal.png' , 
        height_texture : 'Textures/Material3/height.png' , 
        roughness_texture : 'Textures/Material3/rough.png' , 
        metalic_texture : 'Textures/Material3/metal.png' ,
        ao_texture : 'Textures/Material3/ao.png' , 
        opacity_texture : 'Textures/Material3/opacity.png' , 
        specular_texture : 'Textures/Material3/specular.png'
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material4/base.jpg' , 
        normal_texture : 'Textures/Material4/normal.jpg' , 
        height_texture : 'Textures/Material4/height.jpg' , 
        roughness_texture : 'Textures/Material4/rough.jpg' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material5/base.jpg' , 
        normal_texture : 'Textures/Material5/normal.jpg' , 
        height_texture : 'Textures/Material5/height.jpg' , 
        roughness_texture : 'Textures/Material5/rough.jpg' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material6/base.jpg' , 
        normal_texture : 'Textures/Material6/normal.jpg' , 
        height_texture : 'Textures/Material6/height.jpg' , 
        roughness_texture : 'Textures/Material6/rough.jpg' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material7/base.jpg' , 
        normal_texture : 'Textures/Material7/normal.jpg' , 
        height_texture : 'Textures/Material7/height.jpg' , 
        roughness_texture : 'Textures/Material7/rough.jpg' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material8/base.jpg' , 
        normal_texture : 'Textures/Material8/normal.jpg' , 
        height_texture : 'Textures/Material8/height.jpg' , 
        roughness_texture : 'Textures/Material8/rough.jpg' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material9/base.jpg' , 
        normal_texture : 'Textures/Material9/normal.jpg' , 
        height_texture : 'Textures/Material9/height.jpg' , 
        roughness_texture : 'Textures/Material9/rough.jpg' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    } , 
    {
        name : 'Calfskin_Leather' , 
        category : 'Leather' , 
        ref_image : 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png' , 
        tiling : {
            x : 5 , 
            y : 5 , 
        } , 
        base_texture : 'Textures/Material10/base.jpg' , 
        normal_texture : 'Textures/Material10/normal.jpg' , 
        height_texture : 'Textures/Material10/height.jpg' , 
        roughness_texture : 'Textures/Material10/rough.jpg' , 
        metalic_texture : '' ,
        ao_texture : '' , 
        opacity_texture : '' , 
        specular_texture : ''
    } , 
]