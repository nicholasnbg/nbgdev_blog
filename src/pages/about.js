import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'


import Layout from '../components/Layout'

class About extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About Me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        About page
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
