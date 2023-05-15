import styled from 'styled-components';
import { COLORS } from '../constants';
export const CustomSpan = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) =>
    props.color? props.color : COLORS.primaryTextColor};
`;