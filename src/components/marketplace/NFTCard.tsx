'use client';

import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
import Image from 'next/image';

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  currency: string;
  creator: string;
  collection: string;
}

const NFTCardContainer = styled(Card)`
  width: 100%;
  padding: 0;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const NFTImage = styled(Image)`
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.normal};
  
  ${NFTCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const NFTInfo = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

const NFTName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
`;

const CollectionName = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.foreground.tertiary};
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.foreground.tertiary};
`;

const PriceValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.foreground.primary};
`;

const Creator = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.foreground.tertiary};
`;

const NFTCard: React.FC<NFTCardProps> = ({
  id,
  name,
  image,
  price,
  currency,
  creator,
  collection,
}) => {
  return (
    <NFTCardContainer variant="elevated" interactive>
      <ImageContainer>
        <NFTImage
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </ImageContainer>
      <NFTInfo>
        <CollectionName>{collection}</CollectionName>
        <NFTName>{name}</NFTName>
        <PriceContainer>
          <Price>
            <PriceLabel>Price</PriceLabel>
            <PriceValue>{price} {currency}</PriceValue>
          </Price>
          <Creator>by {creator}</Creator>
        </PriceContainer>
      </NFTInfo>
    </NFTCardContainer>
  );
};

export default NFTCard;
