var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();({elements:{delay:delay,step:step,amount:amount}}=e.currentTarget);function t(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o&&(r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`),n({position:e,delay:t})),r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`),i({position:e,delay:t})}),t)}))}delay=Number(delay.value),step=Number(step.value),amount=Number(amount.value),e.currentTarget.reset();for(let e=0;e<amount;e++)t(e+1,delay).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),delay+=step}));
//# sourceMappingURL=03-promises.f5aacdca.js.map