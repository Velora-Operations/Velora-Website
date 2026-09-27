/* Velora Master Data — edit prices, sizes and product information here. */
window.VELORA_DATA = (() => {
const P = {
  "72x30": {4:4434,5:5008,6:5605,8:6669}, "72x36": {4:5185,5:5866,6:6579,8:7859},
  "72x48": {4:6606,5:7512,6:8451,8:10170}, "72x60": {4:8103,5:9236,6:10398,8:12558},
  "72x72": {4:9564,5:10917,6:12311,8:14903},
  "75x30": {4:4535,5:5128,6:5753,8:6863}, "75x36": {4:5305,5:6014,6:6756,8:8095},
  "75x48": {4:6765,5:7709,6:8688,8:10474}, "75x60": {4:8302,5:9476,6:10691,8:12934},
  "75x72": {4:9800,5:11207,6:12655,8:15359},
  "78x30": {4:4641,5:5259,6:5908,8:7057}, "78x36": {4:5426,5:6166,6:6936,8:8325},
  "78x48": {4:6920,5:7898,6:8919,8:10780}, "78x60": {4:8491,5:9717,6:10980,8:13317},
  "78x72": {4:10030,5:11496,6:13001,8:15814}
};
const LEN = [72, 75, 78], WID = [30, 36, 48, 60, 72], THK = [4, 5, 6, 8];
const fmt = n => "\u20b9" + n.toLocaleString("en-IN");
const X = "\u00d7";

function pillow(fill, big, price) {
  return big
    ? { fill, size: "17 " + X + " 27 inch", lenLabel: "27 in", widLabel: "17 in", ratio: "27 / 17", imgW: "100%", stage: "#f3f0e9",
        fiber: "15" + X + "64mm " + fill.toLowerCase() + " siliconized", price: fmt(price), alt: fill + " pillow 17x27" }
    : { fill, size: "16 " + X + " 24 inch", lenLabel: "24 in", widLabel: "16 in", ratio: "24 / 16", imgW: "88%", stage: "#e9e5da",
        fiber: "15" + X + "64mm " + fill.toLowerCase() + " siliconized", price: fmt(price), alt: fill + " pillow 16x24" };
}

const FAMILIES0 = [
  { no: "Family 01", name: "Poly cotton — white with stripes", fabric: "Poly cotton stripe", tint: "#dae5ee", stripe: true, knit: false,
    items: [pillow("Conjugate", true, 319), pillow("Conjugate", false, 289), pillow("Hollow", true, 299), pillow("Hollow", false, 259)] },
  { no: "Family 02", name: "Textured knit — double colour", fabric: "Textured knit, double colour", tint: "#f6d2c8", stripe: false, knit: true,
    items: [pillow("Conjugate", true, 359), pillow("Conjugate", false, 319), pillow("Hollow", true, 329), pillow("Hollow", false, 299)] }
];

const FAMILIES = FAMILIES0.map((f, i) => ({ ...f, split: "full" }));


  return { P, LEN, WID, THK, fmt, X, FAMILIES };
})();
