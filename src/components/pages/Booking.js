import { useReducer } from "react";
import BookingForm from "../sections/bookingSections/BookingForm";
import { fetchAPI } from "../../Api";

function Booking() {
  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  function updateTimes(date) {
    return fetchAPI(date);
  }

  return (
    <section className="placeholder">
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </section>
  );
}

export default Booking;
