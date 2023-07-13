export interface CategoryData{
    id?:     number;
    code?:   string;
    name?:   string;
    level?:  number;
    parent_id?: number;
    icon?: string;
    link?: (cat:Category)=>void;
}


export class Category implements CategoryData {
    id?: number;
    code?: string;
    name?: string;
    level?: number;
    parent_id?: number;
    parent?: Category;
    children?: Category[] = [];
    icon?: string;


    constructor(cat:CategoryData) {
        this.id = cat.id;
        this.code = cat.code;
        this.name = cat.name;
        this.level = cat.level;
        this.parent_id = cat.parent_id;
        this.icon = cat.icon;
    }

    link(parent:Category){

        parent.children.push(this);
        this.parent = parent;

    }

}
