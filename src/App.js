import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import Favorite from "./Favorite";
import List from "./List";

const movies = [
    {rating: 2,   name: "Gladiator", type: "Both", year: 2000, boxoffice: 460583960, posters: 'gladiator.jpg', favorite: false, ogIndex: 0, aboveOrBelow3: '3 and below' },
    {rating: 3.5, name: "The Lord of the Rings: The Return of the King", type: "Both", year: 2003, boxoffice: 1120424614, posters: 'lord-of-the-rings-return-of-the-king.jpg', favorite: false, ogIndex: 1, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Slumdog Millionaire", type: "Both", year: 2008, boxoffice: 377910544, posters: 'slumdog-millionaire.jpg', favorite: false, ogIndex: 2, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "The Hurt Locker", type: "Both", year: 2009, boxoffice: 49230772, posters: "hurtlocker.jpg", favorite: false, ogIndex: 3, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "The King's Speech", type: "Both", year: 2010, boxoffice: 410867243, posters: "the-king's-speech.jpg", favorite: false, ogIndex: 4, aboveOrBelow3: 'Above 3'  },
    {rating: 4,   name: "The Artist", type: "Both", year: 2011, boxoffice: 133432856, posters: "artist.jpg", favorite: false, ogIndex: 5, aboveOrBelow3: 'Above 3'  },
    {rating: 4,   name: "Argo", type: "Both", year: 2012, boxoffice: 232325503, posters: "argo.jpg", favorite: false, ogIndex: 6, aboveOrBelow3: 'Above 3'  },
    {rating: 3.5, name: "12 Years a Slave", type: "Both", year: 2013, boxoffice: 187733202, posters: "twelve-years-a-slave.jpg", favorite: false, ogIndex: 7, aboveOrBelow3: 'Above 3'  },
    {rating: 4,   name: "A Beautiful Mind", type: "Oscar", year: 2001, boxoffice: 316791257, posters: 'a-beautiful-mind.jpg', favorite: false, ogIndex: 8, aboveOrBelow3: 'Above 3' },
    {rating: 3.5, name: "Chicago", type: "Oscar", year: 2002, boxoffice: 306776732, posters: 'chicago.jpg', favorite: false, ogIndex: 9, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Million Dollar Baby", type: "Oscar", year: 2004, boxoffice: 216763646, posters: 'million-dollar-baby.jpg', favorite: false, ogIndex: 10, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Crash", type: "Oscar", year: 2005, boxoffice: 98410061, posters: 'crash.jpg', favorite: false, ogIndex: 11, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "The Departed", type: "Oscar", year: 2006, boxoffice: 291465034, posters: 'the-departed.jpg', favorite: false, ogIndex: 12, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "No Country for Old Men", type: "Oscar", year: 2007, boxoffice: 171627166, posters: 'no-country-for-old-men.jpg', favorite: false, ogIndex: 13, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Birdman", type: "Oscar", year: 2014, boxoffice: 103215094, posters: "birdman.jpg", favorite: false, ogIndex: 14, aboveOrBelow3: 'Above 3' },
    {rating: 3.5, name: "Spotlight", type: "Oscar", year: 2015, boxoffice: 98275238, posters: "spotlight.jpg", favorite: false, ogIndex: 15, aboveOrBelow3: 'Above 3'  },
    {rating: 4,   name: "Moonlight", type: "Oscar", year: 2016, boxoffice: 65046687, posters: "moonlight.jpg", favorite: false, ogIndex: 16, aboveOrBelow3: 'Above 3'  },
    {rating: 2.5, name: "The Shape of Water", type: "Oscar", year: 2017, boxoffice: 195243464, posters: "shape-of-water.jpg", favorite: false, ogIndex: 17, aboveOrBelow3: '3 and below'  },
    {rating: 3,   name: "Green Book", type: "Oscar", year: 2018, boxoffice: 321752656, posters: "green-book.jpg", favorite: false, ogIndex: 18, aboveOrBelow3: '3 and below'  },
    {rating: 3,   name: "The Lord of the Rings: The Fellowship of the Ring", type: "Bafta", year: 2001, boxoffice: 872491916, posters: 'lord-of-the-rings-fellowship-of-the-ring.jpg', favorite: false, ogIndex: 19, aboveOrBelow3: '3 and below' },
    {rating: 3.5, name: "The Pianist", type: "Bafta", year: 2002, boxoffice: 120072577, posters: 'the-pianist.jpg', favorite: false, ogIndex: 20, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "The Aviator", type: "Bafta", year: 2004, boxoffice: 213719942, posters: 'the-aviator.jpg', favorite: false, ogIndex: 21, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Brokeback Mountain", type: "Bafta", year: 2005, boxoffice: 178062759, posters: 'brokeback-mountain.jpg', favorite: false, ogIndex: 22, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "The Queen", type: "Bafta", year: 2006, boxoffice: 123384128, posters: 'the-queen.jpg', favorite: false, ogIndex: 23, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Atonement", type: "Bafta", year: 2007, boxoffice: 129266061, posters: 'atonement.jpg', favorite: false, ogIndex: 24, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Boyhood", type: "Bafta", year: 2014, boxoffice: 44495281, posters: "boyhood.jpg", favorite: false, ogIndex: 25, aboveOrBelow3: 'Above 3' },
    {rating: 3.5, name: "The Revenant", type: "Bafta", year: 2015, boxoffice: 532950503, posters: "revenant.jpg", favorite: false, ogIndex: 26, aboveOrBelow3: 'Above 3' },
    {rating: 3.5, name: "La La Land", type: "Bafta", year: 2016, boxoffice: 446092357, posters: "la-la-land.jpg", favorite: false, ogIndex: 27, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Three Billboards Outside Ebbing Missouri", type: "Bafta", year: 2017, boxoffice: 159210164, posters: "three-billboards.jpg", favorite: false, ogIndex: 28, aboveOrBelow3: 'Above 3' },
    {rating: 4,   name: "Roma", type: "Bafta", year: 2018, boxoffice: 1148031, posters: "roma.jpg", favorite: false, ogIndex: 29, aboveOrBelow3: 'Above 3' }
];

const iconPaths = {
  uncolored: "../src/Favorite Icons/popcorn-uncolored.png",
  colored: "../src/Favorite Icons/popcorn-colored.png"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items = {movies} />
    </div>
    );
  }
}

export default App;
