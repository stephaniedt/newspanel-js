
let containerNews = document.querySelector('#newsList')

window.onload = async function techNews() {

    let noticias = await fetch('http://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=c7c46efa75e649d194837c21de0c5a1c')
    let listaNoticias =  await noticias.json()

    listaNoticias.articles.forEach(noticia => {
        
            containerNews.innerHTML +=  `
            <div class="col-lg-3 vh100 my-2">
                <div class="card">
                    <img src="${noticia.urlToImage}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title"> ${noticia.title}</h5>
                    <p class="card-text"> ${noticia.description}</p>
                    <a href="${noticia.url}" class="btn btn-success">Ir para noticia</a>
                    </div>
                </div>
            </div>   
            `
    
    }); 
    
}