import { html } from "../preact.js";
import { categoryTree } from "../databases/categorias-db.js";
export function ShowCategory() {
    return html `<h3>
        ${categoryTree[0].name} ${categoryTree[0].children[0].name} ${categoryTree[0].children[1].children[0].name}
    </h3>`;
}
