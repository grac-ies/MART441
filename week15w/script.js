document.addEventListener("DOMContentLoaded", function () {
    //setup
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    //scene
    var scene = new BABYLON.Scene(engine);
    //background
    scene.clearColor = new BABYLON.Color3(0.5, 0, 0.5); 

    //lights...camera...something
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    //pink donut
    var pinkMaterial = new BABYLON.StandardMaterial("pinkMaterial", scene);
    pinkMaterial.diffuseColor = new BABYLON.Color3(1, 0.4, 0.6);

    //blue sphere
    var blueMaterial = new BABYLON.StandardMaterial("blueMaterial", scene);
    blueMaterial.diffuseColor = new BABYLON.Color3(0.6, 0.6, 1);

    //donuts
    var donut1 = BABYLON.MeshBuilder.CreateTorus("donut1", { diameter: 1, thickness: 0.4 }, scene);
    var donut2 = BABYLON.MeshBuilder.CreateTorus("donut2", { diameter: 1, thickness: 0.4 }, scene);
    var donut3 = BABYLON.MeshBuilder.CreateBox("donut3", { size: 1 }, scene);
    var donut4 = BABYLON.MeshBuilder.CreateBox("donut4", { size: 1 }, scene);
    //sphere
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

    //giving materials
    donut1.material = pinkMaterial;
    donut2.material = pinkMaterial;
    donut3.material = blueMaterial;
    donut4.material = blueMaterial;
    sphere.material = blueMaterial;

    // where are ya
    donut1.position = new BABYLON.Vector3(-3, 0, 0);
    donut2.position = new BABYLON.Vector3(-1, 0, 0);
    donut3.position = new BABYLON.Vector3(1, 0, 0);
    donut4.position = new BABYLON.Vector3(3, 0, 0);
    sphere.position = new BABYLON.Vector3(0, 2, 0);

    //rotation
    scene.registerAfterRender(function () {
        donut1.rotation.y += 0.01;
        donut2.rotation.y -= 0.01;
        donut3.rotation.y += 0.02;
        donut4.rotation.y += 0.02;
        sphere.rotation.y -= 0.01;
    });
    //render
    engine.runRenderLoop(function () {
        scene.render();
    });
});