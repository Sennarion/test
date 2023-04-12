import { ProductsItem } from 'components';
import { List } from './ProductsList.styled';

export default function ProductsList({ products }) {
  return (
    <List>
      {products.map(({ name, img, price, bsr_category, link }) => (
        <ProductsItem
          key={link}
          name={name}
          img={img}
          price={price}
          category={bsr_category}
          link={link}
        />
      ))}
    </List>
  );
}
