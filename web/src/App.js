import React from 'react';

import './app.css'
import './global.css'
import './sidebar.css'
import './main.css'


function App() {
  return (
    <div id="app">
      <aside>
        <strong> Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username"> Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude"> latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude"> longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/35586969?s=400&u=4fc3daae73936eaf9c55896c60c96e1d9ba6f9a3&v=4" alt="dies" />
              <div className="user-info">
                <strong>Diego e</strong>
                <span> REACT, node</span>
              </div>
            </header>
            <p>dfadfsad</p>
            <a href="https://github.com/lorikf">acessar perfil</a>
          </li>
        </ul>

      </main>
    </div>
  )
}
export default App;
