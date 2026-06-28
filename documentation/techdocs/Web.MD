beryllinus-web/
│
├── config/                         <-- Configuration (outside src)
│   ├── environments/
│   │   ├── development.ts
│   │   ├── qa.ts
│   │   ├── uat.ts
│   │   └── production.ts
│   │
│   ├── service-registry.ts
│   └── application.config.ts
│
├── src/
│   │
│   ├── app/
│   │
│   ├── modules/
│   │   ├── booking/
│   │   ├── payment/
│   │   ├── inventory/
│   │   └── customer/
│   │
│   ├── services/
│   │   ├── identity/
│   │   │   ├── endpoints.ts
│   │   │   ├── api.ts
│   │   │   ├── queries.ts
│   │   │   ├── mutations.ts
│   │   │   └── types.ts
│   │   │
│   │   ├── booking/
│   │   ├── payment/
│   │   └── weather/
│   │
│   ├── infrastructure/
│   │   ├── http/
│   │   │   ├── axios.ts
│   │   │   └── interceptors/
│   │   │
│   │   ├── auth/
│   │   └── cache/
│   │
│   ├── store/
│   │
│   ├── shared/
│   │
│   └── types/