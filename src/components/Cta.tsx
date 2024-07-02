import React, { useState } from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    fetch("https://formcarry.com/s/qKTNg911VCS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, instagram, phone, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  };



  if (submitted) {
    return (
      <Container>
        <div className="text-green-500">Recebemos sua mensagem!</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gray-800 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Pronto para embarcar nessa jornada?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Nos contate!
          </p>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-6 bg-gray-300 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-md w-full max-w-4xl mx-auto mt-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 mt-1 block w-full rounded-md bg-white text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 mt-1 block w-full rounded-md bg-white text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="instagram" className="block text-sm font-medium text-gray-800 mb-1">
            Instagram
          </label>
          <input
            id="instagram"
            type="text"
            placeholder="Seu Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            required
            className="p-3 mt-1 block w-full rounded-md bg-white text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
            Telefone
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Seu telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="p-3 mt-1 block w-full rounded-md bg-white text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            placeholder="Escreva sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md bg-white text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-4"
          />

        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </Container>
  );
};

