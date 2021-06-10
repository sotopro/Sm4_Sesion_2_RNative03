const axios = require('axios');
const fs = require('fs').promises;

const saveMovies = async () => {
    try {
        let response = await axios.get('https://ghibliapi.herokuapp.com/films');
        const { data } = response;
        let movieList = '';
        data.forEach((movie) => {
            movieList += `${movie.title}, ${movie.release_date}\n`
        })

        await fs.writeFile('asyncMovies.csv', movieList);
    } catch (error){
        console.error(`Could not save the Ghibli movies to a file: ${error}`)
    }
}

saveMovies();