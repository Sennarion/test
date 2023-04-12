import {
  ListItem,
  ImageWrapper,
  Image,
  ItemContent,
  ItemFooter,
  Title,
  Category,
  Price,
  Link,
} from './ProductsItem.styled';

export default function ProductsItem({ name, img, price, category, link }) {
  return (
    <ListItem>
      <ImageWrapper>
        <Image src={img} width="400" alt={name} loading="lazy" />
      </ImageWrapper>
      <ItemContent>
        <Title>{name}</Title>
        <Category>{category}</Category>
        <ItemFooter>
          <Price>{price}$</Price>
          <Link href={link} target="_blank">
            Read more
          </Link>
        </ItemFooter>
      </ItemContent>
    </ListItem>
  );
}
