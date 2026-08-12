Requirement:
Multiple independent API calls at the same time → TanStack Query handles this very well.
Hundreds/thousands of controlled concurrent requests → we need an explicit concurrency strategy; TanStack Query alone isn't a concurrency pool.