export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPost = async function (id: number) {
  const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json());

  return post;
};
