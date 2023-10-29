import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import HotListComponent from './hotList.component';

export interface HotListItemT {
  id: number;
  text: string;
  count: number;
  sentiment: 'green' | 'yellow' | 'red';
}

export interface HotListPropsType {
  list: HotListItemT[];
}

const HotList: React.FC<HotListPropsType> = (
  props: HotListPropsType,
) => {
  return (
    <>
      <HotListComponent {...props} />
    </>
  );
};

export default HotList;
