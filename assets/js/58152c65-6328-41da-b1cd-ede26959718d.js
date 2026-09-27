/* @ds-bundle: {"format":4,"namespace":"WakefitDesignSystem_293aa8","components":[],"sourceHashes":{"ios-frame.jsx":"d67eb3ffe562","ui_kits/app/app.jsx":"284e2013d3f2","ui_kits/app/ios-frame.jsx":"d67eb3ffe562","ui_kits/web/components.jsx":"94422dc452c7","ui_kits/web/screens.jsx":"a405b371266b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WakefitDesignSystem_293aa8 = window.WakefitDesignSystem_293aa8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app.jsx
try { (() => {
const {
  useState: useStateA
} = React;
const MN = "var(--wf-midnight)",
  DK = "var(--wf-dusk)",
  DW = "var(--wf-dawn)";
function AppHeader({
  onMenu
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      background: "var(--wf-milky)",
      borderBottom: "1px solid rgba(25,24,57,0.06)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: appBtn,
    onClick: onMenu
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: MN,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wakefit-logo-purple.svg",
    alt: "Wakefit",
    style: {
      height: 22,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: appBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: MN,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3-3"
  }))), /*#__PURE__*/React.createElement("button", {
    style: appBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: MN,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 7h12l-1 13H7zM9 7V5a3 3 0 0 1 6 0v2"
  }))));
}
const appBtn = {
  width: 36,
  height: 36,
  borderRadius: 999,
  border: 0,
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
};
function BottomTabBar({
  active = "home",
  onTab
}) {
  const tabs = [{
    id: "home",
    lbl: "Home",
    d: /*#__PURE__*/React.createElement("path", {
      d: "M3 11l9-8 9 8v10h-6v-6H9v6H3z"
    })
  }, {
    id: "cat",
    lbl: "Shop",
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1"
    }))
  }, {
    id: "wish",
    lbl: "Wishlist",
    d: /*#__PURE__*/React.createElement("path", {
      d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
    })
  }, {
    id: "cart",
    lbl: "Cart",
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "20",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "20",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 4h3l2 12h11l2-8H7"
    }))
  }, {
    id: "acct",
    lbl: "Account",
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 4-7 8-7s8 3 8 7"
    }))
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      background: "var(--wf-milky)",
      borderTop: "1px solid rgba(25,24,57,0.08)",
      padding: "8px 6px 20px",
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)"
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onTab && onTab(t.id),
      style: {
        border: 0,
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "6px 0",
        cursor: "pointer",
        color: on ? DK : "var(--fg-3)"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: on ? 2 : 1.7,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, t.d), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 10,
        fontWeight: on ? 600 : 500,
        letterSpacing: "0.02em"
      }
    }, t.lbl));
  }));
}
function AppHero({
  onShop
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "14px 16px 0",
      borderRadius: 24,
      background: "var(--wf-5am)",
      padding: "22px 22px 20px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: DK,
      fontWeight: 500
    }
  }, "M E G A \xA0 S A L E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 30,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      color: MN,
      margin: "10px 0 8px",
      maxWidth: 200
    }
  }, "Wake up & smell the savings."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--wf-carbon)",
      marginBottom: 16,
      maxWidth: 210
    }
  }, "Up to 50% off sitewide."), /*#__PURE__*/React.createElement("button", {
    onClick: onShop,
    style: {
      background: DK,
      color: "#fff",
      border: 0,
      borderRadius: 999,
      padding: "10px 18px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, "Shop the sale \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -20,
      bottom: -30,
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      color: DW,
      fontSize: 140,
      lineHeight: 1,
      opacity: 0.9,
      letterSpacing: "-0.05em"
    }
  }, "50"));
}
function CategoryGrid({
  onTap
}) {
  const cats = [{
    n: "Mattress",
    bg: "var(--wf-6pm)",
    ic: "∞"
  }, {
    n: "Beds",
    bg: "var(--wf-5am)",
    ic: "⊓"
  }, {
    n: "Sofas",
    bg: "var(--wf-pastel-sage)",
    ic: "⌐"
  }, {
    n: "Wardrobe",
    bg: "var(--wf-star-blue)",
    ic: "▯"
  }, {
    n: "Study",
    bg: "var(--wf-6pm)",
    ic: "⊤"
  }, {
    n: "Dining",
    bg: "var(--wf-5am)",
    ic: "○"
  }, {
    n: "Decor",
    bg: "var(--wf-pastel-sage)",
    ic: "◇"
  }, {
    n: "Sale",
    bg: "var(--wf-dawn)",
    ic: "%"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 16,
      color: MN,
      marginBottom: 12
    }
  }, "Shop by room"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 10
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    onClick: () => onTap && onTap(c.n),
    style: {
      background: c.bg,
      borderRadius: 14,
      aspectRatio: "1/1.05",
      padding: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 22,
      color: MN,
      opacity: 0.55
    }
  }, c.ic), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: 600,
      color: MN
    }
  }, c.n)))));
}
function MobileProductCard({
  p,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(25,24,57,0.06)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      background: p.bg,
      position: "relative",
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      background: DK,
      color: "#fff",
      padding: "3px 9px",
      borderRadius: 999,
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: "0.06em",
      fontFamily: "var(--font-display)"
    }
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontFamily: "var(--font-display)",
      fontWeight: 500
    }
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 13,
      color: MN,
      margin: "3px 0 4px",
      lineHeight: 1.2
    }
  }, p.nm), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 14,
      color: MN
    }
  }, "\u20B9", p.pr.toLocaleString("en-IN")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-3)",
      textDecoration: "line-through"
    }
  }, "\u20B9", p.ori.toLocaleString("en-IN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: DK,
      marginTop: 4,
      fontWeight: 600
    }
  }, "\u2605 ", p.rt, " \xB7 ", (p.rv / 1000).toFixed(0), "k")));
}
const APP_PRODUCTS = [{
  id: "p1",
  cat: "Mattress",
  nm: "Ortho Memory Foam",
  pr: 12240,
  ori: 15692,
  rt: 4.6,
  rv: 38214,
  bg: "var(--wf-5am)",
  tag: "-22%"
}, {
  id: "p2",
  cat: "Mattress",
  nm: "7-Zone Latex",
  pr: 24999,
  ori: 34999,
  rt: 4.7,
  rv: 12408,
  bg: "var(--wf-6pm)",
  tag: "-28%"
}, {
  id: "p3",
  cat: "Sofa",
  nm: "Sofa by day. Bed by night.",
  pr: 24999,
  ori: 32999,
  rt: 4.5,
  rv: 12902,
  bg: "var(--wf-star-blue)",
  tag: "BEST"
}, {
  id: "p4",
  cat: "Bed",
  nm: "Taurus Bed · Queen",
  pr: 19999,
  ori: 27999,
  rt: 4.4,
  rv: 4502,
  bg: "var(--wf-pastel-sage)",
  tag: "-29%"
}];
function AppHomeScreen({
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      height: "calc(100% - 60px - 70px)"
    }
  }, /*#__PURE__*/React.createElement(AppHero, {
    onShop: () => onTab("cart")
  }), /*#__PURE__*/React.createElement(CategoryGrid, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontWeight: 500
    }
  }, "T R E N D I N G"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 26,
      color: MN,
      letterSpacing: "-0.01em",
      marginTop: 4
    }
  }, "Sweet dreams are made of these.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, APP_PRODUCTS.map(p => /*#__PURE__*/React.createElement(MobileProductCard, {
    key: p.id,
    p: p
  })))));
}
Object.assign(window, {
  AppHeader,
  BottomTabBar,
  AppHero,
  CategoryGrid,
  MobileProductCard,
  AppHomeScreen,
  APP_PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* =========================================================
   Wakefit Web UI Kit — components
   All components attach to window at the end of the file.
   ========================================================= */

const {
  useState
} = React;

/* ---------- tiny icons (Lucide-ish, brand-consistent stroke) ---------- */
const Icon = ({
  d,
  size = 20,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 1.8
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: stroke,
  strokeWidth: strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d);
const IconSearch = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3-3"
  }))
}));
const IconUser = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4 4-7 8-7s8 3 8 7"
  }))
}));
const IconHeart = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
  })
}));
const IconCart = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "20",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4h3l2 12h11l2-8H7"
  }))
}));
const IconMenu = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  }))
}));
const IconArrow = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })
}));
const IconShield = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l9 4v5c0 5-9 9-9 9s-9-4-9-9V7z"
  })
}));
const IconTruck = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "13",
    height: "10",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10h3l2 3v4h-5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "1.6"
  }))
}));
const IconReturn = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 3-6.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  }))
}));
const IconCard = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  }))
}));
const IconSpark = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M18.5 5.5l-2.8 2.8M8.3 15.7l-2.8 2.8"
  }))
}));

/* ---------- PillButton ---------- */
function PillButton({
  variant = "primary",
  size = "md",
  children,
  icon,
  onClick,
  as = "button"
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: 999,
    transition: "all 220ms cubic-bezier(0.2,0.8,0.2,1)",
    textDecoration: "none"
  };
  const sizes = {
    sm: {
      padding: "9px 18px",
      fontSize: 11
    },
    md: {
      padding: "13px 24px",
      fontSize: 13
    },
    lg: {
      padding: "16px 32px",
      fontSize: 14
    }
  };
  const variants = {
    primary: {
      background: "var(--wf-dusk)",
      color: "#fff"
    },
    accent: {
      background: "var(--wf-dawn)",
      color: "var(--wf-midnight)"
    },
    outline: {
      background: "transparent",
      color: "var(--wf-midnight)",
      boxShadow: "inset 0 0 0 1.5px var(--wf-midnight)"
    },
    ghost: {
      background: "transparent",
      color: "var(--wf-midnight)"
    },
    sale: {
      background: "var(--wf-sun-candy)",
      color: "#fff"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    },
    onClick: onClick
  }, children, icon);
}

/* ---------- Tag / capsule ---------- */
function Tag({
  tone = "promo",
  children
}) {
  const tones = {
    promo: {
      background: "var(--wf-sun-candy)",
      color: "#fff"
    },
    new: {
      background: "var(--wf-midnight)",
      color: "var(--wf-milky)"
    },
    off: {
      background: "var(--wf-dusk)",
      color: "#fff"
    },
    dawn: {
      background: "var(--wf-5am)",
      color: "var(--wf-midnight)"
    },
    dusk: {
      background: "var(--wf-6pm)",
      color: "var(--wf-midnight)"
    },
    sage: {
      background: "var(--wf-pastel-sage)",
      color: "var(--wf-midnight)"
    },
    outline: {
      background: "transparent",
      color: "var(--wf-midnight)",
      boxShadow: "inset 0 0 0 1.5px var(--wf-midnight)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.04em",
      fontFamily: "var(--font-display)",
      ...tones[tone]
    }
  }, children);
}

/* ---------- AnnouncementBar ---------- */
function AnnouncementBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--wf-sun-candy)",
      color: "#fff",
      padding: "10px 24px",
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Wake up & smell the savings \xA0\xB7\xA0 Up to 50% off + extra 10% with code ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, "SLEEPWELL"));
}

/* ---------- NavBar ---------- */
function NavBar({
  cartCount = 2,
  onNav
}) {
  const nav = ["Mattress", "Beds", "Sofas", "Wardrobes", "Study", "Dining", "Decor", "Sale"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(243, 240, 233, 0.88)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(25,24,57,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "14px 28px",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav("home"),
    style: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wakefit-logo-purple.svg",
    alt: "Wakefit",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      flex: 1
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    onClick: () => onNav && onNav("listing"),
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 13,
      fontWeight: 500,
      color: n === "Sale" ? "var(--wf-sun-candy)" : "var(--wf-midnight)",
      textDecoration: "none",
      cursor: "pointer",
      letterSpacing: "0.01em"
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "#fff",
      borderRadius: 999,
      padding: "8px 14px",
      minWidth: 240,
      boxShadow: "inset 0 0 0 1px rgba(25,24,57,0.1)"
    }
  }, /*#__PURE__*/React.createElement(IconSearch, {
    size: 16,
    stroke: "var(--wf-carbon)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--fg-3)"
    }
  }, "Search mattresses, sofas\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btnIcon
  }, /*#__PURE__*/React.createElement(IconHeart, {
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    style: btnIcon
  }, /*#__PURE__*/React.createElement(IconUser, {
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav("cart"),
    style: {
      ...btnIcon,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IconCart, {
    size: 20
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      right: 2,
      background: "var(--wf-sun-candy)",
      color: "#fff",
      fontSize: 10,
      fontWeight: 700,
      width: 16,
      height: 16,
      borderRadius: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, cartCount)))));
}
const btnIcon = {
  width: 38,
  height: 38,
  borderRadius: 999,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--wf-midnight)"
};

/* ---------- Footer ---------- */
function Footer() {
  const cols = [{
    h: "Shop",
    items: ["Mattress", "Beds", "Sofas", "Wardrobes", "Study Tables", "Baby Cribs"]
  }, {
    h: "Support",
    items: ["Contact us", "Order tracking", "Returns & exchanges", "Warranty", "FAQs"]
  }, {
    h: "About",
    items: ["Our story", "Sleep Democracy", "Careers", "Stores", "Press"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--wf-midnight)",
      color: "var(--wf-milky)",
      padding: "56px 28px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wakefit-logo-peach.svg",
    alt: "Wakefit",
    style: {
      height: 32,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      maxWidth: 360
    }
  }, "Make the most", /*#__PURE__*/React.createElement("br", null), "of your home."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      fontSize: 13,
      color: "var(--wf-6pm)",
      letterSpacing: "0.06em"
    }
  }, "support@wakefit.co \xA0\xB7\xA0 +91 98833 33123")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--wf-dawn)",
      marginBottom: 18
    }
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 13,
      lineHeight: 2.1,
      color: "var(--wf-milky)",
      opacity: 0.9,
      cursor: "pointer"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 20,
      borderTop: "1px solid rgba(243,240,233,0.15)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      letterSpacing: "0.1em",
      color: "var(--wf-6pm)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Wakefit Innovations Pvt. Ltd."), /*#__PURE__*/React.createElement("div", null, "Bangalore \xB7 India"))));
}
Object.assign(window, {
  PillButton,
  Tag,
  AnnouncementBar,
  NavBar,
  Footer,
  IconSearch,
  IconUser,
  IconHeart,
  IconCart,
  IconMenu,
  IconArrow,
  IconShield,
  IconTruck,
  IconReturn,
  IconCard,
  IconSpark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/screens.jsx
try { (() => {
/* =========================================================
   Wakefit Web UI Kit — Screens
   ========================================================= */

const {
  useState: useState$
} = React;

/* ---------- Shared placeholder ---------- */
function ProductWell({
  bg = "var(--wf-5am)",
  label = "Product image",
  h = 220,
  ratio,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 16,
      height: h,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(25,24,57,0.4)",
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, label);
}

/* ---------- HERO (home) ---------- */
function HomeHero({
  onCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--wf-5am)",
      padding: "80px 28px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 48,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--wf-dusk)",
      fontWeight: 500
    }
  }, "D A W N \xA0 C O L L E C T I O N \xA0 \xB7  \xA0 A R R I V I N G"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: "clamp(52px, 6vw, 88px)",
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      color: "var(--wf-midnight)",
      margin: "18px 0 22px"
    }
  }, "Better sleep,", /*#__PURE__*/React.createElement("br", null), "for a better you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--wf-carbon)",
      maxWidth: 460,
      marginBottom: 32
    }
  }, "Take a 100-day free trial with any mattress of your choice to find your perfect match. We believe in sleep democracy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PillButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onCTA && onCTA("listing"),
    icon: /*#__PURE__*/React.createElement(IconArrow, {
      size: 16
    })
  }, "Shop Mattresses"), /*#__PURE__*/React.createElement(PillButton, {
    variant: "outline",
    size: "lg"
  }, "Explore Now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(ProductWell, {
    bg: "transparent",
    h: 420,
    label: "Hero mattress",
    style: {
      background: "linear-gradient(180deg, rgba(72,48,140,0) 0%, rgba(72,48,140,0.08) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "promo"
  }, "100-night trial")))));
}

/* ---------- CATEGORY RAIL ---------- */
function CategoryRail({
  onCTA
}) {
  const cats = [{
    n: "Mattress",
    bg: "var(--wf-6pm)",
    ic: "∞"
  }, {
    n: "Beds",
    bg: "var(--wf-5am)",
    ic: "⊓"
  }, {
    n: "Sofas",
    bg: "var(--wf-pastel-sage)",
    ic: "⌐"
  }, {
    n: "Wardrobes",
    bg: "var(--wf-star-blue)",
    ic: "▯"
  }, {
    n: "Study",
    bg: "var(--wf-6pm)",
    ic: "⊤"
  }, {
    n: "Dining",
    bg: "var(--wf-5am)",
    ic: "○"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 28px",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontWeight: 500
    }
  }, "S H O P \xA0 B Y \xA0 R O O M"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 44,
      letterSpacing: "-0.01em",
      color: "var(--wf-midnight)",
      margin: "8px 0 0"
    }
  }, "Come home to your comfort\u2011zone.")), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 13,
      textDecoration: "underline",
      textUnderlineOffset: 4,
      color: "var(--wf-midnight)",
      fontFamily: "var(--font-display)",
      fontWeight: 500
    }
  }, "See all categories \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 14
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    onClick: () => onCTA && onCTA("listing"),
    style: {
      background: c.bg,
      borderRadius: 20,
      padding: 20,
      cursor: "pointer",
      aspectRatio: "1 / 1.1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform 220ms cubic-bezier(0.2,0.8,0.2,1)"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "translateY(-4px)",
    onMouseLeave: e => e.currentTarget.style.transform = "translateY(0)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      color: "var(--wf-midnight)",
      opacity: 0.55
    }
  }, c.ic), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--wf-midnight)"
    }
  }, c.n)))));
}

/* ---------- USP STRIP ---------- */
function USPStrip() {
  const items = [{
    ic: /*#__PURE__*/React.createElement(IconReturn, {
      size: 22,
      stroke: "var(--wf-dusk)"
    }),
    t: "100-night trial",
    s: "Free returns"
  }, {
    ic: /*#__PURE__*/React.createElement(IconTruck, {
      size: 22,
      stroke: "var(--wf-dusk)"
    }),
    t: "Doorstep delivery",
    s: "Pan-India"
  }, {
    ic: /*#__PURE__*/React.createElement(IconShield, {
      size: 22,
      stroke: "var(--wf-dusk)"
    }),
    t: "10-year warranty",
    s: "Assured"
  }, {
    ic: /*#__PURE__*/React.createElement(IconCard, {
      size: 22,
      stroke: "var(--wf-dusk)"
    }),
    t: "No-cost EMI",
    s: "0% interest"
  }, {
    ic: /*#__PURE__*/React.createElement(IconSpark, {
      size: 22,
      stroke: "var(--wf-dusk)"
    }),
    t: "Free installation",
    s: "At your doorstep"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "24px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      background: "#fff",
      borderRadius: 24,
      padding: "24px 16px",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 8,
      boxShadow: "0 4px 14px rgba(25,24,57,0.06)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: "var(--wf-5am)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, i.ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--wf-midnight)"
    }
  }, i.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginTop: 2
    }
  }, i.s))))));
}

/* ---------- PRODUCT GRID (listing) ---------- */
const PRODUCTS = [{
  id: "p1",
  cat: "Mattress",
  nm: "Orthopaedic Memory Foam",
  pr: 12240,
  ori: 15692,
  rt: 4.6,
  rv: 38214,
  bg: "var(--wf-5am)",
  tag: "-22%",
  tagTone: "off",
  tagline: "10 year warranty"
}, {
  id: "p2",
  cat: "Mattress",
  nm: "7-Zone Latex Mattress",
  pr: 24999,
  ori: 34999,
  rt: 4.7,
  rv: 12408,
  bg: "var(--wf-6pm)",
  tag: "100-night",
  tagTone: "new"
}, {
  id: "p3",
  cat: "Mattress",
  nm: "Dreampod Plush",
  pr: 18499,
  ori: 24999,
  rt: 4.5,
  rv: 8204,
  bg: "var(--wf-pastel-sage)",
  tag: "-26%",
  tagTone: "off"
}, {
  id: "p4",
  cat: "Sofa 3S",
  nm: "Sofa by day. Bed by night.",
  pr: 24999,
  ori: 32999,
  rt: 4.5,
  rv: 12902,
  bg: "var(--wf-star-blue)",
  tag: "Best seller",
  tagTone: "outline"
}, {
  id: "p5",
  cat: "Bed",
  nm: "Taurus Engineered Bed",
  pr: 19999,
  ori: 27999,
  rt: 4.4,
  rv: 4502,
  bg: "var(--wf-5am)",
  tag: "-29%",
  tagTone: "off"
}, {
  id: "p6",
  cat: "Wardrobe",
  nm: "3-Door Wardrobe",
  pr: 32999,
  ori: 42999,
  rt: 4.3,
  rv: 2201,
  bg: "var(--wf-6pm)",
  tag: "New",
  tagTone: "new"
}];
function ProductCard({
  p,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen && onOpen(p.id),
    style: {
      background: "#fff",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(25,24,57,0.06)",
      cursor: "pointer",
      transition: "box-shadow 220ms cubic-bezier(0.2,0.8,0.2,1), transform 220ms cubic-bezier(0.2,0.8,0.2,1)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "0 16px 32px rgba(25,24,57,0.12)";
      e.currentTarget.style.transform = "translateY(-3px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "0 2px 8px rgba(25,24,57,0.06)";
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 220,
      background: p.bg,
      display: "flex",
      alignItems: "flex-end",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: p.tagTone
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      background: "rgba(255,255,255,0.85)",
      borderRadius: 999,
      width: 34,
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconHeart, {
    size: 16,
    stroke: "var(--wf-midnight)"
  })), /*#__PURE__*/React.createElement(ProductWell, {
    bg: "transparent",
    h: 160,
    label: "",
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontFamily: "var(--font-display)",
      fontWeight: 500
    }
  }, p.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 17,
      color: "var(--wf-midnight)",
      margin: "6px 0 8px",
      letterSpacing: "-0.01em",
      lineHeight: 1.2
    }
  }, p.nm), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--wf-midnight)"
    }
  }, "\u20B9", p.pr.toLocaleString("en-IN")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-3)",
      textDecoration: "line-through"
    }
  }, "\u20B9", p.ori.toLocaleString("en-IN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wf-dusk)",
      fontSize: 12,
      fontWeight: 600
    }
  }, "\u2605 ", p.rt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)"
    }
  }, p.rv.toLocaleString("en-IN"), " reviews"))));
}

/* ---------- SALE RIBBON (home) ---------- */
function SaleRibbon({
  onCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "16px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      background: "var(--wf-midnight)",
      borderRadius: 28,
      padding: "48px 48px 52px",
      color: "var(--wf-milky)",
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--wf-dawn)",
      fontWeight: 500
    }
  }, "M E G A \xA0 S A L E"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 52,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      margin: "14px 0 14px"
    }
  }, "Wake up & smell", /*#__PURE__*/React.createElement("br", null), "the savings."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--wf-6pm)",
      fontSize: 15,
      maxWidth: 440,
      marginBottom: 24
    }
  }, "If you sleep on your discounts, you'll pay for it. Get up to 50% off sitewide + extra 10% with ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--wf-dawn)"
    }
  }, "SLEEPWELL"), "."), /*#__PURE__*/React.createElement(PillButton, {
    variant: "accent",
    size: "lg",
    onClick: () => onCTA && onCTA("listing"),
    icon: /*#__PURE__*/React.createElement(IconArrow, {
      size: 16
    })
  }, "Shop the sale")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      color: "var(--wf-dawn)",
      fontSize: 180,
      lineHeight: 0.85,
      letterSpacing: "-0.04em"
    }
  }, "50", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 72,
      verticalAlign: "top"
    }
  }, "%"))));
}

/* ---------- HOME SCREEN ---------- */
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HomeHero, {
    onCTA: onNav
  }), /*#__PURE__*/React.createElement(USPStrip, null), /*#__PURE__*/React.createElement(CategoryRail, {
    onCTA: onNav
  }), /*#__PURE__*/React.createElement(SaleRibbon, {
    onCTA: onNav
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 28px 96px",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontWeight: 500
    }
  }, "T R E N D I N G \xA0 N O W"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 44,
      letterSpacing: "-0.01em",
      color: "var(--wf-midnight)",
      margin: "8px 0 0"
    }
  }, "Sweet dreams are made of these.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, PRODUCTS.slice(0, 3).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: () => onNav("detail")
  })))));
}

/* ---------- LISTING SCREEN ---------- */
function ListingScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "48px 28px 96px",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)",
      letterSpacing: "0.04em",
      marginBottom: 12
    }
  }, "Home / Mattress"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 52,
      letterSpacing: "-0.01em",
      color: "var(--wf-midnight)",
      margin: 0
    }
  }, "Mattresses"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-3)",
      marginTop: 8,
      fontSize: 14
    }
  }, "112 products \xB7 100-night trial on every order")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Filter"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Sort: Popular"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Comfort",
    items: ["Plush", "Medium", "Firm", "Ortho"],
    selected: ["Medium", "Ortho"]
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Size",
    items: ["Single", "Double", "Queen", "King"],
    selected: ["Queen"]
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Material",
    items: ["Memory foam", "Latex", "Spring", "Foam"],
    selected: []
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Price",
    items: ["Under ₹10k", "₹10–20k", "₹20–35k", "₹35k+"],
    selected: ["₹10–20k"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: () => onNav("detail")
  })))));
}
function FilterGroup({
  title,
  items,
  selected
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontWeight: 500,
      marginBottom: 12
    }
  }, title), items.map(i => {
    const sel = selected.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "6px 0",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 14,
        cursor: "pointer",
        color: "var(--wf-midnight)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: 4,
        border: "1.5px solid rgba(25,24,57,0.3)",
        background: sel ? "var(--wf-dusk)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 10
      }
    }, sel ? "✓" : ""), i);
  }));
}

/* ---------- DETAIL SCREEN ---------- */
function DetailScreen({
  onNav,
  onAddCart
}) {
  const [size, setSize] = useState$("Queen");
  const [thick, setThick] = useState$('6"');
  const p = PRODUCTS[0];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "36px 28px 96px",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)",
      marginBottom: 20
    }
  }, "Home / Mattress / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wf-midnight)"
    }
  }, p.nm)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.bg,
      borderRadius: 28,
      height: 520,
      padding: 24,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 20
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "promo"
  }, "Save \u20B93,452")), /*#__PURE__*/React.createElement(ProductWell, {
    bg: "transparent",
    label: "Mattress hero image",
    h: 472,
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 12
    }
  }, [p.bg, "var(--wf-6pm)", "var(--wf-pastel-sage)", "var(--wf-star-blue)"].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 80,
      background: b,
      borderRadius: 12,
      border: i === 0 ? "2px solid var(--wf-dusk)" : "2px solid transparent"
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontWeight: 500
    }
  }, p.cat), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 40,
      letterSpacing: "-0.01em",
      lineHeight: 1.05,
      margin: "8px 0 10px",
      color: "var(--wf-midnight)"
    }
  }, p.nm), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-3)",
      fontSize: 15,
      marginBottom: 18
    }
  }, "Designed to give you a good night's hug."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 34,
      color: "var(--wf-midnight)"
    }
  }, "\u20B9", p.pr.toLocaleString("en-IN")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--fg-3)",
      textDecoration: "line-through"
    }
  }, "MRP \u20B9", p.ori.toLocaleString("en-IN")), /*#__PURE__*/React.createElement(Tag, {
    tone: "off"
  }, "22% off")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--wf-dusk)",
      fontSize: 13,
      marginBottom: 24
    }
  }, "Inclusive of all taxes \xB7 Our lowest price"), /*#__PURE__*/React.createElement(PickerRow, {
    label: "Size",
    options: ["Single", "Double", "Queen", "King"],
    value: size,
    onChange: setSize
  }), /*#__PURE__*/React.createElement(PickerRow, {
    label: "Thickness",
    options: ['5"', '6"', '8"', '10"'],
    value: thick,
    onChange: setThick
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      margin: "20px 0 28px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "dawn"
  }, "Breathable fabric"), /*#__PURE__*/React.createElement(Tag, {
    tone: "dusk"
  }, "7-zone spine alignment"), /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, "Hypoallergenic"), /*#__PURE__*/React.createElement(Tag, {
    tone: "dawn"
  }, "Termite-resistant")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PillButton, {
    variant: "primary",
    size: "lg",
    onClick: onAddCart
  }, "Add to cart"), /*#__PURE__*/React.createElement(PillButton, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav("cart")
  }, "Buy it now")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(IconReturn, {
      size: 18,
      stroke: "var(--wf-dusk)"
    }),
    t: "100-night free trial",
    s: "Don't like it? Free return, no questions asked."
  }), /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(IconShield, {
      size: 18,
      stroke: "var(--wf-dusk)"
    }),
    t: "10-year warranty",
    s: "Assured by Wakefit directly."
  }), /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(IconTruck, {
      size: 18,
      stroke: "var(--wf-dusk)"
    }),
    t: "Delivery in 4\u20137 days",
    s: "To 560029 (Bangalore). Free."
  }), /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(IconCard, {
      size: 18,
      stroke: "var(--wf-dusk)"
    }),
    t: "No-cost EMI",
    s: "From \u20B92,040/mo \xB7 6 months."
  })))));
}
function PickerRow({
  label,
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontWeight: 500,
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, options.map(o => {
    const sel = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => onChange(o),
      style: {
        padding: "10px 18px",
        borderRadius: 999,
        border: "1.5px solid",
        borderColor: sel ? "var(--wf-dusk)" : "rgba(25,24,57,0.18)",
        background: sel ? "var(--wf-dusk)" : "transparent",
        color: sel ? "#fff" : "var(--wf-midnight)",
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer"
      }
    }, o);
  })));
}
function InfoRow({
  icon,
  t,
  s
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      padding: "12px 14px",
      background: "#fff",
      borderRadius: 14,
      boxShadow: "0 1px 2px rgba(25,24,57,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: "var(--wf-5am)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--wf-midnight)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)",
      lineHeight: 1.4
    }
  }, s)));
}

/* ---------- CART SCREEN ---------- */
function CartScreen({
  onNav,
  cart
}) {
  const subtotal = cart.reduce((s, c) => s + c.pr * c.q, 0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "48px 28px 96px",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 52,
      letterSpacing: "-0.01em",
      color: "var(--wf-midnight)",
      margin: "0 0 28px"
    }
  }, "Your cart"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, cart.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      background: "#fff",
      borderRadius: 20,
      padding: 16,
      display: "grid",
      gridTemplateColumns: "140px 1fr auto",
      gap: 16,
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(25,24,57,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: c.bg,
      borderRadius: 14,
      height: 110
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--fg-3)"
    }
  }, c.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: 17,
      color: "var(--wf-midnight)",
      marginTop: 4
    }
  }, c.nm), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-3)",
      marginTop: 2
    }
  }, "Queen \xB7 6\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      marginTop: 10,
      border: "1.5px solid rgba(25,24,57,0.15)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: qtyBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 16px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      minWidth: 30,
      textAlign: "center"
    }
  }, c.q), /*#__PURE__*/React.createElement("button", {
    style: qtyBtn
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--wf-midnight)"
    }
  }, "\u20B9", (c.pr * c.q).toLocaleString("en-IN")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)",
      textDecoration: "line-through"
    }
  }, "\u20B9", (c.ori * c.q).toLocaleString("en-IN")))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "#fff",
      borderRadius: 20,
      padding: 24,
      height: "fit-content",
      boxShadow: "0 2px 8px rgba(25,24,57,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      fontWeight: 500
    }
  }, "Order summary"), /*#__PURE__*/React.createElement(SumRow, {
    l: "Subtotal",
    v: `₹${subtotal.toLocaleString("en-IN")}`
  }), /*#__PURE__*/React.createElement(SumRow, {
    l: "Shipping",
    v: "Free"
  }), /*#__PURE__*/React.createElement(SumRow, {
    l: "SLEEPWELL (10%)",
    v: `–₹${Math.round(subtotal * 0.1).toLocaleString("en-IN")}`,
    strong: true,
    accent: true
  }), /*#__PURE__*/React.createElement("hr", {
    style: {
      margin: "14px 0",
      border: 0,
      borderTop: "1px solid var(--line)"
    }
  }), /*#__PURE__*/React.createElement(SumRow, {
    l: "Total",
    v: `₹${Math.round(subtotal * 0.9).toLocaleString("en-IN")}`,
    strong: true,
    big: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: "var(--wf-5am)",
      borderRadius: 12,
      padding: "10px 14px",
      fontSize: 12,
      color: "var(--wf-midnight)"
    }
  }, "\uD83D\uDD50 Ships in 4\u20137 days to 560029 \xB7 Free installation included"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(PillButton, {
    variant: "primary",
    size: "lg"
  }, "Checkout securely")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 11,
      color: "var(--fg-3)",
      textAlign: "center"
    }
  }, "Or pay in 6 months, no cost EMI from \u20B91,836"))));
}
const qtyBtn = {
  width: 32,
  height: 32,
  border: 0,
  background: "transparent",
  fontSize: 18,
  cursor: "pointer",
  color: "var(--wf-midnight)"
};
function SumRow({
  l,
  v,
  strong,
  big,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 12,
      fontFamily: big ? "var(--font-display)" : undefined,
      fontSize: big ? 22 : 14,
      fontWeight: strong ? 600 : 400,
      color: accent ? "var(--wf-sun-candy)" : "var(--wf-midnight)"
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, v));
}
Object.assign(window, {
  HomeScreen,
  ListingScreen,
  DetailScreen,
  CartScreen,
  ProductCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/screens.jsx", error: String((e && e.message) || e) }); }

})();
