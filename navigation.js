window.addEventListener("DOMContentLoaded", navigator,false)

window.addEventListener("hashchange", navigator,false)

function navigator () {


if (location.hash.startsWith("#trends")){
    trends()
} else if (location.hash.startsWith("#search=")){
    search()
} else if (location.hash.startsWith("#movie=")){
    movie()

} else if (location.hash.startsWith("#category=")){
    categories()

} else {
 homepage()
}
 document.documentElement.scrollTop =0;
}

function trends(){
    console.log("trends")
    title.classList.remove("main_title")
    title.classList.add ("inactive")

    searchbar.classList.remove("browser")
    searchbar.classList.add ("inactive")

    backarrow.classList.remove("inactive")
    backarrow.classList.add ("backarrow")

    more_button.classList.add("inactive")
    more_button.classList.remove("button-79")

    films.classList.add("film-container2")
    films.classList.remove("film-container")

    related_movies_section.classList.add("inactive")
    movie_stellars.classList.add("inactive")

    cat_title.classList.add("inactive")
    categorias.classList.add("inactive")

    categories_genders.classList.add("inactive")

    films_gen.innerHTML= ""
    location.hash="#trends"

    fav_container.classList.remove("fav_container")
    fav_container.classList.add("inactive")
    fav_container.innerHTML = ""
    fav_films_title.classList.add("inactive")
    
    
    getPaginatedTrends(trendpage)
}

function movie(id){
    
    title.classList.remove("main_title")
    title.classList.add ("inactive")

    searchbar.classList.remove("browser")
    searchbar.classList.add ("inactive")

    backarrow.classList.remove("inactive")
    backarrow.classList.add ("backarrow")

    more_button.classList.add("inactive")
    more_button.classList.remove("button-79")

    
    films.classList.remove("film-container")

    categories_genders.classList.add("inactive")
    categories_genders.innerHTML= ""

    cat_title.classList.add("inactive")

    films.classList.add("individual_film")

    info_container.classList.remove("inactive")
    movie_title.classList.remove("inactive")
    movie_title.classList.add("second_title2")
    movie_stars.classList.remove("inactive")
    movie_stellars.classList.remove("inactive")

    related_movies_section.classList.remove("inactive")
    loadmore_container.innerHTML = ""
    fav_container.classList.remove("fav_container")
    fav_container.classList.add("inactive")
    fav_container.innerHTML = ""
    fav_films_title.classList.add("inactive")
const movie_id = location.hash.split("-")

    getMovieById(movie_id[1])
    getrecomendedmovies (movie_id[1])
}

function categories(){
    const name = location.hash.split("-")
    const regex1 = /[^\d]/ig;
    const gender_code = location.hash.replaceAll(/[^\d]/ig,"");
    const gender_name = name[1]
    getgender(gender_code,gender_name)


    title.classList.remove("main_title")
    title.classList.add ("inactive")

    searchbar.classList.remove("browser")
    searchbar.classList.add ("inactive")

    backarrow.classList.remove("inactive")
    backarrow.classList.add ("backarrow")

    more_button.classList.add("inactive")
    more_button.classList.remove("button-79")

    films.classList.add("film-container2")
    films.classList.remove("film-container")
    movie_stellars.classList.add("inactive")
    movie_stellars.classList.remove("movie-stars")
    movie_stars.classList.add("inactive")

    loadmore_container.innerHTML = ""
    related_movies_section.classList.add("inactive")
   
    cat_title.classList.add("inactive")
    categories_genders.innerHTML = ""

    fav_container.classList.remove("fav_container")
    fav_container.classList.add("inactive")
    fav_container.innerHTML = ""
    fav_films_title.classList.add("inactive")

    
}

function enter(){
    searchinput.addEventListener("keydown", e => {
        if (e.key === "Enter"){
            
            search()
        }
    } )
}


function search(){
    title.classList.remove("main_title")
    title.classList.add ("inactive")

   

    backarrow.classList.remove("inactive")
    backarrow.classList.add ("backarrow")

    more_button.classList.add("inactive")
    more_button.classList.remove("button-79")

    films.classList.add("film-container2")
    films.classList.remove("film-container")

    
    
    getsearch (searchinput.value)
    fav_container.classList.remove("fav_container")
    fav_container.classList.add("inactive")
    fav_container.innerHTML = ""
    fav_films_title.classList.add("inactive")
   
    location.hash="#search="+ searchinput.value 
}

function homepage(){
    title.classList.add("main_title")
    title.classList.remove ("inactive")

    searchbar.classList.add("browser")
    searchbar.classList.remove("inactive")

    backarrow.classList.remove("backarrow")
    backarrow.classList.add ("inactive")

    more_button.classList.add("button-79")

    films.classList.remove("film-container2")
    films.classList.add("film-container")

    categories_genders.classList.remove("inactive")
    categories_genders.classList.add("cat_container")

    
    cat_title.classList.remove("inactive")

    films.classList.remove("individual_film")

    info_container.classList.add("inactive")
    movie_title.classList.add("inactive")
    movie_stars.classList.add("inactive")
    movie_stellars.classList.add("inactive")

    movie_title.classList.remove("second_title2")

    related_movies_section.classList.add("inactive")

    trendpage = 1
    loadmore_container.innerHTML = ""
    fav_films_title.innerHTML= "Peliculas Favoritas"
    getTendencias()
    getCathegories()
    getLikedMovies() 

    location.hash="#home"
}