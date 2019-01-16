import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'


import Layout from '../components/Layout'

class Work extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Work"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        Work page
      </Layout>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`