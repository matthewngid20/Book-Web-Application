export function Logout ( props ) {
    return (
        <button type = "submit" className = "btn btn-primary" onClick = {props.handler}>Log out</button>
    )
}