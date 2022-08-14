import { useState } from "react";

function Message() {
  const [form, setForm] = useState({});

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  async function messageSubmit(e) {
    e.preventDefault();
    console.log("form submitted", form);

    const results = await fetch(
      "",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    console.log(results);
    const data = await results.json();
    console.log(data);
  }

  return (
    <>
      <div>
        <form onChange={messageSubmit}>
          <label>Message: </label>
          <textarea
            onChange={updateForm}
            value={form.message}
            type="text"
            name="message"
          ></textarea>
          <br />
          <label>Name: </label>
          <textarea
            onChange={updateForm}
            value={form.name}
            type="text"
            name="name"
          ></textarea>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Message;
