import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Sidebar from './components/Sidebar';
import Video from './components/Video';
import Header from './components/Header';

import store from './store';

function App() {

  return (
    <div className="container">
      <Provider store={store}>
        <Header />
        <main>
          <Video />
          <Sidebar />
        </main>
        <aside>
        </aside>
        <footer>
          <p><strong>Código Limpo © 2019</strong> - Todos os direitos reservados</p>
        </footer>
      </Provider>
    </div>
  );
}
export default App;
