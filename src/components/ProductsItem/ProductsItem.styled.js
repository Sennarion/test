import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 40px) / 3);
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e3e3e3;
  overflow: hidden;
  box-shadow: 2px 2px 6px 0px rgba(227, 227, 227, 1);
`;

export const ImageWrapper = styled.div`
  flex-grow: 1;
`;

export const Image = styled.img`
  max-height: 400px;
  object-fit: cover;
`;

export const ItemContent = styled.div`
  padding: 20px;
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

export const Category = styled.p`
  margin-bottom: 12px;
`;

export const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #d10000;
`;

export const Link = styled.a`
  display: block;
  padding: 10px;
  background-color: #e3e3e3;
  border-radius: 4px;
`;
