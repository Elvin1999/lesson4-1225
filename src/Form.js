import React, { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 3000);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Current Receiver : {to}</h1>
        <h1>Current Message : {message}</h1>
        <section>
          <label>
            To :
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
              <option value="John">John</option>
            </select>
          </label>
        </section>

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <section>
          <button type="submit">Send</button>
        </section>
      </form>
    </div>
  );
}
