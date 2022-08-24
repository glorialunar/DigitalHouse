import './MesaClase7.css';

export default function Mesita7() {
    let saludo = [
        "HOLA",
        "HOLA",
        "HOLA",
        "MUNDO"
    ]

    return (
        <div className="contenedor">
        {saludo.map((item, index) => 
            <h1 className="saludo" key={index}>
            {item}
            </h1>
        )}
        </div>

    );
}
