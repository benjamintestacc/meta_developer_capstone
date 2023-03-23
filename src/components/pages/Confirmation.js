import { useLocation } from "react-router-dom";
import './Confirmation.css'

function Confirmation() {
  const { state } = useLocation();
  return (
    <section id="confirmation">
        <h1>Thanks for your Reservation! Here are your details:</h1>
        <p>Name: {state.name}</p>
        <p>Last Name: {state.lastName}</p>
        <p>E-Mail: {state.email}</p>
        <p>Phone: {state.phone}</p>
        <p>Number of Persons: {state.people}</p>
        <p>Date: {state.date}</p>
        <p>Occasion: {state.occasion}</p>
    </section>
  );
}
export default Confirmation;
