import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

import { shadow, media } from '../../../lib/styleUtil';
import { FaUserAlt, FaRegThumbsUp, FaRegCalendarAlt, FaRegChartBar } from 'react-icons/fa';


// 고정
const Positioner = styled.div`
    position: fixed;
  
    left: 0;
    width: 25%;
    height: 100%;
    margin-top: 58px;
    background: ${oc.gray[5]};
    ${shadow(1)};
`;

const Label = styled.div`
    font-size: 1.125rem;
    color: ${oc.gray[7]};
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    
    
    line-height: 2rem;
    
    padding-left: 1rem;
    padding-right: 2rem;
`;

function myPage() {

    

    // const go = () => {

    //     this.props.history.go(1);
    // };
    // const goBack = () => {
    //     this.props.history.goBack();
    // };


    return (
        <Positioner>
            <Label><FaUserAlt /> Edit Profile</Label>
            <Label><FaRegThumbsUp /> 추천 토픽</Label>
            <Label><FaRegCalendarAlt /> 시험 일정</Label>
            <Label><FaRegChartBar /> 성적 관리</Label>
        </Positioner>
    );
}

export default myPage;
