import React from 'react';
import Search from './Search';
import RatingFilter from './RatingFilter';
import GenreFilter from './GenreFilter';
import { Menu } from 'semantic-ui-react';

const Nav = (props) => {
    return (
        <div>
        <Menu className="fixed-top">
        <Menu.Item>
          <h1>FlatGame</h1>
        </Menu.Item>
        <Menu.Item >
          <RatingFilter handleRatingFilter={props.handleRatingFilter}/>
        </Menu.Item>
        <Menu.Item >
          <GenreFilter handleFilter={props.handleFilter}/>
        </Menu.Item>
        <Menu.Item position="right">
          <Search handleSearch={props.handleSearch} search={props.search}/>
        </Menu.Item>
        </Menu>
        </div>
    )
}

export default Nav
