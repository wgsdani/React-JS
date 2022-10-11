import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../../actionRedux/index";
import UserHeader from "./UserHeader";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div style={{ display: "flex" }} className="bold">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.y4vDl1sXQFbum_5f_WHvtgHaFR&pid=Api&P=0"
            alt="img"
            style={{ width: "70px", height: "70px", paddingTop: "20px" }}
          />

          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts)
    // put this div below in classname="ui relaxed divided list" for semantic
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
