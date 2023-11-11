import { Typography } from "@mui/material";

import {Layout} from "@/components/layouts";

const Home = () => {
  return (
    <Layout 
      title="OpenJira"
      description="Administrador de proyectos OpenJira"
      keywords="OpenJira, Jira, Administrador de proyectos, tarea, proyecto"
    >
      <Typography variant="h1">Hello World</Typography>
    </Layout>
  )
}

export default Home;
