exports.getImage = function(msg) {
  /*
  * icons should be 24x24px or less with 1bpp colors and 'Transparency to Color'
  * http://www.espruino.com/Image+Converter
  */
  if (msg.img) return atob(msg.img);
  const s = (("string"=== typeof msg) ? msg : (msg.src || "")).toLowerCase();
  if (s=="airbnb") return atob("GBgBAAAAAAAAAAAAADwAAH4AAGYAAMMAAIEAAYGAAYGAAzzAA2bABmZgBmZgDGYwDDwwCDwQCBgQDDwwB+fgA8PAAAAAAAAAAAAA");
  if (s=="alarm" || s =="alarmclockreceiver") return atob("GBjBAP////8AAAAAAAACAEAHAOAefng5/5wTgcgHAOAOGHAMGDAYGBgYGBgYGBgYGBgYDhgYBxgMATAOAHAHAOADgcAB/4AAfgAAAAAAAAA=");
  if (s=="bibel") return atob("GBgBAAAAA//wD//4D//4H//4H/f4H/f4H+P4H4D4H4D4H/f4H/f4H/f4H/f4H/f4H//4H//4H//4GAAAEAAAEAAACAAAB//4AAAA");
  if (s=="bring") return atob("GBgBAAAAAAAAAAAAAAAAAHwAAFoAAf+AA/+AA/+AA/+AA/eAA+eAA0+AAx+AA7+AA/+AA//AA/+AAf8AAAIAAAAAAAAAAAAAAAAA");
  if (s=="calendar" || s=="etar") return atob("GBiBAAAAAAAAAAAAAA//8B//+BgAGBgAGBgAGB//+B//+B//+B9m2B//+B//+Btm2B//+B//+Btm+B//+B//+A//8AAAAAAAAAAAAA==");
  if (s=="corona-warn") return atob("GBgBAAAAABwAAP+AAf/gA//wB/PwD/PgDzvAHzuAP8EAP8AAPAAAPMAAP8AAH8AAHzsADzuAB/PAB/PgA//wAP/gAH+AAAwAAAAA");
  if (s=="discord") return atob("GBgBAAAAAAAAAAAAAIEABwDgDP8wH//4H//4P//8P//8P//8Pjx8fhh+fzz+f//+f//+e//ePH48HwD4AgBAAAAAAAAAAAAAAAAA");
  if (s=="facebook" || s=="messenger") return atob("GBiBAAAAAAAAAAAYAAD/AAP/wAf/4A/48A/g8B/g+B/j+B/n+D/n/D8A/B8A+B+B+B/n+A/n8A/n8Afn4APnwADnAAAAAAAAAAAAAA==");
  if (s=="gmx") return atob("GBgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEJmfmd8Zuc85v847/88Z9s8fttmHIHiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  if (s=="google") return atob("GBiBAAAAAAD/AAP/wAf/4A/D4B8AwDwAADwAAHgAAHgAAHAAAHAH/nAH/nAH/ngH/ngAHjwAPDwAfB8A+A/D8Af/4AP/wAD/AAAAAA==");
  if (s=="google home") return atob("GBiCAAAAAAAAAAAAAAAAAAAAAoAAAAAACqAAAAAAKqwAAAAAqroAAAACquqAAAAKq+qgAAAqr/qoAACqv/6qAAKq//+qgA6r///qsAqr///6sAqv///6sAqv///6sAqv///6sA6v///6sA6v///qsA6qqqqqsA6qqqqqsA6qqqqqsAP7///vwAAAAAAAAAAAAAAAAA=="); // 2 bit unpaletted
  if (s=="home assistant") return atob("FhaBAAAAAADAAAeAAD8AAf4AD/3AfP8D7fwft/D/P8ec572zbzbNsOEhw+AfD8D8P4fw/z/D/P8P8/w/z/AAAAA=");
  if (s=="instagram") return atob("GBiBAAAAAAAAAAAAAAAAAAP/wAYAYAwAMAgAkAh+EAjDEAiBEAiBEAiBEAiBEAjDEAh+EAgAEAwAMAYAYAP/wAAAAAAAAAAAAAAAAA==");
  if (s=="kalender") return atob("GBgBBgBgBQCgff++RQCiRgBiQAACf//+QAACQAACR//iRJkiRIEiR//iRNsiRIEiRJkiR//iRIEiRIEiR//iQAACQAACf//+AAAA");
  if (s=="lieferando") return atob("GBgBABgAAH5wAP9wAf/4A//4B//4D//4H//4P/88fV8+fV4//V4//Vw/HVw4HVw4HBg4HBg4HBg4HDg4Hjw4Hj84Hj44Hj44Hj44");
  if (s=="mattermost") return atob("GBgBAAAAAPAAA+EAB4MADgcYHAcYOA8MOB8OeD8GcD8GcH8GcD8HcD8HeBwHeAAOfAAOfgAePwA8P8D8H//4D//wB//gAf/AAH4A");
  if (s=="n26") return atob("GBgBAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAOIAAOIAAPIAANoAANoAAM4AAMYAAMYAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAA");
  if (s=="nextbike") return atob("GBgBAAAAAAAAAAAAAAAAAAAAAACAfgDAPwDAP4HAH4N4H8f8D82GMd8CMDsDMGMDMGGGGMHOD4D8AAAAAAAAAAAAAAAAAAAAAAAA");
  if (s=="nina") return atob("GBgBAAAABAAQCAAICAAIEAAEEgAkJAgSJBwSKRxKSj4pUn8lVP+VVP+VUgAlSgApKQBKJAASJAASEgAkEAAECAAICAAIBAAQAAAA");
  if (s=="outlook mail") return atob("HBwBAAAAAAAAAAAIAAAfwAAP/gAB/+AAP/5/A//v/D/+/8P/7/g+Pv8Dye/gPd74w5znHDnOB8Oc4Pw8nv/Dwe/8Pj7/w//v/D/+/8P/7/gf/gAA/+AAAfwAAACAAAAAAAAAAAA=");
  if (s=="paypal") return atob("GBgBAAAAAAAAAAAAAf+AAf/AAf/gA//gA//gA//wA//wA//wA//wB//wB//wB//gB/+AB/gAB/gAB/gAAPgAAPgAAAAAAAAAAAAA");
  if (s=="phone") return atob("FxeBABgAAPgAAfAAB/AAD+AAH+AAP8AAP4AAfgAA/AAA+AAA+AAA+AAB+AAB+AAB+OAB//AB//gB//gA//AA/8AAf4AAPAA=");
  if (s=="post & dhl") return atob("GBgBAPgAE/5wMwZ8NgN8NgP4NgP4HgP4HgPwDwfgD//AB/+AAf8AAAAABs7AHcdgG4MwAAAAGESAFESAEkSAEnyAEkSAFESAGETw");
  if (s=="signal") return atob("GBgBAAAAAGwAAQGAAhggCP8QE//AB//oJ//kL//wD//0D//wT//wD//wL//0J//kB//oA//ICf8ABfxgBYBAADoABMAABAAAAAAA");
  if (s=="skype") return atob("GhoBB8AAB//AA//+Af//wH//+D///w/8D+P8Afz/DD8/j4/H4fP5/A/+f4B/n/gP5//B+fj8fj4/H8+DB/PwA/x/A/8P///B///gP//4B//8AD/+AAA+AA==");
  if (s=="slack") return atob("GBiBAAAAAAAAAABAAAHvAAHvAADvAAAPAB/PMB/veD/veB/mcAAAABzH8B3v+B3v+B3n8AHgAAHuAAHvAAHvAADGAAAAAAAAAAAAAA==");
  if (s=="snapchat") return atob("GBgBAAAAAAAAAH4AAf+AAf+AA//AA//AA//AA//AA//AH//4D//wB//gA//AB//gD//wH//4f//+P//8D//wAf+AAH4AAAAAAAAA");
  if (s=="steam") return atob("GBgBAAAAAAAAAAAAAAAAAAAAAAfgAAwwAAvQABvQABvQADvQgDww4H/g+f8A/zwAf9gAH9AAB8AAACAAAcAAAAAAAAAAAAAAAAAA");
  if (s=="teams") return atob("GBgBAAAAAAAAAAQAAB4AAD8IAA8cP/M+f/scf/gIeDgAfvvefvvffvvffvvffvvff/vff/veP/PeAA/cAH/AAD+AAD8AAAQAAAAA");
  if (s=="telegram" || s=="telegram foss") return atob("GBiBAAAAAAAAAAAAAAAAAwAAHwAA/wAD/wAf3gD/Pgf+fh/4/v/z/P/H/D8P/Acf/AM//AF/+AF/+AH/+ADz+ADh+ADAcAAAMAAAAA==");
  if (s=="threema") return atob("GBjB/4Yx//8AAAAAAAAAAAAAfgAB/4AD/8AH/+AH/+AP//AP2/APw/APw/AHw+AH/+AH/8AH/4AH/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  if (s=="to do" || s=="opentasks") return atob("GBgBAAAAAAAAAAAwAAB4AAD8AAH+AAP/DAf/Hg//Px/+f7/8///4///wf//gP//AH/+AD/8AB/4AA/wAAfgAAPAAAGAAAAAAAAAA");
  if (s=="twitch") return atob("GBgBH//+P//+P//+eAAGeAAGeAAGeDGGeDOGeDOGeDOGeDOGeDOGeDOGeAAOeAAOeAAcf4/4f5/wf7/gf//Af/+AA/AAA+AAAcAA");
  if (s=="twitter") return atob("GhYBAABgAAB+JgA/8cAf/ngH/5+B/8P8f+D///h///4f//+D///g///wD//8B//+AP//gD//wAP/8AB/+AB/+AH//AAf/AAAYAAA");
  if (s=="warnapp") return atob("GBgBAAAAAAAAAAAAAH4AAP8AA//AA//AD//gP//gf//4f//+/+P+/8H//8n//4n/fxh/fzg+Pj88Dn44AA4AAAwAAAwAAAgAAAAA");
  if (s=="whatsapp") return atob("GBiBAAB+AAP/wAf/4A//8B//+D///H9//n5//nw//vw///x///5///4///8e//+EP3/APn/wPn/+/j///H//+H//8H//4H//wMB+AA==");
  if (s=="wordfeud") return atob("GBgCWqqqqqqlf//////9v//////+v/////++v/////++v8///Lu+v8///L++v8///P/+v8v//P/+v9v//P/+v+fx/P/+v+Pk+P/+v/PN+f/+v/POuv/+v/Ofdv/+v/NvM//+v/I/Y//+v/k/k//+v/i/w//+v/7/6//+v//////+v//////+f//////9Wqqqqqql");
  if (s=="youtube" || s=="newpipe") return atob("GBgBAAAAAAAAAAAAAAAAAf8AH//4P//4P//8P//8P5/8P4/8f4P8f4P8P4/8P5/8P//8P//8P//4H//4Af8AAAAAAAAAAAAAAAAA");
  if (msg.id=="music") return atob("FhaBAH//+/////////////h/+AH/4Af/gB/+H3/7/f/v9/+/3/7+f/vB/w8H+Dwf4PD/x/////////////3//+A=");
  // if (s=="sms message" || s=="mail" || s=="gmail") // .. default icon (below)
  return atob("FhKBAH//+P//yf/+c//z5/+fz/z/n+f/Pz/+ef/8D///////////////////////f//4///A");
};

exports.getColor = function(msg,options) {
  options = options||{};
  var st = options.settings || require('Storage').readJSON("messages.settings.json", 1) || {};
  if (options.default===undefined) options.default=g.theme.fg;
  if (st.iconColorMode == 'mono') return options.default;
  const s = (("string"=== typeof msg) ? msg : (msg.src || "")).toLowerCase();
  return {
    // generic colors, using B2-safe colors
    // DO NOT USE BLACK OR WHITE HERE, just leave the declaration out and then the theme's fg color will be used
    "airbnb": "#f00",
    "mail": "#ff0",
    "music": "#f0f",
    "phone": "#0f0",
    "sms message": "#0ff",
    // brands, according to https://www.schemecolor.com/?s (picking one for multicolored logos)
    // all dithered on B2, but we only use the color for the icons.  (Could maybe pick the closest 3-bit color for B2?)
    "bibel": "#54342c",
    "bring": "#455a64",
    "discord": "#738adb",
    "etar": "#36a18b",
    "facebook": "#4267b2",
    "gmail": "#ea4335",
    "gmx": "#1c449b",
    "google": "#4285F4",
    "google home": "#fbbc05",
// "home assistant": "#41bdf5", // ha-blue is #41bdf5, but that's the background
    "instagram": "#dd2a7b",
    "lieferando": "#ee5c00",
    "messenger": "#0078ff",
    "mattermost": "#00f",
    "n26": "#36a18b",
    "nextbike": "#00f",
    "newpipe": "#f00",
    "nina": "#e57004",
    "opentasks": "#409f8f",
    "outlook mail": "#0072c6",
    "paypal": "#003087",
    "post & dhl": "#f2c101",
    "signal": "#00f",
    "skype": "#00aff0",
    "slack": "#e51670",
    "snapchat": "#ff0",
    "steam": "#171a21",
    "teams": "#464eb8",
    "telegram": "#0088cc",
    "telegram foss": "#0088cc",
    "to do": "#3999e5",
    "twitch": "#6441A4",
    "twitter": "#1da1f2",
    "whatsapp": "#4fce5d",
    "wordfeud": "#e7d3c7",
    "youtube": "#f00",
  }[s]||options.default;
};
