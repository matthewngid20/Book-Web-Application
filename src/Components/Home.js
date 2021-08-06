import { useState, useEffect } from "react";
//import axios  from "axios";
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
        <h3>{item.title}</h3>
      )
    })
      return(
      <div className="home">
        <h2>Books</h2>
        { Books }
      </div>
    )
  }
  
}