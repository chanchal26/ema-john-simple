import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';
import Main from './Layouts/Main';
import { productAndCartLoader } from './Loader/productAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productAndCartLoader,
          element: <Order></Order>
        },
        {
          path: '/manageInventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/orderReview',
          element: <OrderReview></OrderReview>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }

  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
