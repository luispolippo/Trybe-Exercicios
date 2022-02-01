-- exercicio 1
SELECT m.title, 
	b.domestic_sales + b.international_sales AS 'Número de vendas'
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id;

-- exercicio 2
SELECT title, domestic_sales + international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

-- exercicio 3
SELECT m.title, b.rating
FROM Pixar.Movies AS m
JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
ORDER BY rating DESC;

-- exercicio 4
SELECT t.name, m.title
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY name;

-- exercicio 5
SELECT t.name, m.title
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY name;

-- BONUS exercicio 6
SELECT * 
FROM Pixar.Movies AS m
JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id AND b.rating > 8;
