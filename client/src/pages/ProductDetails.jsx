import { Rating } from '@mui/material';
import { FavoriteBorder, FavoriteRounded } from "@mui/icons-material";
import React from 'react'
import styled from 'styled-components';
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 99%;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  width: 100%;
  padding: 12px;
  gap: 32px;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 600px;
  border-radius: 12px;
  @media (max-width: 750px) {
    height: 400px;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 4px 10px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;
const Percent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: green;
`;

const Sizes = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Items = styled.div`
  display: flex;
  gap: 12px;
`;
const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 14px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ selected, theme }) =>
    selected &&
    `
  background: ${theme.primary};
  color: white;
  `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0px;
`;

const ProductDetails = () => {
  return (
    <Container>
        <Wrapper>
            <ImageWrapper>
                <Image src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwoY5NKSHPrShLzeB1FYR7BozFTlM6RevNL8sqzGRklUf2QB7d6j52VpHBe8_MSf7vJpwwJ9Hr-Q9h8_7liBdXlcc6GPUSCwYr6M4TH-t5" />
            </ImageWrapper>
            <Details>
                <div>
                    <Title>Product Title</Title>
                    <Name>Name</Name>
                </div>
                <Rating value={4.5} />
                <Price>
                  $120  <Span>$200</Span>
                  <Percent>40% off</Percent>
                </Price>
                <Desc>Product Decs</Desc>
                <Sizes>
                        <Items>
                            <Item selected>S</Item>
                            <Item>M</Item>
                            <Item>L</Item>
                            <Item>XL</Item>
                        </Items>
                </Sizes>
                <ButtonWrapper>
                    <Button text="Add to cart" full outlined />
                    <Button text="Buy Now" full />
                    <Button leftIcon={
                  
                    <FavoriteRounded sx={{ fontSize: "22px", color: "red" }} />
                  
                } full outlined />
                </ButtonWrapper>
            </Details>
        </Wrapper>
    </Container>
  )
}

export default ProductDetails;