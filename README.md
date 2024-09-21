# Sendifico Technical test: Pokemon services

We can use the project in 3 ways:

## 1. Run locally

```bash
nvm install # Optional: If you have this version installed, it is not necessary
nvm use
npm i
npm run start:dev
```

## 2. Run with Docker

```bash
docker-compose up --build
```

## 3. Use the public URL

**URL**: https://sendifico-pokiapi-test-f0vxstlup-sebastians-projects-4fc143d6.vercel.app/

# Services exposed

### 1. GET `/pokemon`

#### Description:

Fetches a paginated list of Pokemon.

#### Query Parameters (optional):

-   `limit` (default: `100`): Specifies the maximum number of Pokemon to return.
-   `offset` (default: `0`): Specifies the number of Pokemon to skip before returning results.

#### Example Request:

```bash
GET /pokemon?limit=50&offset=0
``` 

----------

### 2. GET `/pokemon/:id`

#### Description:

Fetches detailed information for a specific Pokemon by its ID or name.

#### Path Parameters:

-   `id` (required): The Pokemon's ID or name (e.g., `1` or `bulbasaur`).

#### Example Request:

```bash
GET /pokemon/1
``` 

----------

### 3. GET `/pokemonAndTypes/:id`

#### Description:

Fetches detailed information for a specific Pokemon, including translated types.

#### Path Parameters:

-   `id` (required): The Pokemon's ID or name (e.g., `1` or `bulbasaur`).

#### Example Request:

```bash
GET /pokemonAndTypes/1
```