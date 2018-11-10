uniform vec4 u_grayParam;
varying vec2 v_texCoord;

void main()
{
    vec4 texColor = texture2D(CC_Texture0,v_texCoord);
    texColor.r = texColor.r * 0.5;
    gl_FragColor = texColor;
}

