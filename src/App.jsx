import Styles from './App.module.css';
import Create from './components/create/Create';

const App = () => {
  return (
    <div className={Styles.App}>
      <Create />
    </div>
  );
}

export default App;
