import { GraphQLServer } from 'graphql-yoga';
import { config } from 'dotenv';
import axios from 'axios';

config();

const typeDefs = `
  type Category {
    id: ID!
    name: String!
    name_parameterized: String!
  }

  type Query {
    categories: [Category!]!
  }
`;

const resolvers = {
  Query: {
    async categories() {
      const { data } = await axios.get(
        'https://api.texenergo.com/public/catalogues/'
      );
      return data;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const options = {
  port: process.env.PORT,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

server.start(options, ({ port }) =>
  console.log(`Server started, listening on port ${port}...`)
);
