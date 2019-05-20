import axios from 'axios';

export const Query = {
  async categories() {
    const { data } = await axios.get(
      'https://api.texenergo.com/public/catalogues/'
    );
    return data;
  },

  async products_category(parent, args) {
    if (args.page) {
      const { data } = await axios.get(
        `https://api.texenergo.com/public/catalogues/${
          args.category_name
        }?page=${args.page}`
      );

      return data;
    }

    const { data } = await axios.get(
      `https://api.texenergo.com/public/catalogues/${args.category_name}`
    );

    return data;
  },

  async products(parent, args) {
    if (args.query) {
      const query = encodeURIComponent(args.query.toLowerCase());
      const { data } = await axios.get(
        `https://api.texenergo.com/public/search?q=${query}`
      );

      return data;
    }
    return [];
  },

  async product(parent, args) {
    const { data } = await axios.get(
      `https://api.texenergo.com/public/products/${args.product_id}`
    );

    return data;
  },
};
