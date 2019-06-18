import React from 'react';

const Filter = (props) => {
  return (
    <div>
        <h4> Filter By Rating </h4>
        <select placeholder="Filter by average rating" onChange={props.handleFilter}>
        <option>No Filter</option>
        <option value="60">60</option>
        <option value="65">65</option>
        <option value="70">70</option>
        <option value="75">75</option>
        <option value="80">80</option>
        <option value="85">85</option>
        <option value="90">90</option>
        <option value="95">95</option>
        </select>
    </div>
  )
}

export default Filter