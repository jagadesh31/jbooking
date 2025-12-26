import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';

import { AuthProvider } from './contexts/authContext.jsx'
// import * as whyDidYouRender from "@welldone-software/why-did-you-render";


// whyDidYouRender.default(React, {
//   trackAllPureComponents: true,
// });

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
