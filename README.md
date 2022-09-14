# challenge-nodejs-mongo

## nodejs with express and mongoDB

### Model

<img width="460" alt="Screen Shot 2022-09-13 at 22 21 12" src="https://user-images.githubusercontent.com/36522982/190037376-080964ac-bf4a-4ac3-aeb4-3f5db87fb2bd.png">

### Endpoints

## Client

GET: /client </br>
POST: /client

```
{
    "companyName": "Apple",
    "address": "New York ST 3000",
    "city": "New York",
    "state": "New York",
    "zip": "3000",
    "headCount": "12322"
}
```

GET: /client/get-by-name?name=someName </br>
GET: /client/get-by-state?state=somestate

## Member

GET: /member </br>
POST: /member

```
{
  "name": "John",
  "phoneNumber": "Somewhere ST 3000",
  "email": "john@gmail.com",
  "note": [{
      "content": "first note"
  }],
  "clientId": "6320df4c310c6867c679cc00"
}
```

PATH: /member/add-note

```
{
  "name": "John",
  "note": [{
      "content": "second note"
  }]
}
```

PATH: /member/move-member

```
{
  "memberName": "John",
  "newClient": "Amazon",
  "note": [{
      "content": "Change note"
  },
  {
      "content": "Could be an array or nothing"
  }]
}
```

## Some final notes / TODOS

Unitest and some validations are left to do.
