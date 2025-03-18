'use client';

import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  outline: none;
  border: none;
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
  `}
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.accent.primary};
          color: ${theme.colors.foreground.primary};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.accent.secondary};
          }
          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      case 'secondary':
        return css`
          background-color: transparent;
          color: ${theme.colors.foreground.primary};
          border: 1px solid ${theme.colors.border.medium};
          &:hover:not(:disabled) {
            background-color: rgba(203, 213, 225, 0.05);
            border-color: ${theme.colors.border.strong};
          }
          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      case 'tertiary':
        return css`
          background-color: transparent;
          color: ${theme.colors.foreground.secondary};
          &:hover:not(:disabled) {
            color: ${theme.colors.foreground.primary};
            background-color: rgba(203, 213, 225, 0.05);
          }
          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.foreground.tertiary};
          &:hover:not(:disabled) {
            color: ${theme.colors.foreground.secondary};
            background-color: rgba(203, 213, 225, 0.03);
          }
          &:active:not(:disabled) {
            transform: translateY(1px);
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.accent.primary};
          color: ${theme.colors.foreground.primary};
        `;
    }
  }}
  
  ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return css`
          font-size: ${theme.typography.fontSize.sm};
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
        `;
      case 'lg':
        return css`
          font-size: ${theme.typography.fontSize.lg};
          padding: ${theme.spacing[4]} ${theme.spacing[6]};
        `;
      default:
        return css`
          font-size: ${theme.typography.fontSize.base};
          padding: ${theme.spacing[3]} ${theme.spacing[5]};
        `;
    }
  }}
`;

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
  disabled: false,
};

export default Button;
