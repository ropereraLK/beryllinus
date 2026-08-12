import { QueryClient } from "@tanstack/react-query";

/**
 * QueryClient act as the central manager of TanStack Query
 * This object holds and manages all the TanStack Query information for your application.
 * 
 * queryClient
    │
    ├── accounts query
    │      └── account data
    │
    ├── transactions query
    │      └── transaction data
    │
    ├── cards query
    │      └── card data
    │
    └── customers query
        └── customer data
 * 
 */
 const queryClient = new QueryClient();

 // TODO: Expose temporarily for debugging in browser DevTools.
 window.queryClient = queryClient;

 export default queryClient;