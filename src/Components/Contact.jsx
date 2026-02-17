import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "56e63abe-7aa7-45fc-861a-8481916b0722");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Something went wrong ❌");
      setResult("");
    }
  };
  return (
    <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease:'easeInOut' }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="font-light border-b-1 border-black"> With Us</span>
      </h1>
      <p className="text-center text-neutral-600 max-w-80 mx-auto mb-8 mt-2 ">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      {/* form here  */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8 ">
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 text-left ">
            Your name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4 ">
            Your email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        {/* msg here */}

        <div className="w-full text-left my-6">
          Your message
          <textarea
            className="w-full  border border-gray-300 rounded py-3 px-4 mt-2 resize-none"
            rows="5"
            name="message"
            placeholder="Your message"
            required 
          ></textarea>
        </div>

        {/* btn here  */}
        <button className="bg-blue-500 text-white rounded py-3 px-4 hover:bg-blue-600 transition duration-300">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
