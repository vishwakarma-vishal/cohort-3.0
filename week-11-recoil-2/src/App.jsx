import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
// import { messageCountAtom, viewCountAtom, getDataAtom, activityCountAtom, allNotificationAtom, getDataAtom } from './atoms/messageCount';
import { postAtomFamily } from './atoms/messageCount';

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
  // const data = useRecoilValue(getDataAtom);

  return (<div>
    {/* Atoms family */}
     <Todo id={1}/>
     <Todo id={2}/>

    {/* <button>Messages ({messageCount})</button>
    <button>Profile ({activityCount})</button>
    <button>Activity ({viewCount})</button>
    <br/>
    <button>All notifition {allNotificationCount}</button> */}

    {/* <h1>Id: {data[0].id}</h1>
    <p>Post Id: {data[0].postId}</p>
    <p>Email: {data[0].email}</p> */}
  </div>
  )
}


function Todo({id}){
  const todo = useRecoilValue(postAtomFamily(id));

  return (
    <div>{todo.title}</div>
  )
}

export default App
