import { useState, useEffect } from 'react'
import axios from 'axios';
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('Component mounted');
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('https://fakestoreapi.com/products');
        const response = await fetch('https://fakestoreapi.com/products');
        console.log(fetch('https://fakestoreapi.com/products'));
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
      <h1>Product in the room!!!</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
