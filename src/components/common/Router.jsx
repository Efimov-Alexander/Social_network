import Groups from '../Groups/Groups';
import Musics from '../Musics/Musics';
import OpenedDialogContainer from '../OpenedDialog/OpenedDialogContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import FriendsAllContainer from '../Friends/FriendsAll/FriendsAllContainer';
import FriendsOnlineContainer from '../Friends/FriendsOnline/FriendsOnlineContainer';
import ApplicationsIncomingContainer from '../Applications/ApplicationsIncoming/ApplicationsIncomingContainer';
import ApplicationsOutgoingContainer from '../Applications/ApplicationsOutgoing/ApplicationsOutgoingContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import { Routes, Route, Navigate } from 'react-router-dom';


const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/profile/10000" />} />
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
	)
}

export default Router