import React, { useState } from 'react';
import './styles.css';
import logo from './assets/logo.png';
import login from './assets/login.webp';
import aluno from './assets/aluno.webp';
import instrutor from './assets/instrutor.webp';
import admin from './assets/admin.webp';

const team = [
  {name:'Cairo Forte Ferreira Filho',role:'Desenvolvimento front-end',initials:'CF',skills:'React · JavaScript · Bootstrap',bio:'Interfaces, componentes e visualização dos treinos e gráficos.'},
  {name:'Henrique José Barbosa Vitalino Carneiro Mello',role:'Desenvolvimento back-end',initials:'HM',skills:'Node.js · Express · MySQL',bio:'API REST, regras de negócio, autenticação e persistência de dados.'},
  {name:'Marcos Gentili Oliveira',role:'Design UX/UI',initials:'MG',skills:'UX/UI · React · CSS responsivo',bio:'Identidade visual, navegação e experiência de uso nos diferentes dispositivos.'},
  {name:'Valter Expedito Ribeiro da Silva',role:'Gestão do projeto',initials:'VS',skills:'Planejamento · Git · Documentação',bio:'Organização do trabalho, integração das entregas e documentação técnica.'}
];
const screens = [
 {title:'Login',image:login,description:'Acesso centralizado e direcionamento automático por perfil.'},
 {title:'Instrutor',image:instrutor,description:'Gerenciamento de alunos, fichas e catálogo de exercícios.'},
 {title:'Aluno',image:aluno,description:'Treinos, métricas e evolução em uma interface mobile.'},
 {title:'Administrador',image:admin,description:'Indicadores, controle de contas e catálogo de exercícios.'}
];
export default function Equipe07(){
 const [selected,setSelected]=useState(1);
 const screen=screens[selected];
 return <main className="fm07">
  <section className="fm07-hero"><div className="fm07-brand"><img src={logo} alt="Logo FitManager"/><span>FITMANAGER</span><span className="fm07-label">EQUIPE 07</span></div><div className="fm07-hero-grid"><div><p className="fm07-eyebrow">DESAFIO INTEGRADOR / DESENVOLVIMENTO WEB</p><h1>Treinos organizados.<br/><span>Evolução visível.</span></h1><p>Uma plataforma web para conectar alunos, instrutores e gestores de academias, centralizando fichas, cargas e acompanhamento físico.</p><div className="fm07-actions"><a className="fm07-primary" href="https://fitmanager-final.onrender.com" target="_blank" rel="noopener noreferrer">Acessar aplicação ↗</a><a className="fm07-secondary" href="https://github.com/MarcosG66/fit-manager" target="_blank" rel="noopener noreferrer">Código-fonte ↗</a></div></div><div className="fm07-preview"><img src={instrutor} alt="Captura real do painel do instrutor"/><img className="fm07-phone" src={aluno} alt="Captura real do painel mobile do aluno"/></div></div><div className="fm07-stats"><div><strong>3</strong><span>Perfis de acesso</span></div><div><strong>11</strong><span>Tabelas MySQL</span></div><div><strong>Web</strong><span>Aplicação responsiva</span></div></div></section>
  <section className="fm07-section"><p className="fm07-eyebrow">01 / APRESENTAÇÃO</p><h2>Conheça o projeto</h2><div className="fm07-video"><iframe src="https://www.youtube-nocookie.com/embed/zBLDhN3zwD0" title="Vídeo de apresentação do FitManager" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"/></div><p className="fm07-note">Referência: vídeo de apresentação do projeto acadêmico FitManager, produzido pela equipe. <a href="https://youtu.be/zBLDhN3zwD0" target="_blank" rel="noopener noreferrer">Assistir no YouTube ↗</a></p></section>
  <section className="fm07-section"><p className="fm07-eyebrow">02 / FUNCIONALIDADES</p><h2>Uma experiência para cada perfil</h2><div className="fm07-tabs" role="group" aria-label="Selecionar tela">{screens.map((s,i)=><button key={s.title} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)}>{s.title}</button>)}</div><div className="fm07-screen"><img className={selected===2?'fm07-mobile':''} src={screen.image} alt={'Tela real: '+screen.title}/></div><p>{screen.description}</p><p className="fm07-note">Capturas reais do sistema; dados pessoais ocultados para publicação no portfólio.</p></section>
  <section className="fm07-section"><p className="fm07-eyebrow">03 / TECNOLOGIA E IA</p><h2>Do problema à solução</h2><div className="fm07-grid"><article><h3>Problema</h3><p>Fichas impressas e planilhas dispersas dificultam a atualização de treinos e o acompanhamento do histórico.</p></article><article><h3>Solução</h3><p>Centralização de cadastros, exercícios, fichas, cargas e métricas em uma aplicação web responsiva.</p></article><article><h3>Arquitetura</h3><p>React, Vite e Bootstrap no cliente; Node.js e Express na API; MySQL na Aiven. Aplicação hospedada no Render.</p></article><article><h3>Uso de inteligência artificial</h3><p>A IA auxiliou na geração e revisão de código, investigação de erros, documentação e preparação da página de portfólio. A equipe é responsável por compreender e validar as entregas.</p></article></div><div className="fm07-stack">{['React','Vite','Bootstrap','Node.js','Express','MySQL','GitHub','Render','Aiven'].map(x=><span key={x}>{x}</span>)}</div></section>
  <section className="fm07-section"><p className="fm07-eyebrow">04 / EQUIPE</p><h2>Quem desenvolveu</h2><p>Quatro estudantes de Ciência da Computação da Unifor, com responsabilidades complementares no desenvolvimento do FitManager.</p><div className="fm07-grid">{team.map(m=><article key={m.name} className="fm07-member"><span className="fm07-avatar">{m.initials}</span><h3>{m.name}</h3><strong>{m.role}</strong><p>{m.bio}</p><small>{m.skills}</small></article>)}</div><p className="fm07-note">Papéis e habilidades referentes ao projeto FitManager. Disciplina: Desenvolvimento de Plataformas Web.</p></section>
  <footer className="fm07-footer">FitManager · Equipe 07 · Unifor <a href="https://fitmanager-final.onrender.com/tutorial" target="_blank" rel="noopener noreferrer">Tutorial de utilização ↗</a></footer>
 </main>;
}
