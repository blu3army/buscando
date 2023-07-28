import { html, useEffect } from "../../preact.js";
import { categoryTree } from "../../databases/categorias-db.js";


export function TopicsComp({context, cityCode}:{context:string, cityCode:string}) {
   
 
   
    return html`<div id="inner-div" class="flex absolute top-2" style="left: 0px;">
        ${categoryTree.map( (cat) => {
            if (cat.level === 0) {
                return html`<a href="/${context}/${cityCode}?topic=${cat.code}">
                    <div class="m-1 py-1 px-2 border border-blue-200 rounded-xl flex flex-col items-center w-40 h-18" style="">
                        <span class="mr-2 text-blue-500">
                            <i class=${cat.icon}></i>
                        </span>
                        <span class="font-semibold">
                            ${cat.name}
                        </span>
                    </div>
                </a>`
            }
        })}
    </div>`

        
}




function order(a:any,b:any) {
    if(a.name > b.name){
        return 1;
    } else if(a.name < b.name){
        return -1;
    }
    return 0;
}