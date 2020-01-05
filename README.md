This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run code

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Interface explanation

Our interface provides a convenient way to view the Oscar and Bafta best picture winners of the 21st century. The interface provides the ability to sort by box office or year, filter by Oscar or Bafta, and filter by Roger Ebert ratings. There is also a search bar to search for a particular movie, as well as a favoriting functionality which allows the user to favorite movies and filter by the favorited ones.

### App

App is our highest level component. A movies array from App gets passed to FilteredList as a prop.

### FilteredList

In FilteredList, we create a List object, which is a component of the List class. This populates the screen with a list of movie cards.

### List

In List, we create a Favorite object and set the layout for each movie card in the list.

### Favorite

In Favorite, we have states for the favorite and color which change based on the user clicking the favorite icon.


## Design Principles

The movies are organized into three columns, which allows the user to browse multiple movies without being overwhelmed with information. Each movie card has a poster that shows the title and a picture. The year, Ebert rating and box office values are displayed underneath each movie poster.  

We also incorporated many visual design principles in our design. We decided to make the background a deep blue color and used a bright yellow for the text. This color palette provides great contrast which makes it easy for the human eye to read the text. The favoriting buttons also turn yellow when clicked, which goes along with the color palette. The buttons are a muted red, which contrasts with the blue yet provides a different color than the yellow. There are also two dividers for the headers, which gives a sense of a hierarchical structure.

## Usefulness

We believe our interface provides a unique and interesting way to view the Oscar and Bafta best picture winners of the 21st century. This may be useful for movie directors and producers who are interested in understanding which types of movies performed well both in terms of ratings and box office numbers.
