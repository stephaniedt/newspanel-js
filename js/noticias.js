let containerNews = document.querySelector('#newsList')

// function getNews() {
//     let noticias = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=c7c46efa75e649d194837c21de0c5a1c')
//     .then((res)=>{
//         return res.json()
//     })
//     .then((dadosEmJson) => { 
//         dadosEmJson.articles.forEach((noticia) => {
            
//             console.log(`-----------------------------`)
//             console.log(`Título: ${noticia.title}`)
//             console.log(`Descrição: ${noticia.description}`)
//             console.log(`Link: ${noticia.urlToImage}`)
//         });
//     })
// }

// abaixo outra maneira de fazer, utilizando async function, starting es6:



window.onload = async function getNews() {
    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=c7c46efa75e649d194837c21de0c5a1c')

    let listaDeNoticias = await noticias.json()

    listaDeNoticias.articles.forEach((noticia) => {
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

    // outra forma de apresentar no html:

    // listaDeNoticias.articles.forEach((noticia) => {
            
    //     let divCol = document.createElement('div')
    //         divCol.setAttribute('class', 'col-lg-3 my-2')
    
    //     let divCard = document.createElement('div')
    //         divCard.setAttribute('class', 'card')
    
    //     let img = document.createElement('img')
    //         img.setAttribute('src', noticia.urlToImage )
    //         img.setAttribute('class', 'card-img-top')
    
    //     let divBody = document.createElement('div')
    //         divBody.setAttribute('class','card-body')
    
    //     let title = document.createElement('h5')
    //         title.setAttribute('class', 'card-title')
    //         title.textContent = noticia.title
    
    //     let description = document.createElement('p')
    //         description.setAttribute('class', 'card-text')
    //         description.textContent = noticia.description
    
    //     let link = document.createElement('a')
    //         link.setAttribute('class', 'btn btn-success')
    //         link.setAttribute('href', noticia.url)
    //         link.textContent = 'Ir para noticia'
    
    //     divCard.appendChild(img)
    //     divCard.appendChild(divBody)
    //     divBody.appendChild(title)
    //     divBody.appendChild(description)
    //     divBody.appendChild(link)
    
    //     divCol.appendChild(divCard)
    
    //     containerNews.appendChild(divCol)
    // });
}
