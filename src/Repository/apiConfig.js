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
  },
  dashboard: {
    userCount: "/admin/allcount",
  },
  notifications: {
    getAll: "/admin/notifications/user",
    remove: (id) => `/admin/notifications/delete/${id}`,
  },
  policy: {
    get: "/admin/privacy",
    remove: (id) => `/admin/privacy/${id}`,
    create: "/admin/privacy",
    getbyId: (id) => `/admin/privacy/${id}`,
    edit: (id) => `/admin/privacy/${id}`,
  },
};

export default endPoints;
