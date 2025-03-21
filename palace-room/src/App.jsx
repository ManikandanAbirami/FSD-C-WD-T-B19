import { useState, useEffect } from 'react'
import axios from 'axios';
import Clock from './Clock';
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get('https://fakestoreapi.com/products');
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setTimeout(() => {
          setLoading(false);
        }, 5000);
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);
  if (loading) {
    return <div><Clock /></div>;
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
      <h1>Product in the room!!!</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.iiiitle} />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
