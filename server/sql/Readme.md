## To have sql on machine:

- Install postgres 17 or above for windows
- Pgadmin - password - 'postgres'
- Create server
- Create table

## In project :

- Install postgres (3.4.5 in 2025)
- Create file <db> :

```code

import postgres from "postgres";

const sql = postgres({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'your_database name',
  port: 5432
});

export default sql;
```

#### Start using sql in your code
