'use client';

import styled, { css } from 'styled-components';

type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps {
  variant?: CardVariant;
  interactive?: boolean;
  padding?: boolean;
}

const Card = styled.div<CardProps>`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${({ padding, theme }) => padding && css`
    padding: ${theme.spacing[4]};
  `}
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'elevated':
        return css`
          background-color: ${theme.colors.background.elevated};
          box-shadow: ${theme.shadows.md};
        `;
      case 'outlined':
        return css`
          background-color: ${theme.colors.background.surface};
          border: 1px solid ${theme.colors.border.medium};
        `;
      default:
        return css`
          background-color: ${theme.colors.background.surface};
        `;
    }
  }}
  
  ${({ interactive, theme }) => interactive && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.lg};
    }
    
    &:active {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `}
`;

Card.defaultProps = {
  variant: 'default',
  interactive: false,
  padding: true,
};

export default Card;
