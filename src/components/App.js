import { useState, useEffect } from 'react';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import getProducts from 'services/mockApi';

export default function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(data => setProducts(data))
      .catch(error =>
        console.error(`Whooops... Something went wrong. ${error.message}`)
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      test
      <GlobalStyleComponent />
    </>
  );
}
