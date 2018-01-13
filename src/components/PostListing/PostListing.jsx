import React from "react";
import Link from "gatsby-link";
import "./PostListing.scss";
import Img from "gatsby-image";


class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="container">
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <article className="article--small">
              <div className="article__image" style={{ backgroundImage: `url(${post.cover})`}}>
                
              </div>
              <div className="article__content">
                <div className="article__description">
                <h3>{post.title}</h3>
                <p>
                  {post.excerpt}
                </p>
                </div>
              
              </div>
              
              
            </article>
            
          </Link>
          
        ))}
      </div>
    );
  }
}

export default PostListing;
