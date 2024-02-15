import React, { Component } from 'react'
import NewsItems from './newsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country:'us',
    pageSize: 9,
    category:"general"
  }

  static propTypes = {
   country:PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6a3364eeaa44e099511b28a1e370456&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles ,
       totalResults:parsedData.totalResults,
      loading: false })
  }

  handleprevpage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6a3364eeaa44e099511b28a1e370456&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
  }

  handlenextpage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6a3364eeaa44e099511b28a1e370456&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading: true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{margin:'35px 0px'}}>NewsApp - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button onClick={this.handleprevpage} disabled={this.state.page <= 1} type="button" className="btn btn-secondary">&larr; Previous</button>
          <button onClick={this.handlenextpage} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-secondary">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News