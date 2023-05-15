import styled from "styled-components";
import { COLORS } from "../constants";
export const TodoListItem = styled.div`
  display: flex;
  align-items: left;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  background-color: ${(props) =>
    props.color? props.color : COLORS.primaryBackgroundItemColor};
`;