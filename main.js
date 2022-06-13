const API_RECOMEND = "https://api.themoviedb.org/3/movie/"
const API_MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/"
const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key="+ API_KEY +"&language=en-US&query="
const API_GENRE = "https://api.themoviedb.org/3/discover/movie?api_key="+ API_KEY +"&with_genres="
const API_GENRE_PAGES = "https://api.themoviedb.org/3/discover/movie?api_key=" +API_KEY
const API_CAT = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY + "&language=en-US"
const API_TRENDS = "https://api.themoviedb.org/3/trending/movie/day?api_key="+API_KEY

//observer 


  
  const observer = new IntersectionObserver((entries,observer) => {
      entries.forEach(entry => {
       
        if (entry.isIntersecting){
            console.log("isIntersecting")
            const urlImg = entry.target.getAttribute("data-img")
           entry.target.setAttribute("src",urlImg)
            
           
        } else{
            
        }
        
      })
  });


// Data

function likedMoviesList(){
    const item = JSON.parse(localStorage.getItem("liked_movies"))
        
    let movies;

    if (item){
        movies = item;
    } else {
        movies = {};
        const section = document.getElementById("fav-container")
       const para = document.createElement("p")
      
       section.appendChild(para)
    }
    return movies;
}

function likedMovies(movie){
const likedMovies = likedMoviesList()
console.log(likedMovies)
if  (likedMovies[movie.id]){
   likedMovies[movie.id] = undefined;
    console.log("borrado bro")
}else{
    likedMovies[movie.id]= movie
        console.log("agregado perri")
}
localStorage.setItem("liked_movies", JSON.stringify(likedMovies))
} 

    


function loadmovies(movies,clear = true, button = false){
        const section = document.getElementById("trend-container")
       
         if (clear){
             section.innerHTML= "";
            
         }
        
         console.log(movies)
         movies.forEach(movie => {
            if(movie.poster_path != null){
               const div_img_container = document.createElement("div")
               div_img_container.classList.add("image_button_container")
               
              
             
              const like_button = document.createElement("button")
             
             likedMoviesList()[movie.id] && like_button.classList.add("like_button_active")
                like_button.classList.add("like_button")
                like_button.addEventListener("click",() => 
                {
                if (location.hash === "#home")
                {
                like_button.classList.toggle("like_button_active")
                likedMovies(movie)
                getLikedMovies()
                }else{
                    console.log("no estas en el home")
                    like_button.classList.toggle("like_button_active")
                    likedMovies(movie)
                }
                
                         })    
              const img2 = document.createElement("img")
                 img2.setAttribute("data-img","https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path)
                     img2.addEventListener("click", () => {
                location.hash = "#movie=" + movie.title + "-" +movie.id 
                
            })  
            

            observer.observe(img2)
             section.appendChild(div_img_container)

             div_img_container.appendChild(img2)
             div_img_container.appendChild(like_button)
            }        
 });

    
 if(button === true){
     

    
    const loadmore = document.createElement("button")
    loadmore.innerText = "Cargar mas";
    loadmore.id ="loadmorebutton"
    
    loadmore.classList.add("loadmore")
  loadmore.addEventListener("click", () =>{
    loadpaginatedmovies(pages,location.hash.replaceAll(/[^\d]/ig,""))
  })
  loadmore_container.appendChild(loadmore)
   
}
 }

 function loadmovies2(movies){
    const section = document.getElementById("related_movies_container")
     section.innerHTML= ""; 
     console.log("Xd")
     if (movies !== []){
     movies.forEach(movie => {
        
         const img2 = document.createElement("img")
         img2.setAttribute("data-img","https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path)
            
             img2.addEventListener("click", () => {
                location.hash = "#movie=" + movie.title + "-" +movie.id  
            
        })  
        observer.observe(img2)
         section.appendChild(img2)
});

}else{ section.innerHTML= ""; }

}

function loadfavmovies(movies,clear = true, button = false){
    const section = document.getElementById("fav-container")
   
     if (clear){
         section.innerHTML= "";
        
     }
    
     console.log(movies)
     movies.forEach(movie => {
        if(movie.poster_path != null){
           const div_img_container = document.createElement("div")
           div_img_container.classList.add("image_button_container")
           
          
         
          const like_button = document.createElement("button")
         
         likedMoviesList()[movie.id] && like_button.classList.add("like_button_active")
            like_button.classList.add("like_button")
            like_button.addEventListener("click",() => {
                   
            like_button.classList.toggle("like_button_active")
            likedMovies(movie)
            getLikedMovies()
            loadmovies(trendmovielist)
            
                     })    
          const img2 = document.createElement("img")
             img2.setAttribute("data-img","https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path)
                 img2.addEventListener("click", () => {
            location.hash = "#movie=" + movie.title + "-" +movie.id 
            
        })  
        

        observer.observe(img2)
         section.appendChild(div_img_container)

         div_img_container.appendChild(img2)
         div_img_container.appendChild(like_button)
        } 
            
});

}

 function loadmovie (poster,description,title,rating){
     const section = document.getElementById("trend-container")
         section.innerHTML= ""; 
           
             const img = document.createElement("img")
             img.src ="https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + poster;
            movie_info.innerHTML = description 
            ndtitle.innerHTML= title
            movie_title.innerHTML = "Calificacion"
            movie_stars.innerHTML = rating
            


             section.appendChild(img)


 }

 function loadpaginatedtrends(movies,clear = true, button = false){
    const section = document.getElementById("trend-container")
   
     if (clear){
         section.innerHTML= "";
        
     }
    
     
        movies.forEach(movie => {
        if(movie.poster_path != null){
            const div_img_container = document.createElement("div")
           div_img_container.classList.add("image_button_container")
           
          
         
          const like_button = document.createElement("button")
         
         likedMoviesList()[movie.id] && like_button.classList.add("like_button_active")
            like_button.classList.add("like_button")
            like_button.addEventListener("click",() => {
                   
                if (location.hash === "#home")
                {
                like_button.classList.toggle("like_button_active")
                likedMovies(movie)
                getLikedMovies()
                }else{
                    console.log("no estas en el home")
                    like_button.classList.toggle("like_button_active")
                    likedMovies(movie)
                }
            
                     })  

            
         const img2 = document.createElement("img")

          img2.setAttribute("data-img","https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path)
        
         img2.addEventListener("click", () => {
            location.hash = "#movie=" + movie.title + "-" +movie.id 
            
        })  
        observer.observe(img2)
         
         section.appendChild(div_img_container)

         div_img_container.appendChild(img2)
         div_img_container.appendChild(like_button)
         
        }       
});

if(button === true){
 
const loadmore = document.createElement("button")

console.log("boton generado")
loadmore.innerText = "Cargar mas";
loadmore.id ="loadmorebutton"

loadmore.classList.add("loadmore")
loadmore.addEventListener("click", () =>{
    trendpage++
    getPaginatedTrends(trendpage)
    
})
loadmore_container.innerHTML = ""
loadmore_container.appendChild(loadmore)

}
}

 let trendmovielist;
async function getTendencias(page = 1){
    const response = await fetch(API_TRENDS + "&page="+page ,{
        method:"GET",
    });

        const data = await response.json()
        console.log(data)
        const movies = data.results;
        trendmovielist = data.results
        nd_title.innerHTML = "Trending";
        movie_info.innerHTML= ""
        if (response.status=200) {
            if (page = 1)
            {loadmovies(movies,true,false)}
            }
            
}




async function getCathegories () {

    const response = await fetch(API_CAT,{
        method:"GET",
    });

    const data = await response.json()
    
 
    const section = document.getElementById("genders")
    section.innerHTML = ""
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

async function getgender (gender_code,gender_name) {

    const response = await fetch(API_GENRE + gender_code,{
        method:"GET",
    });
const data = await response.json()
const movies = data.results;

nd_title.innerHTML = gender_name;
if (response.status=200) {loadmovies(movies,true,true)}

}

async function getsearch (searchinput){
    const response = await fetch(API_SEARCH + searchinput,{
        method:"GET",
    });
    nd_title.innerHTML = `Resultados de "${searchinput}"`;
    const data = await response.json()
    const movies = data.results;
    console.log(movies)
    
    if (response.status=200) {loadmovies(movies)}
}

async function getMovieById (id){
    const response = await fetch(API_MOVIE_DETAILS + id + "?api_key=" + API_KEY + "&language=en-US",{
        method:"GET",
    });

    const data = await response.json()
    const movie = data.results

    console.log(data)
    if (response.status=200) {loadmovie(data.poster_path,data.overview,data.title,data.vote_average)}
}

async function getrecomendedmovies (id){
    const response = await fetch (API_RECOMEND + id + "/recommendations?api_key=" + API_KEY + "&language=en-US" )

    const data = await response.json()
    console.log(data.results)

    if (response.status=200){
        loadmovies2(data.results)
    }
}

var pages = 2;
async function loadpaginatedmovies(page,gender_code){
    const response = await fetch(API_GENRE_PAGES + "&language=en-US" + "&page=" + page +"&with_genres="+gender_code,{
        method:"GET",
    });
const data = await response.json()
const movies = data.results;
console.log(movies)
if (response.status=200) {
    if (pages >= 2){
        pages = pages + 1
        loadmovies(movies,false,false)
         }
         else {
            pages = pages + 1
            loadmovies(movies,false,true)
            }
             }

}

let trendpage = 1
async function getPaginatedTrends(page){
    const response = await fetch(API_TRENDS + "&page="+page ,{
        method:"GET",
    });
    
        const data = await response.json()
        console.log(data)
        const movies = data.results;
        nd_title.innerHTML = "Trending";
        movie_info.innerHTML= ""
        if (response.status=200 && page === 1) {
             loadpaginatedtrends(movies,true,true)
        } else { loadpaginatedtrends(movies,false,false)}
            
}

function getLikedMovies(){
 let movies = likedMoviesList()
 let favmovies = Object.values(movies)
 loadfavmovies(favmovies,true,false)
}
