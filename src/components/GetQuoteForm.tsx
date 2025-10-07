"use client";

import { useState } from "react";

export default function GetQuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 No DB / no API — just log or trigger mailto
    console.log("Form values:", form);

    // Optional: open default mail client with the info
    const mailto = `mailto:info@example.com?subject=Quote Request&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLocation: ${form.location}\nMessage: ${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-[100%] 2xl:w-[75%] space-y-4 rounded-2xl bg-white p-6 shadow-md"
    >
      <h2 className="text-[24px] leading-[30px] font-[400] w-[80% ] text-[#323232] ">Simply fill out the form, and we&apos;ll be in touch.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-[25px] mb-[0]">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name*"
          aria-label="Name"
          className="border-b border-[#DDDDDD] focus:border-[#1c5264] outline-none p-2 pl-[0] bg-transparent placeholder:text-[#686565]"
        />
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email*"
          aria-label="Email"
          className="border-b border-[#DDDDDD] focus:border-[#1c5264] outline-none p-2 pl-[0] bg-transparent placeholder:text-[#686565]"
        />
        <input
          required
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number*"
          aria-label="Phone number"
          className="border-b border-[#DDDDDD] focus:border-[#1c5264] outline-none p-2 pl-[0] bg-transparent placeholder:text-[#686565]"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location*"
          aria-label="Location"
          className="border-b border-[#DDDDDD] focus:border-[#1c5264] outline-none p-2 pl-[0] bg-transparent placeholder:text-[#686565]"
        />
      </div>

      <textarea
        required
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message*"
        aria-label="Message"
        rows={4}
        className="border-b border-[#DDDDDD] focus:border-[#1c5264] outline-none p-2 pl-[0] mt-[25px] bg-transparent placeholder:text-[#686565] w-[100%]"
      />

      <button
        type="submit"
        className=" bg-[#353535] py-[10px] px-[20px] text-white font-light transition rounded-[25px] w-fit my-[25px] cursor-pointer hover:bg-[#0087a7] hover:text-[#fff]"
      >
        Get a Quote
      </button>
    </form>
  );
}
