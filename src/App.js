import './App.css';
import ComparativeTime from './Components/ComparativeTime';
import Map from './Components/Map';
import ShowIP from './Components/ShowIP';
import UserTime from './Components/UserTime';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <ShowIP />
      </header>
      <main className="appMain">
        <div>
          <Map />
        </div>
        <div>
          <UserTime />
          <ComparativeTime />
        </div>
      </main>
      <footer className="appFooter">
        <div>Copyright </div>
      </footer>    
    </div>
  );
}

export default App;
