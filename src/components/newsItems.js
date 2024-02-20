import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (

      <div className="card my-3" >
        <div style={{display:'flex' , justifyContent:'flex-end' , position:'absolute' , right:0}}>
          <span class="badge text-light rounded-pill bg-danger">
            {source}
          </span>
        </div>

        <img src={!imageUrl ? "https://tse2.mm.bing.net/th?id=OIP.zY8zxNseg-7WcoKU5Fb1GwAAAA&pid=Api&P=0&h=220" : imageUrl} className="card-img-top" alt="" height={"220px"} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className='text-body-secondary'>By : {!author ? "Unkwon" : author} | On :  {new Date(date).toString()}</small></p>
          <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-secondary">Get Details</a>
        </div>
      </div>
    )
  }
}

export default NewsItems