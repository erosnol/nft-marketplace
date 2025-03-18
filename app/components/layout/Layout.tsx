'use client';

import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Main = styled.main`
  min-height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.foreground.primary};
`;

const Footer = styled.footer`
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[6]}`};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  color: ${({ theme }) => theme.colors.foreground.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer>
        <FooterContent>
          <div>© {new Date().getFullYear()} KronoRift Finance. All rights reserved.</div>
          <div>Built on Fraxtal</div>
        </FooterContent>
      </Footer>
    </>
  );
};

export default Layout;
