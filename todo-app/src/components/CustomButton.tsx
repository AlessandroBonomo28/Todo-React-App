import styled from "styled-components";
import { COLORS } from "../constants";
export const CustomButton = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: ${(props) =>
    props.color? props.color : COLORS.primaryColor};
  color: ${(props) =>
    props.color? props.color : COLORS.primaryTextColor};
  height: 40px;
  width: 100px;
  max-width: 100px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  
  font-size:20px;
`;