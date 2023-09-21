import useMethod from 'Hooks/useMethod';
import { Get } from 'Utils';
import React, { useEffect } from 'react';
import HomeComponent from './home.component';

export interface HomeTemplatePropsType {
  imgSrc: string;
}

const HomeTemplate: React.FC<HomeTemplatePropsType> = (props) => {
  return (
    <>
      <HomeComponent {...props} />
    </>
  );
};

export default HomeTemplate;
