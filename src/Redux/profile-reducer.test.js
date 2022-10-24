import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  postsData: [
    { id: 1, message: "Hi, how are u?", likesCount: 2 },
    { id: 2, message: "It`s my first post", likesCount: 5 },
    { id: 3, message: "Cool! Keep learning JS and React!", likesCount: 8 },
  ],
  profile: null,
  status: "",
};

it("length of postsData should increased", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(4);
});

it("message should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData[3].message).toBe("it-kamasutra.com");
});

it("length of postData after deiting should decrement", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(2);
});

it("length of postData after deleting shouldn`t decrement if id is not correct", () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});
