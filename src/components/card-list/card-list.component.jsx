import { Component } from 'react';
import './card-container.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
    render() {
        const { champions, onClickHandler } = this.props;
        return (
            <div className='card-list-container'>
                {champions.map((champion) => {
                    return <Card onClickHandler={onClickHandler} champion={champion} />
                })}
            </div>
        );
    }
}

export default CardList;