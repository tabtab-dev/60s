import{A as c}from"./api.BgmQpvyL.js";const m={CNY:"人民币",EUR:"欧元",JPY:"日元",GBP:"英镑",AUD:"澳元",CAD:"加元",CHF:"瑞士法郎",HKD:"港币",SGD:"新加坡元",KRW:"韩元",THB:"泰铢",MYR:"马来西亚林吉特",INR:"印度卢比",RUB:"俄罗斯卢布",BRL:"巴西雷亚尔",ZAR:"南非兰特",NZD:"新西兰元",SEK:"瑞典克朗",NOK:"挪威克朗",DKK:"丹麦克朗",PLN:"波兰兹罗提",CZK:"捷克克朗",HUF:"匈牙利福林",TRY:"土耳其里拉",ILS:"以色列新谢克尔",CLP:"智利比索",PHP:"菲律宾比索",AED:"阿联酋迪拉姆",SAR:"沙特里亚尔",EGP:"埃及镑"},o=["CNY","EUR","JPY","GBP","AUD","CAD","CHF","HKD","SGD"];function u(e){return m[e]||e}function g(e){return e>=1?e.toFixed(4):e.toFixed(6)}function f(e){return new Date(e).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}function l(e,a,n=!1){const d=u(e),r=g(a);return`
				<div class="${n?"p-4":"p-3"} bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-200 hover:scale-105">
					<div class="flex items-center justify-between mb-2">
						<div class="flex items-center gap-2">
							<span class="${n?"text-sm":"text-xs"} font-mono bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded font-bold text-slate-700 dark:text-slate-300">${e}</span>
							${n?'<div class="w-2 h-2 bg-yellow-400 rounded-full"></div>':""}
						</div>
						<span class="${n?"text-lg":"text-base"} font-bold text-slate-900 dark:text-white">${r}</span>
					</div>
					<div class="text-${n?"sm":"xs"} text-slate-600 dark:text-slate-400 font-medium">${d}</div>
				</div>
			`}async function i(){try{const e=await c.getExchangeRate();if(!e||!e.rates)throw new Error("无效的汇率数据");const a=document.getElementById("exchange-rate-header");a&&(a.innerHTML=`
						<div class="flex flex-col md:flex-row md:items-center md:justify-between">
							<div>
								<h2 class="text-xl font-bold text-slate-900 dark:text-white mb-1">基准货币: ${e.base}</h2>
								<p class="text-slate-600 dark:text-slate-400">更新时间: ${f(e.date)}</p>
							</div>
							<div class="mt-3 md:mt-0">
								<div class="inline-flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium">
									<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
									实时数据
								</div>
							</div>
						</div>
					`);const n=document.getElementById("major-currencies");if(n){const r=o.filter(t=>e.rates[t]).map(t=>l(t,e.rates[t],!0)).join("");n.innerHTML=r}const d=document.getElementById("all-currencies");if(d){const r=Object.entries(e.rates).filter(([t])=>!o.includes(t)).sort(([t],[s])=>t.localeCompare(s)).map(([t,s])=>l(t,s,!1)).join("");d.innerHTML=r}document.getElementById("loading-state").classList.add("hidden"),document.getElementById("exchange-rate-content").classList.remove("hidden")}catch(e){console.error("加载汇率数据失败:",e),document.getElementById("loading-state").classList.add("hidden"),document.getElementById("error-state").classList.remove("hidden")}}function x(){document.getElementById("error-state").classList.add("hidden"),document.getElementById("loading-state").classList.remove("hidden"),i()}document.addEventListener("DOMContentLoaded",()=>{i();const e=document.getElementById("retry-button");e&&e.addEventListener("click",x)});
