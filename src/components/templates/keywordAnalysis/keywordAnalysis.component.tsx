import React, { useEffect, useState, useCallback } from 'react';

import { nanoid } from 'nanoid';

import { KeywordAnalysisPropsType } from '.';
import StyledKeywordAnalysis from './keywordAnalysis.styled';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faNewspaper,
  faChartLine,
  faGlasses,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import { Container } from 'src/components/layout';
import Title from 'Atoms/title';
import HotList from 'Organisms/hotList';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function KeywordAnalysisComponent(
  props: KeywordAnalysisPropsType,
) {
  const line_chart_data = {
    options: {
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      forecastDataPoints: {
        count: 2,
      },
      annotations: {
        xaxis: [
          {
            x: 1996,
            borderColor: '#f00',
            label: {
              borderColor: '#f00',
              style: { color: '#fff', background: '#f00' },
              text: '예측',
            },
          },
        ],
      },
      chart: {
        toolbar: {
          show: false,
        }
      }
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  const pie_chart_data = {
    options: {
      chart: {
        toolbar: {
          show: false,
        }
      },
      labels: ['긍정적', '부정적'],
      colors:['rgb(46, 204, 113)', '#e74c3c']
    },
    series: [30, 70],
  };

  return (
    <StyledKeywordAnalysis>
      <Title>
        <FontAwesomeIcon icon={faGlasses as IconProp} /> 키워드 분석
      </Title>
      {/* <h1>{props.queryId}</h1> */}

      <div className="keyword">
        <div className="sentiment"></div>
        <h1>이스라엘</h1>
      </div>

      <div className='wrapper chart'>
        <Title>여론 추이 및 예측</Title>
        <Chart options={line_chart_data.options} series={line_chart_data.series} type="line" />
      </div>

      <div className='wrapper'>
        <Title>여론 분석</Title>

        <div className='sentiment-analysis'>
          <span>해당 키워드의 여론</span>
          <p className="sentiment-text">
            <div className="sentiment"></div>
            <span>부정적</span>
          </p>
        </div>

        <div className='sentiment-analysis'>
          <span>키워드 긍정도</span>
          <Chart options={pie_chart_data.options} series={pie_chart_data.series} type="pie" />
        </div>
      </div>

      <div className='wrapper'>
        <Title>관련 기사</Title>

        <ul className="news">
          {
            [...new Array(10)].map((item, i) => {
              return (
                <li key={nanoid()}>
                  <div className='upper'>
                    <div className='article-title'>
                      <div className="sentiment"></div>
                      <span className='title'>새벽에 쏜 순항미사일, 백령도 노렸나 南점령</span>
                    </div>
                    <div className='article-date'>
                      <span className="date">2023.09.02. 오후 3:01</span>
                      <span className="media">서울경제</span>
                    </div>
                  </div>

                  <div className='lower'>
                    <span className='feeling'>#공포</span>
                    <span className='summarize'>요약 <FontAwesomeIcon icon={faChevronRight as IconProp} /></span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className='wrapper'>
        <Title>SNS 반응</Title>

        <ul className="news">
          {
            [...new Array(5)].map((item, i) => {
              return (
                <li key={nanoid()}>
                  <div className='upper'>
                    <div className='article-title'>
                      <div className="sentiment"></div>
                      <span className='title'>새벽에 쏜 순항미사일, 백령도 노렸나 南점령</span>
                    </div>
                    <div className='article-date'>
                      <span className="date">2023.09.02. 오후 3:01</span>
                      <span className="media">인스타그램</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </StyledKeywordAnalysis>
  );
}
