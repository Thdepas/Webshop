# node-auth

## curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' \
 -d '{"email": "thdepas@gmail.com", "name": "Thomas", "password": "Secret12", "passwordConfirmation": "Secret12"  }'

 curl -X POST localhost:3000/register -H 'Content-Type: application/json' \
 -d '{"email": "thdepas@gmail.com",  "password": "Secret12"  }'
```
