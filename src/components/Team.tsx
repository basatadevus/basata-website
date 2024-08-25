import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure of a team member
interface TeamMember {
  name: string;
  image: string;
  linkedin: string;
}

// Sample team members data
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
    name: "Ayub Alhanafi",
    image: "https://api.dicebear.com/9.x/lorelei/svg?seed=Charlie",
    linkedin: "https://linkedin.com/in/ayub-hanafi-75936545",
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div>
        <h2 className="text-black text-3xl font-bold mb-6">Meet our team!</h2>
        <div className="grid grid-cols-3 gap-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={`${member.name}`}
                className="w-32 h-32 rounded-full mb-2"
              />
              <h3 className="flex flex-row gap-x-1 text-black font-semibold">{member.name}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  <FaLinkedin size={20} />
                </a>
                </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-black text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded border border-gray-300"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-2 rounded border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg"
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
