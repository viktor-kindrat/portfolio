import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Componets/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('service-worker.js')
      .then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function (error) {
        console.log('Service Worker registration failed:', error);
      });
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
      fetch("https://portfolio-api-5x6x.onrender.com/db/getProjects")
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              caches.open('info-api-data').then(function (cache) {
                  cache.put('projects', new Response(JSON.stringify(data)));
              });
          });
  });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

