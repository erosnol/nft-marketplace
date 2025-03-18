'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '../ui/Button';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices[30]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground.primary};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.foreground.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: color ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.foreground.primary};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>KronoRift</Logo>
      
      <NavLinks>
        <Link href="/marketplace" passHref legacyBehavior>
          <NavLink>Marketplace</NavLink>
        </Link>
        <Link href="/collections" passHref legacyBehavior>
          <NavLink>Collections</NavLink>
        </Link>
        <Link href="/activity" passHref legacyBehavior>
          <NavLink>Activity</NavLink>
        </Link>
        <Link href="/analytics" passHref legacyBehavior>
          <NavLink>Analytics</NavLink>
        </Link>
      </NavLinks>
      
      <ButtonGroup>
        <Button variant="secondary" size="md">Connect Wallet</Button>
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
