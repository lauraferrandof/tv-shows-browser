"use strict";const searchBarEl=document.querySelector(".search-bar"),submitBtnEl=document.querySelector(".submit-btn"),resultsListEl=document.querySelector(".results__list");let searchValue="";function handleSearchBtn(t){t.preventDefault(),fetchData()}function fetchData(){searchValue=searchBarEl.value,fetch("http://api.tvmaze.com/search/shows?q="+searchValue).then(t=>t.json()).then(t=>{let e="";for(let s=0;s<t.length;s++){const l=t[s].show.name,c=t[s].show.image,r=t[s].show.id;e+=c?`<li class="results__item results__item${[s+1]}" id="${r}"> <img src="${c.medium}" alt=""> <h2>${l}</h2></li>`:`<li class="results__item results__item${[s+1]}" id="${r}"> <img src="https://via.placeholder.com/210x295/cccccc/666666/?text=TV" alt=""> <h2>${l}</h2></li>`}resultsListEl.innerHTML=e,collectShowItems()})}function collectShowItems(){const t=resultsListEl.querySelectorAll(".results__item");for(const e of t){e.addEventListener("click",handleFavoriteShow);const t=parseInt(e.getAttribute("id")),s=localStorage.getItem(`${t}`);s&&s.includes(t)&&e.classList.add("results__item--favorite")}}function handleFavoriteShow(t){const e=t.currentTarget,s=parseInt(e.getAttribute("id"));e.classList.toggle("results__item--favorite"),e.classList.contains("results__item--favorite")?localStorage.setItem(`${s}`,`${s}`):e.classList.contains("results__item--favorite")||localStorage.removeItem(`${s}`)}submitBtnEl.addEventListener("click",handleSearchBtn);