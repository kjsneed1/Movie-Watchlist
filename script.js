const form = document.getElementById("movieForm");
const titleInput = document.getElementById("title");
const genreSelect = document.getElementById("genre");
const message = document.getElementById("validation");
const movieList = document.getElementById("movieList");
const emptyMessage = document.getElementById("emptyMessage");

const watchlist = {
    movies: [
        { title: "The Princess Bride", genre: "Adventure", watched: false },
        { title: "Another Movie", genre: "Something else", watched: false },
    ],
    toggleWatched(index) {
        this.movies[index].watched = !this.movies[index].watched;
        saveMovies();
        renderMovies();
    },
    removeMovie(index) {
        this.movies.splice(index, 1);
        saveMovies();
        renderMovies();
    },
};

function saveMovies() {
    // TODO (Step 6)
}

function loadMovies() {
    // TODO (Step 6)
}

function renderMovies() {
    movieList.replaceChildren();

    watchlist.movies.forEach((movie, index) => {
        const card = document.createElement("li");
        const title = document.createElement("h3");
        const genre = document.createElement("h4");

        title.textContent = movie.title;

        genre.textContent = movie.genre;

        const details = document.createElement("p");
        details.textContent = movie.watched ? "Watched" : "Not watched";

        const watchedButton = document.createElement("button");
        watchedButton.type = "button";
        watchedButton.textContent = movie.watched
            ? "Mark Unwatched"
            : "Mark Watched";
        watchedButton.addEventListener("click", () => {
            watchlist.toggleWatched(index);
            renderMovies();
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            watchlist.removeMovie(index);
            renderMovies();
        });

        card.append(title, genre, details, watchedButton, removeButton);
        movieList.append(card);
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let validate = true;
    message.textContent = "";

    if (titleInput.value === "") {
        validate = false;
        message.innerHTML += `Please enter a movie name!<br>`;
    }

    if (genreSelect.value === "") {
        validate = false;
        message.innerHTML += `Please select a movie genre!`;
    }

    if (validate) {
        const movieObj = {
            title: titleInput.value,
            genre: genreSelect.value,
            watched: false,
        };

        watchlist.movies.push(movieObj);

        titleInput.value = "";
        genreSelect.value = "";

        saveMovies();
        renderMovies();
    }
});

loadMovies();
renderMovies();
