import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <h1 className="heading">Join</h1>
        <div><input placeholder="" className="input" type="text" onChange={e => setName(e.target.value)} required /></div>
        <div><input placeholder="" className="input" type="text" onChange={e => setRoom(e.target.value)} required /></div>
        <Link to={`/chat?name=${name}&room=${room}`} onClick={e => (name && room) ? null : e.preventDefault()}>
          <button className="button" type="submit">Join now</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;
