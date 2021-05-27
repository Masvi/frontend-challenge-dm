import api from '../api/api'

export default {
  getStarredRepositories(username) {
    return api.get(`/users/${username}/starred`);
  },
};
