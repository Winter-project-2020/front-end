import React, { useState } from 'react'
import styles from './myPage.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AiFillLeftCircle } from 'react-icons/ai';
import { Button } from 'react-bootstrap';


const cx = classNames.bind(styles);

function myPage({ history }) {

    // const go = () => {

    //     this.props.history.go(1);
    // };
    // const goBack = () => {
    //     this.props.history.goBack();
    // };



    return (
        <div className="myPage">
            <div className="myPage-header">
                <Button 
                    className={cx("btn-goBack")} 
                    type="button"  
                    onClick={() => {
                        history.goBack();
                    }} >
                   <AiFillLeftCircle />
                </Button>
            </div>

            <div className={cx("myPage-sidebar")}>
                <span 
                    role="presentation"
           
               
                    >사이드바 접기</span>
            </div>

            <div className={cx("myPage-content")}>
            </div>
        
        </div>
    );
}

export default myPage;
