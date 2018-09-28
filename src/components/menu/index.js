/*
 * Copyright (c) 2018, Hortonworks Inc.  All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied.  See the License for the specific language governing permissions and limitations
 * under the License.
 */

import { h, Component, Fragment } from "preact";
import style from "./style.scss";
import fontAwesome from "font-awesome/css/font-awesome.css"
import classNames from "classnames";
import mockData from "./../../mock"
import MenuItemWidget from "../menu-item";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapseOnInit ? props.collapseOnInit : false,
      menu: [],
      activeMenuItem: {}
    };
    this.setActive = this.setActive.bind(this)
  }

  toggleSideNav() {
    this.setState({
      collapsed: !this.state.collapsed
    });
    if(this.state.collapsed && typeof this.props.onCollapse === 'function') {
      this.props.onCollapse();
    }else if(!this.state.collapsed && typeof this.props.onExpand === 'function') {
      this.props.onExpand();
    }
  }

  setActive(menuItem) {
    let link = `${menuItem.prefix}${menuItem.link}`
    if(this.props.navigate && typeof this.props.navigate === 'function') {
      this.props.navigate(link, this.props.urlPrefix !== menuItem.prefix);
    } else {
      window.location.href = link;
    }
    console.log('Active menu item', menuItem);
    this.setState({activeMenuItem: menuItem});
  }

  getMenuItems(menu, depth=0){
    return menu.map(menuItem => {
      let currentDepth = menuItem.subMenu && menuItem.subMenu.length? depth+1 : depth;
      this.markMenusToOpen(menuItem, menuItem.subMenu);
      console.log('is active menu id', this.state.activeMenuItem.id === menuItem.id)
      console.log('is href', window.location.href.endsWith(menuItem.link))
      return(
        <MenuItemWidget onClick={this.setActive} menuItem={menuItem} depth={depth+1}
        subMenuOpen={menuItem.subMenuOpen}
        isActive={this.state.activeMenuItem.id === menuItem.id || window.location.href.endsWith(menuItem.link)}
        subMenu={menuItem.subMenu && menuItem.subMenu.length ? this.getMenuItems(menuItem.subMenu, currentDepth):''}
        collapsed={this.state.collapsed}/>
      )
    })
  }

  markMenusToOpen(menuItem, subMenu) {
    if(!subMenu || subMenu.length === 0){
      return;
    }else {
      subMenu.forEach(subMenuItem => {
        this.markMenusToOpen(subMenuItem, subMenuItem.subMenu);
        if(window.location.href.endsWith(subMenuItem.link)){
          menuItem.subMenuOpen = true;
        }
      });
    }
  }

  componentWillMount() {
    let promise = this.props.standalone ? this.getMenu() : fetch('/api/menu').then(result => result.json())
    promise.then(menuJson => {
      this.setState({menu: menuJson})
    }).catch(error => {
      console.error(error);
      if(typeof this.props.onError === 'function'){
        this.props.onError();
      }
    });
  }

  getMenu(){
    return new Promise((resolve, reject) => resolve(mockData))
  }

  render(props) {
    let menu = this.state.menu
    return (
      <div className={classNames({[style.navContainer]: true, [style.collapsed]: this.state.collapsed})}>
        <div className={style.dpLogo}>
          <a href="">
            <img className={style.logoImg} src={`/assets/images/dp-logo.png`}></img>
            <div>Hortonworks</div>
            <div>DataPlane</div>
          </a>
        </div>
        <ul className={style.menu}>
          { this.getMenuItems(menu, 0) }
        </ul>
        <div onClick={()=>this.toggleSideNav()}  className={style.expander}>
          {
            this.state.collapsed ?
            <i className={`${fontAwesome.fa} ${fontAwesome['fa-angle-double-right']}`}></i> :
            <i className={`${fontAwesome.fa} ${fontAwesome['fa-angle-double-left']}`}></i>
          }
        </div>
      </div>
    );
  }
}

