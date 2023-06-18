import styled from 'styled-components/native';

export const StyledExpenseItem = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;
export const ItemDescription = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
`;
export const ItemDescriptionText = styled.Text`
  color: #3a3a3a;
  font-size: 1px;
  flex: 1;
  margin: 0px;
  color: white;
`;
export const ItemPrice = styled.Text`
  font-size: 4px;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px;
  padding: 1px;
  border-radius: 12px;
`;
