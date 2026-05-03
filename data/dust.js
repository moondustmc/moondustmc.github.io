const dustBox = document.querySelector('.dust');
const particles = dustBox.children;

// configuration
const posOffset = 10;      // the maximum offset from the start position

const scaleMax = 1.5;      // the max scale
const scaleSplit = 0.8;    // the minimum start scale
const scaleMin = 0.4;      // the minimum scale

const opacityMax = 1;      // the max opacity
const opacitySplit = 0.6;  // the minimum start opacity
const opacityMin = 0.2;    // the minimum opacity

const rotationMax = 5     // the maximum start rotation
const rotationMin = -5;   // the minimum start rotation
const rotationOffset = 5; // the maximum offset from the start rotation

const speedMax = 10;       // the maximum fall speed
const speedMin = 5;        // the minimum fall speed


function animate(dust) {
	// do maths
	const pos = Math.random() * 100;
	const posEnd = pos + (Math.random() * (posOffset * 2)) - posOffset;
	const scale = scaleSplit + Math.random() * (scaleMax - scaleSplit);
	const scaleEnd = scaleMin + Math.random() * (scale - scaleMin);
	const opacity = opacitySplit + Math.random() * (opacityMax - opacitySplit);
	const opacityEnd = opacityMin + Math.random() * (opacity - opacityMin);
	const rotation = rotationMin + Math.random() * (rotationMax - rotationMin);
	const rotationEnd = rotation + (Math.random() * (rotationOffset * 2)) - rotationOffset;
	const speed = speedMin + Math.random() * (speedMax - speedMin);

	// set properties
	dust.style.setProperty('--position-start', `${pos}vw`);
	dust.style.setProperty('--position-end', `${posEnd}vw`);
	dust.style.setProperty('--scale-start', `${scale}`);
	dust.style.setProperty('--scale-end', `${scaleEnd}`);
	dust.style.setProperty('--opacity-start', `${opacity}`);
	dust.style.setProperty('--opacity-end', `${opacityEnd}`);
	dust.style.setProperty('--rotation-start', `${rotation}deg`);
	dust.style.setProperty('--rotation-end', `${rotationEnd}deg`);

	// animate
	requestAnimationFrame(() => {
		dust.style.animation = `dust ${speed}s linear`;
		dust.style.display = 'block';
	});
}

for (const dust of particles) {
	animate(dust);
	requestAnimationFrame(() => { dust.style.animationDelay = `${Math.random() * 5}s`; });
}

dustBox.addEventListener('animationend', (event) => {
	event.target.style = ''
	requestAnimationFrame(() =>(animate(event.target)));
});