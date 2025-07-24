import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

 loadPosts() {
  const samplePosts = [
    {
      id: 1,
      title: "How to Get Started with React",
      body: "React is a powerful JavaScript library for building user interfaces..."
    },
    {
      id: 2,
      title: "Understanding Component Lifecycle",
      body: "React components go through various lifecycle phases such as mounting..."
    },
    {
      id: 3,
      title: "Using Fetch API in React",
      body: "The Fetch API lets you load data asynchronously in React components..."
    }
  ];

  this.setState({ posts: samplePosts });
}


  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("Caught error:", error, info);
    alert("Something went wrong while loading the posts.");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Unable to load posts. Please try again later.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
