import React from 'react';
import './Nav.css';

const Nav = () => {
    return(
        <div className="menu">
            <div className="menuInner">
                <li>
                    <div>menu1</div>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </li>
                <li>
                    <div>menu2</div>
                    <ul>
                        <li>2</li>
                        <li>2</li>
                        <li>2</li>
                    </ul>
                </li>
                <li>
                    <div>menu3</div>
                    <ul>
                        <li>3</li>
                        <li>3</li>
                        <li>3</li>
                    </ul>
                </li>
                <li>
                    <div>menu4</div>
                    <ul>
                        <li>4</li>
                        <li>4</li>
                        <li>4</li>
                    </ul>
                </li>
            </div>
            <div id="bg"></div>
        </div>
    );
}

export default Nav;

