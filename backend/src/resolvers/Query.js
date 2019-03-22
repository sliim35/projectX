import axios from 'axios';

export const Query = {
  async categories() {
    const { data } = await axios.get(
      'https://api.texenergo.com/public/catalogues/'
    );
    return data;
  },
  async products_category(parent, args) {
    console.log('args:', args);
    const { data } = await axios.get(
      `https://api.texenergo.com/public/catalogues/${args.category_name}`
    );
    return data;
  },
};
