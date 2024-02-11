import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title,description} = this.props
    return (

          <div class="card" style={{width: "18rem;"}}>
            <img src="https://cdn.arstechnica.net/wp-content/uploads/2024/02/GFNrsMPWIAAWxNw-760x380.jpeg" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <a href="/newsdetails" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    )
  }
}

export default NewsItems