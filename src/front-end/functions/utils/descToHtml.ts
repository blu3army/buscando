export const descToHtml = (text:string)=>{
    
    let modifyText = text.replace( /<.*?>/gim ,  ``);

    modifyText = modifyText.replace( /\*{2}([\s\S]*?)\*{2}/gim ,  `<b>$1</b>`);
    
    modifyText = modifyText.replace( /\_{2}([\s\S]*?)\_{2}/gim ,  `<u>$1</u>`);

    modifyText = modifyText.replace( /\~{2}([\s\S]*?)\~{2}/gim , `<i>$1</i>`);
    
    modifyText = modifyText.replace( /\#\!([\s\S]*?)\!\#/gim , `<p style="font-size:1.4rem; font-weight: bold;">$1</p>`);
    
    modifyText = modifyText.replace( /\#{2}([\s\S]*?)\#{2}/gim , `<p style="font-size:1.1rem;">$1</p>`);

    return modifyText;
}