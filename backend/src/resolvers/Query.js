import axios from 'axios';

export const Query = {
  async categories() {
    const { data } = await axios.get(
      'https://api.texenergo.com/public/catalogues/'
    );
    return data;
  },
};
