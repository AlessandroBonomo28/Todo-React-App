import styled from "styled-components";
import {COLORS} from '../constants'

export const CustomText = styled.input`
    border: 2px solid ${(props) =>
        props.color? props.color : COLORS.primaryBackgroundItemColor};
    width: 200px;
    padding: 5px;
    border-radius: 2px;
    margin: 5px;
        
  `;
