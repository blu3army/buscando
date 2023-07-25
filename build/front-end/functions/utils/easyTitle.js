export default function easyTitle(text, withDate = false) {
    let date = "";
    if (withDate) {
        date = Date.now().toString();
        date = date.substring(date.length - 4);
        date = '_' + date;
    }
    return (text
        .trim()
        .toLowerCase()
        .replace(/ /gi, "_")
        .replace(/,|\./gi, "")
        .replace(/á/gi, "a")
        .replace(/é/gi, "e")
        .replace(/í/gi, "i")
        .replace(/ó/gi, "o")
        .replace(/ú/gi, "u")
        .replace(/ü/gi, "u")
        .replace(/[\u00f1\u00d1]/gi, "n")
        .replace(/[^a-z0-9-_]/gi, "")
        // .replace(/\W/gi, "") 
        + date);
}
// \W -> A word character is a character a-z, A-Z, 0-9, including _ (underscore).
