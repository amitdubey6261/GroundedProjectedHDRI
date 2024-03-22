export default class HandleHTML{
    constructor(){
        this.handleAccordian() ; 
    }

    handleAccordian(){
        const headerBtns = Array.from(document.getElementsByClassName('header')) as HTMLElement[]; 
        const headerChilds = Array.from(document.getElementsByClassName('header-child')) as HTMLElement[]; 

        headerBtns.forEach((elem , idx)=>{
            elem.addEventListener('click' , ()=>{
                const child = headerChilds[idx] ; 
                if( child.style.height == '0px' ){
                    child.style.height = '100px' ; 
                }
                else{
                    child.style.height = '0px' ;
                }
            })
        })
    }
}