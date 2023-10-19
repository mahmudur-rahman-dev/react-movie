import React from 'react'
import ReactDom from 'react-dom/client'

import App from './App'

const rootElement = document.getElementById('root');

if(rootElement) ReactDom.createRoot(rootElement).render(<App />);
