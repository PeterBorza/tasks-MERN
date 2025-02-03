-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE utilities (
_id UUID PRIMARY KEY DEFAULT  uuid_generate_v4(),
month_column varchar(30),
gas int,
light int,
rent int,
credit int,
phone int,
block int,
CONSTRAINT chk_month_column CHECK (month_column IN (
'Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
)));