import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CustomerDashboard = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const customerNavItems = [
    { path: '/account', label: 'Overview', icon: '🏠' },
    { path: '/account/orders', label: 'My Orders', icon: '📦' },
    { path: '/account/wishlist', label: 'Wishlist', icon: '❤️' },
    { path: '/account/settings', label: 'Settings', icon: '⚙️' },
    { path: '/account/addresses', label: 'Addresses', icon: '📍' },
    { path: '/account/reviews', label: 'My Reviews', icon: '⭐' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">My Account</h1>
          <p className="text-sm text-gray-500">Hello, {user?.username}</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {customerNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                currentPath === item.path
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="mr-2">🚪</span> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;