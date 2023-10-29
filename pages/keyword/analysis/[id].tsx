import React, { useState, useCallback, useEffect } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import HomeTemplate from 'Templates/home';
import KeywordAnalysisTemplate from 'Templates/keywordAnalysis';
import useMethod from 'Hooks/useMethod';

import { Get } from 'Utils';

const AnalysisPage: NextPage<any> = (ctx) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE} | 키워드 분석</title>
      </Head>
      <KeywordAnalysisTemplate/>
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

export default AnalysisPage;
