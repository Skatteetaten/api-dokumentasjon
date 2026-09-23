import React from "react";

const BlogPostItem = jest.fn(({ children }) =>
  React.createElement("div", { "data-testid": "blog-post-item" }, children)
);

export default BlogPostItem;
