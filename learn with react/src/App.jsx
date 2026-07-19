import React from 'react'
import Card from "./component/Card";

 const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    role: "Frontend Developer",
    field: "Web Development",
    skills: [ "JavaScript"],
    rating: 4.8,
    saved: true,
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    role: "Backend Developer",
    field: "Node.js",
    skills: ["Node"],
    rating: 4.7,
    saved: false,
  },
  {
    id: 3,
    company: "Amazon",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    role: "Full Stack Developer",
    field: "MERN Stack",
    skills: ["React"],
    rating: 4.9,
    saved: true,
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    role: "UI/UX Designer",
    field: "Design",
    skills: ["Figma"],
    rating: 4.6,
    saved: false,
  },
];



  return (
  <div className="parent">
      {jobs.map((elem) => {
        return <Card key={elem.id} skill={elem.skills} />;
      })}
    </div>)}
export default App;