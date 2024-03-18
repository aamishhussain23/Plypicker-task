import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://64e0caef50713530432cafa1.mockapi.io/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
        {products.map((product) => (
          <div style={{ margin: '20px', width: '300px', border: '1px solid #ccc', borderRadius: '15px', padding: '15px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', textAlign: 'center' }}>
            <img src={product.image} alt={product.productName} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px' }} />
            <h3 style={{ marginTop: '15px' }}>{product.productName}</h3>
            <p style={{ textAlign: 'justify', marginTop: '10px' }}>{product.productDescription}</p>
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Price: ${product.price}</p>
            <button onClick={() => alert('Under Development')} style={{ padding: '10px 20px', backgroundColor:'#ED5353', color:'white', border:'none', borderRadius: '5px', marginTop: '15px'}}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
