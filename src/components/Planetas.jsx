import './Planetas.css'

// const nomePlanet = "Terra"
// const descPlanet = {
//     descricao: 'Planeta Terra',
//     idade: '4,54bi anos',
//     populacao: '8bi'
// }

export function Terra({idade = 5, nomePlanet, descPlanet}) {

    return (
        <>
            <h2>Planeta {nomePlanet}</h2>
            <p>O {descPlanet.descricao} é formado por continentes e água</p>
            <p>E possui {descPlanet.idade}. Com uma populacao de {descPlanet.populacao} individuos. E tem {idade} anos</p>
        </>
    )
}

export default function Planetas() {
    const imagem = "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600"
    const descricao = "Planeta"
    return (
        <>
            {/*Comentarios*/}
            <h1>Planetas</h1>
            <img className="cores" src={imagem} alt={descricao} />
        </>
    )
}