/** @format */

const endPoints = {
  auth: {
    login: "/admin/login",
  },
  users: {
    allUser: ({
      page = 1,
      limit = 10,
      search = "",
      isVerified = null,
      status = null,
    }) =>
      `/admin/searchUser?userType=&page=${page}&limit=${limit}&search=${search}&status=${status}&isVerified=${isVerified}`,
    updateStatus: (id) => `/admin/users/${id}/update-verification-status`,
    getUserById: (id) => `/admin/profile/${id}`,
    updateUserById: (id) => `/admin/update/user/${id}`,
    uploadUserPic: (id) => `/admin/upload-profile-picture/${id}`,
    removeUser: (id) => `/admin/users/profile/delete/${id}`,
  },
  dashboard: {
    userCount: "/admin/allcount",
  },
  notifications: {
    getAll: "/admin/notifications/user",
    remove: (id) => `/admin/notifications/delete/${id}`,
    create: "/admin/notifications",
  },
  policy: {
    get: "/admin/privacy",
    remove: (id) => `/admin/privacy/${id}`,
    create: "/admin/privacy",
    getbyId: (id) => `/admin/privacy/${id}`,
    edit: (id) => `/admin/privacy/${id}`,
  },
  posts: {
    getPostByUserId: (id) => `/admin/getAllPostsByUserId/${id}`,
    removePost: (id) => `/admin/post/${id}`,
  },
  freindRequest: {
    getbyUserId: (id) => `/admin/getFriendRequestsByUserId/${id}`,
  },
  friends: {
    getByUserId: (id) => `/admin/getAllFriendsByUserId/${id}`,
  },
  help: {
    get: "/admin/call-us",
    getById: (id) => `/admin/call-us/${id}`,
    create: "/admin/call/us",
    edit: (id) => `/admin/call-us/${id}`,
    remove: (id) => `/admin/call-us/${id}`,
  },
};

export default endPoints;
