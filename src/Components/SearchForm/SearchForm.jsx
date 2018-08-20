import React, {Component} from 'react';
import {Input, Col, Row, Button} from 'antd'
import {Redirect} from 'react-router-dom';
import './SearchForm.css';
import axios from 'axios';

// class MovieRow extends React.Component {
//
//     viewMovie = () => {
//         const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
//         window.location.href = url;
//         console.log(this.props.movie.id);
//     }
//
//     render() {
//         return (
//             <table key={this.props.movie.id}>
//                 <tbody>
//                 <tr className="movieList">
//                     <td className="img">
//                         <img alt="poster" width="150" src={this.props.movie.poster_path}/>
//                     </td>
//                     <td>
//                         <h3>{this.props.movie.title}</h3>
//                         <p>{this.props.movie.overview}</p>
//                         <input className="play" type="button" value="Play"/>
//                         <input className="view" type="button" onClick={this.viewMovie} value="View"/>
//                     </td>
//                 </tr>
//
//                 </tbody>
//             </table>
//         )
//     }
// };

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            movies: ''
        };
    }

    performSearch(searchTerm) {
        const url = "https://api.themoviedb.org/3/search/movie?api_key=fd39ebcc5c863f9a34541a1121ab1823&query=" + searchTerm;
        axios.get(url).then(response => {
            let results = response.data.results;
            results.map(result => {
                this.setState({
                    searchResults: [...this.state.searchResults, result]
                })
            });
            console.log(this.state.searchResults)
        }).catch((xhr, status, err) => {
            console.error("Failed to fetch data");
        })
    };


    searchChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClick = () => {
        this.performSearch(this.state.movies);
        console.log(this.state.movies)
    };

    render() {
        return (
            <div>
                <div className="container" style={{marginTop: "120px"}}>
                <div className="row">
                <input className="input-class col-md-11"
                       name="movies"
                       onChange={event => this.searchChangeHandler(event)}
                       placeholder="What do you want see today ?"/>

                <button className="btn btn-brand btn-secondary col-md-1"
                        onClick={this.handleClick}>
                    <span className="fas fa-search"></span>
                </button>
                </div>
                    <div className="row" style={{marginLeft:"50px"}}>
                    {this.state.searchResults.map(result => {
                        return(
                            <div className="outher-movie-box" style={{display: "inline-block"}}>
                                <div className="inner-movie-box" style={{margin:"20px", border: "1px solid #efefef", borderRadius: '6px'}}>
                                    <img width="200" height="280" src={`https://image.tmdb.org/t/p/original${result.poster_path}`}  style={{cursor:"pointer"}}/>
                                    {/*<span>{result.title}</span>*/}
                                    {/*<span>{result.vote_count} votes</span>*/}
                                    {/*<span>{result.popularity}</span>*/}
                                    {/*<span>{result.release_date}</span>*/}
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        );
    }
}