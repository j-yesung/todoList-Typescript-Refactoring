import { PropsWithChildren } from 'react';
import * as S from '../styles/Layout.styled';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <S.LayoutMain>{children}</S.LayoutMain>
    </>
  );
};
