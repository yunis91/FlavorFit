import { ApolloLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { httpLink } from "./links/apollo-http.link";
import { IS_CLIENT } from "@/shared/constants/app.constants";

const clientApolloCliet = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
  devtools: {
    enabled: true,
  },
});

export const simpleApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  devtools: {
    enabled: true,
  },
});

const serverApolloCliet = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
  devtools: {
    enabled: true,
  },
  ssrMode: true,
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export function getApolloClient() {
  return IS_CLIENT ? clientApolloCliet : serverApolloCliet;
}
