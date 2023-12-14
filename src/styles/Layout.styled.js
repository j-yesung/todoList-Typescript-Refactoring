import styled from 'styled-components';

export const LayoutMain = styled.div`
  width: 1200px;
  height: 800px;
  padding: 20px;
  overflow-y: auto;
  position: absolute;
  border-radius: 10px;
  background-color: #eee;
  border: 2px solid #fff;

  /* 스크롤바 */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* 스크롤바 막대 */
  &::-webkit-scrollbar-thumb {
    background-color: #bbab8c;
    border-radius: 10px;
  }
  /* 스크롤바 배경  */
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
