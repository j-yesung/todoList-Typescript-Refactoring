import { PropsWithChildren } from 'react';
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

const colors: BtnColor = {
  default: '#e31c5f',
  success: '#0abd00',
  primary: '#e31c5f',
  warning: '#ff4444',
};

type BtnColor = {
  default: string;
  success: string;
  primary: string;
  warning: string;
};

interface ButtonProps {
  color: keyof BtnColor;
  onClick?: () => void | Promise<void>;
}

export const MyButton = ({ children, color, onClick }: PropsWithChildren<ButtonProps>) => {
  const choseColor = colors[color]; // 키 값 접근

  return (
    <CustomButton color={choseColor} onClick={onClick}>
      {children}
    </CustomButton>
  );
};
