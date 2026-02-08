from Testing.main import es_mayor, suma

# Unit Test
# 

# Se prueba con:
# pytest
# pytest -v : mas detallado


def test_suma():
  assert suma(2, 6) == 8


def test_es_mayor():
  assert not es_mayor(10, 12)
