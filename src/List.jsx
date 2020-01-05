import React, {Component} from 'react';
import Favorite from "./Favorite";
import { Container } from "react-bootstrap";
class List extends Component {
    constructor(props) {
      super(props);

      //The state is just a list of key/value pairs (like a hashmap)
      //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
      this.state = {
        hover: false
      };
    }
    renderList() {
       const items = this.props.items.map(item => {
         return (
          <li>
            <div className = "card-container">
                <div className = "movie-card">
                    <Favorite item = {item}/>
                    <img className = "movie-image" src={require('../src/Posters/' + item.posters)} width="200" height="200" alt="Null"></img>
                    </div>
                <div className = "movie-info">
                    <h6 className = "year"> {item.year}</h6>
                    <h6 className = "rating"> {item.rating + '/4'}</h6>
                    <h6 className = "boxoffice-number">{'$'+item.boxoffice.toLocaleString()}</h6>
                </div>
            </div>
          </li>
         );
       });
       if (items.length == 0 ) {
         return (<div style={{ marginTop: "100px"}}><h2 class ="no-movies">No movies to display!</h2></div>);
       } else {
         return items;
       }

    }
    render() {
    return (
      <ul>
        <div className = "movie-cards">
            {this.renderList()}
        </div>
      </ul>
    );
    }
    }

export default List;
