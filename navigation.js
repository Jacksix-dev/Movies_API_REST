window.addEventListener("DOMContentLoaded", navigator,false)

window.addEventListener("hashchange", navigator,false)

function navigator () {


console.log({location});

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


    
    location.hash="#trends"
    
    getTendencias()
}

function movie(){
    console.log("Movie")
    
}

function categories(){

    const regex = /[^\d]/ig;
    const gender_code = location.hash.replaceAll(regex,"")
    console.log(gender_code)
    getgender(gender_code)


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
    console.log(location.hash)
    
}

function search(){
    console.log("search")
}

function homepage(){
    console.log("home")
    title.classList.add("main_title")
    title.classList.remove ("inactive")

    searchbar.classList.add("browser")
    searchbar.classList.remove("inactive")

    backarrow.classList.remove("backarrow")
    backarrow.classList.add ("inactive")

    more_button.classList.add("button-79")

    films.classList.remove("film-container2")
    films.classList.add("film-container")

getTendencias()
getCathegories()

    location.hash="#home"
}