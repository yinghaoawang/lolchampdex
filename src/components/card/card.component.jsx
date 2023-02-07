import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {
        const { champion, onClickHandler } = this.props;
        const { id, name, image } = champion;
            return (
                <div
                    className='card-container'
                    key={id}
                    onClick={(e) => onClickHandler(e, champion)}
                >
                    <img
                        alt={name}
                        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${image.full}`}
                    />
                </div>
            );
    }
}

export default Card;