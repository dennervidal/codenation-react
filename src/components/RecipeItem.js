import React from 'react'

const highlighter = (word, term) => {
    let text = new RegExp(`(${term})`, 'gi');
    let e = word.split(text);

    return e.map((item, i) => !text.test(item)? item: <mark key={i}>{item}</mark>);
};

const RecipeItem = ({recipe, light}) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title">{light !== ""? highlighter(recipe.title, light): recipe.title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{light !== ""? highlighter(recipe.ingredients, light): recipe.ingredients}
                </p>
            </div>
        </div>
    </div>
);

export default RecipeItem;