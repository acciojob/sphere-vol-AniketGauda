function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let r = document.getElementById("radius");

    let v = document.getElementById("volume");

    let R = parseInt(r.value);
    if(isNaN(R) || R<0)
        v.value = NaN;
    else{
        let vol = (4/3)*(Math.PI)*(R**3);
        vol = vol.toFixed(4);
        v.value = vol;
    }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
