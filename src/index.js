import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {DraggableProvider} from 'draggable-react';

ReactDOM.render(
  <DraggableProvider containerized>
    <App />
  </DraggableProvider>
, document.getElementById('root'));
registerServiceWorker();
