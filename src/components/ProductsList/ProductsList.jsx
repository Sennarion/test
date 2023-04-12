import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/products/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { ProductsItem } from 'components';
import { List } from './ProductsList.styled';

export default function ProductsList() {
  const products = useSelector(selectProducts);
  const filter = useSelector(selectFilter);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  if (products.length === 0) return null;

  return (
    <List>
      {filteredProducts.map(({ name, img, price, bsr_category, link }) => (
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
