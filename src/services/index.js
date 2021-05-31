import api from '@/api';

export default {
  getStarredRepositories(username) {
    return api.get(`/users/${username}/starred`);
  },
};
