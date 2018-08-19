/* @flow */
import React, {Component} from 'react';
import {Row, Col, Rate, Tag} from 'antd';
import YouTube from 'react-youtube';

import Utils from '../../Services/utilsService';
import Api from '../../Services/dataService';

import './Movie.css'

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            urlImage: '',
            stars: 0,
            genres: [],
            release_date: '',
            videoId: 0
        }
    }

    componentDidMount() {
        const idFilm = parseInt(this.props.match.params.id, 10)
        Api.getMovieById(idFilm)
            .then(data => {
                console.log('dataApi', data);
                this.setState({
                    urlImage: data.poster_path,
                    name: data.title,
                    stars: data.vote_average / 2,
                    description: data.overview,
                    genres: (data.genres: Array<number>),
                    release_date: data.release_date,
                    videoId: data.videos.results['0'].key
                })
            })
    }

    render() {
        const stylesZ = {
            position: "fixed",
            left: "0",
            right: "0",
            zIndex: "9999",
        };
        const stylesBackground = {
            background: "url('https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "blur(2px) grayscale(35%)",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            display: "block",
            zIdex: "1",
            top: "0",
            left: "0"
        };
        return (
            <div>
                <div style={stylesBackground}></div>
                <Row style={stylesZ}>
                    <Col span={8} offset={1}>
                        <img alt={this.state.name} width='85%'
                             src={`https://image.tmdb.org/t/p/w500${this.state.urlImage}`}/>
                    </Col>
                    <Col span={12} offset={1}>
                        <h1>{this.state.name}</h1>
                        <hr/>
                        <strong> Description: </strong>
                        <p>{this.state.description}</p>
                        <hr/>
                        <div className='genere'>
            <span className='genereTitle'>
              <strong>Generes: </strong>
            </span>
                            {this.state.genres.map(genere => <Tag color={Utils.randomColor()}
                                                                  key={genere.id}>{genere.name}</Tag>)}
                        </div>
                        <Rate className='rate' value={this.state.stars}/>
                        <hr/>
                        <div className='trailer'>
                            <strong> Trailer: </strong>
                        </div>
                        <YouTube videoId={this.state.videoId}/>
                    </Col>
                </Row>
            </div>
        )
    }
}