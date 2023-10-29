import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'styles/global.styles';
import StyledTitle from 'Atoms/title';

const StyledKeywordAnalysis = styled.article.attrs((props) => {})`
  ${(props) => {
    const Theme = props.theme;
    const $color_base_white = Theme.palette.$color_base_white;
    const color_base_gray = Theme.palette.$color_base_gray;
    const $color_base_black = Theme.palette.$color_base_black;
    const $color_base_dark = Theme.palette.$color_base_dark;
    const $color_key_color = Theme.palette.$color_key_color;
    const color_key_dark = Theme.palette.$color_key_dark;
    const color_base_LightGray = Theme.palette.$color_base_LightGray;
    const color_base_line = Theme.palette.$color_base_line;

    const color_failure = Theme.palette.$color_failure;

    return css`
      min-height: 100vh;
      // background-color: ${$color_base_white};
      padding-top: 20px;

      ${StyledTitle} {
        font-size: 2rem !important;
      }

      .keyword {
        display: flex;
        align-items: center;
        gap: 10px;

        margin-top: 20px;

        .sentiment {
          width: 20px;
          height: 20px;
          background-color: ${color_failure};
          border-radius: 100%;
        }

        h1 {
          margin: 0;
          font-weight: bold;
        }
      }

      .wrapper {
        padding: 20px;
        border-radius: 12px;
        background-color: #fff;
        margin-top: 20px;
        
        &.chart{
          padding-bottom: 0px;
        }

        /* BS */
        box-shadow: 0px 24px 52px 0px rgba(30, 30, 30, 0.05),
          0px 95px 95px 0px rgba(30, 30, 30, 0.04),
          0px 213px 128px 0px rgba(30, 30, 30, 0.03),
          0px 379px 152px 0px rgba(30, 30, 30, 0.01),
          0px 592px 166px 0px rgba(30, 30, 30, 0);

        ${StyledTitle} {
          font-size: 18px !important;
          margin-bottom: 10px;
        }
      }


      .sentiment-analysis{
        margin-bottom: 20px;

        span {
          font-weight: bold;
        }

        .sentiment-text{
          display: flex;
          align-items: center;
          gap: 4px;
          margin: 10px 0 0 0;

          .sentiment {
            width: 10px;
            height: 10px;
            background-color: ${color_failure};
            border-radius: 100%;
          }
          
          span {
            color: ${color_failure};
            font-size: 1rem;
            font-weight: medium;
          }
        }


      }

      .news{
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          padding-bottom: 10px;
          margin-bottom: 12px;
          border-bottom: 1px solid ${color_base_line};
          
        }

        .upper {
          margin-bottom: 8px;
          
          .article-title{
            display: flex;
            justify-content: space-between;
            gap: 10px;
            align-items: center;
            margin-bottom: 4px;
            
            .sentiment {
              width: 16px;
              height: 16px;
              background-color: ${color_failure};
              border-radius: 100%;
            }

            .title {
              font-size: 16px;
              font-weight: 600;
              width: 100%;

              text-overflow: ellipsis;
              overflow: hidden;
              word-break: break-word;
                
              display: -webkit-box;
              -webkit-line-clamp: 1; // 원하는 라인수
              -webkit-box-orient: vertical
            }
          }

          .article-date {
            display: flex;
            justify-content: space-between;

            .date {
              color: ${color_base_gray};
            }

            .media {}
          }
        }

        .lower {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .feeling {
            display: block;
            width: fit-content;
            border: 1px solid ${$color_base_black};
            padding: 4px 10px;
            border-radius: 24px;
          }

          .summarize {
            color: ${color_key_dark};
          }
        }
      }
    `;
  }}
`;

export default StyledKeywordAnalysis;
