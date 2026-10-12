const form = document.getElementById("movieForm");
const titleInput = document.getElementById("title");
const genreSelect = document.getElementById("genre");
const message = document.getElementById("validation");
const movieList = document.getElementById("movieList");
const emptyMessage = document.getElementById("emptyMessage");

const watchlist = {
    movies: [
        { title: "The Princess Bride", genre: "Adventure", watched: false },
    ],
    toggleWatched(index) {
        // TODO (Step 4)
    },
    removeMovie(index) {
        // TODO (Step 4)
    },
};

function saveMovies() {}

function loadMovies() {
    // TODO (Step 6)
}

function renderMovies() {
    movieList.replaceChildren();

    watchlist.movies.forEach((movie, index) => {
        const card = document.createElement("li");
        const title = document.createElement("h3");
        title.textContent = movie.title;

        const details = document.createElement("p");
        details.textContent = movie.finished ? "Finished" : "Not finished";

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = movie.finished
            ? "Mark Unfinished"
            : "Mark Finished";
        button.addEventListener("click", () => {
            readingList.markFinished(index);
            renderBooks();
        });

        card.append(title, details, button);
        movieList.append(card);
    });
}

form.addEventListener("submit", (event) => {
    // TODO (Step 5)
});

loadMovies();
renderMovies();
