import { categoryTree } from "../../databases/categorias-db.js";
import { Category } from "../../models/Categoria.js";
import { html, useEffect, useState } from "../../preact.js";
import { QueryInterface } from "../../models/QueryInterface.js";

/*
    Componente que se encarga de mostrar un determinado Topic y expandir sus children
    @context: En caso de ser home poner '', y en caso de ir a otra page '/city'
*/

export function TopicComp({context, queries }:{context:string, queries:QueryInterface}) {
   
    let path = (queries.cityCode) ? `&cityCode=${queries.cityCode}` : '';
    path += (queries.text) ? `&text=${queries.text}` : '';

    const url = `${context}/?topic=${queries.topic}`;
    

    

    const [topic, setTopic]:[topic:Category, setTopic:any] = useState(null);
    const [area, setArea]:[area:Category, setArea:any] = useState(null);
    const [cat, setCat]:[cat:Category, setCat:any] = useState(null);

    useEffect(() => {
        const t = categoryTree.find( child => child.code === queries.topic );
        const a = t?.children.find( child => child.code === queries.area );
        const c = a?.children.find( child => child.code === queries.cat );
        
        setTopic(t);
        setArea(a);
        setCat(c)
    }, []);
    
    //ordenamos los topics en caso de existir
    topic?.children?.sort(order);
    
    
    return html`<div class="mx-2">

        
        <!-- Path -->
        <h2 class="pl-2 md:text-lg">
            
            <a href="${context}/?${path}" class="mr-2">
                <i class="fa-solid fa-angle-left"></i>
            </a>
            
            <span> 
                <i class="${topic?.icon} text-blue-500"></i> 
                <a href="${url}${path}"> ${topic?.name} </a> 
            </span>
            
            ${ area && html`<span> <i class="fa-solid fa-angle-right text-xs"></i>  <a href="${url}&area=${area.code}${path}"> ${area.name} </a> </span>` }
            
            ${ cat && html`<span> <i class="fa-solid fa-angle-right text-xs"></i> ${cat.name} </span>` }            
        </h2>
        
    
        

        <!-- AREAS LIST: Muestra las areas con sus respectivas categorías -->
        ${
            (!queries.area && !queries.cat) &&
            html`<div id="root-div" class="relative h-32 overflow-hidden">
                    <ul id="inner-div" class="flex absolute top-2" style="left: 0px;">
                        ${                           

                            topic?.children?.map( (area) =>{
                                return html`<li class="mx-2">
                                    
                                    <a class="font-semibold" href="${url}&area=${area.code}${path}">${area.name}</a>
                                    
                                    
                                    <ul class="ml-2 text-sm">
                                        ${
                                            area.children?.map(cat=>{
                                                return html`<li>
                                                    <a href="${url}&area=${area.code}&cat=${cat.code}${path}">    
                                                        ${cat.name}
                                                    </a>
                                                </li>`
                                            }) 
                                        }
                                    </ul>
                                
                                </li>`
                            })
                        }
                </ul>
            </div>`
        }

        <!-- CATEGORIAS LIST:  Muestra un listado de las categorías unicamente -->
        ${
            !queries.cat &&
            html`<div id="root-div" class="relative h-10 overflow-hidden">
                <ul id="inner-div" class="flex absolute top-1.5" style="left: 0px;">
                    ${area?.children.map( cat => html`<li class="text-sm bg-stone-300 mx-2 px-3 py-1">
                        <a href="${url}&area=${area.code}&cat=${cat.code}${path}">
                            ${cat.name}
                        </a>
                    </li>`)}
                </ul>
            </div>`
        }

        
    </div>`
    ;
    
}

function order(a:any,b:any) {
    if(a.name > b.name){
        return 1;
    } else if(a.name < b.name){
        return -1;
    }
    return 0;
}