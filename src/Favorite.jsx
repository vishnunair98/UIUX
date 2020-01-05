import React, {Component} from 'react';
import List from "./List";

const iconPaths = {
    uncolored: "popcorn-uncolored.png",
    colored: "popcorn-colored.png"
}

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          favorite: this.props.item.favorite
        };
    }

    toggleFavoriteIcon = event => {
        this.setState({ favorite: !(this.state.favorite) })
        this.props.item.favorite = !this.props.item.favorite;
    };

    getIconName = () => this.props.item.favorite ? 'colored':'uncolored'

    render() {
        const iconName = this.getIconName();
        return (
          <div className="favorite">
            <img className = "favorite-icon" src= {require('../src/Favorite Icons/' + iconPaths[iconName])}
                width ="20" height ="20" onClick= {this.toggleFavoriteIcon}></img>
          </div>
        );
    }
}

export default Favorite;
