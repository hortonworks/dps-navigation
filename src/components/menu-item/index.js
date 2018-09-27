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

import { h, Component } from "preact";
import style from "./style.scss";
import fontAwesome from "font-awesome/css/font-awesome.css"
import classNames from "classnames";
import mockData from "./../../mock"

export default class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subMenuOpen: this.props.subMenuOpen
        };
        this.handleClick = this.handleClick.bind(this)
    }

    toggleSubMenu(e){
        e.stopPropagation()
        e.preventDefault();
        this.setState({
            subMenuOpen: !this.state.subMenuOpen
        });
    }

    handleClick(e){
        e.stopPropagation()
        this.props.onClick(this.props.menuItem)
    }

    getLink(menuIcon){
        let aProps = {}
        if(this.props.menuItem.external){
            aProps.href = this.props.menuItem.link
            aProps.target = "_blank"
        }
        return ( <a {...aProps}>
            <span className={`${style.menuText}`}>
                {this.props.isActive?<i className={`${style.activeIcon} ${fontAwesome.fa} ${fontAwesome['fa-caret-right']}`}></i>:''}
                <i className={`${style.menuIcon} ${fontAwesome.fa} ${menuIcon}`}></i>
                <span className={style.menuItemText}>
                    {this.props.menuItem.displayName}
                    {this.props.menuItem.subMenu && this.props.menuItem.subMenu.length ?
                    <span onClick={(e)=>this.toggleSubMenu(e)}><i className={`${style.subMenuExpander} ${fontAwesome.fa} ${fontAwesome['fa-angle-down']}`}></i></span>:''}
                </span>
            </span>
        </a>)
    }

    render() {
        let levelClass = style[`level${this.props.depth}`]
        let menuIconClasses = this.props.menuItem.icon? this.props.menuItem.icon.split(" "):[];
        let menuIcon = ''
        menuIconClasses.forEach(element => {
            menuIcon += (` ${fontAwesome[element]}`)
        });
        return(
            this.props.menuItem.external?
            <li className={classNames({[style.active]:this.props.isActive}, {[style.menuItem]:true},
                {[style.subMenuOpen]:this.state.subMenuOpen}, {[style.menuCollapsed]:this.props.collapsed})}>
                {this.getLink(menuIcon)}
                { this.state.subMenuOpen && this.props.menuItem.subMenu && this.props.menuItem.subMenu.length > 0? <ul className={classNames({[style.subMenu]:true},{[`${levelClass}`]:true},)}> {this.props.subMenu} </ul>: '' }
            </li> :
            <li onClick={(e) =>this.handleClick(e)} className={classNames({[style.active]:this.props.isActive}, {[style.menuItem]:true},
                {[style.subMenuOpen]:this.state.subMenuOpen}, {[style.menuCollapsed]:this.props.collapsed})}>
                {this.getLink(menuIcon)}
                { this.state.subMenuOpen && this.props.menuItem.subMenu && this.props.menuItem.subMenu.length > 0? <ul className={classNames({[style.subMenu]:true},{[`${levelClass}`]:true},)}> {this.props.subMenu} </ul>: '' }
            </li>
        )
    }
}
