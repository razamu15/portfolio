import styled, { css } from 'styled-components';
import { layout, space, compose } from 'styled-system';

import Grid, { GridProps } from './Grid';

export interface CardProps extends GridProps {
  selected?: boolean;
}

const Card = styled(Grid)<CardProps>`
  background-color: white;
  padding: 0.65rem 1.8rem;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.3s ease-in-out 0s;
  display: flex;
  flex-direction: column;

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
    `}

  :hover {
    box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
  }

  ${compose(layout, space)}
`;

export default Card;
