import { Materials } from "../Utils/Assets";

export default class HandleHTML {
    constructor() {
        this.handleAccordian();
        this.hgandleSofaSwatch();
    }

    handleAccordian() {
        const headerBtns = Array.from(document.getElementsByClassName('header')) as HTMLElement[];
        const headerChilds = Array.from(document.getElementsByClassName('header-child')) as HTMLElement[];

        headerBtns.forEach((elem, idx) => {
            elem.addEventListener('click', () => {
                const child = headerChilds[idx];
                if (child.style.height == '0px') {
                    child.style.height = 'fit-content';
                }
                else {
                    child.style.height = '0px';
                }
            })
        })
    }

    hgandleSofaSwatch() {
        Materials.forEach((elem) => {
            const HtmlString = `<div class="image"><img class="sofa-images" src=${elem.base_texture} alt=""></div>`
            let range = document.createRange() ; 
            let frag = range.createContextualFragment(HtmlString) ; 
            const sofaContainer = document.getElementById('sofa-swatch') ; 
            sofaContainer?.appendChild( frag ) ; 
        })
    }
}