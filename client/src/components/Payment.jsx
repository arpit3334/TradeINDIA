import React, { useState } from 'react';
import './Payment.css';

function PaymentPage({ contract, productId, productPrice, buyerAddress }) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);

      // Check buyer's balance
      const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [buyerAddress] });
      const balanceInWei = parseInt(balance, 16);
      const priceInWei = window.web3.utils.toWei(productPrice.toString(), 'ether');

      if (balanceInWei < priceInWei) {
        alert('Insufficient funds');
        return;
      }

      // Deduct price from buyer's wallet
      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: buyerAddress,
          to: contract.options.address,
          value: priceInWei
        }]
      });

      // Purchase product
      await contract.methods.purchaseProduct(productId).send({ from: buyerAddress });

      alert('Product purchased successfully!');
    } catch (error) {
      alert('Error purchasing product: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <button onClick={handlePurchase} disabled={loading}>Purchase Product</button>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default PaymentPage;
