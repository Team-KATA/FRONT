import React, { useEffect, useState, useCallback } from 'react';

import { HomeTemplatePropsType } from '.';
import StyledHome from './home.styled';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faNewspaper,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { Container } from 'src/components/layout';
import Title from 'Atoms/title';
import HotList from 'Organisms/hotList';

const HomeComponent: React.FC<HomeTemplatePropsType> = (props) => {
  return (
    <StyledHome>
      <Title>
        <FontAwesomeIcon icon={faHouse as IconProp} /> 홈
      </Title>
      <HotList list={[
        {
          id: 1,
          text: '육군',
          count: 100,
          sentiment: 'green',
        },
        {
          id: 2,
          text: '미국',
          count: 100,
          sentiment: 'yellow',
        },
        {
          id: 3,
          text: '북한',
          count: 100,
          sentiment: 'red',
        },
      ]} />
    </StyledHome>
  );
};

export default HomeComponent;
