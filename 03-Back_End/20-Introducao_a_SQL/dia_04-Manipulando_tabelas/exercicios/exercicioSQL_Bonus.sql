-- Exercicio 8
UPDATE Pixar.BoxOffice SET rating = 9.0
WHERE domestic_sales > 400000000;

-- Exercicio 9
UPDATE Pixar.BoxOffice SET rating = 6.0
WHERE international_sales < 300000000 
AND domestic_sales > 200000000; 

-- Exercício 10
TRUNCATE Pixar.BoxOffice;
DELETE FROM Pixar.Movies WHERE length_minutes < 100;

