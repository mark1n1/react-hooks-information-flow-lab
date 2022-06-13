import React from 'react';

function Filter({onCategoryChange, selectedCategory}) {
  function handleOnCategoryChange(event) {
    const category = event.target.value;
    
    onCategoryChange(category);
  }

  return (
    <div className="Filter">
        <select name="filter" onChange={handleOnCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
  );
}

export default Filter;