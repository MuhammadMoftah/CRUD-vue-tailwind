# VueJs Code Test


## âšī¸ About The Code Test:
- Create a VueJs single page application for a simple CRUD system to manage a list of customers.
- Only registered users are allowed to use the customers CRUD system.
-----

## âī¸ Code Test Goals:
1. ### đ Login Page:
    - Should be the main application page.
    - After successful login user should be redirected to the homepage.

2. ### đ  Homepage:
    - Should contain an actions column which should have an `Edit Button` and a `Delete Button`.
    - Should support pagination.

3. ### đ Technical Notes:
    - Update customer should reflect dynamically in the listing without the need to reload/re-fetch.
    - Update form should be displayed in the same listing page.
    - Delete customer should reflect dynamically in the listing without the need to reload/re-fetch.
    - Delete confirmation should be displayed in the same listing page.
-----

## đ¨ Frameworks:
- Usage of VueJS third-party frameworks like *Vuetify, iView, ... etc* is not allowed.
- Usage of CSS third-party frameworks that relays on *jQuery* like *Foundation, Bootstrap, Semantic UI, ..... etc* is not allowed.
- Usage of CSS third-party *jQuery-Free* frameworks like *Bulma, Materialize CSS, ..... etc* is highly preferred.
-----

## đĩī¸ Pro-Tips:
- Displaying the customer image in the listing table is a plus.
- Displaying update customer form in a modal/dialog is a plus.
- Displaying delete confirmation in a modal/dialog is a plus.
- Using `LocalStorage` to handle user login and sync it with `Vuex` is a plus.
- Usage of CSS third-party *jQuery-Free* framework to make your application look nice is a plus. [*We highly recommend using* [*Bulma*](https://bulma.io/)]
-----

## đ§ Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
-----

## đĨī¸ API Endpoints:
### Login:
- Endpoint: `https://reqres.in/api/login`
- Method: `POST`
- Payload:
```json
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```
- Response:
```json
{
    "token": "QpwL5tke4Pnpja7X4"
}
```

### Customer Listing:
- Endpoint: `https://reqres.in/api/users`
- Method: `GET`
- Query:
```json
{
    "page": 2
}
```
- Pagination Example: `https://reqres.in/api/users?page=2`
- Example Response:
```json
{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ]
}
```

### Update Customer:
- Endpoint: `https://reqres.in/api/users/$user_id`
- Method: `PUT`
- Payload:
```json
{
    "name": "new name",
    "job": "new job"
}
```
- Response:
```json
{
    "name": "new name",
    "job": "new job",
    "updatedAt": "2019-11-11T17:27:16.012Z"
}
```

### Delete Customer:
- Endpoint: `https://reqres.in/api/users/$user_id`
- Method: `DELETE`
