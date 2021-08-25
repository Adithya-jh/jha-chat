varying vec2 vUv;
uniform float uTime;

void main() {
  vec3 newposition = position;
  newposition.y += sin(newposition.y+uTime) *7. ; 
  newposition.x -= cos(newposition.x+uTime) * 7. ; 
  
  //gl_PointSize =  10.;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}