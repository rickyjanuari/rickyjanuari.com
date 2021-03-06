import React from "react";
import Link from "gatsby-link";
import "./PostListing.scss";
import Img from "gatsby-image";
import PostTags from "components/PostTags/PostTags";

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
      <div className="row">
      
        {/* Your post list here. */
        postList.map(post => (
            <div key={post.title} className="posts col-xs-12 col-sm-6 col-md-3">
            
            <div className="posts-content">
            <Link to={post.path} >
              <div className="posts__image" style={{ backgroundImage: `url(${post.cover})`}}>
              </div>
              
              <div className="posts__content">
                <div className="posts__description">
                  <h2>{post.title}</h2>
                </div>
              </div>
              </Link>
              <div className="post__footer">
                  <PostTags tags={post.tags} />
                </div>
              </div>
              
            </div>
        ))}
      </div>
      
    );
  }
}

export default PostListing;
