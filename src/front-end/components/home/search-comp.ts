import { citiesDB } from "../../databases/cities-db.js";
import { html, useState } from "../../preact.js";

export function SearchComp(){


    const [text, setText] = useState('');

    const change = (e:any)=>{
        
        console.log('input change' , e.target.value);
        setText(e.target.value);
    }

    const cleanText = ()=>{
        setText('');
    };

    return html`
        <div class="w-full text-center md:text-left relative" >
            
            <!-- Input -->
            <div class="w-full flex"  style="max-width: 500px;"> 

                <input  class="bg-stone-200 p-2 rounded-l-xl search-input outline-none flex-grow"
                        value="${text}"
                        onInput=${change}
                        placeholder="Escribí una ciudad, un usuario o palabra clave..." />

            
                <span class="border border-stone-200 p-2 rounded-r-xl w-10 text-center " onClick=${cleanText}>
                    ${
                        text.length > 3 ?  html`<i class="fa-solid fa-xmark cursor-pointer"></i>` : html`<span >🔍</span>`
                    }                
                </span>
            </div>
            


            <!-- Results -->
            ${
                text.length > 3 &&
                html`<ul class="absolute mt-0.5 p-2 bg-white text-stone-500  border shadow-lg border-stone-100 rounded-xl w-full z-30" style="max-width: 650px;">
                    <a>
                        <li class="py-1">
                        🔍 ${text}   
                        </li>
                    </a>
                    
                    ${
                        citiesDB.map((city,i)=>
                            html`<a href="/city/${city.code}">
                                <li class="py-1" key=${i}>
                                    <i class="fa-solid fa-city"></i> <span>${city.name}</span>
                                </li>
                            </a>`
                        )
                    }
                    

                </ul>`
            }
        </div>
    `

}