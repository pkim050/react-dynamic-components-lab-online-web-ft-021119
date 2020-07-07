import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
<<<<<<< HEAD

      if (parseFloat(this.props.opacity) >= parseFloat(0.2)) {
          const newValue = parseFloat(this.props.opacity, 10) - parseFloat(0.1, 10);
          return (
              <div className="color-box" style={{opacity: this.props.opacity}}>
=======
    const newValue = this.props.opacity * 2;

      if (this.props.opacity < 100) {
          return (
              <div>
>>>>>>> d20e63a290a1ad381adf54e9d295e3324fc6bceb
                  <ColorBox opacity={newValue} />
              </div>
          );
      } else {
          return null;
      }
  }

}
