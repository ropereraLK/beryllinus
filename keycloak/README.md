# Local Keycloak

## Requirements
- Docker Desktop

## Start

docker compose up -d

## Check

docker compose ps

Open:
http://localhost:8080

## Admin Console

Username: admin
Password: admin

## Test Users

| Username | Password | Role |
|----------|----------|------|
| admin    | admin    | ADMIN |
| user1    | user1    | DEVELOPER |
| user2    | user2    | DEVELOPER |

## Realm

react-dev

## React Client

Client ID:
react-spa

Redirect URI:
http://localhost:3000/auth/callback

## Stop

docker compose down

## Reset

docker compose down -v
docker compose up -d

## Logs

docker compose logs -f keycloak