import React, { Component } from "react";
import Header from "./components/Header";
import FriendCard from "./components/TableRow";
import BuildTable from "./components/BuildTable";
import FriendRow from "./components/Title";
import FilterAndUsage from "./components/FilterAndUsage";
import friends from "./friends-new.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    friendsOrig: [],
    sortBy: "id",
    sortAscending: true,
    filter: ""
  };

  handleSortBy = (id) => {
    console.log (`In handleSortBy,  ID is ${id}`);
    var sortAscending;
    if (this.state.sortBy !== id) {
      // The current sort does not equal new sort.  Clobber sortOrder
      sortAscending = true;
    }

    else if (this.state.sortAscending === true) {
      // User clicked same sort.  Since it was ascending, make it descending (setting sortAscenting to false)
      console.log (`Second case`);
    }

    else {
      // sortAscending needs to be true
      sortAscending = true;
    }

    this.setState (
      {
        sortAscending: sortAscending,
        sortBy: id
      },
      () => {
        console.log (`After setState - sortBy:  ${this.state.sortBy} sortAscending: ${this.state.sortAscending}`);
        this.sortAndFilterFriends ();
      }
    );
  };

  sortAndFilterFriends () {
    const sortBy = this.state.sortBy;
    const sortAscending = this.state.sortAscending;

    var friends2 = this.state.friendsDuplicate;
    var friends = friends2.filter (aFriend => aFriend.searchable.indexOf(this.state.filter) !== -1);

    // Handle sorting.  Based on sortBy and sortOrder, sort by either ascending or descending
    friends.sort((a, b) => {
      let fa;
      let fb;

      switch (sortBy) {
        case "id":
          if (sortAscending) {
            fa = a.id;
            fb = b.id;
          }

          else {
            fb = a.id;
            fa = b.id;
          }
          
          break;

        case "firstName":
          if (sortAscending) {
            fa = a.first_name.toLowerCase();
            fb = b.first_name.toLowerCase();
          }

          else {
            fb = a.first_name.toLowerCase();
            fa = b.first_name.toLowerCase();
          }
          
          break;
  
        case "lastName":
          if (sortAscending) {
            fa = a.last_name.toLowerCase();
            fb = b.last_name.toLowerCase();
          }

          else {
            fb = a.last_name.toLowerCase();
            fa = b.last_name.toLowerCase();
          }
          
          break;

        case "gender":
          if (sortAscending) {
            fa = a.gender.toLowerCase();
            fb = b.gender.toLowerCase();
          }

          else {
            fb = a.gender.toLowerCase();
            fa = b.gender.toLowerCase();
          }
          
          break;
    
          case "city":
            if (sortAscending) {
              fa = a.city.toLowerCase();
              fb = b.city.toLowerCase();
            }
  
            else {
              fb = a.city.toLowerCase();
              fa = b.city.toLowerCase();
            }
            
            break;

          case "country":
            if (sortAscending) {
              fa = a.country.toLowerCase();
              fb = b.country.toLowerCase();
            }
  
            else {
              fb = a.country.toLowerCase();
              fa = b.country.toLowerCase();
            }
            
            break;
      }

      if (fa < fb) {
          return -1;
      }

      if (fa > fb) {
          return 1;
      }

      return 0;
    });

    this.setState (
      {
        friends: friends
      }
      , () => {
        console.log (this.state.friends);
      }
    );
  }

  componentDidMount () {
    // Copy the friends array to friendsDuplicate, and add a concatenated search paramater
    // 'searchable' to it that can be used as a general filter
    var friendsDuplicate = this.state.friends;
    friendsDuplicate.forEach ((element) => {
      element.searchable = `${element.first_name} ${element.last_name} ${element.city} ${element.country} ${element.gender}`;
    });

    this.setState (
      {
        friendsDuplicate: friendsDuplicate
      },
      () => {
        console.log (this.state.friendsDuplicate);
      }
    )
  }

  handleFilterChange = event => {
    this.setState (
      {
        filter: event.target.value
      },
      () => {
        this.sortAndFilterFriends ();
      }
    )
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <main>
        <Header />
        <FilterAndUsage 
          handleFilterChange={this.handleFilterChange}
        />
        <BuildTable
          handleSortBy={this.handleSortBy}
          friends={this.state.friends}
        />
      </main>
    );
  }
}

export default App;
