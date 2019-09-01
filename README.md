# Cotiza Fácil Web Scrapers

Para ejectuar primero se debe tener instalado **Node.js** y **yarn**

https://nodejs.org/en/download/

https://yarnpkg.com/en/docs/install

Los links previos son de referencia, en cada sistema operativo pueden existir formas mas fáciles para instalarlos, pero teniendo esos ambos instalados ya no debería haber ningun problema.

---

### Este repositorio está destinado para experimentar con distintas librerías que son útiles para el proceso de web scraping, todas esas librerías se encontrarán instaladas.

Lo primero que se debe hacer despues de clonar este repositorio es instalar las dependencias escribiendo

```cmd
yarn install
```

después para ejecutar el código (_que se encuentra en index.ts_) basta con escribir el comando

```cmd
yarn start
```

Al ejecutar yarn start automaticamente cada vez que guarden algún cambio en el código, este se ejecutara nuevamente.

---

La idea principal de este repositorio es jugar con las librerías e ir mostrando lo que logran hacer con ellas, logicamente la forma mas fácil para poder ver los datos lo que tienen que hacer es imprimir en pantalla las cosas con

```typescript
console.log(aqui_va_la_data_que_quieren_imprimir);
```

---

Recuerden que el inspector de su navegador es su mejor amigo, lo que deben hacer es buscar los elementos dentro del html que vean del inspector, y reconocer patrones, como las clases o IDs (_los #_)
