import fs from 'fs';

export const Mutation = {
  create_request(parent, args) {
    const converted = JSON.stringify(args);
    fs.writeFile('test.txt', converted, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('The file was saved!');
    });

    return {
      msg: 'Заявка отправлена',
    };
  },
};
