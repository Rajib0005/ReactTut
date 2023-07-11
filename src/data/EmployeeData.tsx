import { Roles } from "../interfaces/ICredentials";


 const jsonData =  [
    {
      "id": 1,
      "name": "Rajib",
      "eamil": "rajib@geotechinfo.net",
      "password" : "raj34134",
      "role" : Roles.Admin
    },
    {
      "id": 2,
      "name": "Subham",
      "eamil": "subham@geotechinfo.net",
      "password" : "subham1984",
      "role" : Roles.Admin
    },
    {
      "id": 3,
      "name": "Subhankar",
      "eamil": "subhankar@geotechinfo.net",
      "password" : "subhankar13344",
      "role" : Roles.User
    },
    {
        "id": 4,
        "name": "Suparna",
        "eamil": "suparna@geotechinfo.net",
        "password" : "suparna1224",
        "role" : Roles.User
    }
  ];

export default jsonData;