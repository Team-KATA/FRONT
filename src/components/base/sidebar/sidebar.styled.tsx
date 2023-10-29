import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';

import StyledLogo from 'Atoms/logo/logo.styled';

const StyledSidebar = styled.header.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $base_theme_color = Theme.baseTheme.color;
    const $color_key_color = Theme.palette.$color_key_color;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_white = Theme.palette.$color_base_white;

    const $tablet_max_width = Theme.media.$tablet_max_width;
    const $header_desktop_line_height = Theme.size.$header_desktop_line_height;
    const $header_mobile_line_height = Theme.size.$header_mobile_line_height;
    return css`
      position: fixed;
      z-index: 5;
      top: 50%;
      transform: translateY(-50%);

      margin-left: 40px;
      width: 240px;
      height: calc(100% - 80px);
      padding: 60px 20px;
      box-shadow: 0px 24px 52px 0px rgba(30, 30, 30, 0.05),
        0px 95px 95px 0px rgba(30, 30, 30, 0.04),
        0px 213px 128px 0px rgba(30, 30, 30, 0.03),
        0px 379px 152px 0px rgba(30, 30, 30, 0.01),
        0px 592px 166px 0px rgba(30, 30, 30, 0);
      background-color: rgba(255, 255, 255);
      border-radius: 20px;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      gap: 60px;

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;

        .on {
          background-color: ${$color_key_color};
          a {
            color: ${$color_base_white};
          }
          svg {
            color: ${$color_base_white};
          }
        }

        li {
          padding: 10px 20px;
          margin-bottom: 10px;
          font-size: 18px;
          border-radius: 20px;

          &:hover {
            background-color: ${$color_key_color};
            a {
              color: ${$color_base_white};
            }
            svg {
              color: ${$color_base_white};
            }
          }
        }
      }

      a {
        color: ${$color_base_black};
        text-decoration: none;
        display: flex;
        gap: 10px;
        align-items: center;
      }

      svg {
        color: ${$color_key_color};
      }

      ${StyledLogo} {
        width: 160px;
        img {
          cursor: pointer;
        }
      }

      @media screen and (max-width: ${$tablet_max_width}) {
        height: ${$header_mobile_line_height};
        width: 100%;
        padding: 0 5%;

        .Icon {
          display: block;
        }

        ${StyledLogo} {
          a {
            font-size: 20px;
          }
        }
      }
    `;
  }}
`;

StyledSidebar.defaultProps = {};

export default StyledSidebar;
