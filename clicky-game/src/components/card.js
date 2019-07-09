import React from 'react';


function Card(props) {
    console.log(props);
    return (
        <div className="row">
            {props.data.map(character => (
                <div className="card col-3">
                
                    <img  name={character.name} src={character.src} className="card-img-top" alt={character.name} />
                    <button className="btn" onClick={() => props.handleScore(character.name)}>Select</button>
                </div>
            ))}


        </div>
    )
}

export default Card;