"use client";

import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function Event() {

  const router = useRouter();
  function handleHomeClick() {
    router.push("/")
  }
  return (
    <>
        <h1>Events</h1>
        <button onClick={handleHomeClick}>Back to Home</button>
        <p className='h1'>List of Events</p>
    </>
  )
}

export default Event;