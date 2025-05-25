import { Component } from "react";
import PropTypes from "prop-types";
import { Link, Outlet, useLocation } from "react-router-dom";

// Custom wrapper to use hooks inside a class component
function DashboardWrapper() {
  const location = useLocation();
  return <Dashboard location={location} />;
}

class Dashboard extends Component {

  
  render() {
    const { location } = this.props;
    const currentPath = location.pathname;

    return (
      <div className="flex min-h-screen px-4 md:px-[6vw] lg:px-[8vw]">
        {/* Sidebar */}
        <div className="w-64 bg-base-200 text-base-content py-8">
          <ul className="menu space-y-2 bg-gray-200 rounded-lg">
            <li className="font-semibold pt-10 text-xl pl-6">
              <Link
                to="/dashboard"
                className={currentPath === "/dashboard" ? "bg-primary text-black font-bold " : ""}
              >
                Profile
              </Link>
            </li>
            <li className="font-semibold pt-10 text-xl pl-6">
              <Link
                to="/dashboard/orders"
                className={currentPath === "/dashboard/orders" ? "bg-primary text-black font-bold " : ""}
              >
                Orders
              </Link>
            </li>
            <li className="font-semibold pt-10 text-xl pl-6">
              <Link
                to="/dashboard/all-products"
                className={currentPath === "/dashboard/all-products" ? "bg-primary text-black font-bold " : ""}
              >
                All Products
              </Link>
            </li>
            <li className="font-semibold pt-10 text-xl pl-6">
              <Link
                to="/dashboard/edit-products"
                className={currentPath === "/dashboard/edit-products" ? "bg-primary text-black font-bold " : ""}
              >
                Edit Products
              </Link>
            </li>
            <li className="font-semibold py-10 text-xl pl-6">
              <Link
                to="/dashboard/users"
                className={currentPath === "/dashboard/users" ? "bg-primary text-black font-bold " : ""}
              >
                Users
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DashboardWrapper;
