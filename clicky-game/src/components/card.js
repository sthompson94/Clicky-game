import React from 'react';


function Card(props) {
    console.log(props);
    return (
        <div className="row">
            {props.data.map(character => (
                <div className="card col-3 m-4">
                
                    <img onClick={() => props.handleScore(character.name)} name={character.name} src={character.src} className="card-img-top" alt={character.name} />
                </div>
            ))}


        </div>
    )
}

export default Card;