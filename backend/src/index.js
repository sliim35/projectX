import { GraphQLServer } from 'graphql-yoga';
import { config } from 'dotenv';
import * as resolvers from './resolvers';

config();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
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
