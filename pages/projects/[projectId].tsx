import { useRouter } from "next/router";
import { projects } from "../../projectsData/AllProjects";
import Styles from "./ProjectDetails.module.scss";

import Card from "../../components/Card";
import Link from "next/link";
import Image from "next/image";
const arrowIcon = "/assets/icons/Pfeilrechts.svg";

const ProjectDetails = (props: any) => {
  const router = useRouter();
  router.query.projectId;
  // console.log(router.query.projectId);

  console.log(JSON.parse(props.data));
  let projectData = JSON.parse(props.data);

  return (
    <div className={Styles.projectCardContainer}>
      <Card type={"projectDetailCard"}>
        <div className={Styles.container}>
          <div className={Styles.rightArrowContainer}>
            <div className={Styles.rightArrowContainerInner}>
              <Link href={"/projects"} passHref>
                <div className={Styles.imgContainer}>
                  <Image
                    src={arrowIcon}
                    height={30}
                    width={30}
                    alt="arrowIcon"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className={Styles.projectDetailsContainer}>
            <h1>{projectData.title}</h1>
            <div className={Styles.projectCard}>
              <div className={Styles.imgContainer}>
                <Image
                  src={projectData.pic}
                  width={300}
                  height={200}
                  alt="project-pic"
                />
              </div>
              <div className={Styles.buttonsContainer}>
                <button onClick={() => window.open(projectData.demoLink)}>
                  Live Demo
                </button>
                <button onClick={() => window.open(projectData.codeLink)}>
                  Code
                </button>
              </div>
            </div>
            <div className={Styles.projectTechnologies}>
              <p>Tech Stack Used:</p>
              <ul>
                {projectData.description.technologies.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={Styles.projectFunctionality}>
              <p>Project Features:</p>
              <ul>
                {projectData.description.features.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetails;

export async function getStaticPaths() {
  let data = projects;
  return {
    fallback: false,
    paths: data.map((project) => ({
      params: { projectId: project.id.toString() },
    })),
  };
}

export async function getStaticProps(context: any) {
  const data = projects;
  const projectId = context.params.projectId;

  let selectedProject = null;

  data.map((project) => {
    if (project.id == projectId) {
      selectedProject = {
        id: project.id,
        title: project.title,
        pic: project.pic,
        demoLink: project.demoLink,
        codeLink: project.codeLink,
        description: {
          technologies: project.description.technologies,
          features: project.description.features,
        },
      };
    }
  });

  return {
    props: {
      data: JSON.stringify(selectedProject),
    },
  };
}
