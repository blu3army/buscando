import { Category } from "../models/Categoria.js";

 

export let categories:Category[] = [
    new Category({
        id: 12,
        code: 'jobs',
        name: 'Bolsa de trabajo',
        icon: 'fa-solid fa-briefcase',
        level: 0,
        parent_id: null,
    }),
    new Category({
        id: 1,
        code: 'vivienda',
        name: 'Viviendas',
        icon: 'fa-solid fa-house-chimney',
        level: 0,
        parent_id: null,
    }),
    new Category({
        id: 2,
        code: 'sales',
        name: 'Marketplace',
        icon: 'fa-solid fa-store',
        level: 0,
        parent_id: null,
    }),
    new Category({
        id: 3,
        code: 'departamentos',
        name: 'Departamentos',
        level: 1,
        parent_id: 1
    }),
    new Category({
        id: 4,
        code: 'casas',
        name: 'Casas',
        level: 1,        
        parent_id: 1,
    }),
    new Category({
        id: 5,
        code: 'rodados',
        name: 'Vehículos',
        level: 1,
        parent_id: 2,
    }),
    new Category({   
        id: 6,
        code: "automoviles",
        name: "Automóviles",         
        level: 2,
        parent_id: 5,
    }),
    new Category({
        id: 7,
        code: "trucks",
        name: "Camionetas",        
        level: 2,
        parent_id: 5,
    }),
    new Category({
        id: 8,
        code: 'casas-de-campo',
        name: 'Casas de campo',
        level: 2,
        parent_id: 4,
    }),
    new Category({
        id: 9,
        code: 'casas-familiares',
        name: 'Casas familiares',
        level: 2,
        parent_id: 4,
    }),
    new Category({
        id: 10,
        code: 'finanzas',
        name: 'Contabilidad y Finanzas',
        level: 1,
        parent_id: 12,
    }),
    new Category({
        id: 11,
        code: 'contador',
        name: 'Contador',
        level: 2,
        parent_id: 10,
    }),
    
    new Category({
        id: 13,
        code: 'events',
        name: 'Eventos',
        icon: 'fa-solid fa-champagne-glasses',
        level: 0,
        parent_id: null,
    }),
    new Category({
        id: 14,
        code: 'shows',
        name: 'Shows',
        level: 1,
        parent_id: 13,
    }),
    new Category({
        id: 15,
        code: 'events',
        name: 'Ferias',
        level: 1,
        parent_id: 13,
    }),
    new Category({
        id: 16,
        code: 'bands',
        name: 'Banda en vivo',
        level: 2,
        parent_id: 14,
    }),
    new Category({
        id: 17,
        code: 'recommends',
        name: 'Recomendaciones',
        icon: 'fa-solid fa-bullhorn',
        level: 0,
        parent_id: null,
    }),
    new Category({
        id: 18,
        code: 'whatscando',
        name: 'Que puedo hacer?',
        level: 1,
        parent_id: 17,
    }),
    new Category({
        id: 19,
        code: 'wherecaneat',
        name: 'Donde puedo ir a comer?',
        level: 1,
        parent_id: 17,
    }),
    new Category({
        id: 20,
        code: 'nightlife',
        name: 'Vida nocturna',
        icon: 'fa-solid fa-martini-glass',
        level: 0,
        parent_id: null,
    }),
    new Category({
        id: 21,
        code: 'bars',
        name: 'Bares & Pubs',
        level: 1,
        parent_id: 20,
    }),
    new Category({
        id: 22,
        code: 'motorbikes',
        name: 'Motocicletas',
        level: 1,
        parent_id: 2,
    }),
    new Category({
        id: 23,
        code: 'trucks',
        name: 'Camiones',
        level: 1,
        parent_id: 2,
    }),
    new Category({
        id: 24,
        code: 'trucks_loads',
        name: 'De carga',
        level: 2,
        parent_id: 23,
    }),
    new Category({
        id: 25,
        code: 'motorbykes_simple',
        name: 'Chicas',
        level: 2,
        parent_id: 22,
    }),
    new Category({
        id: 26,
        code: 'motorbykes_race',
        name: 'De carrera',
        level: 2,
        parent_id: 22,
    }),
    new Category({
        id: 27,
        code: 'home',
        name: 'Hogar',
        level: 1,
        parent_id: 2,
    }),
    new Category({
        id: 28,
        code: 'garden',
        name: 'Jardinería',
        level: 2,
        parent_id: 27,
    }),


].sort((a,b)=>{
    if(a.id > b.id){
        return 1;
    } else if(a.id < b.id){
        return -1;
    }
    return 0;
});




let categoryTree : Category[] = [];

for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    
    if (category.parent_id) {
        category.link(categories[category.parent_id - 1 ]);
    }
    else{
        categoryTree.push(category);
    }
    
}



categoryTree.sort((a,b)=>{
    if(a.name > b.name){
        return 1;
    } else if(a.name < b.name){
        return -1;
    }
    return 0;
})

export {categoryTree};


