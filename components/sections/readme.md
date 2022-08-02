AboutMe no lleva el HOC SectionLayout porque no quiero mostrar el resto de las secciones si la animación de about no termino, la forma mas fácil es haciendo
que quienes implementan SectionLayout no aparezcan si la animación del `isAboutTransitionEnd`
no es true.

si la dejo about nunca se muestra, por eso en about no usa el HOC

También haciendo esto ahorro tenes que ir a todas las secciones y poner

```js
const { isAboutTransitionEnd } = useContext(TransitionContext);
```
