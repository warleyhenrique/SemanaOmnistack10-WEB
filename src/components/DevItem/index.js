import React  from 'react';
import './styles.css';

function DevItem({dev, onClick}){
    
    async function handleClick(e){
        e.preventDefault();

        await onClick(dev._id);
    }

    return(
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.gtihub_username}`}>Acessar perfil do github</a>
            <br/>
            <button 
                className="button"
                onClick={handleClick}
            >
            excluir</button>
        </li>
    )
}

export default DevItem;