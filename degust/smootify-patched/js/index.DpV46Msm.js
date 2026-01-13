var g=Object.defineProperty;var f=(a,i,s)=>i in a?g(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s;var m=(a,i,s)=>f(a,typeof i!="symbol"?i+"":i,s);import{S as d}from"./index.js";import{s as u}from"./startCase.CyNnxq5h.js";const h=`:host #sm-debugger {
    position: fixed;
    bottom: 12px;
    left: 174px;
    z-index: 99999;
}

:host details {
    display: block;
}

:host details#sm-debugger > summary::-webkit-details-marker,
:host details#sm-debugger > summary::marker {
 display: none; 
 content: "";
}

:host {
    --smootify-backdrop-color: rgba(0,0,0,0.05)
}

:host summary {
    font-family: system-ui;
    border-radius: 4.8px;
    font-size: 1rem;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 6px;
    gap: 0.5rem;
    font-size: 12px;
    display: flex;
    background: #1a1a1a;
    color: white;
    text-decoration: none;
}

:host summary svg {
    height: 18px;
}

:host .sm-debugger__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 90vw;
    max-width: 50rem;
    background-color: #1a1a1a;
    color: white;
     border-radius: 4.8px;
    font-size: 1rem;
    justify-content: stretch;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    font-size: 12px;
}

:host .sm-debugger__content * {
    margin: 0;
}

:host .sm-debugger__header {
    padding: 0.5rem;
    border-bottom: 1px solid white;
    font-size: 14px;
    text-align: left;
}

:host #data {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0.5rem;
    max-height: 60vh;
    overflow: auto;
}

:host .sm-section {
    font-size: 12px;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid white;
}

:host details.query {
    text-align: left;
    position: relative;
}

:host details.query summary{
  justify-content: flex-start;
  padding-left: 0px;
}
:host .query-content {
    max-width: 100%;
    overflow: auto;
}

:host .query-content pre {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 40%;
    max-height: 80%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;
    overflow: auto;
    z-index: 9999;
}`,p=`<details id="sm-debugger">
    <summary><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse-icon lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg></summary>
    <modal-backdrop></modal-backdrop>
    <div class="sm-debugger__content">
        <div class="sm-debugger__header">
            Smootify Info
        </div>
        <div class="sm-debugger__data" id="data">
            
        </div>
    </div>
    
</details>`;class v extends HTMLElement{constructor(){super();m(this,"_root");this._root=this.attachShadow({mode:"closed"})}connectedCallback(){var l;this._root.innerHTML=`<style>${h}</style>
${p}`;const s=this._root.querySelector("#data");s.innerHTML=`<div class="sm-section" id="user-settings">
            <h2>User Settings</h2>
            <div class="key-values">
                ${Object.entries(d.options).map(r=>{let e=r[1];return typeof e=="string"?e=e||"Unset":typeof e=="boolean"&&(e=e?"✓":"×"),`<div class="kv"><strong>${u(r[0])}</strong>: ${e}</div>`}).join("")}
            </div>
            </div>
            <div class="sm-section" id="storefront-context">
            <h2>Storefront Context</h2>
            <div class="key-values">
                Loading...    
            </div>
            </div>
            <div class="sm-section" id="storefront-queries">
            <h2>Storefront Queries</h2>
            <div class="key-values">
                Loading...    
            </div>
            </div>
            <div class="sm-section" id="storefront-advices">
            <h2>Advices</h2>
            <div class="key-values">
                Loading...    
            </div>
            </div>`,(l=this._root.querySelector("details"))==null||l.addEventListener("custom:toggle",()=>{s.querySelectorAll("#storefront-context .key-values").forEach(r=>{var n;const e=d.store.latestContextParams;r.innerHTML=`<div class="kv"><strong>User logged in</strong>: ${e.buyer?"✓":"×"}</div>
            <div class="kv"><strong>Company</strong>: ${(n=e.buyer)!=null&&n.companyLocationId?"✓":"×"}
            </div>
                <div class="kv"><strong>Country</strong>: ${e.country}</div>
                <div class="kv"><strong>Language</strong>: ${e.language}</div>`}),s.querySelectorAll("#storefront-queries .key-values").forEach(r=>{const e=d.queries;let n="";for(let o of e){n+="<div class='query-box'>";for(let t in o)o[t]&&(t=="name"?n+=`<div class="kv"><strong>Name</strong>: ${o[t]}</div>`:t!=="query"&&(n+=`<details class="query">
                        <summary>${u(t)}</summary>
                        <div class="query-content">
                        <pre>${typeof o[t]=="string"?o[t]:JSON.stringify(o[t],null,2)}</pre>
                        </div>
                        </details>`));n+="</div>"}r.innerHTML=n}),s.querySelectorAll("#storefront-advices .key-values").forEach(r=>{let e=[],n=[],o=0;document.querySelectorAll("script").forEach((t,c)=>{t.getAttribute("src")=="https://cdn.smootify.io/assets/latest/js/index.js"&&(o=c),t.textContent&&t.textContent.includes("SmootifyUserOptions")&&n.push(c)}),n.length>1&&e.push("There are multiple scripts to define Smootify Options, you should have only 1"),n.some(t=>t>o)&&e.push("The script to modify the Smootify user option must be inserted before the Smootify main script!"),r.innerHTML=e.length?`<ul>${e.map(t=>`<li>${t}</li>`).join("")}
            </ul>`:"No advices found yet"})})}}customElements.define("sm-debugger",v);function k(){document.body.append(document.createElement("sm-debugger"))}export{k as showDebugger};
