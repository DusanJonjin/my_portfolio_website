import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/notFound.css'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className='not-found-wrap'>
        <h1> 404 NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
