const form = document.getElementById("movieForm");
const titleInput = document.getElementById("title");
const genreSelect = document.getElementById("genre");
const message = document.getElementById("validation");
const movieList = document.getElementById("movieList");
const emptyMessage = document.getElementById("emptyMessage");

const watchlist = {
    movies: [],
    toggleWatched(index) {
        // TODO (Step 4)
    },
    removeMovie(index) {
        // TODO (Step 4)
    },
};

function saveMovies() {
    // TODO (Step 6)
}

function loadMovies() {
    // TODO (Step 6)
}

function renderMovies() {
    // TODO (Step 3)
}

form.addEventListener("submit", (event) => {
    // TODO (Step 5)
});

loadMovies();
renderMovies();
