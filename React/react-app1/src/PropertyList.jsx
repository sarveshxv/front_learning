import Property from "./Property"

export default function PropertyList(properties){
    return(
        <>
        <h1>Property list</h1>
        {properties.map(
            (prop) => (
                <h1>Prop</h1>
                // <Property name={prop.name}/>
            )
        )}
        </>
    )
}