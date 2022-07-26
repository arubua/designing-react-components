import React from "react";

export default function SpeakersToolbar({theme,setTheme,showSessions,setShowSessions}) {

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
                <b>Show sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(event) => {setShowSessions(event.target.checked)}}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row">
              <strong>Theme</strong>
              <label htmlFor="" className="dropdown">
                <select
                  name=""
                  id=""
                  value={theme}
                    onChange={(event) => setTheme(event.target.value)}
                  className="form-control theme"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
