const request = require('request');

const fs = require('fs');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if(error) {
        console.error(`Could not send request to API: ${error.message}`)
        return;
    }

    if(response.statusCode != 200) {
        console.error(`Expeted status code 200 but received ${response.statusCode}.`)
    }

    console.log('Processing our list of movies');
    let movies = JSON.parse(body);
    // console.log(movies)
    // movies.forEach(movie => {
    //     console.log(`${movie.title}, ${movie.release_date}`);
    // })
    let movieList = '';
    movies.forEach(movie => {
        movieList += `${movie.title}, ${movie.release_date}\n`
    });

    fs.writeFile('movies.csv', movieList, (error) => {
        if(error) {
            console.error(`Could not save the Ghibli movies to a file: ${error}`);
            return;
        }

        console.log('Saved our list of movies to movies.csv')
    })
})