/**
 * Query keys with filters
 * 
 * Suppose transactions support:
 * GET /transactions?accountId=123&status=COMPLETED
 * 
 * The query key can contain those parameters:
 * queryKey: [
        "transactions",
        {
            accountId: 123,
            status: "COMPLETED",
        }
    ]
******* Query key controls caching

        QueryClient
            │
            ▼
        "Do I have ["accounts", 123]?"
            │
            ├── YES → use existing query/cache
            │
            └── NO  → execute queryFn

 */

            export const queryKeys = {
  accounts: {
    all: ["accounts"] as const,

    detail: (accountId: string) =>
      ["accounts", accountId] as const,

    transactions: (accountId: string) =>
      ["accounts", accountId, "transactions"] as const,
  },

  customers: {
    all: ["customers"] as const,

    detail: (customerId: string) =>
      ["customers", customerId] as const,
  },

  cards: {
    all: ["cards"] as const,

    detail: (cardId: string) =>
      ["cards", cardId] as const,
  },
};