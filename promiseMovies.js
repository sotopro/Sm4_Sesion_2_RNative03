const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        const { data } = response;
        console.log('Succesfully retrived out list of movies');
        let movieList = '';
        data.forEach(movie => {
            movieList += `${movie.title}, ${movie.release_date}\n`
        })

        return fs.writeFile('promiseMovies.csv', movieList)
    })
    .then(() => {
        console.log('Saved our list of movies to promiseMovies.csv')
    })
    .catch((error) => {
        console.error(`Could not save the Ghibli movies to a file: ${error}`)
    })