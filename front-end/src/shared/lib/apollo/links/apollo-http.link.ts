import { GRAPHQL_SERVER_URL } from "@/shared/config/api.config";
import { HttpLink } from "@apollo/client";

export const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URL,
  credentials: "include", // включать серверные куки
  fetchOptions: {
    next: {
      revalidate: 60, // пересоздавать страницу каждые 60 секунд
    },
  },
});
