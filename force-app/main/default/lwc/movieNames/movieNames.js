import { LightningElement } from 'lwc';

export default class MovieNames extends LightningElement {

    moviesInfo = [
        { movieName: 'Avenger', movieReleaseYear: '2010', movieGenre: 'SciFi' },
        { movieName: 'Avenger Age Of ultron', movieReleaseYear: '2012', movieGenre: 'SciFi' },
        { movieName: 'Avenger Civil War', movieReleaseYear: '2015', movieGenre: 'SciFi' },
        { movieName: 'Avenger Infinity War', movieReleaseYear: '2018', movieGenre: 'SciFi' },
        { movieName: 'Avenger End Game', movieReleaseYear: '2019', movieGenre: 'SciFi' }

    ]
}