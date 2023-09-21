import React, { useState, useCallback, useEffect } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import HomeTemplate from 'Templates/home';
import useMethod from 'Hooks/useMethod';

import { Get } from 'Utils';

const HomePage: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 홈</title>
      </Head>
      <HomeTemplate
        imgSrc="/img/main_bg.svg"
      />
    </>
  );
};

// export async function getServerSideProps(ctx: NextPageContext) {
//   const {
//     req,
//     query: { id },
//   } = ctx;
//   return { props: null };
// }

export default HomePage;
