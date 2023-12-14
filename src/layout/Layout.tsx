import { PropsWithChildren } from 'react';
import * as S from '../styles/Layout.styled';
import { ToastContainer } from 'react-toastify';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <S.LayoutMain>{children}</S.LayoutMain>
      <ToastContainer autoClose={2000} />
    </>
  );
};
