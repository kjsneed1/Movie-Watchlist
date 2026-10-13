# Movie Watchlist Project

## CIS131 - Keaton Sneed

---

**GitHub Link:** <https://github.com/kjsneed1/Movie-Watchlist>

---

This page allows the end user to add and remove movies from a watchlist. They are able to mark the movies as watched or not watched. Each time a change is made to the movie data, there is a call to the render funtion which updates the page. There is a form at the top of the page that on submit adds a new movie to the movie object and then renders it in a list on the page. When the user hits the button to toggle the watch state, the movie gets updated in the list visually. When the user hits the remove button, the movie is removed from the data and removes it visually. Each time the data is updated, a function is run to save the data to local storage in the browser. On load, the movie list is grabbed from local storage, and if the data is empty it is replaced with an empty array.
