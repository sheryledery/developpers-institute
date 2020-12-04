PART 1 :


-Qst 1:

SELECT first_name AS "First Name", last_name AS "Last Name"
FROM public.employees

-Qst 2:

SELECT department_id 
FROM employees
GROUP BY department_id
ORDER BY department_id ASC


-Qst 3:

SELECT * FROM public.employees
ORDER BY first_name DESC


-Qst 4:

SELECT first_name, last_name, salary, 
ROUND(SUM(salary *15/100 ),2) AS "PF" 
FROM public.employees
GROUP BY first_name, last_name, salary


-Qst 5:

SELECT employee_id, first_name, last_name, salary 
FROM public.employees
ORDER BY salary ASC 

-Qst 6:

SELECT ROUND(SUM(salary), 2) AS "total_salaries"
FROM public.employees

-Qst 7:

SELECT ROUND(MAX(salary), 2) AS "max_salary",
ROUND(MIN(salary), 2) AS "min_salary"
FROM public.employees

-Qst 8:

SELECT ROUND(AVG(salary), 2) AS "average_salary"
FROM public.employees

-Qst 9:

SELECT COUNT(employee_id) AS "number_employees"
FROM public.employees

-Qst 10:

SELECT UPPER(first_name) 
FROM public.employees

-Qst 11:

SELECT SUBSTRING(first_name, 1, 3) 
FROM public.employees

-Qst 12:

SELECT CONCAT(first_name, ' ', last_name) AS "names" 
FROM public.employees

-Qst 13:

SELECT CONCAT(first_name,' ',last_name) AS "names",
LENGTH(CONCAT(first_name,' ',last_name)) AS "length_name"
FROM public.employees

-Qst 14:

SELECT COUNT(first_name ~ '[0-9]')
FROM public.employees 

-Qst 15:

SELECT *
FROM public.employees
LIMIT 10



PART 2 :


-Qst 1:

SELECT first_name, last_name, salary
FROM employees
WHERE salary < 15000 and salary > 10000

-Qst 2:

SELECT first_name, last_name, hire_date
FROM employees
WHERE hire_date >= '1987-01-01' and hire_date < '1988-01-01'

-Qst 3:

SELECT first_name
FROM employees
WHERE first_name LIKE '%c%'
AND first_name LIKE '%e%';

-Qst 4:

SELECT last_name, job_id, salary 
FROM employees
GROUP BY last_name, job_id, salary
HAVING job_id = 17 AND job_id = 9

-Qst 5:




















