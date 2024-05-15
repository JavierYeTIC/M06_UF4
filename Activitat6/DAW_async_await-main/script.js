// Claus
const keys = {
    api_key: '7de747e3e9721d4e65d50ee28074e381',
    session_id: 'cbe2bde713c4be3ffc0f186956d7d50fdfe005bd',
    account_id: '21258991',
    bearer_id:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGU3NDdlM2U5NzIxZDRlNjVkNTBlZTI4MDc0ZTM4MSIsInN1YiI6IjY2M2JiYzAyM2ZiZmVjZDVkNzA1ZDQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.26jSRJe5IxZDmcolrIUZVdb_e7Fc-Ve5WDe3QHOmijc'
}

let moviesResult = document.getElementById("moviesResult");

async function checkIfFavorite(id) {
    try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/account_states?api_key=${keys.api_key}`, {
            headers: {
                Authorization: `Bearer ${keys.bearer_id}`
            }
        });
        if (!response.ok) {
            throw new Error('Error de conexió');
        }
        const data = await response.json();
        return data.favorite;
    } catch (error) {
        console.log('Error: ', error);
        return false;
    }
}

function setFav(id, favBool) {
    let options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${keys.bearer_id}`
        },
        body: JSON.stringify({
            media_type: 'movie',
            media_id: id,
            favorite: favBool
        })
    };

    fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite`, options)
        .then(response => response.json())
        .then(() => {
            console.log(id + " marked as true/false");
            // Reload the page and then show favorites
            location.reload();
        })
        .catch(error => console.log(error));
}

async function searchMovies(query, page = 1) {
    try {
        clearInput();
        removeActive();

        showLoading();

        document.getElementById("moviesResult").innerHTML = "";

        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keys.api_key}&query=${query}&page=${page}`);

        if (!response.ok) {
            throw new Error('Error de conexión');
        }

        let data = await response.json();

        total_pages = data.total_pages;
        current_page = data.page;

        for (const movie of data.results) {
            const isFav = await checkIfFavorite(movie.id);
            printMovie(movie, isFav, false);
        }

    } catch (error) {
        console.log('Error: ', error);
    } finally {
        hideLoading();
    }
}

function showFavs() {
    showLoading();

    fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies`, {
        headers: {
            Authorization: `Bearer ${keys.bearer_id}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error de conexión');
        }
        return response.json();
    })
    .then(data => {
        let moviesResult = document.getElementById("moviesResult");
        moviesResult.innerHTML = "";
        console.log(data);

        data.results.forEach(movie => {
            printMovie(movie, true, false);
        });

        hideLoading();
    })
    .catch(error => {
        console.log('Error: ', error);
        hideLoading();
    });
}

var total_pages = 0;
var current_page = 1;
var isFetching = false;

window.addEventListener('scroll', async () => {
    if (isFetching)
        return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        isFetching = true;
        showLoading();

        current_page++;
        await searchMovies(query, current_page);
        isFetching = false;
    }
});

function showLoading() {
    document.getElementById("loading").style.display = "flex";
}

function hideLoading() {
    document.getElementById("loading").style.display = "none";
}

document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");
})

document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

function printMovie(movie, fav, watch){
    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                   <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                   <h3>${movie.original_title}</h3>
                                   <div class="buttons">
                                       <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                       <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                   </div>`;
}

// Añadir la llamada a showFavs() cuando se carga la página
window.onload = function() {
    document.getElementById("showFavs").classList.add("active");
    showFavs();
}
