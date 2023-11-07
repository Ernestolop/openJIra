import Head from "next/head";

import { Box } from "@mui/material";

import { Navbar } from "@/components/ui";

const Layout = ({title, description, keywords, children}) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Ernesto López" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Box sx={{ padding: "10px 20px" }}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout;