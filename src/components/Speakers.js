import React, { useState } from 'react'
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";

function Speakers({theme,setTheme}) {
  const [showSessions, setShowSessions] = useState(false);
  return (
    <>
    <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} />
        <SpeakersList  showSessions={showSessions} />
    </>
  )
}

export default Speakers