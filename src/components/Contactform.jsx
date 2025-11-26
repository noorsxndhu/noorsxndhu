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
        <>
            <form onSubmit={handleSubmit} className="flex flex-col pt-[100px] justify-center ">
                <h1 className="font-[bricolage] font-bold text-4xl justify-center">Get in touch</h1>

                <div className="grid gap-1 w-full  justify-center pt-[25px]">
                    <label className="relative text-start font-[bricolage] text-[16px] pl-[2px]">Your Name</label>
                    
                    <input
                        type="name"
                        placeholder="john doe"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-white text-sm text-start h-[40px] w-[740px] border rounded-[0.5rem] dark:bg-black light:bg-white relative px-[10px]"
                    />
                </div>

                <div className="grid gap-1 w-full  justify-center pt-[25px]">
                    <label className="relative text-start font-[bricolage] text-[16px] pl-[2px]">Your Email</label>

                    <input
                        type="email"
                        placeholder="johndoe69@xyz.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-white text-sm text-start h-[40px] w-[740px] border rounded-[0.5rem] dark:bg-black light:bg-white relative px-[10px]"
                    />

                </div>

                <div className="grid gap-1 w-full  justify-center pt-[25px]">
                    <label className="relative text-start font-[bricolage] text-[16px] pl-[2px]">Your Message</label>

                    <textarea
                        cols="93"
                        rows="3"
                        placeholder="Type your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="text-stone-100 text-sm text-start  border rounded-[0.5rem] dark:bg-black light:bg-white relative px-[10px] py-[10px] "
                    >
                    </textarea>
                </div>

                <div>
                    <button type="submit" className="items-center justify-center relative text-[0.875rem]
                    w-[740px] mt-[30px] py-[8px] bg-black text-white dark:bg-white dark:text-black border rounded-[0.5rem] transition duration-200">Send message</button>
                </div>

            </form>
        </>
    )
}