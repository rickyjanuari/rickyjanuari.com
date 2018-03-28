import React from "react";
import Helmet from "react-helmet";
import PostListing from "components/PostListing/PostListing";
import SEO from "components/SEO/SEO";
import Intro from "components/Intro/Intro";
import config from "../../../data/SiteConfig";
import "./styles.scss";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="home index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div className="container">
        <h1 className="post-result-title"><span className="post-result-label">Blog</span> posts</h1>
        <PostListing postEdges={postEdges} />
        </div>
        
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
