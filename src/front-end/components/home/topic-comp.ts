import { categoryTree } from "../../databases/categorias-db.js";
import { Category } from "../../models/Categoria.js";
import { html, useEffect, useState } from "../../preact.js";


export function TopicComp({cityCode, topicCode}:{cityCode:string, topicCode:string}) {

    const t = categoryTree.find( cat => cat.code === topicCode );
    const [topic, setTopic]:[topic:Category, setTopic:any] = useState(null);

    useEffect(() => {
        setTopic(t);
    }, []);
    

    return html`<div class="ml-5">
        <h2 class="text-2xl">
            <i class=${topic?.icon}></i>  ${topic?.name}
        </h2>
        
        <ul class="ml-1 mt-2">
            ${
                topic?.children?.map( (subtopic) =>{
                    return html`<li>
                        <a class="font-semibold" href="/home/${cityCode}?topic=${topic.code}&subtopic=${subtopic.code}">${subtopic.name}</a>
                        
                        <ul class="ml-2 text-sm">
                            ${
                                subtopic.children?.map(cat=>{
                                    return html`<li>
                                        <a href="/home/${cityCode}?topic=${topic.code}&subtopic=${subtopic.code}&cat=${cat.code}">    
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
    ;
    
}