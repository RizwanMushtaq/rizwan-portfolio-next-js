import {useRouter} from 'next/router'
import { projects } from "../../assets/projectsData/AllProjects"

const ProjectDetails = () => {
  const router = useRouter()

  router.query.projectId
  console.log(router.query.projectId)

  return (
    <div>ProjectDetails</div>
  )
}

export default ProjectDetails

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     path: projects.map((project) => {
//       return {
//         params: {
//           projectId: project.id,
//         },
//       };
//     }),
//   };
// }

// export async function getStaticProps({ params }) {
//     return {

//     }
// }
