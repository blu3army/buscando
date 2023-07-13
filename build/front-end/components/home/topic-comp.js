import { categoryTree } from "../../databases/categorias-db.js";
import { html, useEffect, useState } from "../../preact.js";
export function TopicComp({ cityCode, topicCode }) {
    var _a;
    const t = categoryTree.find(cat => cat.code === topicCode);
    const [topic, setTopic] = useState(null);
    useEffect(() => {
        setTopic(t);
    }, []);
    return html `<div class="ml-5">
        <h2 class="text-2xl">
            <i class=${topic === null || topic === void 0 ? void 0 : topic.icon}></i>  ${topic === null || topic === void 0 ? void 0 : topic.name}
        </h2>
        
        <ul class="ml-1 mt-2">
            ${(_a = topic === null || topic === void 0 ? void 0 : topic.children) === null || _a === void 0 ? void 0 : _a.map((subtopic) => {
        var _a;
        return html `<li>
                        <a class="font-semibold" href="/home/${cityCode}?topic=${topic.code}&subtopic=${subtopic.code}">${subtopic.name}</a>
                        
                        <ul class="ml-2 text-sm">
                            ${(_a = subtopic.children) === null || _a === void 0 ? void 0 : _a.map(cat => {
            return html `<li>
                                        <a href="/home/${cityCode}?topic=${topic.code}&subtopic=${subtopic.code}&cat=${cat.code}">    
                                            ${cat.name}
                                        </a>
                                    </li>`;
        })}
                        </ul>
                    </li>`;
    })}
        </ul>

    </div>`;
}
