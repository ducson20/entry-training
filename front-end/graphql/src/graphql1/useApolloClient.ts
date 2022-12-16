import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { useMemo } from "react";

const createApolloClient = (UserGUID: any): any => {
  const restLink = new RestLink({
    uri: "http://192.168.10.104/ecourier/software/XML/ecJsonCustomerPortal.asmx",
    headers: {
      UserGUID: UserGUID || "",
      // eslint-disable-next-line
      "Content-Type": "application/json",
    },
  });

  const client = new ApolloClient({
    //concat restLink and httpLink
    link: ApolloLink.from([restLink]),
    cache: new InMemoryCache({
      typePolicies: {},
    }),
  });
  return client;
};

export function useApolloClient() {
  const client = useMemo(() => {
    return createApolloClient("{7BF0808B-C904-49DB-B6B7-451F0BDE80A5}");
  }, []);
  return client;
}
