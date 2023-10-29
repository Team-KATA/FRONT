import React, { useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import { Header } from 'Bases';
import Sidebar from 'Bases/sidebar';
import { Toast } from 'Bases';

import StyledMain from './styledMain';
import { Get } from 'Utils';
import { authLogout, authLogin } from 'Actions/authAction';
import jwt from 'jwt-decode';
import { AuthProfileType } from 'Types/authTypes';
import useMethod from 'Hooks/useMethod';
import { pushToastAsync } from 'Actions/toastAction';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faNewspaper,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

const ProviderLayout: React.FC<any> = ({ children }) => {
  // const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Header
        navList={{
          default: [
            {
              url: '',
              text: (
                <>
                  <FontAwesomeIcon icon={faHouse as IconProp} />
                  <span>홈</span>
                </>
              ),
            },
            {
              url: '',
              text: (
                <>
                  <FontAwesomeIcon icon={faNewspaper as IconProp} />
                  <span>뉴스 모아보기</span>
                </>
              ),
            },
            {
              url: '',
              text: (
                <>
                  <FontAwesomeIcon icon={faChartLine as IconProp} />
                  <span>여론 예측</span>
                </>
              ),
            },
          ],
        }}
      />
      <StyledMain>{children}</StyledMain>
      <Toast />
    </>
  );
};

export default ProviderLayout;
