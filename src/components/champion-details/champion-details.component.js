import { Component } from "react";
import './champion-details.styles.css';

class ChampionDetails extends Component {
    render() {
        const { className, champion } = this.props;
        return (
            <div className={className}>
                {champion == null ? <span>Select a champion</span> :
                <>
                    <div>{champion.name}, {champion.title}</div>
                </>}
            </div>
        );
    }
}

export default ChampionDetails;