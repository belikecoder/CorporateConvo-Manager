// PaymentForm.js

import React, { useState } from 'react';
import '../assets/css/userpaymentform.css'


const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    totalAmount: 0,
    amountPaying: 0,
    paymentDate: getCurrentDate(),
    modeOfPayment: '',
  });

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: name === 'amountPaying' ? parseFloat(value) : value,
    }));
  };

  const calculateRemainingAmount = () => {
    return paymentData.totalAmount - paymentData.amountPaying;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate API call (replace the URL with your actual API endpoint)
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert('Payment submitted successfully:', responseData);
        // You can also perform additional actions after successful submission
      } else {
        alert('Error submitting payment:', response.status);
        // Handle error scenarios accordingly
      }
    } catch (error) {
      alert('Error submitting payment:', error.message);
      // Handle error scenarios accordingly
    }
  };

  const handleCancel = () => {
    alert('Payment canceled');
  };
  return (
   <>
   <div className="payment-form-container">
      <h2 className="form-title">Payment Form</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <label>
          Total Amount:
          <input
            type="number"
            name="totalAmount"
            value={paymentData.totalAmount}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount Paying:
          <input
            type="number"
            name="amountPaying"
            value={paymentData.amountPaying}
            onChange={handleChange}
          />
        </label>
        <label>
          Remaining Amount: ${calculateRemainingAmount()}
        </label>
        <label>
          Payment Date:
          <input
            type="date"
            name="paymentDate"
            value={paymentData.paymentDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Mode of Payment:
          <input
            type="text"
            name="modeOfPayment"
            value={paymentData.modeOfPayment}
            onChange={handleChange}
          />
        </label>
        <div className="buttons-container">
          <button  className="htg"type="submit">Save</button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
   </>
  );
};

export default PaymentForm;
