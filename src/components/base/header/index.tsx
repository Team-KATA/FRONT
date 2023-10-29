import { authLogout, authHeader } from 'Actions/authAction';
import Router, { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import { pushToastAsync } from 'Actions/toastAction';

import HeaderComponent from './header.component';
import useMethod from 'Hooks/useMethod';
import { getDefaultCompilerOptions } from 'typescript';

export interface NavListItemType {
  url: string;
  text: any;
}

export interface NavListType {
  default: NavListItemType[];
}

export interface HeaderPropsType {
  navList: NavListType;
  // academyName: string;
}

const Header: React.FC<HeaderPropsType> = (props) => {
  const router = useRouter();
  const method = useMethod();

  return <HeaderComponent {...props} />;
};

export default Header;
