import { Component } from 'react';

class CardList extends Component {
    render() {
        const { champions } = this.props;
        return (
            <div>
                {champions.map((champion) => {
                    return <li key={champion.id}>{champion.name}</li>;
                })}
            </div>
        );
    }
}

export default CardList;