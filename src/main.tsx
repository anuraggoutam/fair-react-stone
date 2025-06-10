import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { WebSocketProvider } from './context/webSocket';
import { WebSocketUserProvider } from './context/webSocketUser';
import { WebSocketCasinoProvider } from './context/webSocketCasino';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="suspense-loading">
          <img src="/imgs/logo.png" width={200} alt="Loading..." />
        </div>
      }
    >
      <Provider store={store}>
        <WebSocketProvider>
          <WebSocketUserProvider>
            <WebSocketCasinoProvider>
              <App />
            </WebSocketCasinoProvider>
          </WebSocketUserProvider>
        </WebSocketProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
