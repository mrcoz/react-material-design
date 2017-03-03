import React, { Component } from 'react';

// add "is" to element to use custom attributes

class X3dModel extends Component {


  render() {
    return (
      <x3d width='500px' height='400px'>
          <scene>
              <shape>
                  <appearance>
                    <material is diffusecolor="1 0 0" ambientintensity="0.4" emissivecolor="0,0,0" shininess="0.8" specularcolor="0,0,0"></material>

                  </appearance>
                  <box></box>
              </shape>
          </scene>
      </x3d>
      );
    }
  }

export default X3dModel;
