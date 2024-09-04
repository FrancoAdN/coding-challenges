## Enfoque

1. Crear una nueva Lista `tail` que va a conter el ultimo node the la lista ordenada.
2. Crear una Lista `dummy` que apuntara al principio de `tail`.
3. Iterar a traves de ambas listas mientras alguna de ellas posea nodos.
   i. Si una de las listas no tiene mas nodos, agregar la otra lista a `tail`.
   ii. Si el valor de `list1` es menor que el valor de `list2`, asignar el valor de `list1` al siguiente nodo de `tail` y mover el puntero de `list1`, de lo contrario, asignar el valor de `list2` al siguiente node de `tail` y mover su puntero.
   iii. Mover el puntero de `tail` al siguiente nodo.
4. Retornar el siguiente nodo de la lista `dummy`.

## Estrategia

Algoritmo

## Complejidad

- `Complejidad temporal: O(n)`
- `Complejidad de espacio: O(1)`
