import { defaultHttpClient } from "../../../api/client/httpClient";


export interface Account {
  id: string;
  accountNumber: string;
  accountType: string;
  currency: string;
  balance: number;
}

//async() is a Promise that is expecting from httpClient
export const getAccounts = async (): Promise<Account[]> =>{

    //await waits till the reponse is recieved
    const response = await defaultHttpClient.get<Account[]>("/accounts");

    return response.data;
};