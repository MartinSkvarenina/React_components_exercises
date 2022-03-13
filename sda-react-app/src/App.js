import MyButton from "./sharedComponents/myButton";
import MyButtonsList from "./sharedComponents/MyButtonsList";


function App() {
  return (
    <div style={{marginTop:'20px', marginLeft:'20px'}}>

      <MyButtonsList buttonsCount={10} disableCounters = {false}/>
      <MyButtonsList buttonsCount={5} disableCounters = {true}/>
    </div>
  );
}

export default App;
