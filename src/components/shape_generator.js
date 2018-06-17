import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import requireAuth from './require_auth';
import { changeShape, randomizeShape } from '../actions/shape';
import { signOut } from '../actions/auth';

class ShapeGenerator extends Component {
  static createStyle = ({ topLeft1, topRight1, bottomRight1, bottomLeft1 }, dim = '%') => {
    const borderRadius = `${topLeft1}${dim} ${topRight1}${dim} ${bottomRight1}${dim} ${bottomLeft1}${dim}`;
    const result = {
      borderRadius
    };
    return result;
  };

  randomize = () => {
    this.props.randomizeShape();
  };

  onChangeValue = (key, e) => {
    const { value } = e.target;
    this.props.changeShape(key, value);
  };

  onSignOut = () => {
    this.props.signOut();
  };

  render() {
    const style = ShapeGenerator.createStyle(this.props.shape, '%');
    const copyValue = `border-radius: ${style.borderRadius}`;

    return (
      <div className="main">
        <div className="content">
          <Shape style={style} onClick={this.randomize} />
        </div>
        <div className="controls">
          <RangeInputs items={this.props.shape} onChange={this.onChangeValue} />
          <div className="flex">
            <CopyToClipboard text={copyValue}>
              <button className="button">Copy style 📋</button>
            </CopyToClipboard>
            <button className="button" onClick={this.onSignOut}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const Shape = ({ style, onClick }) => {
  return <button tabIndex={1} style={style} onClick={onClick} className="shape" />;
};

const RangeInputs = ({ items, onChange }) => {
  return Object.keys(items).map((key, index) => {
    return (
      <input
        className="slider"
        type="range"
        key={key}
        value={items[key]}
        onChange={onChange.bind(this, key)}
        min="0"
        max="100"
        step="1"
        tabIndex={index + 2}
      />
    );
  });
};

const mapStateToProps = state => ({
  shape: state.shape
});

const mapDispatchToProps = {
  changeShape,
  randomizeShape,
  signOut
};

export default requireAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShapeGenerator)
);
