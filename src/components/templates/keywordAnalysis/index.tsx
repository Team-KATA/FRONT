
import useMethod from 'Hooks/useMethod';
import { Get } from 'Utils';
import React, { useEffect } from 'react';
import KeywordAnalysisComponent from './keywordAnalysis.component';
import { useRouter } from 'next/router';

export interface KeywordAnalysisPropsType {
  queryId: string;
}

export default function KeywordAnalysisTemplate(props) {
  const router = useRouter();

  return (
    <>
      <KeywordAnalysisComponent queryId={router.query.id} {...props} />
    </>
  );
};
