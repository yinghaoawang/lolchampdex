import { Component } from 'react';
import './card-container.styles.css';

class CardList extends Component {
    render() {
        const { champions, onClickHandler } = this.props;
        const squareAssetPrefixSrc = 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/'; 
        return (
            <div className='card-list-container'>
                {champions.map((champion) => {
                    const { id, name, image } = champion;
                    return (
                        <div
                            className='card-container'
                            key={id}
                            onClick={(e) => onClickHandler(e, champion)}
                        >
                            <img
                                alt={name}
                                src={squareAssetPrefixSrc + image.full}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardList;