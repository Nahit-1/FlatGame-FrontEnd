import React from 'react';
import Search from './Search';
import Filter from './Filter';
import { Menu } from 'semantic-ui-react';

const Nav = (props) => {
    return (
        <div>
        <Menu className="fixed-top">
        <Menu.Item>
          <h1>FlatGame</h1>
        </Menu.Item>
        <Menu.Item >
          <Filter handleFilter={props.handleFilter}/>
        </Menu.Item>
        <Menu.Item position="right">
          <Search handleSearch={props.handleSearch} search={props.search}/>
        </Menu.Item>
        </Menu>
        </div>
    )
}

export default Nav
