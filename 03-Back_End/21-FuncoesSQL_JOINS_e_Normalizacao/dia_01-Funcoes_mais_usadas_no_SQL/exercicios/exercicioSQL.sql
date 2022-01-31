-- exercicio 1
SELECT MAX(SALARY) FROM hr.employees;

-- exercicio 2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

-- exercicio 3
SELECT JOB_ID, AVG(SALARY) AS avg_salary FROM hr.employees
GROUP BY JOB_ID ORDER BY avg_salary DESC;

-- exercicio 4
SELECT SUM(SALARY) 
AS 'quantidade necessária para pagar o salário de todos' 
FROM hr.employees;

-- exercicio 5
SELECT ROUND(MAX(SALARY), 2) AS 'maior salario', 
ROUND(MIN(SALARY), 2) AS 'menor salário',
ROUND(SUM(SALARY), 2) AS 'soma de todos salários',
ROUND(AVG(SALARY), 2) AS 'médis dos salários'
FROM hr.employees; 

-- exercicio 6
SELECT COUNT(*) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

-- exercicio 7
SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID;

-- exercicio 8
SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- exercicio 9
SELECT JOB_ID, AVG(SALARY) AS avg_salary FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY avg_salary DESC;

-- exercicio 10
SELECT 
    department_id,
    AVG(SALARY),
    COUNT(employee_id) AS `n de funcionarios`
FROM
    hr.employees
GROUP BY department_id
HAVING `n de funcionarios` > 10;

-- exercicio 11
UPDATE hr.employees SET PHONE_NUMBER = 
	REPLACE(PHONE_NUMBER,'515', '777')
WHERE PHONE_NUMBER LIKE '515%';
SELECT * FROM hr.employees;

-- exercicio 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8; 

-- exercicios 13
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE)
FROM hr.employees;

-- exercicio 14
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE)
FROM hr.employees;

-- exercicio 15
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE)
FROM hr.employees;

-- exercicio 16
SELECT UCASE(FIRST_NAME) FROM hr.employees;

-- exercicio 17
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987;

-- exercicio 18
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE)
AS `Tempo que trabalha na empresa` FROM hr.employees;