import styled, { css } from 'styled-components';

const StyledHotList = styled.div.attrs((props) => ({}))<any>`
  ${(props) => {
    const colorD3Blue = props.theme.palette.$color_d3_blue;
    const color_base_black = props.theme.palette.$color_base_black;
    const color_base_gray = props.theme.palette.$color_base_gray;
    const color_key_color = props.theme.palette.$color_key_color;

    const color_success = props.theme.palette.$color_success;
    const color_failure = props.theme.palette.$color_failure;
    const color_warning = props.theme.palette.$color_warning;

    return css`
      width: 100%;
      display: flex;
      flex-flow: column;
      /* justify-content: center; */
      /* align-items: center; */

      h3 {
        margin: 20px 0;

        font-weight: bold;
        font-size: 20px;
      }

      ul {
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column;
        gap: 10px;

        a {
          width: 100%;
          height: 40px;
          padding: 0 20px;

          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;

          background-color: #fff;
          border-radius: 24px;

          text-decoration: none;
          color: ${color_base_black};

          /* BS */
          box-shadow: 0px 24px 52px 0px rgba(30, 30, 30, 0.05),
            0px 95px 95px 0px rgba(30, 30, 30, 0.04),
            0px 213px 128px 0px rgba(30, 30, 30, 0.03),
            0px 379px 152px 0px rgba(30, 30, 30, 0.01),
            0px 592px 166px 0px rgba(30, 30, 30, 0);

          .d-group {
            display: flex;
            flex-flow: row;
            align-items: center;
            gap: 20px;

            .num {
              width: 20px;
              font-size: 16px;
              font-weight: bold;
              color: ${color_key_color};
            }

            .s-group {
              display: flex;
              flex-flow: row;
              align-items: center;
              gap: 10px;

              .sentiment {
                width: 14px;
                height: 14px;
                border-radius: 100%;

                &.green {
                  background-color: ${color_success};
                }
                &.yellow {
                  background-color: ${color_warning};
                }
                &.red {
                  background-color: ${color_failure};
                }
              }

              .keyword {
                font-size: 16px;
                /* font-weight: bold; */
              }
            }
          }

          .count {
            color: ${color_base_gray};
            /* font-size: 16px; */
          }
        }
      }
    `;
  }};
`;

export default StyledHotList;
