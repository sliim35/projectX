import axios from 'axios';

export const Category = {
  async children(parent) {
    if (parent.name_parameterized) {
      const { data } = await axios.get(
        `https://api.texenergo.com/public/catalogues/${
          parent.name_parameterized
        }`
      );

      const childrens = data.children.map(
        ({ id, name, name_parameterized }) => {
          return {
            id,
            name,
            name_parameterized,
          };
        }
      );

      return childrens;
    }
  },
};
