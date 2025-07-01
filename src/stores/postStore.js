import { create, useStore } from "zustand";
import { createPost, deletePost, getAllPosts } from "../api/postApi";
import useUserStore from "./userStore";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null, // store post for edit
  loading: false,
  createPost: async (body, token, user) => {
    set({ loading: true })
    const resp = await createPost(body, token); // This is createPost from postApi
    // get().getAllPosts(); // To refresh post : not good performance
    console.log(resp.data.result);
    set( state => ({
      posts : [{ ...resp.data.result, user, likes: [], comments: [] }, ...state.posts]
    }))
    return resp
  },
  getAllPosts: async (token) => {
    let tk = useUserStore.getState().token
    // await new Promise(rs=> setTimeout(rs,2000));
    const resp = await getAllPosts(tk)
    set({posts : resp.data.posts});
    return resp
  },
  deletePost : async (id) =>{
    const token = useUserStore.getState().token;
    const resp = await deletePost(id,token);
    console.log(resp);
    get().getAllPosts()
    return resp;
  },
  setCurrentPost : (post) =>set({currentPost : post})
})
);

export default usePostStore;