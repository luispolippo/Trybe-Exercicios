import pytest
from exercicio01 import fizz_buzz


def test_fizz_buzz_when_number_param_is_3():
    assert "Fizz" in fizz_buzz(3)


def test_fizz_buzz_when_number_param_is_5():
    assert "Fizz" and "Buzz" in fizz_buzz(5)


def test_fizz_buzz_when_number_param_is_15():
    assert "Fizz" and "Buzz" and "FizzBuzz" in fizz_buzz(15)


def test_fizz_buzz_when_param_is_a_string():
    with pytest.raises(TypeError):
        fizz_buzz("a")
