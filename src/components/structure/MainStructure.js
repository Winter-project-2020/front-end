// 매 페이지 마다 Header를 import 하면 비효율적 
// 페이지 구조를 만들어주는 페이지 
import React from 'react'
import styles from './MainStructure.scss';
import classNames from 'classnames/bind';
import Header from '../views/Header/Header';

const cx = classNames.bind(styles);

function MainStructure({ children }) {
    return (
        <div>
            <Header />
            <main>{ children }</main>            
        </div>
    );
}

export default MainStructure;
