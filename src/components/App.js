import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from 'redux/products/operations';
import { Container, Filter, ProductsList } from 'components';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <Filter />
      <ProductsList />
    </Container>
  );
}
