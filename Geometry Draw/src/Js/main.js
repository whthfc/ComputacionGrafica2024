var scene = null,
    camera = null,
    renderer = null,
    controls = null;
    light = null; 
    figuresGeo = []; 
 
const size = 20,
    division = 20;
 
function startScene() {
    // Scene, Camera, Renderer
    scene  = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF);
    camera = new THREE.PerspectiveCamera( 75,  // Angulo de Vision (Abajo o Arriba)
                                        window.innerWidth / window.innerHeight, // Relación Aspecto (16:9)
                                        0.1, // Mas Cerca (no renderiza)
                                        1000); // Mas lejos
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
 
    //orbit controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 5, 10);
    controls.update();

    //orbit helper
    const gridHelper = new THREE.GridHelper( size, division );
    scene.add( gridHelper );
 
    camera.position.z = 5;
    animate();

    // Luz - Light
    // Ambient Light
    const light = new THREE.AmbientLight( 0xffffff ); // soft white light
    scene.add( light );

    // Point Light
    const pointlight = new THREE.PointLight( 0xffffff, 1, 100 );
    pointlight.position.set( 0, 3, 3 );
    scene.add( pointlight );

    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper( pointlight, sphereSize );
    scene.add( pointLightHelper );
}
 
function createLight(){

  switch(expression) {
    case "Ambient":
    const light = new THREE.AmbientLight( 0xffffff ); // soft white light
    scene.add( light );
      // code block
      break;
    case "directionLight":
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
      // code block
      break;
    case "pointLight":
      const pointlight = new THREE.PointLight( 0xffffff, 1, 100 );
    pointlight.position.set( 0, 3, 3 );
    scene.add( pointlight );
        // code block
      break;
    case "SpotLight":
      
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );
spotLight.map = new THREE.TextureLoader().load( url );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );
          // code block
      break;
    case "pointLight":
            // code block
      break;
    default:
      // code block
  }


}


function animate() {
    requestAnimationFrame(animate);
    controls.update
    renderer.render( scene, camera );
}

// Resize by Screen Size
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
 
function createGeometry(geometryDraw) {
    // Box, Torus, Cone
    var geometryFigure = null;

    switch(geometryDraw) {
        case 'Box':
          // code block
            //geometryFigure = new THREE.BoxGeometry( 1, 1, 1 );
            callParameters(geometryDraw);
          break;
        case 'Torus':
          // code block
            //geometryFigure = new THREE.TorusGeometry( 10, 1, 16, 100 ); 
            callParameters(geometryDraw);
          break;
        case 'Cone':
          // code block
            //geometryFigure = new THREE.ConeGeometry( 5, 10, 32 );
            callParameters(geometryDraw);
          break;
    }
    var randomColor = +('0x' + Math.floor(Math.random()*16777215).toString(16));
    const material = new THREE.MeshStandardMaterial( { color: randomColor,
                                                    transparent: false,
                                                    opacity: 0.5,
                                                    wireframe: false,
                                                    roughness: 0.5,
                                                    metalness: 1
     } );
    const objectDraw = new THREE.Mesh( geometryFigure, material );
    scene.add( objectDraw );
}

function borrar(){

  if(figuresGeo.length > 0){

    //elimina la ultima figura del arreglo de figuras
    var lastFigure = figuresGeo.pop();

    //ahora la elimina tambien de la escena
    scene.remove(lastFigure);

    //actualiza / refresca la pantalla
    renderer.render(scene, camera);

  }

}

function drawObjects(geometry) {

  var count = console.count();

  var randomColor = +('0x' + Math.floor(Math.random()*16777215).toString(16));
  const material = new THREE.MeshStandardMaterial( { color: randomColor,
                                                  transparent: false,
                                                  opacity: 0.5,
                                                  wireframe: false,
                                                  roughness: 0.5,
                                                  metalness: 1
   } );

  var objectToAdd = new THREE.Mesh(geometry, material);
  objectToAdd.name = "figura"+count;
  objectToAdd.id = "figura"+count;

  figuresGeo.push(objectToAdd);
  scene.add(objectToAdd);

  showAllObjectUI(figuresGeo[figuresGeo.length-1]);

}

function callParameters(figure){

    var validateParams = false;
    var col = +('0x' + Math.floor(Math.random()*16777215).toString(16));
  
    switch(figure){
  
      case 'Box':
        //alert("pintar box")
        var message = 'Por favor ingrese los parámetros del cubo \n(ancho: decimal, altura: entero, profundidad: decimal)';
        var datas = prompt(message, "w, h, z");
  
        validateParams = validateData(datas, "w, h, z");
  
        if(validateParams){
          //alert("pintar");
          var values = clearParamsUI(datas, ',');
          var geometry = new THREE.BoxGeometry(values[0], values[1], values[2]);
          drawObjects(geometry, col);
        }
  
        else{
          //alert("no pintar");
          document.getElementById('warningMssgI').style.display = 'block';
        }
  
      break;
  
      case 'Torus':
        //alert("pintar Torus");
        var message = 'Por favor ingrese los parámetros del Toroide \n(radio: Float, tube: decimal, segmento radial: entero, segmentos turbulares: entero)';
        var datas = prompt(message, "r, rt, rs, ts");
  
        validateParams = validateData(datas, "r, rt, rs, ts");
  
        if(validateParams){
          //alert("pintar");
          var values = clearParamsUI(datas, ',');
          var geometry = new THREE.TorusGeometry(values[0], values[1], values[2], value[3]);
          drawObjects(geometry, col);
        }
  
        else{
          //alert("no pintar");
          document.getElementById('warningMssgI').style.display = 'block';
        }
  
      break;
      
      case 'Cone':
  
        //alert("pintar Cone");
        var message = 'Por favor ingrese los parámetros del cono \n(radio: decimal, altura: decimal , segemento radial: entero)';
        var datas = prompt(message, "r, h, rs");
  
        validateParams = validateData(datas, "r, h, rs");
  
        if(validateParams){
          //alert("pintar");
          var values = clearParamsUI(datas, ',');
          var geometry = new THREE.ConeGeometry(values[0], values[1], values[2]);
          drawObjects(geometry, col);
        }
  
        else{
          //alert("no pintar");
          document.getElementById('warningMssgI').style.display = 'block';
        }
  
      break;
  
    }
  
    return validateParams;

  }

  function validateData(datas, conditionValidation){

    if(datas){
      if(datas != conditionValidation){
        return true;
      }
  
      else{
        return false;
      }
    }
  
    else{
      return false;
    }
  
  }

  function clearParamsUI(params, flag){

    value = params.split(flag);
    for(var i = 0; i < value.length; i++){
  
      console.log(i+'length'+value.length);
      if(i!=value.length-1){
        value[i] = parseFloat(value[i]);
      }
      
    }
  
    return value;
  
  }