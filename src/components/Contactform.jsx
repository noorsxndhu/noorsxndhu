import { useState } from "react"
import emailjs from "@emailjs/browser";


export default function Contactform() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        //EmailJS service id, template id, and public key
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Gurnoor sandhu",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publickey)
            .then((response) => {
                console.log("Email sent successfuly", response);
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log('FAILED...', error);
            });
    }
    return (
        <section id="contactsection">
            <form onSubmit={handleSubmit} className="flex flex-col  pt-16 sm:pt-20 md:pt-24 lg:pt-24 items-center ">
                <h1 className="font-[bricolage] font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl justify-center">Get in touch</h1>

                <div className="grid gap-1 justify-center  pt-6">
                    <label className="relative text-start font-[bricolage] text-base sm:text-base md:text-base lg:text-base pl-0.5">Your Name</label>
                    
                    <input
                        type="name"
                        placeholder="john doe"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-white text-sm text-start h-10 sm:h-10 md:h-10 lg:h-10 w-[28rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] border rounded-lg dark:bg-black light:bg-white relative px-2"
                    />
                </div>

                <div className="grid gap-1 w-full  justify-center pt-6">
                    <label className="relative text-start font-[bricolage] text-sm sm:text-sm md:text-base lg:text-base pl-0.5">Your Email</label>

                    <input
                        type="email"
                        placeholder="johndoe69@xyz.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-white text-sm text-start h-10 sm:h-10 md:h-10 lg:h-10 w-[28rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] border rounded-lg dark:bg-black light:bg-white relative px-2"
                    />

                </div>

                <div className="grid gap-1 w-full  justify-center pt-6">
                    <label className="relative text-start font-[bricolage] text-sm sm:text-sm md:text-base lg:text-base pl-0.5">Your Message</label>

                    <textarea
                        cols="93"
                        rows="3"
                        placeholder="Type your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="text-white text-sm text-start  border rounded-lg dark:bg-black light:bg-white relative w-[28rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] px-2.5 sm:px-2.5 md:px-2.5 lg:px-2.5 py-2.5 sm:py-2.5 md:py-2.5 lg:py-2.5"
                    >
                    </textarea>
                </div>

                <div>
                    <button type="submit" className="items-center justify-center relative text-xs sm:text-sm md:text-sm lg:text-sm
                    w-[28rem] sm:w-[34rem] md:w-[42rem] lg:w-[48rem] mt-7 sm:mt-7 md:mt-7 lg:mt-7 py-2 sm:py-2 md:py-2 lg:py-2 bg-black text-white dark:bg-white dark:text-black border rounded-lg transition duration-200">Send message</button>
                </div>

            </form>
        </section>
    )
}