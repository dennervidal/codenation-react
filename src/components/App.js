import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {

    constructor(props) {
        super(props);
        this.recipes = recipes.results;
        this.state = {
            searchString: ''
        };
    }

    setSearch(string){
        this.setState({searchString: string});
    }

    testWord(word) {
        let term = new RegExp(this.state.searchString, 'gi');
        return term.test(word.ingredients) || term.test(word.title);
    }

    render() {
        const recipeItems = this.recipes.filter((item) => this.testWord(item)
        ).map((item, key) => <RecipeItem recipe={item} light={this.state.searchString} key={key}/>
        );
        return (
            <div className="App">
                <Navbar setSearch={this.setSearch.bind(this)} searchString={this.state.searchString}/>
                <div className="container mt-10">
                    <div className="row">
                        {recipeItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
