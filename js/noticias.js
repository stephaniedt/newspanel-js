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

// abaixo outra maneira de fazer, utilizando async function, starting ecma6:



window.onload = async function getNews() {
    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=c7c46efa75e649d194837c21de0c5a1c')

    let listaDeNoticias = await noticias.json()

    listaDeNoticias.articles.forEach((noticia) => {
            
    let divCol = document.createElement('div')
        divCol.setAttribute('class', 'col-3')

    let divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

    let img = document.createElement('img')
        img.setAttribute('src', noticia.urlToImage )
        img.setAttribute('class', 'card-img-top')

    let divBody = document.createElement('div')
        divBody.setAttribute('class','card-body')

    let title = document.createElement('h5')
        title.setAttribute('class', 'card-title')
        title.textContent = noticia.title

    let description = document.createElement('p')
        description.setAttribute('class', 'card-text')
        description.textContent = noticia.description

    let link = document.createElement('a')
        link.setAttribute('class', 'btn btn-success')
        link.setAttribute('href', noticia.url)
        link.textContent = 'Ir para noticia'

    divCard.appendChild(img)
    divCard.appendChild(divBody)
    divBody.appendChild(title)
    divBody.appendChild(description)
    divBody.appendChild(link)

    divCol.appendChild(divCard)

    containerNews.appendChild(divCol)
});


}