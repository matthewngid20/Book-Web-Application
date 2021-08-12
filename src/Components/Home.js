import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export function Home ( props ) {
  const [ data, setData ] = useState()
  //const dataURL = "http://localhost/sample-project/build/php/book.php"; 

  useEffect ( () => {
    setData ( props.data)
  }, [props.data])
  //console.log(data);
  if( !data ) {
    return(
      <div className="home">
        <h2>Getting data ...</h2>
      </div>
    )
  }
  else {
    const Books = data.map( (item) => {
      return(
        <div className = "col-md-3">
          <div className = "card position-relative">
            <Link className = "position-absolute" to = {"book/" + item.id}
            style = {{top:0,bottom:0,left:0,right:0}}/>
            <img src = {item.cover_image} class ="card-img-top" atl ={item.title} style = {{width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center'}}></img>
            <div className = "card-body m-3">
              <h5 className = "title"> {item.title}</h5>
              <p style = {{minHeight: '10%'}}> {item.tagline} </p>
            </div>
          </div>
        </div>
      )
    })                    
      return(
      <div className="home">
        <h2>Books</h2>
        <div className = "row">
        { Books }
        </div>
      </div>
    )
  }
  
}