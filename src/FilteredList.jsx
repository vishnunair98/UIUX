import React, { Component } from "react";
import { DropdownButton, Dropdown, Button, Jumbotron, Container } from "react-bootstrap";
import List from "./List";
import IndicatingFavorites from "./IndicatingFavorites";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All",
      sort: "None",
      rating: "All",
      renderList: this.props.items,
      showFavorites: false
    };

  }

  //Sets the state whenever the user types on the search bar
    onSearch = event => {
        this.setState({ search: event.target.value.trim().toLowerCase() });
    };

    /*
    * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
    * changes that should occur when a new filter type is selected.
    */
    onSelectFilterType = event => {
    //TODO Set the state of the filter type in this.state
        this.setState({ type: event });
    };

    onSelectFilterRating = event => {
    //TODO Set the state of the filter type in this.state
        this.setState({ rating: event });
    };

    onSort = event => {
        this.setState({sort: event});
    }
    getFavoriteList = () => {
        //Add showing favorites list component
        this.setState({showFavorites: true});
        this.setState({ renderList: this.props.items.filter(function(a){return a.favorite})});
    }

    // descending order
    sortByBoxOffice = () => {
        if(this.state.showFavorites) {
            this.setState({ renderList: this.props.items.filter(function(a){return a.favorite}).sort(function(a, b){return b.boxoffice - a.boxoffice})});
        }
        else {
            this.setState({ renderList: this.props.items.sort(function(a, b){return b.boxoffice - a.boxoffice})});
        }
    }
    // ascending order
    sortByYear = () => {
        if(this.state.showFavorites) {
            this.setState({ renderList: this.props.items.filter(function(a){return a.favorite}).sort(function(a, b){return a.year - b.year})});
        }
        else {
            this.setState({ renderList: this.props.items.sort(function(a, b){return a.year - b.year})});
        }
    }

    // sorts based on original ordering
    revertList = () => {
        if(this.state.showFavorites) {
            this.setState({ renderList: this.props.items.filter(function(a){return a.favorite}).sort(function(a, b){return a.ogIndex - b.ogIndex})});
        }
        else {
            this.setState({ renderList: this.props.items.sort(function(a, b){return a.ogIndex - b.ogIndex})});
        }
    }
    //Exits favorite list to original configuration
    viewOriginalList = () => {
        this.setState({showFavorites: false});
        this.setState({sort: "None"});
        this.setState({type: "All"});
        this.setState({rating: "All"});
        this.setState({ renderList: this.props.items.sort(function(a, b){return a.ogIndex - b.ogIndex})});
    }
      /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
    matchesFilterType = item => {
    // TODO: add conditions to check if item type is equal to selected type
        if(item.type == this.state.type || this.state.type == "All")
            return true;
        else
            return false;
    }

    matchesFilterRating = item => {
    // TODO: add conditions to check if item type is equal to selected type
        if(item.aboveOrBelow3 == this.state.rating || this.state.rating == "All")
            return true;
        else
            return false;
    }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
    filterAndSearch = item => {
        return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item) && this.matchesFilterRating(item);
    }

  render() {
    return (
      <div className="filter-list">
        {/* TODO: Add more menu items with onSelect handlers*/}
        <div class = "top-bar">
            <Jumbotron>
                <h1 class = "header">Film Find</h1>
                <h4 class = "description">View  the Oscar and BAFTA best picture winners of the 21st century</h4>
                <hr class = "rule"/>
            </Jumbotron>
        </div>
        <div className = "buttons-and-bars">


        <Button title = "Favorites" id = "favorites-button" onClick={this.getFavoriteList}>Favorites</Button>
        <Button title = "Reset" id = "reset-button" onClick={this.viewOriginalList}>Original List</Button>

            <div class = "dropdown-buttons">
                <DropdownButton title="Sort" id="dropdown-basic-button">
                    <Dropdown.Item eventKey="None" onSelect={this.onSort} onClick={this.revertList}>
                      None
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Boxoffice" onSelect={this.onSort} onClick={this.sortByBoxOffice}>
                      Boxoffice
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Year" onSelect={this.onSort} onClick={this.sortByYear}>
                      Year
                    </Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Type" id="dropdown-basic-button">
                  <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterType}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Oscar" onSelect={this.onSelectFilterType}>
                    Oscar only
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Bafta" onSelect={this.onSelectFilterType}>
                    Bafta only
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Both" onSelect={this.onSelectFilterType}>
                    Both
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Ebert Rating" id="dropdown-basic-button">
                  <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterRating}>
                    All movies
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Above 3" onSelect={this.onSelectFilterRating}>
                    Above 3
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3 and below" onSelect={this.onSelectFilterRating}>
                    3 and below
                  </Dropdown.Item>
                </DropdownButton>
            </div>
            <input type="text" id ="search-bar" placeholder="Search" onChange={this.onSearch} />
            <hr class = "rule"/>
        </div>


        <div className ="textboxes">
           <ul className = "curr-info">
                <li>
                   <h5>
                        <Container>Sorting method: {this.state.sort}</Container>
                   </h5>
                </li>
                <li>
                   <h5>
                        <Container>Award type: {this.state.type}</Container>
                   </h5>
                </li>
                <li>
                    <h5>
                       <Container>Rating: {this.state.rating}</Container>
                    </h5>
                </li>
            </ul>
        </div>

        <div className = "show-or-no-show">
            <IndicatingFavorites display = {this.state.showFavorites}/>
        </div>

        <List items={this.state.renderList.filter(this.filterAndSearch)} />
    </div>
    );
  }
}

// create filtered array and call sort
export default FilteredList;
