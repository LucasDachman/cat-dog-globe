const scene = document.querySelector('a-scene');

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(function () {
    const x = String(getRandom(-15, 15));
    const y = String(getRandom(20, 30));
    const z = String(getRandom(-5, 5));
    const position = x + ' ' + y + ' ' + z;
    const cat = document.createElement('a-box');
    cat.setAttribute('obj-model', 'obj: #cat-obj;');
    cat.setAttribute('src', '#fur');
    cat.setAttribute('scale', '0.03 0.03 0.03');
    cat.setAttribute('position', position);
    cat.setAttribute('rotation', '5 1.5 0');
    cat.setAttribute('dynamic-body', {
        shape: 'box',
        mass: 1.5,
        linearDamping: 0.005
    });
    scene.appendChild(cat);
    console.log('append cat', cat);
}, 400);