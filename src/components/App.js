import { useState, useEffect } from 'react';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import { Container, Filter, ProductsList } from 'components';
import getProducts from 'services/mockApi';

export default function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(error =>
        console.error(`Whooops... Something went wrong. ${error.message}`)
      );
  }, []);

  const onFilterInputChange = e => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <Container>
      <Filter
        currentFilter={filter}
        onFilterInputChange={onFilterInputChange}
      />
      {products.length > 0 && <ProductsList products={filteredProducts} />}
      <GlobalStyleComponent />
    </Container>
  );
}
