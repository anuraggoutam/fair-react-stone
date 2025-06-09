import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { WebSocketProvider } from './context/webSocket';
import { WebSocketUserProvider } from './context/webSocketUser';
import { WebSocketCasinoProvider } from './context/webSocketCasino';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
