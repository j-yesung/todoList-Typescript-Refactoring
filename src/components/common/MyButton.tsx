import { ReactNode } from 'react';
import styled from 'styled-components';

const CustomButton = styled.button<{ color: string }>`
  color: #fff;
  border: none;
  outline: none;
  padding: 5px;
  margin-left: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  line-height: 20px;
  border-radius: 8px;
  display: inline-block;
  background-color: ${props => props.color};

  &:hover {
    color: #191919;
    background-color: #fff;
  }
`;

type StricChildren<T> = T & { children: ReactNode };
type ButtonColors = 'default' | 'success' | 'primary' | 'warning';

type ButtonProps = {
  color: ButtonColors;
  onClick: () => void | Promise<void>;
};

const btnColors: Record<ButtonColors, string> = {
  default: '#e31c5f',
  success: '#0abd00',
  primary: '#e31c5f',
  warning: '#ff4444',
};

export const MyButton = ({ children, color, onClick }: StricChildren<ButtonProps>) => {
  return (
    <CustomButton color={btnColors[color]} onClick={onClick}>
      {children}
    </CustomButton>
  );
};
