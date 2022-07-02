# ev-backend

### Functions
1. USER
   * SIGNUP
   * LOGIN
   * DETAILS
   * View Current Meter Reading
   * Old Bills

1. IoT METER Reading
   * UPDATE METER
   * GET READING
   * GENRATE BILL
## Users
### To create a new user
 ``` 
 curl --location --request POST 'https://ev-backend-v1.herokuapp.com/api/user/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'name=Sahil Jena' \
--data-urlencode 'email=sj0658@srmist.edu.in' \
--data-urlencode 'phoneNumber=+918178812482' \
--data-urlencode 'password=SahilTest' \
--data-urlencode 'regNo=nqok'
 ```
 - Response
 ```
 {
    "code": "USER_CREATED",
    "message": "User Created Successfully",
    "result": {
        "name": "Sahil Jena",
        "userUID": "l53m1aavg3cf1o9er6c",
        "email": "sj0658@srmist.edu.in",
        "phNo": "+918178812482",
        "status": 0,
        "verified": false,
        "password": "$2a$10$l93RDKwG.o0jT68HYqYsKOoYdN6FgFzogtrOoir2SzFF5JP8NAmnC",
        "regNo": "l53m1aavg3cf1o9er6c",
        "_id": "62bffec70935a6886c0b2a3f",
        "__v": 0
    }
}
 ```
 
 ### login for user
 ```
 curl --location --request POST 'http://localhost:5000/api/user/login' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=sahiljena46@gmail.com' \
--data-urlencode 'password=SahilTest'
 ```
 - Response
 ```
 {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlOTU3YjcyNGU5ZDE1NTk3Y2NhYzEiLCJ1c2VyRW1haWwiOiJzYWhpbGplbmE0NkBnbWFpbC5jb20iLCJ1c2VyTmFtZSI6IlNhaGlsIEplbmEiLCJpYXQiOjE2NTY3NTE2ODksImV4cCI6MTY1NjgzODA4OX0.q1vmEslCDwPcCI_DnZmmYGCkYaRbp7S79LkZ1ytvS9s"
}
 ```
 
 ### User Details
 ```
 curl --location --request GET 'https://ev-backend-v1.herokuapp.com/api/user/me' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmJlOTU3YjcyNGU5ZDE1NTk3Y2NhYzEiLCJ1c2VyRW1haWwiOiJzYWhpbGplbmE0NkBnbWFpbC5jb20iLCJ1c2VyTmFtZSI6IlNhaGlsIEplbmEiLCJpYXQiOjE2NTY3NTE2ODksImV4cCI6MTY1NjgzODA4OX0.q1vmEslCDwPcCI_DnZmmYGCkYaRbp7S79LkZ1ytvS9s' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=sahiljena46@gmail.com' \
--data-urlencode 'password=SahilTest'
 ```
 - Response
 ``` 
 {
    "_id": "62be957b724e9d15597ccac1",
    "name": "Sahil Jena",
    "userUID": "l522yv1v1irelyotq2l",
    "email": "sahiljena46@gmail.com",
    "phNo": "+918178812482",
    "status": 0,
    "verified": true,
    "password": "$2a$10$TpvMI.MZLzk4f9QlZXCJTOtNPiabnQmrKoVSW4KU66ePzl.2j7deW",
    "__v": 0
}
 ```
