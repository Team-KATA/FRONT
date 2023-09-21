import React, { useState, useCallback, useEffect } from 'react';
import Logo from 'Atoms/logo';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { nanoid } from 'nanoid';
import Link from 'next/link';

import StyledTitleBanner, { BoardTabWrapper } from './titleBanner.styled';
import AosWrapper from 'Hoc/aosWrapper';

import { TitleBannerPropsType } from '.';

import Layout from 'Layouts';
import SmallGallery from 'Molecules/smallGallery';
import Move from 'Atoms/move';

const TitleBannerComponent: React.FC<TitleBannerPropsType> = (
  props: TitleBannerPropsType,
) => {
  return (
    <>
      <StyledTitleBanner style={{ background: props.imgSrc }}>
        <Layout.Container
          style={{
            display: 'flex',
            flexFlow: 'column',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          <Layout.Content>
            <div className="gal">
              <SmallGallery title="공지" list={props.noticeList} limit={4} />
            </div>
          </Layout.Content>

          <Layout.Content>
            <div className="gal">
              <SmallGallery title="소식" list={props.storyList} limit={4} />
            </div>
          </Layout.Content>
          
        </Layout.Container>
      </StyledTitleBanner>
    </>
  );
};

export default TitleBannerComponent;
