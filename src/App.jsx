import './aseets/styles/null.css';
import './aseets/styles/ui.scss';
import './aseets/styles/App.css'
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Groups from './components/Groups/Groups';
import Musics from './components/Musics/Musics';
import OpenedDialogContainer from './components/OpenedDialog/OpenedDialogContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import FriendsAllContainer from './components/Friends/FriendsAll/FriendsAllContainer';
import FriendsOnlineContainer from './components/Friends/FriendsOnline/FriendsOnlineContainer';
import ApplicationsIncomingContainer from './components/Applications/ApplicationsIncoming/ApplicationsIncomingContainer';
import ApplicationsOutgoingContainer from './components/Applications/ApplicationsOutgoing/ApplicationsOutgoingContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import store from './redux/reduxStore'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

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
								<Routes>
									<Route path='/profile/:profileId' Component={ProfileContainer} />

									<Route path='/dialogs' Component={DialogsContainer} />
									<Route path='/dialogs/:openedDialogId' Component={OpenedDialogContainer} />

									<Route path='/friends/all' Component={FriendsAllContainer} />
									<Route path='/friends/online' Component={FriendsOnlineContainer} />
									<Route path='/applications/incoming' Component={ApplicationsIncomingContainer} />
									<Route path='/applications/outgoing' Component={ApplicationsOutgoingContainer} />

									<Route path='/musics' Component={Musics} />

									<Route path='/groups' Component={Groups} />
								</Routes>
							</div>
						</div>
					</main>
				</Provider>
			</BrowserRouter>
		</div >
	);
}

export default App;