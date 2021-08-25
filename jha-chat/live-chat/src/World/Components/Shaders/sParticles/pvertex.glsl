varying vec2 vUv;
uniform float uTime;

void main() {
  vec3 newposition = position;
  newposition.x += sin(newposition.x+uTime) ; 
  newposition.y += sin(newposition.y+uTime) ; 
  //newposition.z += 2.;
  gl_PointSize =  6.;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}