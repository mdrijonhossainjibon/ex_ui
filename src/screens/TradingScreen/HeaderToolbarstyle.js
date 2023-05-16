import styled from "styled-components";

export const HeaderToolbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60%;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: #ffffff;

  .td-header__toolbar {
    &--left {
      display: flex;
      height: 100%;
    }
    &--right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .link-tutorial {
        font-size: 11px;
        line-height: 19px;
        color: #848e9c;
      }
    }
    &-item,
    &-item--hightlight {
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      p {
        padding: 0;
        margin: 0;
      }

      &:not(:first-child) {
        margin-left: 15px;
      }

      &:last-child {
        margin-right: 5px;
      }

      &-title {
        font-size: 18px;
        line-height: 25px;
        color: rgb(129, 109, 109));
        margin: 0;
      }

      &-text {
        color: #848e9c;
        font-size: 11px;
        line-height: 19px;
      }

      &-value {
        margin: 0;
        font-size: calc(var(--font-size) * 1);
        font-weight: 400;
        line-height: 22px;

        &-positive {
          color: var(--header-positive-text-color);
          font-weight: 500;
        }

        &-negative {
          color: var(--header-negative-text-color);
          font-weight: 500;
        }

        &-data {
          color: wheat;
          font-weight: 400;
        }
      }
    }
    &-item--hightlight {
      p:first-child {
        font-size: calc(var(--font-size) * 1.2);
      }
    }
  }
`;
