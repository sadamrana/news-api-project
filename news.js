let getDiv =document.getElementById('getDiv')

let getNews =()=>{
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-09-15&sortBy=publishedAt&apiKey=98a264385de6499cac0a10c9f16d3aca
    `)
        .then(data => data.json())
        .then(data => {
            for(let i=0; i< data.articles.length; i++){
               getDiv.innerHTML += `<div class="card">
               <img src="${data.articles[i].urlToImage}" alt="Avatar" style="width:100%">
               
             </div>`
            }
        }
            )
    
        .catch(err => console.log(err))
}

