# mi-libreria-matematica

**Librería de Utilidades Matemáticas en JavaScript**

## Descripción

Esta librería ofrece funciones matemáticas comunes como cálculos de área, perímetro, potencias, raíces, operaciones con listas, conversiones de ángulos y factorial. Permite simplificar operaciones matemáticas en proyectos web sin depender de frameworks externos como React, Vue o similares.

---

## Instalación

Incluye el archivo de la librería en tu proyecto HTML de la siguiente forma:

```html
 <script src="libreria.js"></script>
````

---

## Ejemplo de Uso

Ejemplo básico para calcular el área de un círculo:

```html
<input type="number" id="radio">
<button onclick="calcular()">Calcular Área</button>
<script>
function calcular() {
  const radio = parseFloat(document.getElementById("radio").value);
  const resultado = Milib.areaCirculo(radio);
  alert("Área: " + resultado);
}
</script>
```

Todas las funciones devuelven `"No válido"` si se ingresan datos incorrectos (como radios negativos, listas vacías o valores no numéricos).

---

## Funciones Disponibles

* `areaCirculo(radio)` → Devuelve el área de un círculo.
* `perimetroCirculo(radio)` → Devuelve el perímetro de un círculo.
* `cuadrado(numero)` → Eleva un número al cuadrado.
* `raizCuadrada(numero)` → Devuelve la raíz cuadrada (solo para números ≥ 0).
* `elevado(base, exponente)` → Devuelve la potencia de un número.
* `sumaLista(lista)` → Suma todos los elementos de una lista.
* `promedioLista(lista)` → Calcula el promedio de una lista de números.
* `maximoLista(lista)` → Devuelve el valor máximo de una lista.
* `minimoLista(lista)` → Devuelve el valor mínimo de una lista.
* `conversorGradosADecimales(grados, minutos, segundos)` → Convierte ángulos a decimales.
* `radianesAGrados(radianes)` → Convierte radianes a grados.
* `factorial(n)` → Calcula el factorial de un número entero positivo.

---

## Capturas de Pantalla

*Coloca aquí las imágenes que muestren el funcionamiento de tu librería.*

Ejemplos de qué capturas debes agregar:

✅ Ejemplo de un área de círculo calculada en la consola o un `alert`.
✅ Ejemplo mostrando el uso en el navegador con inputs y botones (puede ser el index.html corriendo).
✅ Ejemplo de un resultado `"No válido"` al ingresar un dato incorrecto.

### Cómo se vería en el README (modifica las rutas según tus imágenes):

```markdown
![Ejemplo Área Círculo](capturas/area-circulo.png)
![Ejemplo Error Dato Inválido](capturas/dato-invalido.png)
```

---

## Video

Puedes grabar un video corto (máximo 1 minuto) mostrando:

* Cómo se importa la librería en un HTML.
* Un par de operaciones funcionando (ejemplo: área de círculo, factorial, etc.).
* Qué pasa al ingresar datos incorrectos (que devuelva `"No válido"`).

Puedes subirlo a YouTube, Google Drive, o incluso dejar el archivo en el repositorio y enlazarlo así:

```markdown
[Ver video demostración](video/demo.mp4)
```

---

## GitHub Pages (opcional)

Si deseas una demostración en línea:

1. Sube tu proyecto a GitHub.
2. Ve a `Settings > Pages`.
3. Selecciona la rama principal y la carpeta `/root` o `/docs` según dónde esté tu `index.html`.
4. Obtendrás un enlace como:

```markdown
https://tuusuario.github.io/mi-libreria-matematica/
```

---

## Cómo agregar imágenes al README.md

### Crea una carpeta dentro del repositorio llamada `capturas`:

```
mi-libreria-matematica
│
├── index.html
├── miLibreria.js
├── README.md
└── capturas
    ├── area-circulo.png
    ├── dato-invalido.png
```

### Dentro del README, para que se muestren las imágenes:

```markdown
![Descripción breve](capturas/nombre-de-la-imagen.png)
```

**Ejemplo real:**

```markdown
![Cálculo de Área](capturas/area-circulo.png)
![Dato Inválido](capturas/dato-invalido.png)
```

### Las imágenes deben estar en formato `.png` o `.jpg` y deben estar subidas al repositorio antes de que se visualicen en GitHub.

---

```

Listo, solo copia y pega todo este contenido en tu archivo `README.md` y se verá correctamente en GitHub.

Si quieres te preparo un `.zip` con las carpetas, archivos y README ya listo. ¿Quieres que lo arme por ti? 🚀
```
