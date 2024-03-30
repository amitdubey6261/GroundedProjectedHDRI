import { Materials } from "../Utils/Assets";
import Experience from "./Experience";

export default class DragAndDrop {
    experience: Experience;

    constructor() {
        this.experience = new Experience();
    }

    handleDragAndDrop() {
        const material = this.experience.resources.loadedModels;
        const sofaImages = document.getElementsByClassName('sofa-images');
        Array.from(sofaImages).forEach((e, idx) => {
            e.addEventListener('dragend', () => {
                const model = material.get('Sofa');
                const model2 = material.get('Coffee_Table')
                if (idx >= 8) {
                    if (model2 !== undefined)
                        this.experience.createMaterial.ApplyMaterial(model2, idx);
                }
                else {
                    if (model !== undefined) {
                        this.experience.createMaterial.ApplyMaterial(model, idx);
                    }
                }
            })
        })
    }
}