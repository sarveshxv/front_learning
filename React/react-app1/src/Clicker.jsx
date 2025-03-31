export default function Clicker({msg, btnText}){
    function handleCLick(){
        alert(msg)
    }
    return(
        <div>
            <p>{btnText}</p>
            <button onClick={handleCLick}>{btnText}</button>
        </div>
    )
}