import React, { Component } from "react";
import List from "./List";

class IndicatingFavorites extends Component {
    constructor(props) {
      super(props);

      //The state is just a list of key/value pairs (like a hashmap)
      //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
      this.state = {
        display: this.props.display
      };
      console.log("checking indi props " + this.props.showFavorites);
    }


    filterAndSearch = item => {
        return item.name.toLowerCase().search(this.state.search) !== -1 && this.props.matchesFilterType(item) && this.props.matchesFilterRating(item);
    }

    render() {
        if(this.state.display) {
            return (
                <div className="IndicatingFavorites">
                <br/>
                    <h3 className = "fave-display-text">Displaying Favorite List:</h3>
                <br/><br/>
                </div>

            );
        }
        else {
            return(
                 <div className="IndicatingFavorites"></div>
            );
        }
    }
}

export default IndicatingFavorites;
