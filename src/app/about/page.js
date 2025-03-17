"use client";
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {

  const router = useRouter();
  function handleHomeClick() {
    router.push("/")
  }
  return (
    <>
        <h1>About EIE</h1>
        <button onClick={handleHomeClick}>Back to Home</button>
    </>
  )
}

export default About;