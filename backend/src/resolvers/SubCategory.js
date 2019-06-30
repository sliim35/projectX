import axios from 'axios';

export const SubCategory = {
  async parent(parent) {
    if (parent.name_parameterized) {
      const { data } = await axios.get(
        `https://api.texenergo.com/public/catalogues/${
          parent.name_parameterized
        }`
      );

      const [firstParent] = data.parents.map(
        ({ id, name, name_parameterized }) => {
          return {
            id,
            name,
            name_parameterized,
          };
        }
      );

      return firstParent;
    }
  },
};
