export class Category {
    constructor(cat) {
        this.children = [];
        this.id = cat.id;
        this.code = cat.code;
        this.name = cat.name;
        this.level = cat.level;
        this.parent_id = cat.parent_id;
        this.icon = cat.icon;
    }
    link(parent) {
        parent.children.push(this);
        this.parent = parent;
    }
}
