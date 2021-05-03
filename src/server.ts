import { CONFIG_SERVER_PORT } from '@config/variables';
import { createSchema } from '@utils/createSchema';
import { connectSqlDB } from '@utils/setupdevDB';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { GraphQLError } from 'graphql';
import { createServer } from 'http';

export const server = express();
export const runServer = async () => {
  await connectSqlDB();
  const schema = await createSchema();
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
    introspection: true,
    playground: true,
    formatError: (error: GraphQLError) => {
      return error;
    },
  });

  const httpServer = createServer(server);

  apolloServer.installSubscriptionHandlers(httpServer);
  server.use(cookieParser());
  server.use(cors());
  server.get('/', (_req, res) => res.send('Servidor Bases de datos'));
  apolloServer.applyMiddleware({ app: server });
  httpServer.listen(CONFIG_SERVER_PORT, () => {
    console.log(`Server Started at ${CONFIG_SERVER_PORT}`);
  });
};
