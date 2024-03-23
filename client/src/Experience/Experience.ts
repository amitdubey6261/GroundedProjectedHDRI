import * as _ from 'three';
import Render from "./Render";
import Camera from './Camera';
import Time from '../Utils/Time';
import Environment from './Environment';
import { data, datatype, hdridata, hdritype } from '../Utils/Assets';
import LoadModels from './LoadModels';
import World from './World';
import PostProcessing from './PostProcessing';
import HandleHTML from './HandleHtml';
import CreateMaterial from './CreateMaterial';

export default class Experience {
    static instance: Experience;
    scene: _.Scene;
    canvas: HTMLCanvasElement | undefined;
    camera: Camera;
    renderer: Render;
    time: Time;
    elme: _.Mesh;
    env: Environment;
    data : datatype[] ; 
    hdridata : hdritype[] ; 
    resources : LoadModels ; 
    world : World ; 
    postprocessing : PostProcessing ;
    handleHTML : HandleHTML ; 
    createMaterial : CreateMaterial ; 

    constructor(canvas?: HTMLCanvasElement) {
        if (Experience.instance == undefined) {
            if (canvas !== undefined) {
                Experience.instance = this ;
                this.data = data ; 
                this.hdridata = hdridata ; 

                this.time = new Time();
                this.canvas = canvas;
                this.scene = new _.Scene;
                this.camera = new Camera();
                this.camera.intitOrbit();
                this.renderer = new Render();
                this.resources = new LoadModels() ; 
                this.env = new Environment();
                // this.postprocessing = new PostProcessing() ; 
                this.createMaterial = new CreateMaterial() ; 
                this.handleHTML = new HandleHTML() ;
                this.world = new World() ; 
                
                
                this.time.on('update', () => {
                    this.update();
                })
            }
        }
        else {
            return Experience.instance;
        }
    }

    update() {
        if (this.renderer)
            this.renderer.render();

        if (this.camera)
            this.camera.update();
    }
}