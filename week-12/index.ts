// topic - asynchronous programming
// asynchronous programming is a technique that enables your program
// to start a potentially long-running task and still be
// able to be responsive to other events while that task runs,
// rather than having to wait until that task has finished.
// once that task has finished, your program is presented with the result.

// 3 ways are there,
// callbacks: simple for one-off operations but cumbersome for multiple asynchronous operations due to nesting.
// promises: provides a more readable and manageable way to handle asynchronous operations, avoiding callback hell.
// async/await: further improves readability and maintainability, making asynchronous code appear synchronous.

// defining interfaces for the expected data structures
interface User {
  userId: number;
  username: string;
}

interface Post {
  userId?: number;
  content: string;
  username?: string;
}

// writing type for the callback function;
type Callback<T> = (data: T) => void;

// function to simulate fetching user data
const getUser = (userId: number, callback: Callback<User>): void => {
  setTimeout(() => {
    callback({ userId, username: "safeer" });
  }, 1000);
};

// function to simulate fetching posts data
const getPosts = (userId: number, callback: Callback<Post[]>): void => {
  setTimeout(() => {
    callback([
      { userId, content: `post 1 - posted by user with the userId ${userId}` },
      { userId, content: `post 2 - posted by user with the userId ${userId}` },
    ]);
  }, 1000);
};

// function to display posts
const displayPosts = (posts: Post[]): void => {
  posts.forEach((post) => console.log(post.content));
};

// fetch user and then fetch posts for that user by using callback;
getUser(1, (user: User) => {
  getPosts(user.userId, (posts: Post[]) => {
    displayPosts(posts);
  });
});

// function to simulate fetching user data using promises
const getUser2 = (userId: number): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, username: "ep safeer" });
    }, 1000);
  });
};

// function to simulate fetching posts data using promises
const getPosts2 = (username: string): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { username, content: `post 1 - from promise posted by the user ${username}` },
        { username, content: `post 2 - from promise posted by the user ${username}` },
      ]);
    }, 1000);
  });
};

// using promises with .then() and .catch()
getUser2(1)
  .then((user: User) => getPosts2(user.username))
  .then((posts: Post[]) => posts.forEach((post) => console.log(post.content)))
  .catch((error: any) => console.error(error));

// using promises with async/await
async function displayUserPosts(): Promise<void> {
  try {
    const user: User = await getUser2(1);
    const posts: Post[] = await getPosts2(user.username);
    posts.forEach((post) => console.log(post.content));
  } catch (error) {
    console.error(error);
  }
}

displayUserPosts();
