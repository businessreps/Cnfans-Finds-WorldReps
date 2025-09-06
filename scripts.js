
let ALL_PRODUCTS = [];
const PAGE_SIZE = 36;
let page = 0;
const state = { q:"", category:"", subcategory:"" };

const $ = (s)=>document.querySelector(s);
const $$ = (s)=>Array.from(document.querySelectorAll(s));

async function loadData(){
  const res = await fetch('data/products.json');
  ALL_PRODUCTS = await res.json();
  renderCategories();
  // catálogo directo (sin hero)
  showSection('productos');
  renderMore();
}

function renderCategories(){
  const menu = $('#categoryMenu'); if(!menu) return;
  menu.innerHTML = '';
  (window.categories||[]).forEach(cat=>{
    const li = document.createElement('li');
    const a = document.createElement('a'); a.href='#'; a.textContent=cat.name;
    a.onclick = (e)=>{e.preventDefault(); state.category=cat.name; state.subcategory=''; resetAndRenderProducts(); };
    li.appendChild(a);
    if(cat.subcategories?.length){
      const ul = document.createElement('ul');
      cat.subcategories.forEach(sub=>{
        const li2 = document.createElement('li');
        const a2 = document.createElement('a'); a2.href='#'; a2.textContent='— '+sub;
        a2.onclick = (e)=>{e.preventDefault(); state.category=cat.name; state.subcategory=sub; resetAndRenderProducts(); };
        li2.appendChild(a2); ul.appendChild(li2);
      });
      li.appendChild(ul);
    }
    menu.appendChild(li);
  });
}

function filtered(){
  const q = (state.q||'').toLowerCase();
  return ALL_PRODUCTS.filter(p=>
    (!q || p.title.toLowerCase().includes(q)) &&
    (!state.category || p.category===state.category) &&
    (!state.subcategory || (p.subcategory||'')===state.subcategory)
  );
}

function resetAndRenderProducts(){
  page = 0;
  $('#productGrid').innerHTML = '';
  showSection('productos');
  renderMore();
}

function renderMore(){
  const list = filtered();
  const start = page * PAGE_SIZE;
  const slice = list.slice(start, start + PAGE_SIZE);
  const grid = $('#productGrid');
  grid.insertAdjacentHTML('beforeend', slice.map(p => `
    <article class="card">
      <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='img/products/pdfimg_001.webp'">
      <h3>${p.title}</h3>
      <div class="meta">${p.category}${p.subcategory? ' · '+p.subcategory:''}</div>
      <div class="price">${p.price}</div>
      <div class="actions">
        <a href="${p.cnfans}" target="_blank" rel="noopener">CnFans</a>
        <a href="${p.weidian}" target="_blank" rel="noopener">Weidian</a>
      </div>
    </article>
  `).join(''));
  page++;
  const moreBtn = $('#loadMore');
  if(moreBtn) moreBtn.style.display = (start + PAGE_SIZE < list.length) ? '' : 'none';
}

function showSection(id){
  $$('main > section').forEach(s=>s.style.display='none');
  const el = document.getElementById(id); if(el) el.style.display='';
  const cc = document.getElementById('como-comprar');
  if(cc) cc.style.display = (id==='productos') ? '' : ''; // siempre visible si entras por anchor
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Menú hamburguesa
  $('#menuBtn').onclick = ()=> $('#sidebar').classList.add('active');
  $('#closeSidebar').onclick = ()=> $('#sidebar').classList.remove('active');
  // Búsqueda
  $('#siteSearch').onsubmit = (e)=>{ e.preventDefault(); state.q = ($('#q').value||'').trim(); resetAndRenderProducts(); };
  // Cargar datos
  loadData();
});
