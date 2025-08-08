import{A as l}from"./api.BgmQpvyL.js";function r(){const e=document.getElementById("theme-toggle"),t=document.getElementById("theme-toggle-dark-icon"),s=document.getElementById("theme-toggle-light-icon");localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),t?.classList.add("hidden"),s?.classList.remove("hidden")):(document.documentElement.classList.remove("dark"),t?.classList.remove("hidden"),s?.classList.add("hidden")),e?.addEventListener("click",function(){document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),t?.classList.remove("hidden"),s?.classList.add("hidden")):(document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),t?.classList.add("hidden"),s?.classList.remove("hidden"))})}function c(e){return new Date(e).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})}function m(e){return`
				<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-all duration-300 group">
					<div class="relative">
						<img src="${e.cover}" alt="${e.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
						<div class="absolute top-3 left-3">
							<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
								<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
								</svg>
								免费
							</span>
						</div>
						<div class="absolute top-3 right-3">
							<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
								原价 ${e.original_price_desc}
							</span>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">${e.title}</h3>
						<p class="text-sm text-slate-600 dark:text-slate-400 mb-3">${e.seller}</p>
						<p class="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">${e.description}</p>
						<div class="flex items-center justify-between text-sm">
							<div class="text-slate-500 dark:text-slate-400">
								<span>免费至：</span>
								<span class="font-medium">${c(e.free_end)}</span>
							</div>
						</div>
						<a href="${e.link}" target="_blank" rel="noopener noreferrer" class="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
							<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
							</svg>
							前往Epic商店
						</a>
					</div>
				</div>
			`}async function i(){const e=document.getElementById("loading"),t=document.getElementById("games-container"),s=document.getElementById("games-grid"),n=document.getElementById("error"),a=document.getElementById("empty");e?.classList.remove("hidden"),t?.classList.add("hidden"),n?.classList.add("hidden"),a?.classList.add("hidden");try{const d=await l.getEpicFree();d&&d.length>0?(s&&(s.innerHTML=d.map(o=>m(o)).join("")),e?.classList.add("hidden"),t?.classList.remove("hidden")):(e?.classList.add("hidden"),a?.classList.remove("hidden"))}catch(d){console.error("加载Epic游戏失败:",d),e?.classList.add("hidden"),n?.classList.remove("hidden")}}function h(){r(),i(),document.getElementById("retry-btn")?.addEventListener("click",i)}document.addEventListener("DOMContentLoaded",h);
