import { useRouter } from "next/router";
import { projects } from "../../projectsData/AllProjects";

const ProjectDetails = ({ data }) => {
  const router = useRouter();

  router.query.projectId;
  console.log(router.query.projectId);

  return (
    <>
      <div>ProjectDetails</div>
      <div>{data.title}</div>
    </>
  );
};

export default ProjectDetails;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: projects.map((project) => ({
      params: { projectId: project.id.toString() },
    })),
  };
}

export async function getStaticProps() {
  const data = projects;

  return {
    props: {
      data,
    },
  };
}
