import PropTypes from 'prop-types';

export default function OrderCard({ order }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const statusBadge = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Order #{order.orderNumber}</h3>
            <p className="text-sm text-gray-500">Placed on {formatDate(order.createdAt)}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">${order.total.toFixed(2)}</p>
            {statusBadge(order.status)}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-medium mb-2">Items:</h4>
        <ul className="space-y-2">
          {order.items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-500 ml-2">x{item.quantity}</span>
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-50 text-right">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View Details
        </button>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
    order: PropTypes.shape({
        orderNumber: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired
            })
        ).isRequired
    }).isRequired
};