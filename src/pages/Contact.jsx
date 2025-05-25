import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !message) {
      setError("Please fill in all fields");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        function () {
          setIsLoading(false);
          setSuccess("Your e-mail has been sent successfully.");
          setName("");
          setEmail("");
          setMessage("");
        },
        function (error) {
          setIsLoading(false);
          setError("Sending failed. Please send me a direct e-mail.");
          console.error(error);
        }
      );
  };

  return (
    <div>
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="font-roboto pt-4 text-gray-500">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="max-w-xl m-auto rounded-xl shadow-2xl mt-10">
        <div className=" flex justify-center">
          <form className="p-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="font-roboto text-sm" htmlFor="name">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-2 border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="font-roboto text-sm">Last Name</label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="font-roboto text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-2 border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="font-roboto text-sm">Phone Number</label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="gap-6 pt-8">
              <div>
                <label className="font-roboto text-sm" htmlFor="message">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  placeholder="write your message"
                  className="w-full border-2 border-gray-300 rounded-md p-3 text-gray-500 focus:outline-none"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary mt-8 min-h-0 h-10 text-black border-2 border-black px-5 text-xl rounded-md"
              >
                {isLoading ? "Sending..." : "Send Email"}
              </button>
            </div>
            <div className="text-center mt-4">
              {success && <p className="text-green-950">{success}</p>}
              {error && <p className="text-red-900">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
