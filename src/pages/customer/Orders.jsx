import { useState, useEffect } from 'react';
import { getCustomerOrders } from '../../services/orders';
import OrderCard from '../../pages/customer/OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getCustomerOrders();
        setOrders(data);
      } catch {
        setError('Failed to fetch your orders');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading your orders...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      <div className="space-y-4">
        {orders.length === 0 ? (
          <p>You haven&apos;t placed any orders yet</p>
        ) : (
          orders.map(order => (
            <OrderCard key={order._id} order={order} />
          ))
        )}
      </div>
    </div>
  );
}