"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Animated = require("../Animated");
var _icons = require("../assets/icons");
var _Label = require("../Label");
var _FormControlLabel = require("../FormControlLabel");
var _color = _interopRequireDefault(require("color"));
var _Button = require("../Button");
var _jsxRuntime = require("react/jsx-runtime");
var componentsConfig = {
  Alert: {
    defaultProps: {
      elevation: 0
    }
  },
  Animated: {
    defaultProps: {
      appear: true,
      "in": true,
      hideOnExit: true,
      duration: 500,
      delay: 0,
      mountOnEnter: false,
      unmountOnExit: false
    }
  },
  AnimatedCollapse: {
    defaultProps: {
      orientation: "vertical",
      collapsedSize: "0px",
      duration: 300
    }
  },
  AnimatedFade: {
    defaultProps: {}
  },
  AnimatedFadingScale: {
    defaultProps: {}
  },
  AnimatedFadingSlide: {
    defaultProps: {}
  },
  AnimatedScale: {
    defaultProps: {}
  },
  AnimatedSlide: {
    defaultProps: {
      duration: 500
    }
  },
  AppBar: {
    defaultProps: {
      position: "static",
      elevation: 8,
      onScrollElevationThreshold: 0,
      hideOnScrollThreshold: 100
    }
  },
  Backdrop: {
    defaultProps: {
      preventScroll: true,
      closable: true,
      defaultOpen: true,
      childrenAnimation: {
        AnimatedComponent: _Animated.Animated.Fade,
        props: {
          duration: 300
        }
      },
      transparent: false,
      transitionsDuration: 400,
      renderBackdrop: true,
      renderAtRoot: false
    }
  },
  BackgroundImage: {
    defaultProps: {}
  },
  Badge: {
    defaultProps: {
      max: 99,
      invisible: false,
      overlap: "rectangular",
      showZero: false
    }
  },
  BlockchainAddress: {
    defaultProps: {},
    blockchainLinks: {
      address: "https://etherscan.io/address/",
      tx: "https://etherscan.io/tx/",
      token: "https://etherscan.io/token/",
      nft: "https://etherscan.io/token/"
    }
  },
  Button: {
    defaultProps: {
      variant: "filled",
      size: "md",
      fullWidth: false,
      type: "button"
    }
  },
  Carousel: {
    defaultProps: {
      gap: 20,
      autoplay: false,
      autoplayInterval: 3000,
      rightArrow: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronRightIcon, {}),
      leftArrow: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronLeftIcon, {})
    }
  },
  Chart: {
    defaultProps: {}
  },
  Checkbox: {
    defaultProps: {
      defaultValue: false,
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.UncheckedBoxIcon, {}),
      checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CheckedBoxIcon, {}),
      disabled: false,
      LabelProps: {},
      hideError: true,
      Label: _Label.Label
    }
  },
  Chip: {
    defaultProps: {
      disabled: false,
      size: "md",
      variant: "filled",
      rounded: false
    }
  },
  CodeField: {
    defaultProps: {}
  },
  Col: {
    defaultProps: {}
  },
  ColorInput: {
    defaultProps: {
      defaultValue: new _color["default"](),
      showTextField: true,
      LabelProps: {},
      Label: _FormControlLabel.FormControlLabel
    }
  },
  CopyButton: {
    defaultProps: {}
  },
  Dialog: {
    defaultProps: {
      size: "sm"
    },
    actions: {
      variant: "text",
      component: _Button.Button
    }
  },
  Divider: {
    defaultProps: {
      size: "1px",
      width: "full-width"
    }
  },
  Drawer: {
    defaultProps: {
      variant: "temporary",
      defaultOpen: true,
      elevation: 16,
      position: "left",
      transitionsDuration: 300,
      size: {
        size: "300px"
      }
    }
  },
  Expandable: {
    defaultProps: {}
  },
  ExpandableDisplay: {
    defaultProps: {}
  },
  Form: {
    defaultProps: {}
  },
  FormControl: {
    defaultProps: {}
  },
  FormControlError: {
    defaultProps: {}
  },
  FormControlHint: {
    defaultProps: {}
  },
  FormControlLabel: {
    defaultProps: {}
  },
  Hash: {
    defaultProps: {
      length: "auto",
      "break": false,
      gap: 5
    }
  },
  IconButton: {
    defaultProps: {
      disabled: false,
      type: "button"
    }
  },
  Image: {
    defaultProps: {}
  },
  InfiniteScroll: {
    defaultProps: {
      observerOffset: "10vh"
    }
  },
  Label: {
    defaultProps: {
      placement: "top",
      alignment: "start",
      gap: 10
    }
  },
  MiniDrawer: {
    defaultProps: {
      position: "left",
      collapsedSize: 70,
      size: {
        size: 300
      },
      transitionDuration: "300ms"
    }
  },
  Modal: {
    defaultProps: {
      closable: true,
      defaultOpen: true,
      transitionsDuration: 300,
      animation: "fade",
      elevation: 16,
      preventScroll: true
    }
  },
  OnScreenObserver: {
    defaultProps: {
      offset: "0"
    }
  },
  Pagination: {
    defaultProps: {
      defaultPage: 1,
      boundaryCount: 1,
      previousIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronLeftIcon, {}),
      nextIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronRightIcon, {}),
      startIcon: false,
      endIcon: false,
      size: "md"
    }
  },
  PaginationItem: {
    defaultProps: {
      disabled: false,
      size: "md"
    }
  },
  PaginatedTable: {
    defaultProps: {}
  },
  Paper: {
    defaultProps: {
      elevation: 1,
      square: false
    }
  },
  Popover: {
    defaultProps: {
      showOn: "hover",
      position: "bottom",
      offsetX: 0,
      animation: {
        AnimatedComponent: _Animated.Animated.Fade,
        props: {
          duration: 200
        }
      },
      disablePortal: false
    }
  },
  ProgressBar: {
    defaultProps: {}
  },
  RadioButton: {
    defaultProps: {
      defaultValue: false,
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RadioUncheckedIcon, {}),
      checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RadioCheckedIcon, {}),
      disabled: false,
      LabelProps: {},
      hideError: true,
      Label: _Label.Label
    }
  },
  RangeSlider: {
    defaultProps: {
      step: 1,
      disabled: false,
      LabelProps: {},
      Label: _FormControlLabel.FormControlLabel
    }
  },
  Row: {
    defaultProps: {}
  },
  Select: {
    defaultProps: {}
  },
  SelectGroup: {
    defaultProps: {}
  },
  SelectItem: {
    defaultProps: {}
  },
  SelectMenu: {
    defaultProps: {}
  },
  Selector: {
    defaultProps: {}
  },
  Skeleton: {
    defaultProps: {
      shape: "stadium",
      loading: true,
      animation: "wave"
    }
  },
  Slider: {
    defaultProps: {
      step: 1,
      disabled: false,
      LabelProps: {},
      Label: _FormControlLabel.FormControlLabel
    }
  },
  Switch: {
    defaultProps: {
      defaultValue: false,
      disabled: false,
      LabelProps: {},
      hideError: true,
      Label: _Label.Label
    }
  },
  Table: {
    defaultProps: {}
  },
  Tabs: {
    defaultProps: {
      initialIndex: 0
    }
  },
  Tab: {
    defaultProps: {}
  },
  TabGroup: {
    defaultProps: {
      renderIndicator: true,
      leftArrowIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronLeftIcon, {}),
      rightArrowIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ChevronRightIcon, {})
    }
  },
  TabPanel: {
    defaultProps: {}
  },
  TextArea: {
    defaultProps: {}
  },
  TextField: {
    defaultProps: {}
  },
  TextInput: {
    defaultProps: {
      defaultValue: "",
      disabled: false,
      readonly: false,
      LabelProps: {},
      Label: _FormControlLabel.FormControlLabel
    }
  },
  Toast: {
    defaultProps: {
      position: "top-right",
      animation: "fadingSlide",
      duration: 4000,
      elevation: 1
    }
  },
  ToggleButton: {
    defaultProps: {
      defaultSelected: false
    }
  },
  Toolbar: {
    defaultProps: {}
  },
  Typography: {
    defaultProps: {}
  },
  Upload: {
    defaultProps: {
      readonly: false,
      disabled: false,
      LabelProps: {},
      Label: _FormControlLabel.FormControlLabel
    }
  },
  CircularProgress: {
    defaultProps: {}
  }
};
var _default = exports["default"] = componentsConfig;