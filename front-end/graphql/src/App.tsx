import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "./views/Home";
function App() {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
export default App;
