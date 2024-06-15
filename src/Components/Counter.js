
function Counter(){
    const greet = () =>{
        alert("hello guys");
    }

    return(
        <div>
            <button onClick={greet} >😎</button>
            
        </div>
    )
}

export default Counter;