import Cards from "./components/cards/Cards";
import userData from "./assets/Data";

function App() {
  return (
    <>
      <h1>Business Card App Using React Props</h1>
      <div className="wrapper">
        <h1 className="center">1. Replecating components</h1>
        {userData.map(({ name, email, phone, color }, i) => {
          return (
            <Cards key={i} name={name} email={email} phone={phone} color={color} />
          );
        })}
      </div>
    </>
  );
}

export default App;
