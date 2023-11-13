# Rent Car Management (API)

Rent car management API documentation

## Car Database Schema

<img src="https://github.com/DwikiCahyo/rent_car_management/assets/70952085/89b7a465-91de-4073-9f7e-6e56f7ea2910" width="300" height ="400"/>



## API Reference

#### Get all cars

```http
  GET /cars
```

| Query Parameter | Description (example value)   |
| :-------------- | :---------------------------- |
| `available`     | Car Available (true or false) |
| `capacity `     | Car Capacity (4)              |
| `date`          | available date (2023-11-11)   |
| `time`          | available time (10:00)        |

#### Get car by id

```http
  GET /cars/${id}
```

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `id`      | `uuid` | use id to get car detail |

#### Create or add new car

```http
  POST /cars
```

| Body           | Type       | Description (example value)                                 |
| :------------- | :--------- | :---------------------------------------------------------- |
| `plate`        | `string`   | plate car (LL-001) **Required**                             |
| `manufacture`  | `string`   | car manufacture (BMW) **Required**                          |
| `image`        | `text `    | car url ( /image/01) (upload image) **Required**            |
| `model`        | `string`   | car model (F16) **Required**                                |
| `type`         | `string`   | car type (sedan) **Required**                               |
| `description`  | `string`   | car description (bla bla) **Required**                      |
| `transmission` | `string`   | car transmission mode (manual) **Required**                 |
| `capacity`     | `string`   | car capacity (4) (sedan) **Required**                       |
| `rentPerDay`   | `integer`  | car rental cost per day (100000) **Required**               |
| `availableAt`  | `datetime` | car availablty date (2023-11-09T10:49:14.388Z) **Required** |
| `available`    | `boolean`  | car availablty (true or false) **Required**                 |
| `year`         | `integer`  | car production year (2023) **Required**                     |
| `options`      | `jsonb`    | car options ([bla, bla, bla]) **Required**                  |
| `specs`        | `jsonb`    | car specifications ([bla, bla, bla]) **Required**           |

#### Update existing car

```http
  PATCH /cars/${id}
```

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `id`      | `uuid` | use id to get car detail |

| Body           | Type       | Description (example value)                    |
| :------------- | :--------- | :--------------------------------------------- |
| `plate`        | `string`   | plate car (LL-001)                             |
| `manufacture`  | `string`   | car manufacture (BMW)                          |
| `image`        | `text `    | car url ( /image/01) (upload image)            |
| `model`        | `string`   | car model (F16)                                |
| `type`         | `string`   | car type (sedan)                               |
| `description`  | `string`   | car description (bla bla)                      |
| `transmission` | `string`   | car transmission mode (manual)                 |
| `capacity`     | `string`   | car capacity (4) (sedan)                       |
| `rentPerDay`   | `integer`  | car rental cost per day (100000)               |
| `availableAt`  | `datetime` | car availablty date (2023-11-09T10:49:14.388Z) |
| `available`    | `boolean`  | car availablty (true of false)                 |
| `year`         | `integer`  | car production year (2023)                     |
| `options`      | `jsonb`    | car options ([bla, bla, bla])                  |
| `specs`        | `jsonb`    | car specifications ([bla, bla, bla])           |

#### Delete existing car by car id

```http
  DELETE /cars/${id}
```

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `id`      | `uuid` | use id to get car detail |
