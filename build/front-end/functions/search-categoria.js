//Se encarga de buscar dentro del arbol de categorías (tree cat) por el code:string. Devuelve null en caso de no encontrar nada...
export function searchCategoria(id, arr) {
    for (const cat of arr) {
        if (cat.code === id) {
            return cat;
        }
        if (cat.children.length > 0) {
            let result = searchCategoria(id, cat.children);
            if (result === null) {
                continue;
            }
            else {
                return result;
            }
        }
    }
    return null;
}
