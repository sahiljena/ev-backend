# Doc for SIH

### Usefull API end points

- `https://facilities.aicte-india.org/dashboard/pages/php/approvedinstituteserver.php?method=fetchdata&year=2021-2022&program=1&level=1&institutiontype=1&Women=1&Minority=1&state=Uttar%20Pradesh%20&course=1`

### Backend Routes

#### User

- New User `api/user/new`

##### Sample Request

```
curl --location --request POST 'http://localhost:3000/api/user/new' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=sahiljena46@gmail.com' \
--data-urlencode 'password=Sahil' \
--data-urlencode 'name=Sahil Jena' \
--data-urlencode 'college=srm uni' \
--data-urlencode 'dob=23-06-2002' \
--data-urlencode 'role=participant' \
--data-urlencode 'phoneNumber=8178812482' \
--data-urlencode 'gender=Male'
```

- Verifiy New User `/verify?code=specialCodeInMailHere`

##### Sample Request

```
curl --location --request GET 'http://localhost:3000/api/user/verify?code=c2FoaWxqZW5hNDZAZ21haWwuY29tOjpsMHBodHMzcXVsbXI4ODh3dDI='
```

### Database schema

#### User

```
{
  "user_random_code": "d4ev6s0r", // unique user id
  "name": "Alice", // name
  "email": "alice@gmail.com", // email address
  "password": "testPassword", // hashed password
  "gender": "M/F/O", // user gender
  "college": "SRM University", // college name
  "phoneNumber": "71937007133", // phone number
  "verfied":true, // boolean value
  "dob":"23-01-1998", // date of birth of user
  "event_partcipated": [
    "4ce4ed4",
    "vu76892",
    ],// array of events participated with unique event ids,
    "intrests":["robotics","hardware","cyber sequcirity"] // intrests of user
    "event_hosted": [] // blank if user is participant else contains unique event ids that user has hosted
}
```

### Event

```
{
  "eventId": "d4ev6s0r", // unique event id
  "eventName": "Robotics Workshop", // name
  "eventDescription": "A long very long event description" // event description,
  "eventEmail": "bob@gmail.com", // email address
  "createdBy": "y868rfg", // userid of user that created this event
  "createdAt": "12-03-2022 22:53",
  "deadline": "16-03-2022" // deadline of the event
  "duration" : "2", number of days of event
  "bannerImg": "https://image-storage-url/image.png", // address of banner image
  "eventDate": "17-03-2022", // time and date of event
  "college": "SRM University", // college name
  "phoneNumber": "71937007133", // phone number
  "verfied":true, // boolean value
  "participants": [
    "4ce4ed4",
    "vu76892",
    ],// array of userid that have participated in this event,
    "tags":["robotics","hardware","cyber sequcirity","AI/ML"] // intrests of user
}
```
