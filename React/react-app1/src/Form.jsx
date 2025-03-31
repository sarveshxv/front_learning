function functionToPreventDefaultBehaviour(e){
    e.preventDefault();
    console.log("Submitted the form")
}

export default function Form(){
    return(
        <form onSubmit={functionToPreventDefaultBehaviour}>
            <button>Submit</button>
        </form>
    )
    }