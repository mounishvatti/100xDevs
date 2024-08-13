// promises in javascript

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        console.log("Fetched user");
        resolve({ userId: userId, username: "mounish" }); // what
      } catch (error) {
        reject("Error found while fetching user", error);
      }
    }, 1000);
  });
}

function getPosts(userId) { 
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched posts");
      resolve([
        { postId: 1, content: "Hello World" },
        { postId: 2, content: "Callback Hell!" },
      ]);
    }, 1000);
  });
}

function getComment1(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched comment 1");
      resolve(["Great post!", "Very informative."]);
    }, 1000);
  });
}

function getComment2(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched comments 2");
      resolve(["Splendid!", "Wonderful."]);
    }, 1000);
  });
}

getUser(1)
  .then((obj) => {
    console.log("User:", obj.username);
    return getPosts(obj.userId);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return Promise.all([
      getComment1(posts[0].postId),
      getComment2(posts[1].postId),
    ]);
  })
  .then((comment) => {
    console.log("Comments on first post:", comment[0]);
    console.log("Comments on second post:", comment[1]);
    //return getComments(posts[0].postId)
  })
  .finally(() => {
    console.log("Finished!!");
  });


