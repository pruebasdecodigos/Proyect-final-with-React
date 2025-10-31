import "./Saludo.css"
function Saludo (props) {
    return (
        <h1>Bienvenido, {props.nombre}
        {props.boolean}
        {props.edad}
        </h1>
    )

}

export default Saludo