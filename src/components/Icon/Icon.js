function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import invariant from 'invariant';
import PropTypes from 'prop-types';
import React from 'react';
import icons from 'carbon-icons';
import isRequiredOneOf from '../../prop-types/isRequiredOneOf';
/**
 * The icons list object from `carbon-icons`.
 * @type {Object}
 */

var iconsList = icons;
/**
 * Returns a single icon Object
 * @param {string} name - "name" property of icon
 * @param {Object} [iconsObj=icons] - JSON Array of Objects
 * @example
 * // Returns a single icon Object
 * this.findIcon('copy-code', icons.json);
 */

export function findIcon(name) {
  var iconsObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : iconsList;
  var icon = iconsObj.filter(function (obj) {
    return obj.name === name;
  });

  if (icon.length === 0) {
    return false;
  } else if (icon.length > 1) {
    throw new Error('Multiple icons found...');
  } else {
    return icon[0];
  }
}
/**
 * Sets the icons list object from `carbon-icons`.
 * Doing so instead of having this module directly import `carbon-icons`
 * avoids the icons list being included in applications' bundles if only limited set of icons is in use.
 * @param {Object} list The icons list from `carbon-icons`.
 */

export function setIconsList(list) {
  iconsList = list;
}
/**
 * Returns "svgData" Object
 * @param {string} iconName - "name" property of icon
 * @example
 * // Returns svgData Object for given iconName
 * this.getSvgData('copy-code');
 */

export function getSvgData(iconName) {
  var icon = findIcon(iconName);
  return icon ? icon.svgData : false;
}
/**
 * @param {Object} svgData - JSON Object for an SVG icon
 * @returns {ReactElement} Elements/Nodes for SVG
 * @example
 * // Returns SVG elements
 * const svgData = getSvgData('copy-code');
 * svgShapes(svgData);
 */

export function svgShapes(svgData) {
  var svgElements = Object.keys(svgData).filter(function (key) {
    return svgData[key];
  }).map(function (svgProp) {
    var data = svgData[svgProp];

    if (svgProp === 'circles') {
      return data.map(function (circle, index) {
        var circleProps = {
          cx: circle.cx,
          cy: circle.cy,
          r: circle.r,
          key: "circle".concat(index)
        };
        return React.createElement("circle", circleProps);
      });
    } else if (svgProp === 'paths') {
      return data.map(function (path, index) {
        return React.createElement("path", {
          d: path.d,
          key: "key".concat(index)
        });
      });
    } else if (svgProp === 'polygons') {
      return data.map(function (polygon, index) {
        return React.createElement("polygon", {
          points: polygon.points,
          key: "key".concat(index)
        });
      });
    }

    return '';
  });
  return svgElements;
}
export function isPrefixed(name) {
  if (process.env.NODE_ENV !== "production") {
    !(typeof name === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, '[Icon] icon name is missing. You likely forgot to specify the icon, ' + 'or are using older (pre-`7.x`) version of `carbon-icons` library. ' + 'To specify the icon, use either `icon` (data) or `name` (icon name) properties.') : invariant(false) : void 0;
  }

  return name && name.split('--')[0] === 'icon';
}

var Icon = function Icon(_ref) {
  var className = _ref.className,
      iconTitle = _ref.iconTitle,
      description = _ref.description,
      fill = _ref.fill,
      fillRule = _ref.fillRule,
      height = _ref.height,
      name = _ref.name,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? isPrefixed(name) ? findIcon(name) : findIcon("icon--".concat(name)) : _ref$icon,
      role = _ref.role,
      style = _ref.style,
      width = _ref.width,
      iconRef = _ref.iconRef,
      other = _objectWithoutProperties(_ref, ["className", "iconTitle", "description", "fill", "fillRule", "height", "name", "icon", "role", "style", "width", "iconRef"]);

  var props = _objectSpread({
    className: className,
    fill: fill,
    fillRule: fillRule,
    height: height || icon.height,
    name: isPrefixed ? name : "icon--".concat(name),
    role: role,
    style: style,
    viewBox: icon.viewBox,
    width: width || icon.width,
    ref: iconRef
  }, other);

  var svgContent = icon ? svgShapes(icon.svgData) : '';
  return React.createElement("svg", _extends({}, props, {
    "aria-label": description,
    alt: description
  }), React.createElement("title", null, typeof iconTitle === 'undefined' ? description : iconTitle), svgContent);
};

Icon.propTypes = _objectSpread({
  /**
   * The CSS class name.
   */
  className: PropTypes.string,

  /**
   * The icon title.
   */
  iconTitle: PropTypes.string,

  /**
   * The icon description.
   */
  description: PropTypes.string.isRequired,

  /**
   * The `<svg>` `fill` attribute.
   */
  fill: PropTypes.string,

  /**
   * The `<svg>` `fillRule` attribute.
   */
  fillRule: PropTypes.string,

  /**
   * The `<svg>` `height` attribute.
   */
  height: PropTypes.string
}, isRequiredOneOf({
  /**
   * The icon data.
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }),

  /**
   * The name in the sprite.
   */
  name: PropTypes.string
}), {
  /**
   * The `role` attribute.
   */
  role: PropTypes.string,

  /**
   * The CSS styles.
   */
  style: PropTypes.object,

  /**
   * The `<svg>` `viewbox` attribute.
   */
  viewBox: PropTypes.string,

  /**
   * The `<svg>` `width` attribute.
   */
  width: PropTypes.string,

  /**
   * The `ref` callback for the icon.
   */
  iconRef: PropTypes.func
});
Icon.defaultProps = {
  fillRule: 'evenodd',
  role: 'img',
  description: 'Provide a description that will be used as the title'
};
export { icons };
export default Icon;