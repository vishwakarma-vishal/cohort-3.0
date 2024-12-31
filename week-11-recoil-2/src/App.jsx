import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
// import { messageCountAtom, viewCountAtom, activityCountAtom, allNotificationAtom, getDataAtom } from './atoms/messageCount';
import { getDataAtom } from './atoms/messageCount';

function App() {

  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}


function MainApp() {
  // const messageCount = useRecoilValue(messageCountAtom);
  // const activityCount = useRecoilValue(activityCountAtom);
  // const viewCount = useRecoilValue(viewCountAtom);

  // const allNotificationCount = useRecoilValue(allNotificationAtom);

  const data = useRecoilValue(getDataAtom);

  return (<div>
    {/* <button>Messages ({messageCount})</button>
    <button>Profile ({activityCount})</button>
    <button>Activity ({viewCount})</button>
    <br/>
    <button>All notifition {allNotificationCount}</button> */}

    <h1>Id: {data[0].id}</h1>
    <p>Post Id: {data[0].postId}</p>
    <p>Email: {data[0].email}</p>
  </div>
  )
}

export default App
