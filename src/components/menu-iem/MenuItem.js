import React from 'react';
import styled from 'styled-components';
import './Menu-item.scss';
import { withRouter } from 'react-router';
// import Link from 'react-rou'

const DirectDiv = styled.div`
  .background-image {
    height: 100%;
    width: 100%;
    background: url(${(props) => props.image}) center/cover;
  }
`;

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <DirectDiv
      image={imageUrl}
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className='background-image' />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </DirectDiv>
  );
};

export default withRouter(MenuItem);
