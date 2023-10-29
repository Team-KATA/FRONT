import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faUser, faLock, faNewspaper } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';

import { HotListPropsType } from '.';
import StyledHotList from './hotList.styled';
import Link from 'next/link';

const HotListComponent: React.FC<HotListPropsType> = (
  props: HotListPropsType,
) => {
  return (
    <>
      <StyledHotList {...props}>
        <h3>실시간 HOT 키워드</h3>
        <ul>
          {props.list.map((item, i) => {
            return (
              <Link href={`/keyword/analysis/${item.id}`} key={item.id}>
                {/* <li> */}
                  <div className="d-group">
                    <span className="num">{i + 1}</span>
                    <div className="s-group">
                      <div className={`sentiment ${item.sentiment}`}></div>
                      <span className="keyword">{item.text}</span>
                    </div>
                  </div>
                  <span className="count">{item.count}개</span>
                {/* </li> */}
              </Link>
            );
          })}
        </ul>
      </StyledHotList>
    </>
  );
};

export default HotListComponent;
