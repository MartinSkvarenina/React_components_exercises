import MyButton from "./sharedComponents/myButton";

function App() {
  return (
    <div style={{marginTop:'20px', marginLeft:'20px'}}>
      <MyButton ButtonName='Tlačítko 1'/>
      <MyButton ButtonName='Tlačítko 2'/>
      <MyButton ButtonName='Tlačítko 3'/>
    </div>
  );
}

export default App;
