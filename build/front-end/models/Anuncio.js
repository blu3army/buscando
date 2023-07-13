export class Anuncio {
    constructor({ code, title, desc, descHTML, date, categoriaTree, author, city, location, }) {
        this.code = code;
        this.title = title;
        this.desc = desc;
        this.descHTML = descHTML;
        this.date = date;
        this.categoriaTree = categoriaTree;
        this.author = author;
        this.city = city;
        this.location = location;
    }
}
