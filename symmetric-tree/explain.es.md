## Enfoque

- Recorrer ambos subárboles y devuelve un objeto con dos propiedades, el valor del nodo y si es un nodo izquierdo o no.
  Con ambos arreglos de subárbol, verificar si el valor del último nodo visitado en un lado coincide con el valor del primero visitado en el otro y si pertenecen a lados diferentes del árbol hasta que no haya más nodos para verificar.
- Utilizar la función auxiliar `isMirror`, encargada de comprobar si el valor de dos nodos es igual, si el subárbol izquierdo del primer nodo refleja el subárbol derecho del segundo nodo, y si el subárbol derecho del primer nodo refleja el subárbol izquierdo del segundo nodo.

## Estrategia

Recursividad

## Complejidad

- `Complejidad temporal: O(n)`
- `Complejidad de espacio: O(1)`
