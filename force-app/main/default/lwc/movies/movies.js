import { api,LightningElement } from 'lwc';

export default class Movies extends LightningElement {

    @api
    movieInfo = { movieName: '', movieReleaseYear: '',movieGenre:'' };
    
    @api
    showMovieInfo = false ;

}