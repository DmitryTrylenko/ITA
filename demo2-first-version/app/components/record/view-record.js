export default class ViewRecord {
    htmlCards = document.querySelector('.product-list');
    htmlSearch = document.querySelector('.input');
    htmlSort = document.querySelector('.sort-price');
    htmlCategories = document.querySelector('.list');

    constructor(cbSort, cbSearch, cbFilter) {
        this.htmlSort.addEventListener('click', cbSort);
        this.htmlSearch.addEventListener('input', cbSearch);
        //this.htmlCategories.addEventListener('click', cbFilter);
    }
  
    render = (rec, categ) => {
        const cards = rec.map(this.renderCard).join('');
        const categories = categ.map(this.renderCategories).join('');
    
        this.htmlCards.innerHTML = `<div class="row">${cards}</div>`;
        this.htmlCategories.innerHTML = `${categories}`;
    }
  
    renderCategList = (cbFilter) => {
      const categ = this.categories.map(this.renderCategories).join('');
  
      this.htmlCategories.innerHTML = categ;
  
      this.htmlCategories.addEventListener('click', cbFilter);
    }
  
    renderCategories = (category) => {
      return `
        <li class="li-check">
          <input class="form-check-input" type="checkbox" value="${category}" id="${category}">
          <label class="form-check-label" for="${category}">
            ${category}
          </label>
        </li>`;
    }

      renderCard = (card) => `
      <div class="card" style="width: 18rem;">
      <img src="${card.img}" class="card-img-top" alt="${card.productName}">
      <div class="card-body">
        
      </div>
      <ul class="list-group list-group-flush">
        <h5 class="card-title">${card.productName}</h5>
        <p class="mb-1 card-ubits">${card.units}</p>
        <h6 class="price">$${card.price}</h6>
      </ul>
      <div class="card-body">
        <button type="button" class="btn btn-outline-primary">Details</button>
        <button type="button" class="btn btn-outline-info">Buy</button>
      </div>
    </div>
      `
    
  }