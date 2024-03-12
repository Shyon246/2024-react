import "./App.css";

const meubotao = (props: any) => {
  return <button>{props.titulo}</button>;
}

const App = () => {
    return (
      <div className="aplicacao">
        <h1>Bem vindo ao mundo React</h1>
        <MeuBotao titulo="m1"/>
        <MeuBotao titulo="m2"/>
        <MeuBotao titulo="m3"/>
     </div>
    );
  }
  
  export default App;
  