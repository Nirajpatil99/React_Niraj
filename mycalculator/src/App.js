import logo from './logo.svg';
import './App.css';

function App() {
  const num1=30;
  const num2=20;
  const msg=()=>{
    return ("here is a calculator create using react")
  }
  return (
    <div className="App">
      <h2>{msg()}</h2>
      <h3>Sum is: {num1+num2}</h3>
      <h3>Multiplication is: {num1*num2}</h3>
      <h3>Divison is: {num1/num2}</h3>
      <h3>modulus is: {num1%num2}</h3>
      <h3>subtraction is: {num1-num2}</h3>
    </div>
  );
}

export default App;
