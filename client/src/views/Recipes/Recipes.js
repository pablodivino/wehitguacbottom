import React, { Component } from "react";
import RecipeListItem from "../../components/RecipeListItem";
var axios = require("axios");


class Recipes extends Component {
  state = {
    search: "",
    ingredientList: [],
    searchResults: [],
    favoriteRecipes: []
  }

  componentDidMount() {
    var listIngredientsUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
    axios.get(listIngredientsUrl)
      .then(response => {
        // object.values inside of the map function creates and array of arrays instead of an array of objects
        // -- object.values just creates an array that contains the values of everything inside the object
        // -- [0] returns the first element of the array --> the array here only has one element, which is a single ingredient
        var ingredientList = response.data.drinks.map(ingredient => Object.values(ingredient)[0]);
        this.setState({ ingredientList })
      })
      .then(() => {
        return axios.get("/api/favorite/get/1")
      })
      .then(response => {
        var favoriteRecipes = response.data.favoriteRecipes.slice(2, -2).split(", ");
        this.setState({ favoriteRecipes })
        //  console.log(favoriteRecipes)
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Clicked")
    // console.log(this.state.search)
    var searchByIngredientsUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.search}`;
    axios.get(searchByIngredientsUrl)
      .then(response => {
        var searchResults = response.data.drinks;
        this.setState({ searchResults })
      })
  }

  handleInputChange = (event) => {
    // gets name and value out of event.target and creates new variables
    // destructured notation -- look this up
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFavorite = (drinkId) => {
    // console.log("clicked")
    const { favoriteRecipes } = this.state;
    if (this.state.favoriteRecipes.includes(drinkId)) {
      // splice takes two arguments --> (starting index, how many elements to remove from the starting index) and removed them from anywhere in the array
      // removes from the right, if negative no elements are removed
      // get index of the drink in the favorite recipes array
      // then splice => 1 element
      favoriteRecipes.splice(favoriteRecipes.indexOf(drinkId), 1)
    } else {
      favoriteRecipes.push(drinkId)
    }
    axios.put("/api/favorite/update", {
      UserId: 1,
      favoriteRecipes: JSON.stringify(favoriteRecipes)
    })
    this.setState({ favoriteRecipes })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">Search</label> <br />
            <input list="ingredients" name="search" placeholder="Ingredient..." value={this.state.search} onChange={this.handleInputChange} />
            <datalist id="ingredients">
              {this.state.ingredientList.map((ingredient, i) => <option value={ingredient} key={i} />)}
            </datalist>
            <input type="submit" />
          </form>
        </div>
        <div className="row">

          {this.state.searchResults.map(drank =>
            <RecipeListItem
              key={drank.idDrink}
              id={drank.idDrink}
              name={drank.strDrink}
              image={drank.strDrinkThumb}
              favorite={this.state.favoriteRecipes.includes(drank.idDrink)}
              handleFavorite={this.handleFavorite}
            />
          )}

        </div>
      </div>

    )
  }
};

export default Recipes;
