"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";

export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data: any, e: any) => {
    data.access_key = "YOUR_ACCESS_KEY_HERE"; // Adicione a chave de acesso aqui
    data.subject = `${userName} sent a message from Nextly`;
    data.from_name = "Nextly Template";
    
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
                as={"div"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Transition>
            </DisclosureButton>
            <Transition
              className="fixed  z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className=" flex flex-col  overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-600">
                  <h3 className="text-lg text-white">Como podemos ajudar?</h3>
                  <p className="text-white opacity-50">
                    Geralmente respondemos em alguns instantes
                  </p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <input
                        type="hidden"
                        value="YOUR_ACCESS_KEY_HERE"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} sent a message from Nextly`}
                        {...register("subject")}
                      />
                      <input
                        type="hidden"
                        value="Nextly Template"
                        {...register("from_name")}
                      />
                      <input
                        type="checkbox"
                        className="hidden"
                        style={{ display: "none" }}
                        {...register("botcheck")}
                      ></input>

                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Nome completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Seu nome"
                          {...register("name", {
                            required: "Digite seu nome completo",
                            maxLength: 80,
                          })}
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                            errors.name
                              ? "border-red-600 focus:border-red-600 ring-red-100"
                              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                          }`}
                        />
                        {errors.name && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.name.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Digite seu email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Por favor insira um email valido",
                            },
                          })}
                          placeholder="endereco@email.com"
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                            errors.email
                              ? "border-red-600 focus:border-red-600 ring-red-100"
                              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                          }`}
                        />

                        {errors.email && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.email.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register("phone", {
                            required: "Digite seu telefone",
                            maxLength: 15,
                          })}
                          placeholder="(XX) XXXXX-XXXX"
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                            errors.phone
                              ? "border-red-600 focus:border-red-600 ring-red-100"
                              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                          }`}
                        />

                        {errors.phone && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.phone.message as string}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="instagram"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          Instagram
                        </label>
                        <input
                          type="text"
                          id="instagram"
                          {...register("instagram", {
                            required: "Digite seu Instagram",
                            maxLength: 30,
                          })}
                          placeholder="@seuInstagram"
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                            errors.instagram
                              ? "border-red-600 focus:border-red-600 ring-red-100"
                              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                          }`}
                        />

                        {errors.instagram && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">
                            {errors.instagram.message as string}
                          </div>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2 text-white bg-indigo-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                      >
                        {isSubmitting ? (
                          <svg
                            className="w-5 h-5 mx-auto text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                          </svg>
                        ) : (
                          "Enviar"
                        )}
                      </button>
                    </form>
                  )}

                  {isSubmitSuccessful && isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        className="text-green-300"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        <path
                          d="M26.6667 50L41.6667 65L73.3334 33.3333"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM91.6667 50C91.6667 73.6 73.6 91.6667 50 91.6667C26.4 91.6667 8.33337 73.6 8.33337 50C8.33337 26.4 26.4 8.33333 50 8.33333C73.6 8.33333 91.6667 26.4 91.6667 50Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h3 className="p-5 text-2xl font-semibold text-gray-700">
                        Mensagem Enviada com Sucesso
                      </h3>
                      <p className="text-gray-500">
                        Obrigado por entrar em contato conosco. Responderemos em
                        breve!
                      </p>
                    </div>
                  )}

                  {isSubmitSuccessful && !isSuccess && (
                    <div className="text-center text-red-400">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 100 100"
                        fill="none"
                        className="mx-auto"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM91.6667 50C91.6667 73.6 73.6 91.6667 50 91.6667C26.4 91.6667 8.33337 73.6 8.33337 50C8.33337 26.4 26.4 8.33333 50 8.33333C73.6 8.33333 91.6667 26.4 91.6667 50Z"
                          fill="currentColor"
                        />
                        <path
                          d="M63.3334 36.6667L50 50M50 50L36.6667 63.3333M50 50L63.3334 63.3333M50 50L36.6667 36.6667"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <h3 className="text-2xl font-semibold">
                        {Message || "Oops! Alguma coisa deu errado..."}
                      </h3>
                      <p className="text-gray-500">Tente novamente mais tarde.</p>
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
