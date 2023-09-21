import React, { useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import { Header, Footer } from 'Bases';
import { Toast } from 'Bases';

import StyledMain from './styledMain';
import { Get } from 'Utils';
import { authLogout, authLogin } from 'Actions/authAction';
import jwt from 'jwt-decode';
import { AuthProfileType } from 'Types/authTypes';
import useMethod from 'Hooks/useMethod';
import { pushToastAsync } from 'Actions/toastAction';

const ProviderLayout: React.FC<any> = ({ children }) => {
  // const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <StyledMain>{children}</StyledMain>
      <Toast />
    </>
  );
};

export default ProviderLayout;
