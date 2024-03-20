import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import MyContractABI from './artifacts/contracts/ECommerce.sol/ECommerce.json';
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import Cart from './components/CartSection.jsx';
import PaymentPage from './components/Payment.jsx'; 
import { redirect }  from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [contract, setContract] = useState(null);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0]] });
            setBalance(Web3.utils.fromWei(balance, 'ether'));
            const contractInstance = new window.web3.eth.Contract(MyContractABI, '0x5FbDB2315678afecb367f032d93F642f64180aa3');
            setContract(contractInstance);
            fetchProducts(contractInstance);
          } else {
            console.error('No accounts found');
          }
        } catch (error) {
          console.error('User denied account access or no accounts found');
        }
      } else {
        console.error('MetaMask not detected. Please install MetaMask');
      }
    };

    loadWeb3();
  }, []);

  const fetchProducts = async (contractInstance) => {
    try {
      const productsCount = await contractInstance.methods.getProductsCount().call();
      const products = [];
      for (let i = 1; i <= productsCount; i++) {
        const product = await contractInstance.methods.products(i).call();
        products.push(product);
      }
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const defaultProducts = [
    {
      id: 1,
      category: "Electronics",
      name: "Wireless Headphones Y",
      price: "129",
      image: 'headphones.jpeg',
      description: "Immerse yourself in high-quality sound with these wireless headphones.",
    },
    {
      id: 2,
      name: "Stainless Steel Cookware Set",
      price: "99",
      image: 'cookware.jpeg',
      description: "A durable and versatile cookware set for your kitchen.",
    },
    {
      id: 3,
      name: "Robot Vacuum Cleaner",
      price: "199",
      picture: 'vaccum-cleaner.jpeg',
      description: "Effortlessly clean your floors with this intelligent robot vacuum cleaner.",
    },
    {
      id: 4,
      name: "Smart Watch Z",
      price: "199",
      image: 'smartwatch.webp',
      description: "Stay connected and track your fitness with this stylish smartwatch.",
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: '79',
      picture: 'bluetooth-speaker.jpeg',
      description: "Enjoy your favorite music anywhere with this compact Bluetooth speaker.",
    },
    {
      id: 6,
      name: "Men's Formal Suit",
      price: "299",
      image: 'men-suit.jpeg',
      description: "Look sharp and sophisticated in this tailored formal suit.",
    },
    {
      id: 7,
      name: "Women's Elegant Dress",
      price: "129",
      image: 'dress.jpeg',
      description: "Make a statement in this stunning and classy evening dress.",
    },
    {
      id: 8,
      name: "Coffee Maker",
      picture: 'coffee-maker.jpeg',
      price: "59",
      description: "Brew delicious coffee at home with this easy-to-use coffee maker.",
    },
    {
      id: 9,
      name: "Air Fryer",
      image: 'air-fryer.jpeg',
      price: "89",
      description: "Enjoy crispy and healthy fried food with this versatile air fryer.",
    },
    {
      id: 10,
      name: "Laptop XYZ",
      picture: 'blockchain.png',
      price: "$899",
      description: "Powerful performance and sleek design make this laptop perfect for work and play.",
    },
    
  ];
  
  // useEffect to set default products
  useEffect(() => {
    setProducts(defaultProducts);
  }, []);
  // Function to handle adding a product
  const handleAddProduct = (formData) => {
    // Implement logic to add product to the blockchain or update state
    console.log('Adding product:', formData);
  };

  // Function to handle navigation to the payment page
  const handleProceedToPayment = async () => {
    console.log('Navigating to the payment page...');
    

  };

  return (
    <div className="App">
      <Router>
        <Navbar walletAddress={account} balance={balance} onAddProduct={handleAddProduct} toggleCart={toggleCart} />
        {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart} onProceedToPayment={handleProceedToPayment} />}
        <LandingPage />
        <ProductPage products={products} addToCart={addToCart} />
        <Routes>
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
