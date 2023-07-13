export {};
// //Genera el tree de categorías dandonle los arrays de la DB
// function treeGenerator(...categoriaArrays:CategoryData[][]):Category[]{
//     let tree = [];
//     //Recorremos el primer nivel
//     for (const catData of categoriaArrays[0]) {
//         //Agregamos al tree
//         let newCat = new Category( { name: catData.name, code: catData.code} );
//         newCat = walkChildren(newCat, catData.children || [], 0, categoriaArrays[1], categoriaArrays[2] );
//         tree.push(newCat);
//     }
//     return tree;
// }
// //Fn aux de treeGenerator, para recorrer los children de cada categoría, es una fn recursiva
// function walkChildren(
//     cat:Category, 
//     childrenCodes:string[], 
//     pointer:number,  
//     ...nextDataArray: CategoryData[][]
//     ):Category{
//     if (pointer === nextDataArray.length) {
//         return cat;
//     }
//     //Recorremos los hijos del primer nivel, siempre que tenga
//     if(childrenCodes.length > 0){
//         for (const childCode of childrenCodes) {
//             //Buscamos dentro del siguiente nivel
//             for (const sub of nextDataArray[pointer]) {
//                 if(sub.code === childCode){
//                     let childCat =  new Categoria({name: sub.name, code: sub.code});
//                     childCat = walkChildren(childCat, sub.children || [], pointer+1, ...nextDataArray);
//                     cat.addChildren(childCat);
//                 }
//             }
//         }
//         return cat;
//     }
//     else{
//         return cat;
//     }
// }
