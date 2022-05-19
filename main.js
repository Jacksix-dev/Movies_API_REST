


const API_GENRE = "https://api.themoviedb.org/3/discover/movie?api_key="+ API_KEY +"&with_genres="
const API_CAT = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY + "&language=en-US"
const API_TRENDS = "https://api.themoviedb.org/3/trending/movie/day?api_key="+API_KEY


async function getTendencias(){
    const response = await fetch(API_TRENDS,{
        method:"GET",
    });

const data = await response.json()
const movies = data.results;


if (response.status=200){
       const section = document.getElementById("trend-container")
        section.innerHTML= "";

        data.results.forEach(movie => {
    
            const img = document.createElement("img")
            img.src ="https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
            section.appendChild(img)
});

    } 
}


async function getCathegories () {

    const response = await fetch(API_CAT,{
        method:"GET",
    });

   
    const data = await response.json()
    
    console.log(data)
    const section = document.getElementById("genders")
    
    if (response.status = 200){
        films_gen.innerHTML = ""
         data.genres.forEach(element => {
        const div = document.createElement("div")
        const paragraft = document.createElement("button")
         
           paragraft.innerHTML= element.name;
           paragraft.id = element.name
           paragraft.addEventListener("click", () => {
               location.hash = "#category=" +element.id +"-"+ element.name
               
           })
           
            div.appendChild(paragraft)
            section.appendChild(div)
             
           
         })
    
}

}

async function getgender (gender_code) {

    const response = await fetch(API_GENRE + gender_code,{
        method:"GET",
    });

   
    const data = await response.json()
const movies = data.results;
console.log(movies)


if (response.status=200){
       const section = document.getElementById("trend-container")
        section.innerHTML= "";

     
        movies.forEach(movie => {
    
            const img = document.createElement("img")
            img.src ="https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path
            section.appendChild(img)
});

    

}


}   
