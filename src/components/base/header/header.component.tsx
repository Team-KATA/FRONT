import React, { useState, useCallback, useEffect } from 'react';
import Logo from 'Atoms/logo';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faNewspaper } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';

import Link from 'next/link';
import CheckRole from 'Hoc/checkRole';
import Image from 'next/image';

import { HeaderPropsType, NavListType, NavListItemType } from '.';
import StyledHeader, { NavList } from './header.styled';
import { useRouter } from 'next/router';

const HeaderComponent: React.FC<HeaderPropsType> = (props) => {
  const [navState, setNavState] = useState(false);

  const handleNavState = useCallback(() => {
    setNavState((state) => !state);
  }, [navState]);

  return (
    <StyledHeader className="header">
      <Logo href="/">
        <Image src="/logo.gif" layout="responsive" alt="" />
      </Logo>

      <NavList isOpen={navState}>
        <ul>
          <li>
            <span>안녕하세요.</span>
            <FontAwesomeIcon
              icon={faXmark as IconProp}
              className="Icon"
              onClick={handleNavState}
            />
          </li>

          <div onClick={handleNavState}>
            {props.navList?.default?.map((item: NavListItemType) => {
              return (
                <Link key={nanoid()} href={item.url}>
                  {item.text}
                </Link>
              );
            })}
          </div>
        </ul>
      </NavList>
      <div 
        className="icon-wrapper" 
        onClick={handleNavState}
      >
        <FontAwesomeIcon icon={faBars as IconProp} className="Icon" />
      </div>
    </StyledHeader>
  );
};

export default HeaderComponent;
