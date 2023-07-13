import { citiesDB } from "../../databases/cities-db.js";
import { html } from "../../preact.js";

export function SearchCityComp(){

    

    return html`
        <div class=" w-full text-center md:text-left ">
            <input  class="bg-stone-200 p-2 rounded-xl search-input"
                    placeholder="Escribí una ciudad..." />

            <ul>
                ${
                    citiesDB.map(city=>{
                        return html`<p>
                            <a href="/home/${city.code}">${city.name}</a>
                        </p>`
                    })
                }
            </ul>
        </div>
    `

}