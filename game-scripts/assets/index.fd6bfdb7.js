import{e,h as t,T as s,n as r,i as l,a,o as i,r as n,c as o,A as c,b as d,d as h}from"./vendor.33c8b70c.js";function u(){return new Worker("/game-scripts/assets/search.f462b68e.js",{type:"module"})}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var m=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(e,t,s,r)=>{for(var l,a=r>1?void 0:r?g(t,s):t,i=e.length-1;i>=0;i--)(l=e[i])&&(a=(r?l(t,s,a):l(a))||a);return r&&a&&m(t,s,a),a};let v=class extends t{constructor(){var e;super(),this.character="",this.capitalize=!1,v.elementRegistry.add(this),(null==(e=this.parentElement)?void 0:e.classList.contains("capitalize"))&&(this.style.textTransform="none",this.capitalize=!0)}static register(e,t){v.characterRegistry.set(e,t),[...this.elementRegistry].filter((({character:t})=>t===e)).forEach((e=>e.requestUpdate()))}disconnectedCallback(){super.disconnectedCallback(),v.elementRegistry.delete(this)}render(){const e=v.characterRegistry.get(this.character);return s`${this.capitalize?`${null==e?void 0:e.charAt(0).toUpperCase()}${null==e?void 0:e.slice(1)}`:e}`}};v.characterRegistry=new Map,v.elementRegistry=new Set,p([e()],v.prototype,"character",2),v=p([r("player-name")],v);var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,y=(e,t,s,r)=>{for(var l,a=r>1?void 0:r?b(t,s):t,i=e.length-1;i>=0;i--)(l=e[i])&&(a=(r?l(t,s,a):l(a))||a);return r&&a&&f(t,s,a),a};let $=class extends t{constructor(){super(),this.moeum="",this.batchim="",$.elementRegistry.add(this)}static update(){this.elementRegistry.forEach((e=>e.requestUpdate()))}disconnectedCallback(){super.disconnectedCallback(),$.elementRegistry.delete(this)}render(){var e,t,r,l;const a=this.previousSibling,i=((null!=(l=(null!=(r=null!=(t=null==(e=null==a?void 0:a.shadowRoot)?void 0:e.textContent)?t:null==a?void 0:a.textContent)?r:"").slice(-1).codePointAt(0))?l:0)-44032)%28;let n=this.moeum;return i>0&&("으로"===this.batchim?8!==i&&(n=this.batchim):n=this.batchim),s`${n}`}};$.elementRegistry=new Set,y([e()],$.prototype,"moeum",2),y([e()],$.prototype,"batchim",2),$=y([r("ko-josa")],$);var x=Object.defineProperty,L=Object.getOwnPropertyDescriptor,w=(e,t,s,r)=>{for(var l,a=r>1?void 0:r?L(t,s):t,i=e.length-1;i>=0;i--)(l=e[i])&&(a=(r?l(t,s,a):l(a))||a);return r&&a&&x(t,s,a),a};let S=class extends t{constructor(){super(),this.games={},this.selectedLocales=[],this.searchIndex=0,this.fetchJson("games.json").then((e=>{this.games=e}))}fetchJson(e){return fetch(e).then((e=>e.json()))}onGameSelect({currentTarget:e}){var t;if("string"!=typeof e.value)throw new Error;const s=e.value;this.selectedGame=this.games[s],Object.entries(null!=(t=this.selectedGame.characters)?t:{}).forEach((([e,t])=>v.register(e,t))),$.update(),this.games[s].data||this.fetchJson(`${this.selectedGame.root}/message.json`).then((e=>{const t=new u;t.postMessage(e),this.games[s].data=e,this.games[s].search=t,this.games[s].indexed=new Promise((e=>{const s=r=>{"indexed"===r.data&&(t.removeEventListener("message",s),e())};t.addEventListener("message",s)})),this.requestUpdate()}))}onLocaleSelect({currentTarget:e}){if("string"==typeof e.value)throw new Error;this.selectedLocales=[...e.value]}onTargetSelect({currentTarget:e}){if("string"!=typeof e.value)throw new Error;this.selectedTargetLocale=e.value}search(e){var t,s;if(e instanceof InputEvent&&e.isComposing)return;const{currentTarget:r}=e;if(!r.value)return this.searchResult=Promise.resolve([]),void requestAnimationFrame((()=>r.focus()));null==(s=null==(t=this.selectedGame)?void 0:t.search)||s.postMessage(r.value),this.searchResult=new Promise(((e,t)=>{var s,l;const a=s=>{var l,i;if(requestAnimationFrame((()=>r.focus())),null==(i=null==(l=this.selectedGame)?void 0:l.search)||i.removeEventListener("message",a),Array.isArray(s.data)){const t=s.data.filter((({locale:e})=>{var t;return null==(t=this.selectedLocales)?void 0:t.includes(e)}));this.searchIndex=0,t.length&&this.load(t[0]),e(t)}else t()};null==(l=null==(s=this.selectedGame)?void 0:s.search)||l.addEventListener("message",a)}))}load(e){var t,s,r;this.selectedMessages=null==(s=null==(t=this.selectedGame)?void 0:t.data)?void 0:s[e.group][e.file],null==(r=this.menuItems)||r.forEach((t=>t.checked=t.value===e.file)),requestAnimationFrame((()=>{var t,s,r;const l=`#${CSS.escape(e.label)}`;null==(r=null==(s=null==(t=this.messageTable)?void 0:t.shadowRoot)?void 0:s.querySelector(l))||r.scrollIntoView()}))}stepSearchResult(e){return async()=>{var t;const s=null!=(t=await this.searchResult)?t:[],{length:r}=s;this.searchIndex=((this.searchIndex+e)%r+r)%r,this.load(s[this.searchIndex])}}renderHeader(){var e,t,r,l,a,i,n,d,h,u,m,g,p,v,f,b;const y=Object.keys(this.games);return s`
			<sl-select @sl-change=${this.onGameSelect} label="Game" placeholder="Select game" .disabled=${!y.length}>
				${y.map((e=>s`<sl-menu-item .value=${e}>${e}</sl-menu-item>`))}
			</sl-select>

			<sl-select
				@sl-blur=${this.onLocaleSelect}
				@sl-clear=${this.onLocaleSelect}
				label="Locales"
				placeholder="Select locales"
				.disabled=${!this.selectedGame}
				multiple
			>
				${null==(e=this.selectedGame)?void 0:e.locales.map((e=>s`<sl-menu-item .value=${e}>${e}</sl-menu-item>`))}
			</sl-select>

			<sl-select
				@sl-change=${this.onTargetSelect}
				label="Target locale"
				placeholder="Select target locale"
				.disabled=${!this.selectedLocales.length}
				clearable
			>
				${this.selectedLocales.map((e=>s`<sl-menu-item .value=${e}>${e}</sl-menu-item>`))}
			</sl-select>

			<sl-input
				@input=${this.search}
				@compositionend=${this.search}
				class="search"
				label="Search"
				placeholder=${o(null!=(l=null==(r=null==(t=this.selectedGame)?void 0:t.indexed)?void 0:r.then((()=>"")))?l:"","indexing")}
				help-text=${o(null!=(i=null==(a=this.searchResult)?void 0:a.then((e=>{if(0===e.length)return"No results";const{group:t,file:s,label:r}=e[this.searchIndex];return`Search results: ${this.searchIndex+1} / ${e.length} @ ${t}/${s}/${r}`})))?i:" "," ")}
				.disabled=${o(null==(h=null==(d=null==(n=this.selectedGame)?void 0:n.indexed)?void 0:d.then((()=>!1)))||h,!0)}
			>
				${o(null!=(g=null==(m=null==(u=this.selectedGame)?void 0:u.indexed)?void 0:m.then((()=>s`<sl-icon name="search" slot="prefix"></sl-icon>`)))?g:c,s`<sl-spinner slot="prefix"></sl-spinner>`)}
				<div slot="suffix">
					<sl-button
						@click=${this.stepSearchResult(-1)}
						type="default"
						size="small"
						.disabled=${o(null==(v=null==(p=this.searchResult)?void 0:p.then((({length:e})=>!e)))||v,!0)}
						circle
						><sl-icon name="caret-left-fill"></sl-icon
					></sl-button>
					<sl-button
						@click=${this.stepSearchResult(1)}
						type="default"
						size="small"
						.disabled=${o(null==(b=null==(f=this.searchResult)?void 0:f.then((({length:e})=>!e)))||b,!0)}
						circle
						><sl-icon name="caret-right-fill"></sl-icon
					></sl-button>
				</div>
			</sl-input>
		`}renderSidebar(){if(!this.selectedGame)return c;if(!this.selectedGame.data)return s`<sl-spinner></sl-spinner>`;const e=this.selectedGame.data;return s`
			<sl-menu>
				${Object.keys(e).map((t=>s`
						<sl-menu-label>${t}</sl-menu-label>
						${Object.keys(e[t]).map((r=>s`
								<sl-menu-item
									@click=${({currentTarget:s})=>{var l;this.selectedMessages=e[t][r],null==(l=this.menuItems)||l.forEach((e=>e.checked=!1)),s.checked=!0}}
									value=${r}
									>${r}</sl-menu-item
								>
							`))}
					`))}
			</sl-menu>
		`}render(){return s`
			<header>${this.renderHeader()}</header>
			<aside>${this.renderSidebar()}</aside>
			<main>
				<message-table
					.gameInfo=${this.selectedGame}
					.data=${this.selectedMessages}
					.locales=${this.selectedLocales}
					.targetLocale=${this.selectedTargetLocale}
				></message-table>
			</main>
		`}};S.styles=l`
		:host {
			--border-color: 1px solid rgb(var(--sl-color-gray-400));

			font-family: var(--sl-font-sans);
			width: 100vw;
			height: 100vh;
			display: grid;
			grid:
				'header header' auto
				'sidebar content' 1fr
				/ minmax(250px, auto) 1fr;
		}

		header {
			grid-area: header;
			display: grid;
			grid:
				'game locales target' auto
				'search search search' auto
				/ 1fr 1fr 1fr;
			gap: var(--sl-spacing-small);
			padding: var(--sl-spacing-medium);
			border-bottom: var(--border-color);
		}

		header > .search {
			grid-area: search;
		}

		aside {
			grid-area: sidebar;
			overflow-y: auto;
			border-right: var(--border-color);
		}

		main {
			grid-area: content;
			padding: var(--sl-spacing-medium);
			overflow: auto;
		}
	`,w([a("sl-menu-item")],S.prototype,"menuItems",2),w([i("message-table")],S.prototype,"messageTable",2),w([n()],S.prototype,"games",2),w([n()],S.prototype,"selectedGame",2),w([n()],S.prototype,"selectedMessages",2),w([n()],S.prototype,"selectedLocales",2),w([n()],S.prototype,"selectedTargetLocale",2),w([n()],S.prototype,"searchResult",2),w([n()],S.prototype,"searchIndex",2),S=w([r("game-scripts")],S);var R=Object.defineProperty,j=Object.getOwnPropertyDescriptor,G=(e,t,s,r)=>{for(var l,a=r>1?void 0:r?j(t,s):t,i=e.length-1;i>=0;i--)(l=e[i])&&(a=(r?l(t,s,a):l(a))||a);return r&&a&&R(t,s,a),a};let k=class extends t{constructor(){super(...arguments),this.locales=[]}toggleBlur({currentTarget:e}){e.classList.toggle("blurred")}renderMessage(e){return e?d(e):c}renderMessages(e){return this.targetLocale?s`
				<td lang=${this.targetLocale} class="target">${this.renderMessage(e[this.targetLocale])}</td>
				${this.locales.filter((e=>e!==this.targetLocale)).map((t=>s`
							<!-- prettier-ignore -->
							<td lang=${t} class="source"><div class="blurred" @click=${this.toggleBlur}
								>${this.renderMessage(e[t])}</div
							></td>
						`))}
			`:s`
			${this.locales.map((t=>s` <td lang=${t}>${this.renderMessage(e[t])}</td> `))}
		`}render(){var e;return this.data&&this.locales.length?s`
			<link rel="stylesheet" href=${`${null==(e=this.gameInfo)?void 0:e.root}/style.css`} />
			<table>
				${h(Object.entries(this.data).filter((([e,t])=>Object.entries(t).some((([e,t])=>this.locales.includes(e)&&t)))),(([e])=>e),(([e,t])=>s`
							<tr id=${e}>
								<td>${e}</td>
								${this.renderMessages(t)}
							</tr>
						`))}
			</table>
		`:c}};k.styles=l`
		table {
			width: 100%;
			border-collapse: collapse;
		}

		td {
			padding: var(--sl-spacing-small);
			white-space: pre;
		}

		ruby {
			white-space: normal;
		}

		td.target {
			font-size: var(--sl-font-size-x-large);
		}

		td.source > div {
			cursor: pointer;
		}

		td.source > div.blurred {
			filter: blur(5px);
		}
	`,G([e({attribute:!1})],k.prototype,"gameInfo",2),G([e({attribute:!1})],k.prototype,"data",2),G([e({attribute:!1})],k.prototype,"locales",2),G([e({attribute:!1})],k.prototype,"targetLocale",2),k=G([r("message-table")],k);
