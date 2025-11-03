import React, { useState } from 'react'
import AddRooms from '../components/AddRooms';
import ViewRooms from '../components/ViewRooms';

function RoomParent() {
    const [rooms, setRooms] = useState([]);

  return (
    <>

    <div>
      <AddRooms setRooms = {setRooms} rooms = {rooms}/>
      </div>

      <div>
        <ViewRooms rooms = {rooms}/>
      </div>

    </>
  )
}

export default RoomParent