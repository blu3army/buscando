import { categoryTree } from "../../databases/categorias-db.js";
import { html, useEffect, useState } from "../../preact.js";
/*
    @context: En caso de ser home poner '', y en caso de ir a otra page '/city'

*/
export function TopicComp({ context, cityCode = '', topicCode, areaCode, catCode }) {
    var _a, _b;
    const url = `${context}/${cityCode}?topic=${topicCode}`;
    const [topic, setTopic] = useState(null);
    const [area, setArea] = useState(null);
    const [cat, setCat] = useState(null);
    useEffect(() => {
        const t = categoryTree.find(child => child.code === topicCode);
        const a = t === null || t === void 0 ? void 0 : t.children.find(child => child.code === areaCode);
        const c = a === null || a === void 0 ? void 0 : a.children.find(child => child.code === catCode);
        setTopic(t);
        setArea(a);
        setCat(c);
    }, []);
    //ordenamos los topics en caso de existir
    (_a = topic === null || topic === void 0 ? void 0 : topic.children) === null || _a === void 0 ? void 0 : _a.sort(order);
    return html `<div class="mx-2">

        
        <!-- Path -->
        <h2 class="pl-2 md:text-lg">
            
            <a href="${context}/${cityCode}" class="mr-2">
                <i class="fa-solid fa-angle-left"></i>
            </a>
            
            <span> 
                <i class="${topic === null || topic === void 0 ? void 0 : topic.icon} text-blue-500"></i> 
                <a href="${url}"> ${topic === null || topic === void 0 ? void 0 : topic.name} </a> 
            </span>
            
            ${area && html `<span> <i class="fa-solid fa-angle-right text-xs"></i>  <a href="${url}&area=${area.code}"> ${area.name} </a> </span>`}
            
            ${cat && html `<span> <i class="fa-solid fa-angle-right text-xs"></i> ${cat.name} </span>`}            
        </h2>
        
    
        

        <!-- AREAS LIST: Muestra las areas con sus respectivas categorías -->
        ${(!areaCode && !catCode) &&
        html `<div id="root-div" class="relative h-32 overflow-hidden">
                    <ul id="inner-div" class="flex absolute top-2" style="left: 0px;">
                        ${(_b = topic === null || topic === void 0 ? void 0 : topic.children) === null || _b === void 0 ? void 0 : _b.map((area) => {
            var _a;
            return html `<li class="mx-2">
                                    
                                    <a class="font-semibold" href="${context}/${cityCode}?topic=${topic.code}&area=${area.code}">${area.name}</a>
                                    
                                    
                                    <ul class="ml-2 text-sm">
                                        ${(_a = area.children) === null || _a === void 0 ? void 0 : _a.map(cat => {
                return html `<li>
                                                    <a href="${context}/${cityCode}?topic=${topic.code}&area=${area.code}&cat=${cat.code}">    
                                                        ${cat.name}
                                                    </a>
                                                </li>`;
            })}
                                    </ul>
                                
                                </li>`;
        })}
                </ul>
            </div>`}

        <!-- CATEGORIAS LIST:  Muestra un listado de las categorías unicamente -->
        ${!catCode &&
        html `<div id="root-div" class="relative h-10 overflow-hidden">
                <ul id="inner-div" class="flex absolute top-1.5" style="left: 0px;">
                    ${area === null || area === void 0 ? void 0 : area.children.map(cat => html `<li class="text-sm bg-stone-300 mx-2 px-3 py-1">
                        <a href="${url}&area=${area.code}&cat=${cat.code}">
                            ${cat.name}
                        </a>
                    </li>`)}
                </ul>
            </div>`}

        
    </div>`;
}
function order(a, b) {
    if (a.name > b.name) {
        return 1;
    }
    else if (a.name < b.name) {
        return -1;
    }
    return 0;
}
