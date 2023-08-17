import './aseets/styles/null.css';
import './aseets/styles/ui.scss';
import './aseets/styles/App.css'
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import store from './redux/reduxStore'
import {  BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './components/common/Router';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Provider store={store}>
					<Header />
					<main className='main'>
						<div className='main__container _container'>
							<div className="main__body">
								<SideBar />
								<Router />
							</div>
						</div>
					</main>
				</Provider>
			</BrowserRouter>
		</div >
	);
}

export default App;