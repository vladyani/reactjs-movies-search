import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

export default class Navbar extends Component {
  render () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span>
                    <img alt="app icon" width="30" height="30" src="https://cdn.iconscout.com/public/images/icon/premium/png-512/avengers-381d701474eb0762-512x512.png"/>
                </span>
            <a className="navbar-brand" href="#" style={{marginLeft: "14px"}}>
                Avengers Movie Search
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to='/' className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </Link>
                    <Link to="popular" className="nav-item">
                        <a className="nav-link" href="#">Popular Movies</a>
                    </Link>
                    <Link to="nowplaying" className="nav-item">
                        <a className="nav-link" href="#">Up Coming</a>
                    </Link>
                    <Link to="toprated" className="nav-item">
                        <a className="nav-link" href="#">Top rated</a>
                    </Link>
                </ul>
            </div>
        </nav>
    )
  }
}


