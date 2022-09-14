import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

const authentication = new Account(client);

const authenticate = (method) => {
  return authentication.createOAuth2Session(
    method,
    `${process.env.NEXT_PUBLIC_URL}/auth/${method}/success`,
    `${process.env.NEXT_PUBLIC_URL}/auth/${method}/failure`
  );
};

export default client;
export { authenticate };
