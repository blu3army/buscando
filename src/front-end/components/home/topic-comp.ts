import { categoryTree } from "../../databases/categorias-db.js";
import { Category } from "../../models/Categoria.js";
import { html, useEffect, useState } from "../../preact.js";


export function TopicComp({cityCode, topicCode, areaCode, catCode}:{cityCode:string, topicCode?:string, areaCode?:string, catCode?:string}) {

    
    const url = `/home/${cityCode}?topic=${topicCode}`;
    

    const [topic, setTopic]:[topic:Category, setTopic:any] = useState(null);
    const [area, setArea]:[area:Category, setArea:any] = useState(null);
    const [cat, setCat]:[cat:Category, setCat:any] = useState(null);

    useEffect(() => {
        const t = categoryTree.find( child => child.code === topicCode );
        const a = t?.children.find( child => child.code === areaCode );
        const c = a?.children.find( child => child.code === catCode );
        
        setTopic(t);
        setArea(a);
        setCat(c)
    }, []);
    
    
    return html`<div class="ml-5">

        
        <!-- Path -->
        <h2 class="md:text-lg">
            
            <a href="/home/${cityCode}" class="mr-2">
                <i class="fa-solid fa-angle-left"></i>
            </a>
            
            <span> <i class="${topic?.icon} text-blue-500"></i> <a href="${url}"> ${topic?.name} </a> </span>
            ${ area && html`<span> <i class="fa-solid fa-angle-right text-xs"></i>  <a href="${url}&area=${area.code}"> ${area.name} </a> </span>` }
            ${ cat && html`<span> <i class="fa-solid fa-angle-right text-xs"></i> ${cat.name} </span>` }            
        </h2>
        
    
        
        <!-- Muestra las areas con sus respectivas categorías -->
        ${
            !area &&
            html`<ul class="ml-1 mt-2 flex">
                ${
                    topic?.children?.map( (area) =>{
                        return html`<li class="mx-2">
                            
                            <a class="font-semibold" href="/home/${cityCode}?topic=${topic.code}&area=${area.code}">${area.name}</a>
                            
                            
                            <ul class="ml-2 text-sm">
                                ${
                                    area.children?.map(cat=>{
                                        return html`<li>
                                            <a href="/home/${cityCode}?topic=${topic.code}&area=${area.code}&cat=${cat.code}">    
                                                ${cat.name}
                                            </a>
                                        </li>`
                                    }) 
                                }
                            </ul>
                        
                        </li>`
                    })
                }
            </ul>`
        }

        <!-- Muestra un listado de las categorías unicamente -->
        ${
            !cat &&
            html`<ul class="flex">
                ${area?.children.map( cat => html`<li class="mx-1 text-sm bg-stone-300">
                    <a href="${url}&area=${area.code}&cat=${cat.code}">
                        ${cat.name}
                    </a>
                </li>`)}
            </ul>`
        }

    </div>`
    ;
    
}