import * as _ from 'three' ; 

export type datatype =  {
    name: string,
    path: string,
}

export const data: datatype[] = [
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
]


export type hdritype = {
    name : string , 
    path : { hdri : string , texture : string } , 
    hdricoords : { radius : number , height : number } ,
}

export const hdridata: hdritype[] = [
    {
        name : 'DancingHall' , 
        path : {
            hdri : 'HDRI/HDRI.exr' , 
            texture : 'HDRI/HDRI.avif' , 
        },
        hdricoords : {
            radius : 20 , 
            height : 3 , 
        }
    }
]