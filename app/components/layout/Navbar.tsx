'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Button from '../ui/Button';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices[50]};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: ${({ theme }) => `0 ${theme.spacing[6]}`};
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.foreground.primary};
`;

const LogoIcon = styled(motion.div)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0F766E 0%, #334155 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LogoInner = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #0F766E 0%, #334155 100%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.foreground.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;
  padding: ${({ theme }) => `${theme.spacing[2]} 0`};
  
  &:hover {
    color: ${({ theme }) => theme.colors.foreground.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #0F766E 0%, #334155 100%);
    transition: width ${({ theme }) => theme.transitions.normal};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navbar: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <NavbarContainer>
      <NavbarContent>
        <Link href="/">
          <Logo>
            <LogoIcon
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <LogoInner />
            </LogoIcon>
            <span>KronoRift</span>
          </Logo>
        </Link>

        <NavLinks>
          <NavLink href="/explore">Explore</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/stats">Stats</NavLink>
          <NavLink href="/create">Create</NavLink>
        </NavLinks>

        <Button 
          onClick={() => setIsConnected(!isConnected)}
          variant={isConnected ? "secondary" : "primary"}
          size="md"
        >
          {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
        </Button>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
