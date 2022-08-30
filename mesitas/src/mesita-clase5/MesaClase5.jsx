import './MesaClase5.css';
import Perritos from './componentes/Perritos';

let arrayPerritos = [
    {
        id: 1,
        name: "Pepe",
        edad: 2,
        sexo: "Macho",
        raza: "Poodle",
        tamanio: "Pequeño",
        url: "https://www.bunko.pet/__export/1619211815290/sites/debate/img/2021/04/23/whatsapp_image_2021-04-23_at_12_48_27_pm_crop1619211328052.jpeg_1189877827.jpeg"
    },
    {
        id: 2,
        name: "Reina",
        edad: 5,
        sexo: "Hembra",
        raza: "Mestizo",
        tamanio: "Grande",
        url: "https://www.dogalize.com/wp-content/uploads/2017/03/cane-meticcio.jpg"
    },
    {
        id: 3,
        name: "Firulai",
        edad: 3,
        sexo: "Macho",
        raza: "Chihuahua",
        tamanio: "Pequeño",
        url: "https://www.bunko.pet/__export/1647467558633/sites/debate/img/2021/05/06/perro-chihuahua_crop1620328014098.jpeg_1753094345.jpeg"

    },
    {
        id: 4,
        name: "Max",
        edad: 5,
        sexo: "Macho",
        raza: "Pastor Alemán",
        tamanio: "Grande",
        url: "https://t2.ea.ltmcdn.com/es/posts/3/2/9/curiosidades_del_pastor_aleman_23923_600_square.jpg"
    },
    {
        id: 5,
        name: "Linda",
        edad: 7,
        sexo: "Hembra",
        raza: "Golden",
        tamanio: "Grande",
        url: "https://t2.ea.ltmcdn.com/es/posts/1/6/2/10_curiosidades_del_golden_retriever_21261_orig.jpg"
    }
];

export default function MesaClase5() {
    return (
        <section className='app'>
        <h1>Clientes caninos de Veterinaria</h1>
        <Perritos listado={arrayPerritos}/>
        </section>
    );
}

