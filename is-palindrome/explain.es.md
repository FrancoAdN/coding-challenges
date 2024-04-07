## Enfoque

1. Convertir el número dado a una cadena de texto.
2. Inicializar dos punteros, uno que apunte al primer elemento de la cadena y otro al último elemento.
3. Recorrer la cadena mientras el puntero izquierdo sea menor que el puntero derecho. En cada iteración, incrementar el puntero izquierdo y decrementar el puntero derecho.
4. Dentro del bucle, verificar si el carácter al que apunta izquierdo es igual al carácter que está en derecho. Si no lo es, retornar falso.
5. Si el bucle se completa, significa que el número es un palíndromo. Entonces, retornar verdadero.

## Estrategia

Patron de los dos punteros.

## Complejidad

- `Complejidad temporal: O(n)`
- `Complejidad de espacio: O(n)`
