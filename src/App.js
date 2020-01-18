import React, { useEffect } from 'react';

import './global.css';
import './app.css';
import './aside.css';
import './main.css';



function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition
  },[])


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="">Usuario do Github</label>
            <input name="github_username" id="username_github"></input>
          </div>

          <div className="input-block">
            <label htmlFor="">Tecnologias</label>
            <input name="techs" id="techs"></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/26408030?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Warley</strong>
                <span>Node, React, React Native, Vue</span>
              </div>
            </header>
            <p>Estudante de Sistemas de Informação e um apaixonado por Tecnologia</p>
            <a href="https://github.com/warleyhenrique">Acessar perfil do github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/26408030?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Warley</strong>
                <span>Node, React, React Native, Vue</span>
              </div>
            </header>
            <p>Estudante de Sistemas de Informação e um apaixonado por Tecnologia</p>
            <a href="https://github.com/warleyhenrique">Acessar perfil do github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/26408030?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Warley</strong>
                <span>Node, React, React Native, Vue</span>
              </div>
            </header>
            <p>Estudante de Sistemas de Informação e um apaixonado por Tecnologia</p>
            <a href="https://github.com/warleyhenrique">Acessar perfil do github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
