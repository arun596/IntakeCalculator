import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import WaterIntake from './components/forms/WaterIntake.jsx'
import ProtienIntake from './components/forms/ProtienIntake.jsx'
import CaloriesIntake from './components/forms/CaloriesIntake.jsx'
import Bmi from './components/forms/Bmi.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "water",  // ✅ Now at the same level as Home
        element: <WaterIntake />,
      },
      {
        path: "protien",
        element: <ProtienIntake/>
      },
      {
        path: "calories",
        element:<CaloriesIntake/>
      },
      {
        path: "bmi",
        element:<Bmi/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
