import { useParams } from "react-router-dom";
import "./ProjectDetail.css";

// Define the projects data here (or import from a central file)
const projects = [
  {
    id: "project1",
    title: "Vehicle Maintenance Tracker",
    image: "/assets/images/vehicle.png",
    description:
      "An application for users to track the maintenance of their vehicles. Users can sign up for an account to start storing their vehicles and maintenance records. This was build using Python, Django, PostgreSQL, CSS.",
    projectLink:
      "https://vehicle-maintenance-tracker-240e1fe94f00.herokuapp.com/",
  },
  {
    id: "project2",
    title: "The Listening Ear",
    image: "/assets/images/ear.png",
    description:
      "A Therapy booking site built using Python, Django, PostgreSQL, CSS, and Stripe for payment. This application allows users to book an appointment for a date and time of thier choosing and pay in the checkout screen.",
    projectLink: "https://the-listening-ear-9b83df5f497d.herokuapp.com/",
  },
  {
    id: "project3",
    title: "Reader Realm",
    image: "/assets/images/book.png",
    description:
      "An application for book lovers to share and find their favorite books. Users can create an account or just browse through the collection books and reviews. To add a book to the collection or leave a review for a book an account must be created. This was build using Express.js, EJS, CSS, MongoDB Atlas.",
    projectLink: "https://reader-realm-eef6146ef95e.herokuapp.com/",
  },
  {
    id: "project4",
    title: "Active Vibe",
    image: "/assets/images/active.png",
    description:
      "A fitness tracking application. Users can create an account to start logging workouts. Users can also search for local gyms using the Google Places API. This was built using React, MongoDB, Express.JS, CSS.",
    projectLink: "https://active-vibe.netlify.app/",
  },
  {
    id: "project5",
    title: "Community Resource",
    image: "/assets/images/resource.png",
    description:
      "Application for users to search and save local resources. This allows users to search for resources such as Food Banks, Shelters, Waste Disposal, and Clothing using the Google Places API. This was built using Python, Django, CSS, and PostgreSQl.",
    projectLink: "https://community-resource-hub-2b405874d7f6.herokuapp.com/",
  },
  {
    id: "project6",
    title: "Wordle",
    image: "/assets/images/wordle.png",
    description:
      "A clone of the popular NY Times Wordle. This is my take on the clasic Wordle game. It was built using HTML, CSS, and JavaScript.",
    projectLink: "https://andrewreese16.github.io/wordle-browser-game/",
  },
];

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL params
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <section className="project-detail">
      <h1>{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="project-detail-image"
      />
      <p>{project.description}</p>
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link-button"
      >
        View Project
      </a>
    </section>
  );
};

export default ProjectDetail;
