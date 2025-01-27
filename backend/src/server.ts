import express, { Application } from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs'; 
import resolvers from './graphql/resolvers';
import cors from 'cors';

dotenv.config();

const app: any = express();
const port = process.env.PORT || 4000;
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});