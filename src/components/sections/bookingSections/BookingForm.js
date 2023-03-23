import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../../Api";
import "./BookingForm.css";

function Reservations(props) {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times, i) => <option value={times} key={i}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option value={times}>{times}</option>));
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      lastName,
      email,
      phone,
      people,
      date,
      occasion,
    };
    console.log(formData);
    if (submitAPI(formData) === true) {
      navigate("/confirmation", {state: formData});
    }
  };

  return (
    <section id="bookingsection">
      <h1>Book your Table now!</h1>
      <form id="bookingform" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="firstName"
            label="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="First Name"
            minLength={2}
            maxLength={50}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            id="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            type="text"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
            required
          />
        </label>
        <label>
          E-Mail:
          <input
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="xy@test.com"
            required
          />
        </label>
        <label>
          Phone:
          <input
            id="phone"
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+0111 01010101"
            required
          />
        </label>
        <label>
          Number of People:
          <input
            id="people"
            label="Number of People"
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="1"
            min={1}
            max={10}
            required
          />
        </label>
        <label>
          Date:
          <input
            id="people"
            label="Date"
            value={date}
            onChange={handleDateChange}
            type="date"
            required
          />
        </label>
        <label>
          Time:
          <select id="time" label="Time" required>
            {finalTime}
          </select>
        </label>
        <label>
          Occasion:
          <select
            required
            label="Occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <input
          type="submit"
          aria-label="On Click"
          value="Make Your reservation"
        />
      </form>
    </section>
  );
}

export default Reservations;
