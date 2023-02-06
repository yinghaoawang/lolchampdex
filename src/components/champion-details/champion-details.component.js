import { Component } from "react";
import './champion-details.styles.css';

class ChampionDetails extends Component {
    constructor() {
        super();
        this.state = {champion: null, skinIndex: 0};
    }
    componentDidUpdate(prevProps) {
        const { champion } = this.props;
        if (champion === prevProps.champion) return;
        if (champion == null) return;

        const championId = champion.id;

        fetch(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${championId}.json`)
        .then(res => res.json())
        .then(data => {
            let championData = data.data[championId];
            console.log(championData);
            this.setState(() => {
                return {skinIndex: 0, champion: championData};
            });
        });
    }

    onSplashClick = (e) => {
        const { champion, skinIndex } = this.state;
        const maxSkinCount = champion.skins.length;
        if (skinIndex === maxSkinCount - 1) {
            this.setState({skinIndex: 0});
        } else {
            this.setState({skinIndex: skinIndex + 1});
        }
    }

    render() {
        const { onSplashClick } = this;
        const { className } = this.props;
        const { champion, skinIndex } = this.state;
        const currentSkin = champion?.skins[skinIndex];

        return (
            <div className={`${className} champion-details`}>
                {champion == null ? <span>Select a champion</span> :
                <>
                    <div>{champion.name}, {champion.title}</div>
                    <img
                        alt={champion.id}
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${currentSkin.num}.jpg`}
                        onClick={onSplashClick}
                    />
                    <small>{skinIndex === 0 ? champion.name : currentSkin.name}</small>
                    <div>
                        <h3>Lore</h3>
                        <p>{champion.lore}</p>
                    </div>
                </>}
            </div>
        );
    }
}

export default ChampionDetails;