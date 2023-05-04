const title = document.querySelector('.title');
const categories = document.querySelector('.categories');
const rotateBtn = document.querySelector('.rotate-btn');
const categoryData = [
  {
    title: 'New Motorcycle Parts',
    link: 'Placeholder-Catalog',
    categories: [
      'Frames',
      'Handlebars',
      'Handlebar Risers'
    ]
  },
  {
    title: 'New Car Parts',
    link: 'Placeholder-Catalog',
    categories: [
      'Brake Calipers',
      'Brake Rotors',
      'Struts'
    ]
  },
  {
    title: 'New Truck Parts',
    link: 'Placeholder-Catalog',
    categories: [
      'Brake Calipers',
      'Brake Rotors',
      'Beds'
    ]
  },
  {
    title: 'Tools',
    link: 'Placeholder-Catalog',
    categories: [
      'Hammers',
      'Wrenches'
    ]
  },
  {
    title: 'Used/Refurbished Parts',
    link: 'Placeholder-Catalog',
    categories: [
      'Body',
      'Engines',
      'Transmissions'
    ]
  }
];

let currentCategory = 0;

function updateCategories() {
  categories.innerHTML = '';
  const currentData = categoryData[currentCategory];
  title.textContent = currentData.title;
  currentData.categories.forEach(category => {
    const categoryItem = document.createElement('li');
    const categoryLink = document.createElement('a');
    categoryLink.textContent = category;
    categoryLink.href = currentData.link;
    categoryItem.appendChild(categoryLink);
    categories.appendChild(categoryItem);
  });
  categories.classList.remove('rotate1', 'rotate2', 'rotate3', 'rotate4', 'rotate5');
  categories.classList.add(`rotate${currentCategory + 1}`);
}

updateCategories();

rotateBtn.addEventListener('click', function() {
  currentCategory = (currentCategory + 1) % categoryData.length;
  updateCategories();
});