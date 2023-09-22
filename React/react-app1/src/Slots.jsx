function Slots({v1,v2,v3}){
    let isSame = (v1 == v3 && v1 == v2);
    let isWinnerText = isSame ? "You Win !" : "You Losse !";
    let isWinnerColor = isSame ? "Olive" : "orangered";
    
    return(
        <>
        <h3 style={{textDecoration: "underline"}}>"Slots"</h3>
        <h1 style={{color: isWinnerColor}}>{`"${v1}" "${v2}" "${v3}"`}</h1>
        <h3 style={{color: isWinnerColor}}>{isWinnerText}</h3>    
        {
        isSame && <h2>"Congrats!!!"</h2>
        }
        </>
    )
}

export default Slots