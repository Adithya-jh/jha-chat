varying vec2 vUv;
uniform float uTime;
void main()	{
	//vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	gl_FragColor = vec4(vUv,1.0,1.);
}