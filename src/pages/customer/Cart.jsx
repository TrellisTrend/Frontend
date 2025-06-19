import { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import CartItem from '../../components/customer/CartItem';
import { createOrder } from '../../services/orders';

export default function Cart() {
  const { cart, cartTotal, clearCart } = useShop();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    try {
      setLoading(true);
      await createOrder({ items: cart, total: cartTotal });
      clearCart();
      // Redirect to orders page or show success message
    } catch  {
      setError('Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="bg-white rounded-lg shadow p-6">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Checkout'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}