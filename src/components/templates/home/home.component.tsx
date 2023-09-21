import React, { useEffect, useState, useCallback } from 'react';

import { HomeTemplatePropsType } from '.';
import StyledHome from './home.styled';

import { Container } from 'src/components/layout';
import Title from 'Atoms/title';

const HomeComponent: React.FC<HomeTemplatePropsType> = (props) => {
  return (
    <StyledHome>
      <Title>KATA | 홈</Title>
    </StyledHome>
  );
};

export default HomeComponent;
