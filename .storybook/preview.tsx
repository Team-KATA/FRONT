import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '../styles/global.styles';
import NextImage from 'next/image';
import { Router, useRouter } from 'next/router';

import AosInitializer from '../src/components/HOC/aosWrapper/initializer';

import '../styles/init.css';

const OriginalNextImage = NextImage;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    // const router = useRouter();
    // const [isRouterReady, setIsRouterReady] = React.useState(false);

    // React.useEffect(() => {
    //   if(router.isReady) setIsRouterReady(true);
    // }, []);

    // const getLayout = Story.getLayout ?? (page => page);

    return (
        <ThemeProvider theme={GlobalStyle}>
          <Head>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
            />
            <link rel="stylesheet" href="/global.css" />
          </Head>
          <AosInitializer>
            <Story />
          </AosInitializer>
        </ThemeProvider>
      // isRouterReady && (
      //   getLayout(
      //   )
      // )
    )
  },
];
