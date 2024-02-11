import React, { Component } from 'react'
import NewsItems from './newsItems'


export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems title={"myTitle"} description={"myDescription"}/>
          </div>
          <div className="col-md-4">
          <NewsItems title={"myTitle"} description={"myDescription"}/>          </div>
          <div className="col-md-4">
          <NewsItems title={"myTitle"} description={"myDescription"}/>          </div>
        </div>
      </div>
    )
  }
}

export default News