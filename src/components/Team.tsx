import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
// import emailjs from "@emailjs/browser";
interface TeamMember {
  name: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Chetan Patel",
    image: "https://api.dicebear.com/9.x/lorelei/svg?seed=Fluffy",
    linkedin: "https://linkedin.com/in/chetanpatelphd",
  },
  {
    name: "Kaled Alhanafi",
    image: "https://api.dicebear.com/9.x/lorelei/svg?seed=Boots",
    linkedin: "https://linkedin.com/in/kaled",
  },
  {
    name: "Vivin Paliath",
    image: "https://api.dicebear.com/9.x/lorelei/svg?seed=Callie",
    linkedin: "https://linkedin.com/in/vivin",
  },
  {
    name: "Nihaar Nandedkar",
    image: "https://api.dicebear.com/9.x/lorelei/svg?seed=Bailey",
    linkedin: "https://linkedin.com/in/nihaar-nandedkar",
  },
  {
    name: "Shreyas Sawant",
    image: "https://api.dicebear.com/9.x/lorelei/svg?seed=Buster",
    linkedin: "https://linkedin.com/in/thespiritninja",
  },
];

function Team() {
  const [showModal, setShowModal] = useState(false);
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  // // const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
  // //   const {name, value} = e.target;
  // //   setForm({
  // //     ...form,
  // //     [name]: value
  // //   });
  // // };
  // // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  // //   e.preventDefault();
  // //   const form = new FormData(e.target as HTMLFormElement);
  // //   try{
  // //     await emailjs.send(
  // //       import.meta.env.VITE_serviceID,
  // //       import.meta.env.VITE_templateID,
  // //       {
  // //         from_name:form.get('name'),
  // //         from_email: form.get('email'),
  // //         message:form.get('message')
  // //       },
  // //       import.meta.env.VITE_publicKey,
  // //     )
  // //     setShowModal(true);
  // //     setForm({
  // //       name: '',
  // //       email: '',
  // //       message: '',
  // //     });
  // //   }catch(error){
  // //     console.log(error);
  // //     alert("Error sending message");
  // //   }
  // // };
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h2 className="text-black text-3xl font-bold mb-6">Meet our team!</h2>
      <div className="md:flex md:space-x-8">
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-0">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-2"
                />
                <h3 className="text-black font-semibold text-center text-sm md:text-base">{member.name}</h3>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
            <h2 className="text-black text-2xl font-bold mb-4">Wish to learn more?</h2>
            <p className="text-lg mb-2">Reach out to us at:</p>
            <div className="flex items-center">
              <a 
                href="mailto:info@basata.ai"
                className="text-blue-500 cursor-pointer hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@basata.ai
              </a>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">Thank you!</h3>
              <p>We're glad to hear from you. Hang tight, we'll get back to you soon.</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Team;
