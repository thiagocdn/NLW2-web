import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/61380775?s=460&u=0327807cc2d153c7b849154fb8343036432559be&v=4" alt="Thiago Cedran"/>
            <div>
              <strong>Thiago Cedran</strong>
              <span>Física</span>
            </div>
          </header>
          <p>
            Aulas de Física bem estruturadas e expositiva.
            <br /> <br />
            Muita prática e exercícios para gravar e aprender com maior eficiência!
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 50,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em Contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
};

export default TeacherList;