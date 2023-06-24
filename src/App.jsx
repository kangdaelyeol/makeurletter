import Styles from './App.module.css';
import Create from './components/create/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<div className={Styles.App}>
			<BrowserRouter>
				<Routes>
					<Route exact={false} path='/create' element={<Create />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
