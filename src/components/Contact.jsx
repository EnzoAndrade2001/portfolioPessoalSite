import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mblgnpbd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white text-center" id="contato">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Fale comigo
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <textarea
            name="mensagem"
            rows="5"
            placeholder="Sua mensagem"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold transition-all"
          whileHover={{ scale: 1.05 }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </motion.button>

        {status === "success" && (
          <motion.p
            className="text-green-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Mensagem enviada com sucesso! 🎉
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            className="text-red-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Ocorreu um erro. Tente novamente. 😥
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;
