var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=r);var n=r("iQIUW");document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();let{elements:{delay:o,step:t,amount:r}}=e.currentTarget;function i(e,o){const t=Math.random()>.3;return new Promise(((r,n)=>{setTimeout((()=>{t&&r({position:e,delay:o}),n({position:e,delay:o})}),o)}))}o=Number(o.value),t=Number(t.value),r=Number(r.value),e.currentTarget.reset();for(let e=0;e<r;e++)i(e+1,o).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)})),o+=t}));
//# sourceMappingURL=03-promises.44488586.js.map