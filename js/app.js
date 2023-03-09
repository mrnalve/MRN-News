// load news data
let loadNewsData = async()=>{
    let url = `https://newsapi.org/v2/everything?q=bd&apiKey=d5602eea60e94d4a8d5957102fcbe677`
    let res = await fetch(url)
    let data = await res.json()
    displayNews(data.articles);
}

// display news in all cards
let displayNews = news =>{
    let newsCards = document.getElementById('newsCards')
    news.forEach(singleNews => {
       console.log(singleNews);  
    let {urlToImage, description, publishedAt, title, url} = singleNews
    let card = document.createElement('div')
    card.classList.add("col", "col-md-6")
    card.innerHTML = `
    <div class="card" style="width: 100%;">
    <img src="${urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    newsCards.appendChild(card)
    });
}
loadNewsData()