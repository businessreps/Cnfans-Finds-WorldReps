
// Sidebar toggle
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
menuBtn && menuBtn.addEventListener("click", () => sidebar.classList.add("active"));
closeSidebar && closeSidebar.addEventListener("click", () => sidebar.classList.remove("active"));

// Categories menu
function renderCategories() {
  const menu = document.getElementById("categoryMenu");
  if (!menu) return;
  menu.innerHTML = "";
  categories.forEach(cat => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = cat.name;
    a.href = "#";
    a.addEventListener('click', (e) => { e.preventDefault(); currentFilter.category = cat.name; currentFilter.subcategory = ""; renderProducts(); activateProductsView(); sidebar.classList.remove('active'); });
    li.appendChild(a);
    if (cat.subcategories && cat.subcategories.length) {
      const ul = document.createElement("ul");
      cat.subcategories.forEach(sub => {
        const li2 = document.createElement("li");
        const a2 = document.createElement("a");
        a2.textContent = "— " + sub;
        a2.href = "#";
        a2.addEventListener('click', (e) => { e.preventDefault(); currentFilter.category = cat.name; currentFilter.subcategory = sub; renderProducts(); activateProductsView(); sidebar.classList.remove('active'); });
        li2.appendChild(a2);
        ul.appendChild(li2);
      });
      li.appendChild(ul);
    }
    menu.appendChild(li);
  });
}

// Products
const products = [{
    title: 'Birkenstock Boston',
    price: '23 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_21_X913.png',
    links: { cnfans: 'https://cnfans.com/product?id=7433832149&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7433832149' },
{
    title: 'Prada Cups',
    price: '40 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_23_X998.png',
    links: { cnfans: 'https://cnfans.com/product?id=7407554747&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7407554747' },
{
    title: 'LV Skate Sneaker',
    price: '48 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_8_X317.png',
    links: { cnfans: 'https://cnfans.com/product?id=7399063773&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7399063773' },
{
    title: 'LV Trainers',
    price: '48 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_21_X913.png',
    links: { cnfans: 'https://cnfans.com/product?id=7399063773&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7399063773' },
{
    title: 'Rayo Mcqueen Crocs',
    price: '16 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_23_X998.png',
    links: { cnfans: 'https://cnfans.com/product?id=7406196585&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7406196585' },
{
    title: 'Asics Gel NYC',
    price: '40 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_8_X317.png',
    links: { cnfans: 'https://cnfans.com/product?id=7431280613&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7431280613' },
{
    title: 'Off-White Shoes',
    price: '38 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_21_X913.png',
    links: { cnfans: 'https://cnfans.com/product?id=7447315520&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7447315520' },
{
    title: 'Bape Shoes',
    price: '39 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_23_X998.png',
    links: { cnfans: 'https://cnfans.com/product?id=7469268461&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7469268461' },
{
    title: 'Nike Hot Step 2 Drake NOCTA',
    price: '36 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_8_X317.png',
    links: { cnfans: 'https://cnfans.com/product?id=7342619284&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7342619284' },
{
    title: 'Travis Scott Jordan 1 Low',
    price: '25 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_21_X913.png',
    links: { cnfans: 'https://cnfans.com/product?id=7300094355&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7300094355' },
{
    title: 'Jordan 4',
    price: '37 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_23_X998.png',
    links: { cnfans: 'https://cnfans.com/product?id=7247337472&platform=WEIDIAN', weidian: 'https://shop1710883753.v.weidian.com/item.html?itemID=7247337472' },
{
    title: 'New Balance 530',
    price: '37 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_8_X317.png',
    links: { cnfans: 'https://cnfans.com/product?id=7290197815&platform=WEIDIAN', weidian: 'https://shop1710883753.v.weidian.com/item.html?itemID=7290197815' },
{
    title: 'Puma Speedcat',
    price: '40 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_21_X913.png',
    links: { cnfans: 'https://cnfans.com/product?id=7298411487&platform=WEIDIAN', weidian: 'https://shop1710883753.v.weidian.com/item.html?itemID=7298411487' },
{
    title: 'UGG Boots',
    price: '29 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_23_X998.png',
    links: { cnfans: 'https://cnfans.com/product?id=7286410331&platform=WEIDIAN', weidian: 'https://shop1710883753.v.weidian.com/item.html?itemID=7286410331' },
{
    title: 'Nike Shox I',
    price: '38 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_8_X317.png',
    links: { cnfans: 'https://cnfans.com/product?id=7300260702&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7300260702' },
{
    title: 'Nike Shox II',
    price: '31 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_21_X913.png',
    links: { cnfans: 'https://cnfans.com/product?id=7460434202&platform=WEIDIAN', weidian: 'https://weidian.com/item.html?itemID=7460434202' },
{
    title: 'Jordan 11',
    price: '38 €',
    category: 'Zapatillas',
    subcategory: '',
    image: 'img/products/pdf_image_23_X998.png',
    links: { cnfans: 'https://cnfans.com/product?id=7448714694&platform=WEIDIAN', weidian: 'https://weidian.com.item.html?itemID=7448714694' }];

const currentFilter = { q: "", category: "", subcategory: "" };

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const q = currentFilter.q.toLowerCase();
  const filtered = products.filter(p => {
    const matchesQ = !q || p.title.toLowerCase().includes(q);
    const matchesCat = !currentFilter.category || p.category === currentFilter.category;
    const matchesSub = !currentFilter.subcategory || (p.subcategory || "") === currentFilter.subcategory;
    return matchesQ && matchesCat && matchesSub;
  });
  grid.innerHTML = filtered.map(p => `
    <article class="card">
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <div class="meta">${p.category}${p.subcategory ? ' · ' + p.subcategory : ''}</div>
      <div class="price">${p.price}</div>
      <div class="actions">
        <a href="${p.links.cnfans}" target="_blank" rel="noopener">CnFans</a>
        <a href="${p.links.weidian}" target="_blank" rel="noopener">Weidian</a>
      </div>
    </article>
  `).join("");
}

document.getElementById('siteSearch')?.addEventListener('submit', function(e){
  e.preventDefault();
  currentFilter.q = (document.getElementById('q')?.value || '').trim();
  renderProducts(); activateProductsView();
});
document.getElementById('mobileSearch')?.addEventListener('input', function(e){
  currentFilter.q = (e.target.value || '').trim();
  renderProducts(); activateProductsView();
});


function showSection(id) {
  document.querySelectorAll('main > section').forEach(s => s.style.display = 'none');
  const el = document.getElementById(id);
  if (el) { el.style.display = ''; el.scrollIntoView({behavior:'smooth', block:'start'}); }
}

function goToProducts() {
  showSection('productos');
}

function activateProductsView() {
  // hide how-to when browsing products
  const howto = document.getElementById('como-comprar');
  if (howto) howto.style.display = 'none';
  const faq = document.getElementById('faq');
  if (faq) faq.style.display = '';
  const productos = document.getElementById('productos');
  if (productos) productos.style.display = '';
  productos.scrollIntoView({behavior:'smooth', block:'start'});
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories(); 
  renderProducts(); activateProductsView(); 
  // On load: hide product grid (stay in hero/home)
  const productos = document.getElementById('productos');
  if (productos) productos.style.display = 'none';
});

