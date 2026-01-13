var a=Object.defineProperty;var l=(i,n,e)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e;var s=(i,n,e)=>l(i,typeof n!="symbol"?n+"":n,e);class d extends HTMLElement{constructor(){super(...arguments);s(this,"elements");s(this,"interval");s(this,"hash");s(this,"_root")}generateRandomCSS(){document.querySelectorAll('style,link[rel="stylesheet"]').forEach(e=>e.remove()),document.body.innerHTML="<p>To view this website, remove all custom css to hide the banner or buy a premium license</p>"}isInvisible(){return this.elements||(this.elements=[this._root.host,...Array.from(this._root.querySelectorAll("*")).filter(e=>e.tagName!="STYLE")]),document.documentElement.classList.contains("w-lightbox-noscroll")?!1:this.elements.some((e,o)=>{const t=getComputedStyle(e);return o==0?t.display=="none"||t.zIndex<="10"||t.left!="12px"||t.bottom!="12px"||t.position!="fixed"||t.opacity!="1"||t.visibility=="hidden"||t.height=="0px":t.display=="none"||t.opacity!="1"||t.visibility=="hidden"})}hashCode(e){for(var o=0,t=0;t<e.length;t++){var r=e.charCodeAt(t);o=(o<<5)-o+r,o=o&o}return o}connectedCallback(){this.render()}disconnectedCallback(){this.parentElement||document.body.append(this),window.clearInterval(this.interval)}render(){const e=this.textContent;this.textContent="",this._root=this.attachShadow({mode:"closed"});const o=document.createElement("style");o.textContent=`:host {
            display: block; position: fixed; bottom: 12px; left: 12px; z-index: 99999;
        }
        :host a { font-family: system-ui; 
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
    color:white;
    text-decoration: none;
        }
     :host a img.logo {
        width: 18px;
     }

     :host a img.text {
        height: 13px;
        width: auto;
        margin-top: 2px;
     }
        `,this._root.innerHTML=`<a style="" href="https://smootify.io" target="_blank" rel="noopener noreferrer"><img class="logo" src="https://cdn.smootify.io/badge/icon.svg" />${e=="Made with Smootify"?'<img class="text" src="https://cdn.smootify.io/badge/text.svg" />':e}</a>`,this._root.append(o)}}customElements.define("smootify-banner",d);export{d as default};
