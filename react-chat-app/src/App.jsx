import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import ChatBot from './chatBot'
import dayjs from 'dayjs';
function App() {
  const [time , setTime] = useState(dayjs().format('HH:mm:ss'));
  const updateTime = () =>{
      setInterval(()=>{
          setTime(dayjs().format('HH:mm:ss'));
      },1000);

  }

  return (
    <>
      <ChatBot />
      <div className="current-time" ref={updateTime}>
        {time}
      </div>

    </>
  )
}

export default App;
