import Layout, { siteTitle } from "../../components/layout"
import Head from 'next/head';

export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    console.log("context.params",context.params);
    
    if (!res) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    // Pass data to the page via props
    return { props: { repo } }
  }
   
  export default function Stargazers({ repo }) {
    return (
      <Layout>
            <Head>
              <title>{siteTitle}</title>
            </Head>
        <p>stargazers count: {repo.stargazers_count}</p>
      </Layout>
    )
  }