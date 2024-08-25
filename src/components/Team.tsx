import React from "react";
import { FaLinkedin } from "react-icons/fa6";

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
    linkedin: "mailto:ayub@basata.ai",
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
        <form className="space-y-4">
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
    </div>
  );
}

export default Team;
