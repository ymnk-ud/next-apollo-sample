const { ApolloServer, gql } = require("apollo-server");

// スキーマを定義する
const typeDefs = gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    users: [User!]
    userById(id: ID!): User
  }
`;

// クエリで取得するデータを定数で置いておく
const users = [
  {
    id: "1",
    name: "Alice"
  },
  {
    id: "2",
    name: "Bob"
  }
];

// booksクエリ発行時の処理を指定する
const resolvers = {
  Query: {
    users: () => users,
    userById: (_parent, arg, _ctx, _info) => {
        const user = users.find(e => e.id === arg.id);
        return user;
    }
  }
};

// サーバーを起動する
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});