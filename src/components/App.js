import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'redux/products/operations';
import { selectIsLoading, selectError } from 'redux/products/selectors';
import { Container, Filter, ProductsList } from 'components';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <Filter />
      <ProductsList />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <GlobalStyleComponent />
    </Container>
  );
}
