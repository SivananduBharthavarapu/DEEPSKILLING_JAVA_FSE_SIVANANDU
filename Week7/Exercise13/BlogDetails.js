import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      title: 'Installation',
      author: 'Schewzdenier',
      content: 'You can install React from npm.'
    }
  ];

  return (
    <div className="section">
      <h2>Blog Details</h2>
      <div className="card-row">
        {blogs.map((blog, i) => (
          <div className="card" key={i}>
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;


