import styled from 'styled-components';

export const TodoForm = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;
export const TodoInput = styled.input`
  border: none;
  width: 200px;
  height: 40px;
  font-size: 15px;
  border-radius: 5px;
`;
export const TodoList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TodoItem = styled.div`
  width: 260px;
  padding: 8px;
  margin-left: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  border: 2px solid #191919;
`;
export const TodoItemTitle = styled.h2`
  font-weight: bold;
`;
export const TodoItemContent = styled.p`
  font-size: 15px;
`;
export const TodoItemDate = styled.p`
  font-size: 13px;
  display: flex;
  flex-direction: row-reverse;
`;
export const ButtonBox = styled.div`
  float: right;
`;
export const Button = styled.button`
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
