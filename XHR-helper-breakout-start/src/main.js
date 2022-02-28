import{loadTextXHR} from "./utils.js";
document.querySelector("#button-1").onclick = () => loadTextXHR("data/taffy-facts.txt",taffyCallback);
document.querySelector("#button-2").onclick = () => loadTextXHR("data/viking-facts.txt",vickingCallback);

const taffyCallback = e => document.querySelector("#output-1").innerHTML = e.target.responseText;
const vickingCallback = e => document.querySelector("#output-2").innerHTML = e.target.responseText;