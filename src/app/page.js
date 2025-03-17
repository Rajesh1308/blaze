"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  function handleEventsClick() {
    router.push("/events");
  }
  function handleAboutClick(){
    router.push("/about")
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleEventsClick}>Events</button>
      <button onClick={handleAboutClick}>About Us</button>
    </>
  );
}
