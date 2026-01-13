var E=Object.defineProperty;var T=(n,t,o)=>t in n?E(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var y=(n,t,o)=>T(n,typeof t!="symbol"?t+"":t,o);import{S as u,a as S}from"./index.js";const C={ADJUSTMENT:"Credit adjusted from admin",ORDER_CANCELLATION:"Order Cancelled",ORDER_PAYMENT:"Order Payment",ORDER_REFUND:"Refunded Order",PAYMENT_FAILURE:"Failed Payment",PAYMENT_RETURNED:"Partial Payment",TAX_FINALIZATION:"Tax adjustment"};class p extends HTMLElement{constructor(){super();y(this,"loader",!0);if(!u.options.newCustomerAccountsPublicKey){this.remove();return}this.loader&&(u.store.latestCustomer?this.loadData():u.on(S.userAuthChange,()=>{this.loadData()}))}async loadData(){var o,d,m,l;try{const s=await window.Smootify.queryCustomer(`storeCreditAccounts(first: 1) {
            nodes {
                balance {
                 amount
                 currencyCode
                }
                 transactions(first: 100) {
                    nodes {
                        amount {
                            amount
                            currencyCode
                        }
                        balanceAfterTransaction {
                            amount
                            currencyCode
                        }
                        event
                        createdAt
                        ... on StoreCreditAccountCreditTransaction {
                         expiresAt
                        }
                        
                    }
                  
                }
            }
        }`);if((d=(o=s.customer)==null?void 0:o.storeCreditAccounts)!=null&&d.nodes[0]){const f=(l=(m=s.customer)==null?void 0:m.storeCreditAccounts)==null?void 0:l.nodes[0];let i={amount:"0.0",currencyCode:"EUR"};const a=this.querySelector("store-credit-transaction"),A=[],b={...C,...window.SmootifyStoreCreditEventsLabel||{}};f.transactions.nodes.forEach(e=>{if(e.expiresAt&&(i.amount=(Number(i.amount)+Number(e.amount.amount)).toFixed(2)),a){const c=a.cloneNode(!0);c.querySelectorAll("[store-credit-transaction]").forEach(r=>{switch(r.getAttribute("store-credit-transaction")){case"amount":r.innerHTML=window.Smootify.formatMoney(e.amount.amount);break;case"balanceAfterTransaction":r.innerHTML=window.Smootify.formatMoney(e.balanceAfterTransaction.amount);break;case"event":r.innerHTML=b[e.event]||e.event;break;case"createdAt":r.innerHTML=new Date(e.createdAt).toLocaleDateString();break;case"expiresAt":e.expiresAt?r.innerHTML=new Date(e.expiresAt).toLocaleDateString():c.querySelectorAll('[if-credit-transaction="expires"]').forEach(h=>h.remove());break}}),A.push(c)}}),a==null||a.replaceWith(...A),this.querySelectorAll("[store-credit]").forEach(e=>{switch(e.getAttribute("store-credit")){case"balance":e.innerHTML=window.Smootify.formatMoney(f.balance.amount);break;case"expirableBalance":i.amount=="0.0"?this.querySelectorAll('[if-credit="expires"]').forEach(r=>r.remove()):e.innerHTML=window.Smootify.formatMoney(i.amount);break}}),this.querySelectorAll("[skeleton]").forEach(e=>e.removeAttribute("skeleton")),this.removeAttribute("skeleton")}else{this.remove();return}}catch(s){console.log(s),this.remove();return}}}customElements.define("store-credit",p);export{p as StoreCredit};
