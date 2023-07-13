import { html } from "../../preact.js";
import { categoryTree } from "../../databases/categorias-db.js";
export function MenuCategoriesComp({ cityCode }) {
    return html `<div class="flex flex-col sm:flex-row flex-wrap ">
        ${categoryTree.map((cat) => {
        if (cat.level === 0) {
            return html `<a href="/home/${cityCode}?topic=${cat.code}">
                    <div class="m-1 p-2 border border-purple-200 rounded-xl" style="">
                        <span class="mr-2 text-purple-500">
                            <i class=${cat.icon}></i>
                        </span>
                        <span class="font-semibold">
                            ${cat.name}
                        </span>
                    </div>
                </a>`;
        }
    })}
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
