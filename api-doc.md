Muyen API Documentation

---

Endpoints :

---

List of available endpoints:

- GET /categories/main
- GET /categories/sub
- GET /menus

- GET /categories/main/:id
- GET /categories/sub/:id
- GET /menus/:id

---

- GET /categories/main

---

Description: \* Read all main categories from database

Request:

Response (200 - OK)

```js
[
  {
    id: 1,
    name: "Coffee",
    createdAt: "2022-12-14T13:09:52.349Z",
    updatedAt: "2022-12-14T13:09:52.349Z",
  },
];
```

---

- GET /categories/sub

---

Description: \* Read all sub categories from database

Request:

Response (200 - OK)

```js
[
  {
    id: 1,
    name: "Espresso",
    createdAt: "2022-12-14T13:09:52.363Z",
    updatedAt: "2022-12-14T13:09:52.363Z",
  },
];
```

---

- GET /menus

---

Description: \* Read all menu from database

Request:

Response (200 - OK)

```js
[
  {
    id: 1,
    name: "Muyen Coffee",
    price: 35000,
    imgUrl: "hahi",
    description: "Kopi aren",
    status: "Recommended",
    MainCategoryId: 1,
    SubCategoryId: 15,
    createdAt: "2022-12-14T13:09:52.372Z",
    updatedAt: "2022-12-14T13:09:52.372Z",
    MainCategory: {
      name: "Coffee",
    },
    SubCategory: {
      name: "Recommended",
    },
  },
];
```

---

- GET /categories/main/:id

---

Description: \* sort menu by menu category id.

Request: params

Response (200 - OK)

```js
[
    {
        "id": 1,
        "name": "Muyen Coffee",
        "price": 35000,
        "imgUrl": "hahi",
        "description": "Kopi aren",
        "status": "Recommended",
        "MainCategoryId": 1,
        "SubCategoryId": 15,
        "createdAt": "2022-12-17T16:13:39.512Z",
        "updatedAt": "2022-12-17T16:13:39.512Z"
    },
    {
        "id": 2,
        "name": "Pandan Coffee",
        "price": 35000,
        "imgUrl": "hahi",
        "description": "Kopi pandan",
        "status": "Recommended",
        "MainCategoryId": 1,
        "SubCategoryId": 15,
        "createdAt": "2022-12-17T16:13:39.512Z",
        "updatedAt": "2022-12-17T16:13:39.512Z"
    },...
]
```

---

- GET /categories/sub/:id

---

Description: \* sort menu by sub categories id

Request: params

Response (200 - OK)

```js
[
  {
    id: 8,
    name: "Double Shots Espresso",
    price: 20000,
    imgUrl: "hahi",
    description: "espresso double",
    status: null,
    MainCategoryId: 1,
    SubCategoryId: 1,
    createdAt: "2022-12-17T16:13:39.512Z",
    updatedAt: "2022-12-17T16:13:39.512Z",
  },
  {
    id: 9,
    name: "Americano",
    price: 30000,
    imgUrl: "hahi",
    description: "americano",
    status: null,
    MainCategoryId: 1,
    SubCategoryId: 1,
    createdAt: "2022-12-17T16:13:39.512Z",
    updatedAt: "2022-12-17T16:13:39.512Z",
  },...
];
```

---

- GET /menus/:id

---

Description: \* Read detail menu by id from database

Request: params

Response (200 - OK)

```js
{
    "id": 1,
    "name": "Muyen Coffee",
    "price": 35000,
    "imgUrl": "hahi",
    "description": "Kopi aren",
    "status": "Recommended",
    "MainCategoryId": 1,
    "SubCategoryId": 15,
    "createdAt": "2022-12-14T13:09:52.372Z",
    "updatedAt": "2022-12-14T13:09:52.372Z"
}
```

---

- Global Error

---

Response (500 - Internal server error)

```js
{
    "message": "Internal server error"
}
```

Response (404 - Data Not Found)

```js
{
    "message": "Data Not Found"
}
```
