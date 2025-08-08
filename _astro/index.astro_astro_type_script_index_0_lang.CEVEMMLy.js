import{A as i}from"./api.BgmQpvyL.js";import{a8 as c}from"./render.3hSXMDmx.js";import l from"./Navbar.D0X4bbVL.js";import"./lifecycle.Bl0-0ysm.js";/* empty css                                               *//* empty css                          *//* empty css                                                  *//* empty css                                                        */import"./each.Cb7YaT0c.js";import"./attributes.D0QCp8P6.js";function d(){const e=document.getElementById("navbar-container");e&&c(l,{target:e})}async function p(){try{const e=await i.get60sNews(),t=document.getElementById("news-content"),a=document.getElementById("news-loading");if(e&&e.news&&e.news.length>0&&t&&a){const r=e.news.slice(0,8);t.innerHTML=r.map((n,s)=>`<div class="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
							<span class="flex-shrink-0 w-5 h-5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-medium">${s+1}</span>
							<span class="flex-1">${n}</span>
						</div>`).join(""),a.classList.add("hidden"),t.classList.remove("hidden")}else{const r=document.getElementById("news-loading");r&&(r.innerHTML='<div class="text-sm text-gray-500 dark:text-gray-400">暂无新闻数据</div>')}}catch(e){console.error("加载新闻预览失败:",e);const t=document.getElementById("news-loading");t&&(t.innerHTML='<div class="text-sm text-red-500 dark:text-red-400">加载失败，请稍后重试</div>')}}async function x(){try{const e=await i.getBiliHotSearch(),t=document.getElementById("hot-search-preview");if(e&&e.length>0&&t){const r=`
						<div class="space-y-2">
							${e.slice(0,3).map((s,o)=>`
								<div class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group">
									<span class="flex-shrink-0 w-6 h-6 bg-gradient-to-r ${o===0?"from-yellow-400 to-orange-500":o===1?"from-gray-400 to-gray-500":"from-orange-400 to-red-500"} text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
										${o+1}
									</span>
									<div class="flex-1 min-w-0">
										<span class="text-sm font-medium text-gray-800 dark:text-gray-200 truncate block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
											${s.title}
										</span>
										${s.hot?`<span class="text-xs text-gray-500 dark:text-gray-400">🔥 ${s.hot}</span>`:""}
									</div>
									<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
									</svg>
								</div>
							`).join("")}
						</div>
						<div class="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
							<div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
								<span class="flex items-center gap-1">
									<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
									来自哔哩哔哩
								</span>
								<span>点击查看更多</span>
							</div>
						</div>
					`,n=t.querySelector(".space-y-2");n&&(n.innerHTML=r)}else{const a=document.getElementById("hot-search-preview");if(a){const r=a.querySelector(".space-y-2");r&&(r.innerHTML=`
								<div class="flex flex-col items-center justify-center py-8 text-gray-500 dark:text-gray-400">
									<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.4a7.962 7.962 0 01-5-1.691V19a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2v-.09z"></path>
									</svg>
									<span class="text-sm">暂无热搜数据</span>
								</div>
							`)}}}catch(e){console.error("加载热搜预览失败:",e);const t=document.getElementById("hot-search-preview");if(t){const a=t.querySelector(".space-y-2");a&&(a.innerHTML=`
							<div class="flex flex-col items-center justify-center py-8 text-gray-500 dark:text-gray-400">
								<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
								<span class="text-sm">加载失败，请稍后重试</span>
							</div>
						`)}}}async function g(){try{const e=await i.getHitokoto(),t=document.getElementById("hitokoto-content");if(e&&t)t.innerHTML=`
						<div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
							<div class="flex items-start space-x-2">
								<div class="text-2xl opacity-50">"</div>
								<div class="flex-1">
									<blockquote class="text-base leading-relaxed text-gray-800 dark:text-white mb-3 font-medium">
										${e.content}
									</blockquote>
									<div class="text-sm text-gray-600 dark:text-gray-400 text-right">
										💭 每日一言
									</div>
								</div>
								<div class="text-2xl opacity-50 self-end">"</div>
							</div>
						</div>
						<div class="mt-4 text-center">
							<span class="text-xs text-gray-400 dark:text-gray-500">点击查看更多一言</span>
						</div>
					`;else throw new Error("获取一言数据失败")}catch(e){console.error("加载一言预览失败:",e);const t=document.getElementById("hitokoto-content");t&&(t.innerHTML=`
						<div class="flex flex-col items-center justify-center py-6 text-gray-500 dark:text-gray-400">
							<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<span class="text-sm">加载失败，请稍后重试</span>
						</div>
					`)}}function m(){const e=document.getElementById("hot-search-preview");e&&e.addEventListener("click",()=>{window.location.href="/hot-search"})}async function v(){try{const e=await i.getTodayInHistory(),t=document.getElementById("history-content");if(e&&t){let a=function(s){return{birth:"🎂",death:"🕯️",event:"📰"}[s]||"📅"},r=function(s){const o=parseInt(s);return o<0?`公元前${Math.abs(o)}年`:`${s}年`};const n=e.items.slice(0,3);t.innerHTML=`
						<div class="space-y-3">
							<div class="text-xs text-gray-500 dark:text-gray-400 mb-2">
								${e.date} · 共 ${e.items.length} 个事件
							</div>
							${n.map(s=>`
								<div class="flex items-start space-x-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
									<span class="text-sm">${a(s.event_type)}</span>
									<div class="flex-1 min-w-0">
										<div class="flex items-center space-x-2 mb-1">
											<span class="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-1 py-0.5 rounded">
												${r(s.year)}
											</span>
										</div>
										<p class="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">
											${s.title}
										</p>
									</div>
								</div>
							`).join("")}
						</div>
						<div class="mt-4 text-center">
							<span class="text-xs text-gray-400 dark:text-gray-500">点击查看更多历史事件</span>
						</div>
					`}else throw new Error("获取历史数据失败")}catch(e){console.error("加载历史预览失败:",e);const t=document.getElementById("history-content");t&&(t.innerHTML=`
						<div class="flex flex-col items-center justify-center py-6 text-gray-500 dark:text-gray-400">
							<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<span class="text-sm">加载失败，请稍后重试</span>
						</div>
					`)}}function y(){const e=document.getElementById("hitokoto-preview");e&&e.addEventListener("click",()=>{window.location.href="/hitokoto"})}async function h(){try{const e=await i.getBingWallpaper(),t=document.getElementById("wallpaper-content");if(e&&t)t.innerHTML=`
						<div class="relative overflow-hidden rounded-2xl">
							<img 
								src="${e.cover}" 
								alt="${e.title}"
								class="w-full h-20 object-cover transition-transform duration-300 hover:scale-105"
								loading="lazy"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
						</div>
						<div class="mt-2">
							<p class="text-xs text-gray-700 dark:text-gray-300 font-medium truncate">
								${e.title}
							</p>
							<p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
								${e.description||e.headline}
							</p>
						</div>
						<div class="mt-4 text-center">
							<span class="text-xs text-gray-400 dark:text-gray-500">点击查看高清壁纸</span>
						</div>
					`;else throw new Error("获取壁纸数据失败")}catch(e){console.error("加载壁纸预览失败:",e);const t=document.getElementById("wallpaper-content");t&&(t.innerHTML=`
						<div class="flex flex-col items-center justify-center py-6 text-gray-500 dark:text-gray-400">
							<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
							</svg>
							<span class="text-sm">壁纸加载失败</span>
						</div>
					`)}}function f(){const e=document.getElementById("history-preview");e&&e.addEventListener("click",()=>{window.location.href="/history"})}function u(){const e=document.getElementById("wallpaper-preview");e&&e.addEventListener("click",()=>{window.location.href="/wallpaper"})}async function w(){try{const e=await i.getExchangeRate(),t=document.getElementById("exchange-rate-content");if(e&&e.rates&&t){const r=Object.entries({CNY:"人民币",EUR:"欧元",JPY:"日元",GBP:"英镑"}).filter(([n])=>e.rates[n]).slice(0,3).map(([n,s])=>({code:n,name:s,rate:e.rates[n]}));t.innerHTML=`
						<div class="space-y-3">
							${r.map(n=>`
								<div class="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
									<div class="flex items-center gap-2">
										<span class="text-xs font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">${n.code}</span>
										<span class="text-sm text-gray-700 dark:text-gray-300">${n.name}</span>
									</div>
									<span class="text-sm font-medium text-gray-900 dark:text-white">${n.rate.toFixed(4)}</span>
								</div>
							`).join("")}
						</div>
						<div class="mt-4 text-center">
							<div class="text-xs text-gray-500 dark:text-gray-400 mb-1">基准: ${e.base}</div>
							<span class="text-xs text-gray-400 dark:text-gray-500">点击查看更多汇率</span>
						</div>
					`}else throw new Error("获取汇率数据失败")}catch(e){console.error("加载汇率预览失败:",e);const t=document.getElementById("exchange-rate-content");t&&(t.innerHTML=`
						<div class="flex flex-col items-center justify-center py-6 text-gray-500 dark:text-gray-400">
							<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<span class="text-sm">汇率加载失败</span>
						</div>
					`)}}function k(){const e=document.getElementById("exchange-rate-preview");e&&e.addEventListener("click",()=>{window.location.href="/exchange-rate"})}async function b(){try{const e=await i.getEpicFree();if(e&&e.length>0){const t=document.getElementById("epic-content");if(t){const r=e.slice(0,3).map(n=>`
							<div class="flex items-center gap-2 sm:gap-3 mb-3 last:mb-0">
								<img src="${n.cover}" alt="${n.title}" class="w-10 h-10 sm:w-8 sm:h-8 rounded object-cover flex-shrink-0">
								<div class="flex-1 min-w-0">
									<p class="text-sm sm:text-sm font-medium text-gray-900 dark:text-white truncate leading-tight">${n.title}</p>
									<div class="flex flex-col sm:flex-row sm:gap-2 mt-1">
										<p class="text-xs text-gray-500 dark:text-gray-400">原价: ${n.original_price_desc}</p>
										<p class="text-xs text-green-600 dark:text-green-400">免费至: ${n.free_end.split(" ")[0]}</p>
									</div>
								</div>
							</div>
						`).join("");t.innerHTML=`
							<div class="space-y-2 sm:space-y-2">
								${r}
							</div>
							<div class="mt-3 sm:mt-4 text-center">
								<span class="text-xs text-gray-400 dark:text-gray-500">点击查看更多免费游戏</span>
							</div>
						`}}else{const t=document.getElementById("epic-content");t&&(t.innerHTML=`
							<div class="flex flex-col items-center justify-center py-6 text-gray-500 dark:text-gray-400">
								<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
								<span class="text-sm">暂无免费游戏</span>
							</div>
						`)}}catch(e){console.error("加载Epic游戏预览失败:",e);const t=document.getElementById("epic-content");t&&(t.innerHTML=`
						<div class="flex flex-col items-center justify-center py-6 text-gray-500 dark:text-gray-400">
							<svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<span class="text-sm">Epic游戏加载失败</span>
						</div>
					`)}}function E(){const e=document.getElementById("epic-preview");e&&e.addEventListener("click",()=>{window.location.href="/utils"})}function B(){const e=document.getElementById("current-year");e&&(e.textContent=new Date().getFullYear())}document.addEventListener("DOMContentLoaded",()=>{d(),p(),x(),g(),v(),h(),w(),b(),m(),y(),f(),u(),k(),E(),B()});
