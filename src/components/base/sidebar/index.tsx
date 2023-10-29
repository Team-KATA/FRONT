import { authLogout, authHeader } from 'Actions/authAction';
import Router, { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import { pushToastAsync } from 'Actions/toastAction';

import SidebarComponent from './sidebar.component';
import useMethod from 'Hooks/useMethod';

export interface HeaderPropsType {}

const Sidebar: React.FC<HeaderPropsType> = (props) => {
  const router = useRouter();
  const method = useMethod();
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [academy, setAcademy] = useState<any>(false);

  return <SidebarComponent />;
};

export default Sidebar;
