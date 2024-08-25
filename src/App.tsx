import { useRef } from "react";
import "./App.css";
import Title from "./components/Title";
import Team from "./components/Team";

function App() {
  const teamRef = useRef<HTMLDivElement>(null);

  const handleMeetTeamClick = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Title onMeetTeamClick={handleMeetTeamClick} />
      <div ref={teamRef}>
        <Team />
      </div>
    </div>
  );
}

export default App;