import styled from "styled-components";
export const CustomCheckbox = styled.input`
  
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  margin-right: 10px;

  &:checked {
    background-color: #007bff;
  }
`;