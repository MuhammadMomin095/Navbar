import Link from "next/link";
import Button from "../components/Button";

export default function About() {
    return (
      <div className="flex justify-center items-center h-screen bg-green-400 px-20">

        <div className="lg:space-y-5 space-y-2 bg-green-200 lg:p-7 p-3 rounded-lg">
            <h1 className="lg:text-6xl text-2xl text-black text-center font-bold">About Us</h1>

            <p className="sm:text-2xl text-sm text-justify text-black">"My name is Momin, and I specialize in front-end and back-end web development
                using technologies such as TypeScript, HTML, CSS, and JavaScript. I enjoy creating
                dynamic and user-friendly websites, with a focus on clean code and efficient design. 
                Currently, I am working on expanding my skills by exploring new frameworks like React.
                js and Next.js, and I have developed projects such as an online grocery store and a
                showroom website. With a passion for continuous learning, I aim to deliver impactful
                digital solutions."</p>

          <div>
           <Link href={"/"}>
                <Button />
            </Link>

            </div>
                
        </div>
      </div>
    );
  }
  