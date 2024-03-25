## Enfoque

1. Crear los punteros `slow` y `fast` apuntando a la cabeza de la LinkedList.
2. Mover el puntero `fast` hacia adelante `n` veces.
3. Si el puntero `fast` es null, significa que queremos eliminar el primer nodo de la LinkedList.
4. Mientras que el siguiente nodo de `fast` este definido, mover los dos punteros un paso adelante.
5. Remover el siguiente nodo del puntero `slow`.
6. Retornar la cabeza de la LinkedList.

## Estrategia

Puntero rapido y lento en LinkedLists

## Complejidad

- `Complejidad temporal: O(n)`
- `Complejidad de espacio: O(1)`
