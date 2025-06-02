// App.js
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importar ícone de menu

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="site-wrapper">
      {/* HEADER E NAVEGAÇÃO */}
      <header className="main-header">
        <div className="container header-content">
          <div className="logo">
            <h1>Escritório de Advocacia</h1>
          </div>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
              <li><a href="#areas" onClick={() => setMenuOpen(false)}>Áreas de Atuação</a></li>
              <li><a href="#equipe" onClick={() => setMenuOpen(false)}>Equipe</a></li>
              <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir Menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h2>Compromisso com ética, seriedade e excelência jurídica</h2>
          <p>Oferecendo soluções jurídicas personalizadas e eficientes.</p>
          <a href="#contato" className="btn primary-btn">Entre em Contato</a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section light-bg">
        <div className="container">
          <h3>Sobre o Escritório</h3>
          <p>
            No nosso escritório, a paixão pelo direito encontra a dedicação em servir. Atuamos com responsabilidade, ética e profissionalismo inabalável, oferecendo serviços jurídicos que prezam pela excelência e discrição. Nosso foco é atender às demandas legais com seriedade, promovendo justiça e confiança em cada caso.
          </p>
          <p>
            Acreditamos que cada cliente é único, e por isso, dedicamos tempo para entender suas necessidades, construindo soluções jurídicas eficazes e personalizadas. Nossa missão é guiar você através dos desafios legais com clareza e segurança, buscando sempre os melhores resultados.
          </p>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="areas" className="section dark-bg">
        <div className="container">
          <h3>Áreas de Atuação</h3>
          <div className="areas-grid">
            <div className="area-item">
              <h4>Direito Civil</h4>
              <p>Assessoria completa em questões de família, sucessões, contratos, posse e propriedade.</p>
            </div>
            <div className="area-item">
              <h4>Direito Trabalhista</h4>
              <p>Representação de empregados e empregadores em disputas e consultoria preventiva.</p>
            </div>
            <div className="area-item">
              <h4>Direito de Família</h4>
              <p>Atuação em divórcios, pensão alimentícia, guarda de filhos e inventários.</p>
            </div>
            <div className="area-item">
              <h4>Direito Previdenciário</h4>
              <p>Auxílio em aposentadorias, benefícios, revisões e planejamento previdenciário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="section light-bg">
        <div className="container">
          <h3>Nossa Equipe</h3>
          <div className="equipe-grid">
            <div className="membro-card">
              <img src="https://via.placeholder.com/150" alt="Dra. Ana Silva" className="membro-foto" />
              <strong>Dra. Ana Silva</strong>
              <p>OAB/PR 00000</p>
              <p>Especialista em Direito Civil e Sucessões. Graduada pela Universidade Estadual de Londrina (UEL). Com 10 anos de experiência, atua com dedicação e foco na resolução de conflitos familiares e patrimoniais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section dark-bg">
        <div className="container">
          <h3>Entre em Contato</h3>
          <p className="subtitle">Envie-nos uma mensagem ou utilize nossos canais de atendimento.</p>
          <form className="contact-form">
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <input type="text" placeholder="Assunto" required />
            <textarea placeholder="Sua mensagem" rows="5" required></textarea>
            <button type="submit" className="btn secondary-btn">Enviar Mensagem</button>
          </form>
          <div className="contact-info">
            <p><strong>Telefone:</strong> (43) 99803-2135</p>
            <p><strong>E-mail:</strong> contato@seuescritorio.com.br</p>
            <p><strong>Endereço:</strong> Rua da Justiça, 123 - Centro, Arapongas - PR</p>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="section light-bg">
        <div className="container">
          <h3>Nossa Localização</h3>
          <div className="mapa-container">
            <iframe
              title="Localização do Escritório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.877668551221!2d-51.42858732483254!3d-23.513369861349583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb38e072fdf4dd%3A0x6b4c1a5b8a0e3f0!2sArapongas%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Escritório de Advocacia. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#politica-privacidade">Política de Privacidade</a> | <a href="#termos-uso">Termos de Uso</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5543998032135"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}

export default App;