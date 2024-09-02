function vectorCalculo() {
    // Obtener los Valores de los Inputs
    let ax = document.getElementById("puntoAX").value;
    let ay = document.getElementById("puntoAY").value;
    let az = document.getElementById("puntoAZ").value;

    let bx = document.getElementById("puntoBX").value;
    let by = document.getElementById("puntoBY").value;
    let bz = document.getElementById("puntoBZ").value;

    let vx = bx-ax,
        vy = by-ay,
        vz = bz-az;
    
    let vectorFinal = `(${vx},${vy},${vz})`;   
    document.getElementById("result").innerHTML = vectorFinal;
}
function vectorSuma() {
    // Obtener los Valores de los Inputs
    let vx1 = parseFloat(document.getElementById("Vector1X").value);
    let vy1 = parseFloat(document.getElementById("Vector1Y").value);
    let vz1 = parseFloat(document.getElementById("Vector1Z").value);

    let vx2 = parseFloat(document.getElementById("Vector2X").value);
    let vy2 = parseFloat(document.getElementById("Vector2Y").value);
    let vz2 = parseFloat(document.getElementById("Vector2Z").value);

    let vx = vx1 + vx2,
        vy = vy1 + vy2,
        vz = vz1 + vz2;
    
    let sumaVector = `(${vx},${vy},${vz})`;   
    document.getElementById("resultSuma").innerHTML = sumaVector;
}
function vectorProducto() {
    // Obtener los Valores de los Inputs
    let v1x = parseFloat(document.getElementById("VectorX1").value);
    let v1y = parseFloat(document.getElementById("VectorY1").value);
    let v1z = parseFloat(document.getElementById("VectorZ1").value);

    let v2x = parseFloat(document.getElementById("VectorX2").value);
    let v2y = parseFloat(document.getElementById("VectorY2").value);
    let v2z = parseFloat(document.getElementById("VectorZ2").value);

    // Calcular el producto escalar
    let productoVector = v1x * v2x + v1y * v2y + v1z * v2z;
    
    document.getElementById("resultProducto").innerHTML = productoVector;
}
function vectorMagnitud() {
    // Obtener los Valores de los Inputs
    let vx0 = parseFloat(document.getElementById("V1X").value);
    let vy0 = parseFloat(document.getElementById("V1Y").value);
    let vz0 = parseFloat(document.getElementById("V1Z").value);

    let vx01 = parseFloat(document.getElementById("V2X").value);
    let vy01 = parseFloat(document.getElementById("V2Y").value);
    let vz01 = parseFloat(document.getElementById("V2Z").value);

    // Calcular la magnitud de cada vector
    let magnitudVector1 = Math.sqrt(vx0 * vx0 + vy0 * vy0 + vz0 * vz0);
    let magnitudVector2 = Math.sqrt(vx01 * vx01 + vy01 * vy01 + vz01 * vz01);
    
    document.getElementById("resultMagnitud1").innerHTML = `La magnitud del vector 1 es: ${magnitudVector1}`;
    document.getElementById("resultMagnitud2").innerHTML = `La magnitud del vector 2 es: ${magnitudVector2}`;
}