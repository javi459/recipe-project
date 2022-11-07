import React, { useState } from "react";

function RecipeCreate({ setRecipes, recipes, newRecipes, createNewRecipes }) {
// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initalFormState = { name: "", cuisine: "", photo: "", ingredients: "", preparation: ""}
  
  const [formData, setFormData] = useState(initalFormState);
  
  const inputTextHandler = ({ target }) => {
    setFormData({
      ...formData, [target.name]: target.value,
    })
  };
  
  // submit handler
  const submitCreateHandler = (event) => {
    event.preventDefault()
    createNewRecipes(formData)
    setFormData(initalFormState)
  };
  
  
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr> 
            <td> 
              <input 
                onChange={inputTextHandler}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                required
              />
            </td>
            <td> 
              <input 
                onChange={inputTextHandler}
                type="text"
                name="cuisine"
                value={formData.cuisine}
                placeholder="Cuisine"
                required
              /> 
            </td>
            <td> 
              <input 
                onChange={inputTextHandler}
                type="text"
                name="photo"
                value={formData.photo}
                placeholder="URL"
                required
              />
            </td>
            <td>
              <textarea 
                onChange={inputTextHandler}
                name="ingredients"
                value={formData.ingredients}
                placeholder="Ingredients"
                required
              />
            </td>
            <td>
              <textarea 
                onChange={inputTextHandler}
                name="preparation"
                value={formData.preparation}
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button onClick={submitCreateHandler} type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;