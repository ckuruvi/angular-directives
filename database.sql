CREATE DATABASE tech_cbt;

create table users(
id serial primary key,
empno integer,
ename varchar(100),
sal	integer,
hiredate date,
dob	date,
deptno integer
);

INSERT INTO "public"."users"("id","empno","ename","sal","hiredate","dob","deptno")
VALUES
(1,1003,E'Aaron',4600,E'1991-01-31',E'1981-09-06',10),
(2,1001,E'Scott',2400,E'1995-01-02',E'1985-01-31',10),
(3,1002,E'Thomas',3400,E'1991-02-26',E'1981-08-26',20),
(4,1004,E'Jason',3700,E'1990-03-20',E'1980-05-04',20),
(5,1005,E'Kelvin',7600,E'1992-02-02',E'1978-03-05',20),
(6,1006,E'Grant',3709,E'1992-02-02',E'1978-03-03',20),
(7,1007,E'Ivan',2900,E'1991-05-06',E'1986-12-23',30),
(8,1008,E'Hardy',8700,E'1993-06-07',E'1983-05-07',20),
(9,1009,E'Peter',5000,E'1994-08-26',E'1982-10-26',10),
(10,1010,E'Ronald',8200,E'1994-08-23',E'1980-10-23',30);
