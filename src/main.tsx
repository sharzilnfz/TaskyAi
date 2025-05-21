import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import './index.css';
import App from './App.tsx';

// routes

//

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={} />
  </StrictMode>,
);
