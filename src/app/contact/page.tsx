import Link from "next/link";
import Button from "../components/Button";

export default function Contact() {
    return (
      <div className="bg-green-300 flex justify-center items-center h-screen">
        <div className="text-center text-5xl text-black" >
            <h1 className="font-bold">Contact Us</h1>

            <form className="flex flex-col gap-5 text-2xl">
                <input type="text" 
                className="p-2 outline-none rounded-md"
                placeholder="Your Name" />

              <input type="email"
                className="p-2 outline-none rounded-md"
                placeholder="Your Email"  />

                <textarea className="p-2 outline-none rounded-md resize-none"
                placeholder="Your Message" ></textarea>

                <input type="submit" value="Submit" 
                className="bg-orange-500 text-white cursor-pointer transition-all duration-100
                 hover:bg-orange-600"/>
            </form>

            <div>
            <Link href={"/"}>
                <Button />
            </Link>
            </div>
        </div>
      </div>
    );
  }
  