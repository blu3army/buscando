import { html } from "../preact.js";
export function InputComp(props) {
    return html `<input class="bg-blue-800 text-red-200 border border-gray-200 p-5" placeholder="${props.placeholder}" />`;
}
