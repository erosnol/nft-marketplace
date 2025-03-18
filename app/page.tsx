'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Layout from './components/layout/Layout';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import NFTCard from './components/marketplace/NFTCard';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[6]}`};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: ${({ theme }) => theme.spacing[10]};
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.foreground.primary};
  
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.foreground.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  @media (min-width: 768px) {
    flex: 1;
    height: 400px;
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.foreground.primary};
  text-align: center;
`;

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[6]}`};
  max-width: 1200px;
  margin: 0 auto;
`;

const NFTGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
`;

const StatsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => `${theme.spacing[12]} ${theme.spacing[6]}`};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.foreground.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground.tertiary};
`;

// Mock data for featured NFTs
const featuredNFTs = [
  {
    id: '1',
    name: 'Digital Asset #142',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop',
    price: '2.5',
    currency: 'FRAX',
    creator: 'Institutional Fund',
    collection: 'Premium Assets',
  },
  {
    id: '2',
    name: 'Financial Token #38',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop',
    price: '1.8',
    currency: 'FRAX',
    creator: 'Quantum Finance',
    collection: 'Institutional Series',
  },
  {
    id: '3',
    name: 'Secure Vault #07',
    image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=2832&auto=format&fit=crop',
    price: '3.2',
    currency: 'FRAX',
    creator: 'Blockchain Capital',
    collection: 'Security Tokens',
  },
];

export default function Home() {
  return (
    <Layout>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Institutional-Grade Digital Assets on Fraxtal
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KronoRift Finance provides a secure, compliant marketplace for high-value digital assets, built for financial institutions and professional investors.
          </HeroSubtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg">Explore Marketplace</Button>
            <Button variant="secondary" size="lg">Learn More</Button>
          </ButtonGroup>
        </HeroContent>
        <HeroImageContainer>
          <Image 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop" 
            alt="KronoRift Finance Platform" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority 
          />
        </HeroImageContainer>
      </HeroSection>
      
      <StatsSection>
        <StatsGrid>
          <StatCard variant="elevated">
            <StatValue>$2.4B+</StatValue>
            <StatLabel>Total Volume</StatLabel>
          </StatCard>
          <StatCard variant="elevated">
            <StatValue>14,500+</StatValue>
            <StatLabel>Digital Assets</StatLabel>
          </StatCard>
          <StatCard variant="elevated">
            <StatValue>250+</StatValue>
            <StatLabel>Institutional Partners</StatLabel>
          </StatCard>
          <StatCard variant="elevated">
            <StatValue>99.9%</StatValue>
            <StatLabel>Uptime Reliability</StatLabel>
          </StatCard>
        </StatsGrid>
      </StatsSection>
      
      <Section>
        <SectionTitle>Featured Assets</SectionTitle>
        <NFTGrid>
          {featuredNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </NFTGrid>
      </Section>
    </Layout>
  );
}
