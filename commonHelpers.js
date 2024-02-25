import{i,S as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c=s=>{i.error({title:"Error",message:s,position:"topRight"})},u=s=>{const o=new l(".gallery a",{disableScroll:!1,overlayOpacity:.8,captions:!0,captionsData:"alt",captionDelay:250}),n=document.querySelector(".gallery");let t="";s.forEach(e=>{t+=`
        <li>
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}">
                    <div class="image-info">
                        <p>Likes: ${e.likes}</p>
                        <p>Views: ${e.views}</p>
                        <p>Comments: ${e.comments}</p>
                        <p>Downloads: ${e.downloads}</p>
                    </div>
                </a>
            </li>
        `}),n.innerHTML+=t,o.refresh()},d=async s=>{const o="42557635-c58ce0ef5400f7d3e989a162c",n=document.querySelector(".loader");n.style.display="block";try{const e=await(await fetch(`https://pixabay.com/api/?key=${o}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`)).json();e.hits.length===0?c('Sorry, there are no images matching your search query. Please try again!"'):u(e.hits)}catch(t){console.log(t)}finally{n.style.display="none"}},p=document.getElementById("search-form"),f=document.getElementById("search-input");p.addEventListener("submit",async s=>{s.preventDefault();const o=f.value.trim(),n=document.querySelector(".gallery");if(n.innerHTML="",o===""){c("Please enter a search query");return}try{const t=await d(o)}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map
