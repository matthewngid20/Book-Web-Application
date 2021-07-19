export function Register (props) {
    return (
            <form id = "register">
            
            <label className = "form-label" htmlFor = "email"> Email </label> 
            <input className = "form-control" type = "email" name ="email" id = "email"/> 
            <label className = "form-label" htmlFor = "password"> Password </label> 
            <input className = "form-control" type = "password" name ="password" id = "password"/> 
            <button type = "submit" className = "btn btn-primary"> Register </button>
            </form>
    )
}