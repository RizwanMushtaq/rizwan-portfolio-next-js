import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "./index.module.scss";

import { projects } from "../../projectsData/AllProjects";
import Card from "../../components/Card";
const arrowIcon = "/assets/icons/Pfeilrechts.svg";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rizwan Portfolio Projects</title>
        <meta
          name="description"
          content="Rizwan Mushtaq Dhudhaal Portfolio generated in Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Styles.projectsCardContainer}>
        <Card type={"projectsCard"}>
          <div className={Styles.container}>
            <div className={Styles.rightArrowContainer}>
              <div className={Styles.rightArrowContainerInner}>
                <Link href="/" passHref>
                  <div className={Styles.imgContainer}>
                    <Image height={30} width={30} src={arrowIcon} alt="arrowIcon" />
                  </div>
                </Link>
              </div>
            </div>
            <div className={Styles.allProjectsContainer}>
              {projects.map((project) => {
                return (
                  <Card key={project.id} type={"projectCard"}>
                    <>
                      <div className={Styles.titleContainer}>
                        <p>{project.title}</p>
                      </div>
                      <div className={Styles.imageContainer}>
                        <Link href={"/projects/" + project.id} passHref>
                          <Image src={project.pic} height={220} width={300} alt="logo" />
                        </Link>
                      </div>
                      <div className={Styles.buttonContainer}>
                        <button onClick={() => window.open(project.demoLink)}>
                          Live Demo
                        </button>
                        <button onClick={() => window.open(project.codeLink)}>
                          Code
                        </button>
                      </div>
                    </>
                  </Card>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Projects;


