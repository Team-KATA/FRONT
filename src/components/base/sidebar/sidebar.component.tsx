import React, { useState, useCallback, useEffect } from 'react';
import Logo from 'Atoms/logo';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faNewspaper,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';

import Link from 'next/link';
import CheckRole from 'Hoc/checkRole';
import Image from 'next/image';

import StyledSidebar from './sidebar.styled';
import { useRouter } from 'next/router';

const SidebarComponent: React.FC<any> = (props) => {
  const router = useRouter();
  const [navState, setNavState] = useState<number>(1);
  const navMap = {
    '/': 1,
    '/2': 2,
    '/3': 3,
  };

  useEffect(() => {
    setNavState(navMap[router.asPath])
  }, [router]);

  return (
    <StyledSidebar>
      <Logo href="/">{process.env.NEXT_PUBLIC_TITLE}</Logo>

      <ul>
        <li className={navState == 1 ? 'on' : 'off'}>
          <Link href="/">
            <FontAwesomeIcon icon={faHouse as IconProp} />홈
          </Link>
        </li>

        <li className={navState == 2 ? 'on' : 'off'}>
          <Link href="/">
            <FontAwesomeIcon icon={faNewspaper as IconProp} />
            뉴스 모아보기
          </Link>
        </li>

        <li className={navState == 3 ? 'on' : 'off'}>
          <Link href="/">
            <FontAwesomeIcon icon={faChartLine as IconProp} />
            여론 예측
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
};

export default SidebarComponent;
