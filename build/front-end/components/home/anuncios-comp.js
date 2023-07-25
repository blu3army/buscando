import TranslateDate from "../../functions/utils/TranslateDate.js";
import { html } from "../../preact.js";
export function ParseDateComp({ date }) {
    const myDate = new TranslateDate(date * 1);
    return html `<span>
        <i class="fa-solid fa-calendar"></i> ${myDate.getStringDate()}
    </span>`;
}
