import './MesaClase6.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

export default function MesaClase6() {
    return (
        <div className="App">
        <h3>Invitados:</h3>
            <ClassComponent nombre="Nicolas" estaEnLista={true} />
            <ClassComponent nombre="Ivan" estaEnLista={false} />
            <ClassComponent nombre="Carolina" estaEnLista={true} />
        <h3>Tareas: </h3>
            <FunctionComponent nombre="Nicolas" tarea="papas fritas" />
            <FunctionComponent nombre="Ivan" tarea="pizzas" />
            <FunctionComponent nombre="Carolina" tarea="bebidas" />
        </div>
    );
}