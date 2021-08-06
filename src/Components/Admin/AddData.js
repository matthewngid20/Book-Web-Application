export function AddData (props) {

    const submitHandler =(event) => {
        event.preventDefault() //Form wont refresh
        const formData = new FormData(event.target)
        const obj = new Object()
        formData.forEach( (value, key) => { 
            obj[key] = value 
        })

        //upload image and get url
        if(obj.cover_image){
            const string = Math.random().toString(36).substr(2,5)
            const name =  obj.cover_image.name
            const title = obj.title
            const path = 'books/' + string + title + name
            props.imageHandler( path, obj.cover_image )
            .then ( (url) => {
                obj.cover_image = url
                props.handler (obj)
                .then( (response) => console.log('sucess'))
                .catch( (error) => console.log(error))
            })
            .catch((error) => {console.log(error)
            })
        }else{
            console.log('need image ')
        }

        
    }

    return(
        
        <form id = "add-data" onSubmit ={submitHandler}>
            <h2> Add a book</h2>
            <label htmlFor = "title"> Book Title </label>
            <input id = "title" type = "text" name = "title" className = "form-control" placeholder = "Book title"/>
            <label htmlFor = "tagline"> Tag Line </label>
            <input id = "tagline" type = "text" name = "tagline" className = "form-control" placeholder = "Tag Line"/>
            
            <div className ="row">
                <div className = "col-md-6">
                    <label htmlFor = "isbn13"> ISBN13 </label>
                    <input id = "isbn13" type = "text" name = "isbn13" className = "form-control" placeholder = "ISBN13"/>
                </div>
                <div className = "col-md-6">
                    <label htmlFor = "isbn10"> ISBN10</label>
                    <input id = "isbn10" type = "text" name = "isbn10" className = "form-control" placeholder = "ISBN10"/>
                </div>
            </div>
            
            <label htmlFor = "author"> Author</label>
            <input id = "author" type = "text" name = "author" className = "form-control" placeholder = "Author"/>
            <label htmlFor = "publisher"> Publisher </label>
            <input id = "publisher" type = "text" name = "publisher" className = "form-control" placeholder = "Publisher"/>
            <label htmlFor = "year"> Year </label>
            <input id = "year" type = "text" name = "year" className = "form-control" placeholder = "Year"/>
            <label htmlFor = "pages"> Pages </label>
            <input id = "pages" type = "number" name = "pages" className = "form-control" placeholder = "Pages"/>
            <label htmlFor = "cover_image"> Image </label>
            <input id = "cover_image" type = "file" name = "cover_image" className = "form-control" placeholder = "Cover Image"/>
            <div className = "mt-3  buttons d-flex flex-row justify-content-between">
            <button type = "reset" className = "btn btn-secondary"> Reset form</button>
                <button type = "submit" className = "btn btn-primary"> Add </button>
                
            </div>
        </form>

    )
}

