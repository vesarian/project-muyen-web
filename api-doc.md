Muyen API Documentation
____________________________________________________

Endpoints :
____________________________________________________

List of available endpoints:

* GET /categories/main
* GET /categories/sub
* GET /menus

* GET /categories/main/:id
* GET /categories/sub/:id
* GET /menus/:id

____________________________________________________

* GET /categories/main
____________________________________________________

Description:
    * Read all main categories from database

Request:

Response (200 - OK)
```js
[
    {
        "id": 1,
        "name": "Coffee",
        "createdAt": "2022-12-14T13:09:52.349Z",
        "updatedAt": "2022-12-14T13:09:52.349Z"
    }
]
```
____________________________________________________

* GET /categories/sub
____________________________________________________
Description:
    * Read all sub categories from database

Request:

Response (200 - OK)
```js
[
    {
        "id": 1,
        "name": "Espresso",
        "createdAt": "2022-12-14T13:09:52.363Z",
        "updatedAt": "2022-12-14T13:09:52.363Z"
    }
]
```

____________________________________________________

* GET /menus
____________________________________________________
Description:
    * Read all menu from database

Request:

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
        "createdAt": "2022-12-14T13:09:52.372Z",
        "updatedAt": "2022-12-14T13:09:52.372Z",
        "MainCategory": {
            "name": "Coffee"
        },
        "SubCategory": {
            "name": "Recommended"
        }
    }
]
```

____________________________________________________

* GET /categories/main/:id
____________________________________________________

Description:
    * Read detail main categories by id from database

Request:

Response (200 - OK)
```js
{
    "id": 1,
    "name": "Coffee",
    "createdAt": "2022-12-14T13:09:52.349Z",
    "updatedAt": "2022-12-14T13:09:52.349Z"
}
```

____________________________________________________

* GET /categories/sub/:id
____________________________________________________

Description:
    * Read detail sub categories by id from database

Request:

Response (200 - OK)
```js
{
    "id": 1,
    "name": "Espresso",
    "createdAt": "2022-12-14T13:09:52.363Z",
    "updatedAt": "2022-12-14T13:09:52.363Z"
}
```

____________________________________________________

* GET /menus/:id
____________________________________________________
Description:
    * Read detail menu by id from database

Request:

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

____________________________________________________

* Global Error
____________________________________________________

Response (500 - Internal server error)
```js
{
    "message": "Internal server error"
}
```