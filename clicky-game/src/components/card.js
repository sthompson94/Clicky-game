import React from 'react';


function Card(props) {
    console.log(props);
    return (
        <div className="row">
            {props.data.map(character => (
                <div className="card col-3">
                
                    <img onClick={() => props.handleScore(character.name)} name={character.name} src={character.src} className="card-img-top" alt={character.name} />
                    <h4>{character.name}</h4>
                </div>
            ))}


        </div>
    )
}

export default Card;