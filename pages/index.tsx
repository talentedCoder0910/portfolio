import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  // const githubProfileData: GithubUserType = await fetch(
  //   `https://api.github.com/users/${openSource.githubUserName}`
  // ).then(res => res.json());
  const githubProfileData: GithubUserType = {
    bio: "Full Stack Developer with multiple Languages | Mobile Application | Data Science - Crafting Seamless Tech Solutions for Businesses",
    location : "Los Angeles, CA",
    avatar_url: "https://avatars.githubusercontent.com/talentedCoder0910",
  };

  return {
    props: { githubProfileData },
  };
}
