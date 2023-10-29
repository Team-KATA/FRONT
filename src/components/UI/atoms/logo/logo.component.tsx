import React, { useEffect, useState, useRef } from 'react'; // HOC
import Link from 'next/link';
import StyledLogo from './logo.styled';
import Image, { ImageProps } from 'next/image';

const LogoComponent: React.FC<any> = (props) => {
  return (
    <>
      <StyledLogo>
        <Link href={props.href} style={{ display: 'flex', alignItems: 'center', justifyContent: "start" }}>
          <Image
            src="/img/banner.png"
            width={1200}
            height={310}
            alt="LOGO"
            style={{ width: '90%', height: 'auto' }}
          />
        </Link>
      </StyledLogo>
    </>
  );
};

export default LogoComponent;
