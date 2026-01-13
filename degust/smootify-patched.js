const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index.BeqDsNX5.js",
      "./animations.BKcWgDdz.js",
      "./history.DcHWndFC.js",
      "./index.CtY1Vlek.js",
      "../css/index2.css",
      "./index.D9FpL3Sf.js",
      "../css/index3.css",
      "./index.RAwXw8B0.js",
      "../css/index4.css",
      "./index.oLzKeBr2.js",
      "../css/index5.css",
      "./index.8w28wUEI.js",
      "./webflow-form.RJhHwOYC.js",
      "../css/index6.css",
      "./index.CFnnzxFw.js",
      "./wishlist-toggle.CHSpptS0.js",
      "../css/wishlist-toggle.css",
      "./index.DvyL1BIv.js",
      "./index.JoAArBaS.js",
      "./style.CuG-70Uy.js",
      "../css/style.css",
      "./index.oxbpll45.js",
      "./index.B6IHhWVl.js",
      "./index.Dq8-kq8J.js",
      "../css/index7.css",
      "./index.DpV46Msm.js",
      "./startCase.CyNnxq5h.js",
      "./product-wrapper.C2adtZyt.js",
      "./general.BYak0XSB.js",
      "../css/general.css",
      "./index.BzGkKh7y.js",
      "./utils.BntT9OBE.js",
      "./file-input.NRzV0WbT.js",
    ])
) => i.map((i) => d[i]);
var Cr = Object.defineProperty;
var tt = (t) => {
  throw TypeError(t);
};
var vr = (t, e, r) =>
  e in t
    ? Cr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var b = (t, e, r) => vr(t, typeof e != "symbol" ? e + "" : e, r),
  Ee = (t, e, r) => e.has(t) || tt("Cannot " + r);
var se = (t, e, r) => (
    Ee(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  Te = (t, e, r) =>
    e.has(t)
      ? tt("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, r),
  rt = (t, e, r, s) => (
    Ee(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r
  ),
  le = (t, e, r) => (Ee(t, e, "access private method"), r);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = r(n);
    fetch(n.href, o);
  }
})();
const Ar = "modulepreload",
  _r = function (t, e) {
    return new URL(t, e).href;
  },
  st = {},
  v = function (e, r, s) {
    let n = Promise.resolve();
    if (r && r.length > 0) {
      const a = document.getElementsByTagName("link"),
        i = document.querySelector("meta[property=csp-nonce]"),
        c =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      n = Promise.allSettled(
        r.map((u) => {
          if (((u = _r(u, s)), u in st)) return;
          st[u] = !0;
          const l = u.endsWith(".css"),
            p = l ? '[rel="stylesheet"]' : "";
          if (!!s)
            for (let y = a.length - 1; y >= 0; y--) {
              const g = a[y];
              if (g.href === u && (!l || g.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${p}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = l ? "stylesheet" : Ar),
            l || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = u),
            c && f.setAttribute("nonce", c),
            document.head.appendChild(f),
            l)
          )
            return new Promise((y, g) => {
              f.addEventListener("load", y),
                f.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${u}`))
                );
            });
        })
      );
    }
    function o(a) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = a), window.dispatchEvent(i), !i.defaultPrevented))
        throw a;
    }
    return n.then((a) => {
      for (const i of a || []) i.status === "rejected" && o(i.reason);
      return e().catch(o);
    });
  };
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (t) {
    var e = Date.now();
    return setTimeout(function () {
      t({
        didTimeout: !1,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - e));
        },
      });
    }, 1);
  };
window.cancelIdleCallback =
  window.cancelIdleCallback ||
  function (t) {
    clearTimeout(t);
  };
function Sr(t) {
  switch (typeof t) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return t.includes(".") || t.includes("[") || t.includes("]");
  }
}
function Ir(t) {
  var e;
  return typeof t == "string" || typeof t == "symbol"
    ? t
    : Object.is(
        (e = t == null ? void 0 : t.valueOf) == null ? void 0 : e.call(t),
        -0
      )
    ? "-0"
    : String(t);
}
function Er(t) {
  const e = [],
    r = t.length;
  if (r === 0) return e;
  let s = 0,
    n = "",
    o = "",
    a = !1;
  for (t.charCodeAt(0) === 46 && (e.push(""), s++); s < r; ) {
    const i = t[s];
    o
      ? i === "\\" && s + 1 < r
        ? (s++, (n += t[s]))
        : i === o
        ? (o = "")
        : (n += i)
      : a
      ? i === '"' || i === "'"
        ? (o = i)
        : i === "]"
        ? ((a = !1), e.push(n), (n = ""))
        : (n += i)
      : i === "["
      ? ((a = !0), n && (e.push(n), (n = "")))
      : i === "."
      ? n && (e.push(n), (n = ""))
      : (n += i),
      s++;
  }
  return n && e.push(n), e;
}
function pe(t, e, r) {
  if (t == null) return r;
  switch (typeof e) {
    case "string": {
      const s = t[e];
      return s === void 0 ? (Sr(e) ? pe(t, Er(e), r) : r) : s;
    }
    case "number":
    case "symbol": {
      typeof e == "number" && (e = Ir(e));
      const s = t[e];
      return s === void 0 ? r : s;
    }
    default: {
      if (Array.isArray(e)) return Tr(t, e, r);
      Object.is(e == null ? void 0 : e.valueOf(), -0)
        ? (e = "-0")
        : (e = String(e));
      const s = t[e];
      return s === void 0 ? r : s;
    }
  }
}
function Tr(t, e, r) {
  if (e.length === 0) return r;
  let s = t;
  for (let n = 0; n < e.length; n++) {
    if (s == null) return r;
    s = s[e[n]];
  }
  return s === void 0 ? r : s;
}
function ve(t, e, { signal: r, edges: s } = {}) {
  let n,
    o = null;
  const a = s != null && s.includes("leading"),
    i = s == null || s.includes("trailing"),
    c = () => {
      o !== null && (t.apply(n, o), (n = void 0), (o = null));
    },
    u = () => {
      i && c(), f();
    };
  let l = null;
  const p = () => {
      l != null && clearTimeout(l),
        (l = setTimeout(() => {
          (l = null), u();
        }, e));
    },
    d = () => {
      l !== null && (clearTimeout(l), (l = null));
    },
    f = () => {
      d(), (n = void 0), (o = null);
    },
    y = () => {
      d(), c();
    },
    g = function (...w) {
      if (r != null && r.aborted) return;
      (n = this), (o = w);
      const m = l == null;
      p(), a && m && c();
    };
  return (
    (g.schedule = p),
    (g.cancel = f),
    (g.flush = y),
    r == null || r.addEventListener("abort", f, { once: !0 }),
    g
  );
}
const Pr = new RegExp(
  "\\p{Lu}?\\p{Ll}+|[0-9]+|\\p{Lu}+(?!\\p{Ll})|\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|\\p{L}+",
  "gu"
);
function Lr(t) {
  return Array.from(t.match(Pr) ?? []);
}
function je(t) {
  return Lr(t)
    .map((r) => r.toLowerCase())
    .join("_");
}
function G(t) {
  return new Promise((e, r) => {
    (t.oncomplete = t.onsuccess = () => e(t.result)),
      (t.onabort = t.onerror = () => r(t.error));
  });
}
function qt(t, e) {
  let r;
  const s = () => {
    if (r) return r;
    const n = indexedDB.open(t);
    return (
      (n.onupgradeneeded = () => n.result.createObjectStore(e)),
      (r = G(n)),
      r.then(
        (o) => {
          o.onclose = () => (r = void 0);
        },
        () => {}
      ),
      r
    );
  };
  return (n, o) => s().then((a) => o(a.transaction(e, n).objectStore(e)));
}
let Pe;
function ee() {
  return Pe || (Pe = qt("keyval-store", "keyval")), Pe;
}
function $r(t, e = ee()) {
  return e("readonly", (r) => G(r.get(t)));
}
function Rr(t, e, r = ee()) {
  return r("readwrite", (s) => (s.put(e, t), G(s.transaction)));
}
function kr(t, e = ee()) {
  return e(
    "readwrite",
    (r) => (t.forEach((s) => r.put(s[1], s[0])), G(r.transaction))
  );
}
function qr(t, e = ee()) {
  return e("readwrite", (r) => (r.delete(t), G(r.transaction)));
}
function Dr(t, e = ee()) {
  return e(
    "readwrite",
    (r) => (t.forEach((s) => r.delete(s)), G(r.transaction))
  );
}
function xr(t, e) {
  return (
    (t.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    G(t.transaction)
  );
}
function Dt(t = ee()) {
  return t("readonly", (e) => {
    if (e.getAllKeys) return G(e.getAllKeys());
    const r = [];
    return xr(e, (s) => r.push(s.key)).then(() => r);
  });
}
const te = qt("smootify", "storefront"),
  _ = (t) => $r(t, te),
  S = (t) => qr(t, te),
  k = (t, e) => Rr(t, e, te),
  Le = async (t, e, r = 15) => (
    await k(t + "_expiration", Date.now() + r * 60 * 1e3), k(t, e)
  ),
  Or = async (t, e = 15) => {
    if (!t.length) return;
    const r = Date.now() + e * 60 * 1e3,
      s = t.map((n) => [n + "_expiration", r]);
    await kr(s, te);
  },
  Mr = async (t) => {
    const e = await _(t + "_expiration");
    return !e || Date.now() > e ? null : _(t);
  },
  Ur = async (t) => (await Dt(te)).filter((r) => r.toString().endsWith(t)),
  Nr = async (t) => (await Dt(te)).filter((r) => r.toString().startsWith(t)),
  Br = async () => {
    const t = await Nr("gid://shopify/Product/");
    Dr(t);
  },
  F = "fragment CartApiError on CartUserError { message field code } ",
  Ae = "quantityRule { increment maximum minimum }",
  q =
    "... on GenericFile { url alt } ... on Video { previewImage { url } sources { url format height mimeType width } } ... on MediaImage { alt image { url } }",
  $e = (t = "") =>
    `id quantity attributes { key value } cost { totalAmount { ...Money } subtotalAmount { ...Money } amountPerQuantity { ...Money } compareAtAmountPerQuantity { ...Money } } discountAllocations { discountedAmount { ...Money } ... on CartAutomaticDiscountAllocation { title } ... on CartCodeDiscountAllocation { code } ... on CartAutomaticDiscountAllocation { title } } sellingPlanAllocation { sellingPlan { name description id } priceAdjustments { compareAtPrice { ...Money } price { ...Money } } } merchandise { ... on ProductVariant { id ${Ae} quantityAvailable product { tags id title vendor handle featuredImage { url } ${t} } currentlyNotInStock availableForSale compareAtPrice { ...Money } price { ...Money } unitPrice { amount currencyCode } requiresShipping title image { id url altText width height } selectedOptions { name value } } }`,
  U = (t = "") =>
    `fragment Money on MoneyV2 { currencyCode amount } fragment CartLine on CartLine { ${$e(
      t
    )} } fragment ComponentCartLine on ComponentizableCartLine { ${$e(
      t
    )} lineComponents { ${$e(
      t
    )} } } fragment CartApiQuery on Cart { id checkoutUrl totalQuantity buyerIdentity { countryCode customer { id email firstName lastName displayName } email phone } lines(first: $numCartLines) { nodes { __typename ...CartLine ...ComponentCartLine } } cost { subtotalAmount { ...Money } totalAmount { ...Money } totalDutyAmount { ...Money } totalTaxAmount { ...Money } subtotalAmountEstimated totalTaxAmountEstimated } note attributes { key value } discountCodes { code applicable } appliedGiftCards { amountUsed { ...Money } balance { ...Money } id lastCharacters } discountAllocations { discountedAmount { ...Money } ... on CartAutomaticDiscountAllocation { title } ... on CartCodeDiscountAllocation { code } ... on CartAutomaticDiscountAllocation { title } } }`,
  jr = `fragment Product on Product { id title handle vendor variants(first: 1) { nodes { ...ProductVariant } } collections(first: 1) { nodes { title handle } } } fragment ProductVariant on ProductVariant { availableForSale currentlyNotInStock ${Ae} compareAtPrice { amount currencyCode } id image { url } price { amount currencyCode } }`,
  nt = (t = "", e = "", r = !0, s = !0, n = !1) => {
    let o = r
        ? 'dynamicProperties: metafield(namespace: "custom", key: "properties") { references(first: 100) { nodes { ... on Metaobject { images: field(key: "images") { references(first: 100) { nodes { ... on MediaImage { previewImage { originalSrc } } } } } fields { key value } } } } }'
        : "",
      a = s
        ? ` optionsMeta: metafield(namespace: "custom", key: "options") { references(first: 100) { nodes { ... on Metaobject { name: field(key: "name") { value }, image: field(key: "image") { reference { ... on MediaImage { previewImage { originalSrc } } } } color: field(key: "color") { value } description: field(key: "description") { value } fields { key value type reference { ${q} } references(first: 5) { nodes { ${q} } } } } } } }`
        : "",
      i = n
        ? ' combinations: metafield(namespace: "custom", key: "combinations") { references(first: 100) { nodes { ... on Metaobject { title: field(key: "title") { value }, image: field(key: "image") { reference { ... on MediaImage { previewImage { originalSrc } } } } variants: field(key: "variants") { references(first: 10) { nodes { ... on ProductVariant { id product { id } } } } } } } } }'
        : "",
      c = document.querySelector("store-availability")
        ? "storeAvailability(first: 2) { nodes { quantityAvailable available pickUpTime location { name address { latitude longitude formatted } id } } }"
        : "";
    return `fragment Product on Product { id title vendor handle isGiftCard totalInventory productType category { name } publishedAt ${t} ${o} ${a} ${i} descriptionHtml tags requiresSellingPlan collections(first: 5) { nodes { handle title image { url } } } media(first: 100) { nodes { id mediaContentType previewImage { url } ... on ExternalVideo { embedUrl } ... on MediaImage { image { url, altText } } ... on Model3d { alt sources { format url mimeType } presentation { asJson(format: MODEL_VIEWER) } } ... on Video { sources { format url mimeType width } } } } sellingPlanGroups(first: 100) { nodes { appName, name options { name values } sellingPlans(first: 100) { nodes { id name description options { name value } priceAdjustments { orderCount adjustmentValue { ... on SellingPlanFixedAmountPriceAdjustment { adjustmentAmount { amount } } ... on SellingPlanFixedPriceAdjustment { price { amount } } ... on SellingPlanPercentagePriceAdjustment { adjustmentPercentage } } } } } } } options { name values optionValues { id name swatch { color image { previewImage { url } } } } } variants(first: 250) { nodes { ...ProductVariant } } } fragment ProductVariant on ProductVariant { ${e} ${c} barcode availableForSale currentlyNotInStock sellingPlanAllocations(first: 100) { nodes { sellingPlan { id } } } ${Ae} compareAtPrice { amount currencyCode } id image { id url altText } price { amount currencyCode } quantityAvailable selectedOptions { name value } sku title weight weightUnit unitPrice { amount currencyCode } unitPriceMeasurement { measuredType quantityUnit quantityValue referenceUnit referenceValue } }`;
  },
  Fr = (t) =>
    `node(id: "${t}") { ... on ProductVariant { ${Ae} compareAtPrice { amount currencyCode } id image { id url altText } price { amount currencyCode } quantityAvailable selectedOptions { name value } sku title product { title handle } unitPrice { amount currencyCode } unitPriceMeasurement { measuredType quantityUnit quantityValue referenceUnit referenceValue } } }`;
var A = ((t) => (
  (t.productLoaded = "smootify:product_loaded"),
  (t.productExpiredLoad = "smootify:product_expired_load"),
  (t.addedToCart = "smootify:added_to_cart"),
  (t.removedFromCart = "smootify:removed_from_cart"),
  (t.cartUpdated = "smootify:cart_updated"),
  (t.apiLoaded = "smootify:loaded"),
  (t.errors = "smootify:errors"),
  (t.userAuthChange = "smootify:user_auth_change"),
  (t.filterInitialChange = "smootify:filter_initial_change"),
  (t.filterChanged = "smootify:filter_changed"),
  (t.sortChanged = "smootify:sort_changed"),
  (t.optionChanged = "smootify:changed_option"),
  (t.countryChanged = "smootify:changed_country"),
  (t.createdAddress = "smootify:created_address"),
  (t.wishlistChangedVariant = "smootify_wishlist:changed_variant"),
  (t.wishlistChangedVariantState = "smootify_wishlist:changed_variant_state"),
  (t.initiateCheckout = "smootify:initiate_checkout"),
  (t.wishlistChangedProduct = "smootify_wishlist:changed_product"),
  (t.wishlistChangedProductState = "smootify_wishlist:changed_product_state"),
  (t.colorPatterns = "smootify:color_patterns"),
  t
))(A || {});
let xt = new Map();
function I(t, e, r = document) {
  xt.set(t, e), r.dispatchEvent(new CustomEvent(t, { detail: e }));
}
function Wr(t, e, r, s = document) {
  s.addEventListener(t, (n) => {
    const o = n.detail;
    r(o) && e(o);
  });
}
function ot(t, e, r, s = document) {
  const n = (o) => {
    const a = o.detail;
    r(a) && (e(a), s.removeEventListener(t, n));
  };
  s.addEventListener(t, n);
}
function Ot(t, e, r = document) {
  r.addEventListener(
    t,
    (s) => {
      const n = s.detail;
      e(n);
    },
    { once: !0 }
  );
}
function Mt(t, e, r = document) {
  r.addEventListener(t, (s) => {
    const n = s.detail;
    e(n);
  });
}
function Vr(t, e, r = document) {
  const s = xt.get(t);
  s && e(s), Mt(t, e, r);
}
async function Hr() {
  const t = zr();
  return Ut(t);
}
async function Gr(t) {
  const e = await crypto.subtle.digest(
      { name: "SHA-256" },
      new TextEncoder().encode(t)
    ),
    r = Kr(e);
  return Ut(r);
}
function zr() {
  const t = new Uint8Array(32);
  return (
    crypto.getRandomValues(t), String.fromCharCode.apply(null, Array.from(t))
  );
}
function Ut(t) {
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Kr(t) {
  const e = new Uint8Array(t),
    r = Array.from(e);
  return String.fromCharCode(...r);
}
async function Qr() {
  const t = Date.now().toString(),
    e = Math.random().toString(36).substring(2);
  return t + e;
}
async function Jr(t) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let r = "";
  for (let s = 0; s < t; s++) {
    const n = Math.floor(Math.random() * e.length);
    r += e.charAt(n);
  }
  return r;
}
const Xr = { "content-type": "application/x-www-form-urlencoded" };
async function Yr(t, e, r) {
  try {
    const s = new URLSearchParams();
    s.append("grant_type", "authorization_code"),
      s.append("client_id", e),
      s.append("redirect_uri", r);
    const n = new URLSearchParams(window.location.search);
    s.append("code", n.get("code"));
    const o = localStorage.getItem("code-verifier");
    s.append("code_verifier", o);
    const a = await fetch(
        `https://shopify.com/authentication/${t}/oauth/token`,
        { method: "POST", headers: Xr, body: s }
      ),
      {
        access_token: i,
        expires_in: c,
        id_token: u,
        refresh_token: l,
      } = await a.json();
    return { access_token: i, expires_in: c, id_token: u, refresh_token: l };
  } catch {
    return null;
  }
}
async function Zr(t, e, r) {
  const s = new URL(`https://shopify.com/authentication/${t}/oauth/authorize`);
  s.searchParams.append("scope", "openid email customer-account-api:full"),
    s.searchParams.append("client_id", e),
    s.searchParams.append("response_type", "code"),
    r == "same-page" &&
      ((r = window.location.origin),
      localStorage.setItem("_passwordlessRedirect", window.location.href)),
    s.searchParams.append("redirect_uri", r);
  const n = await Qr();
  s.searchParams.append("state", n), await k("loginState", n);
  const o = await Jr(6);
  s.searchParams.append("nonce", o), await k("loginNonce", o);
  const a = await Hr(),
    i = await Gr(a);
  localStorage.setItem("code-verifier", a),
    s.searchParams.append("code_challenge", i),
    s.searchParams.append("code_challenge_method", "S256");
  const c = h.store.language;
  if (c) {
    let u = c.toLowerCase();
    u == "pt" && (u = `pt-${h.store.country || "PT"}`),
      u == "zh" && (u = `zh-${h.store.country || "CN"}`),
      [
        "en",
        "fr",
        "cs",
        "da",
        "de",
        "el",
        "es",
        "fi",
        "hi",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "ms",
        "nb",
        "nl",
        "pl",
        "pt-BR",
        "pt-PT",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh-CN",
        "zh-TW",
      ].includes(u) && s.searchParams.append("locale", u);
  }
  window.location.href = s.toString();
}
const Fe = new Map();
function es(t, e, r = -1) {
  const s = r == -1 ? r : Date.now() + r * 1e3;
  Fe.set(t, { value: e, ttl: s });
}
function ts(t) {
  if (Fe.has(t)) {
    const { value: e, ttl: r } = Fe.get(t);
    return r == -1 || Date.now() < r ? e : null;
  } else return null;
}
async function rs(t, e, r = -1) {
  const s = ts(t);
  if (s) return s;
  const n = await e();
  return es(t, n, r), n;
}
const _e = "GraphQL Client",
  at = 0,
  it = 3,
  Nt =
    "An error occurred while fetching from the API. Review 'graphQLErrors' for details.",
  Bt = "Response returned unexpected Content-Type:",
  jt =
    "An unknown error has occurred. The API did not return a data object or any errors in its response.",
  We = { json: "application/json", multipart: "multipart/mixed" },
  ct = "X-SDK-Variant",
  ut = "X-SDK-Version",
  ss = "shopify-graphql-client",
  ns = "1.3.2",
  Ft = 1e3,
  os = [429, 503],
  Wt = /@(defer)\b/i,
  lt = `\r
`,
  as = /boundary="?([^=";]+)"?/i,
  dt = lt + lt;
function V(t, e = _e) {
  return t.startsWith(`${e}`) ? t : `${e}: ${t}`;
}
function re(t) {
  return t instanceof Error ? t.message : JSON.stringify(t);
}
function Vt(t) {
  return t instanceof Error && t.cause ? t.cause : void 0;
}
function Ht(t) {
  return t.flatMap(({ errors: e }) => e ?? []);
}
function Gt({ client: t, retries: e }) {
  if (e !== void 0 && (typeof e != "number" || e < at || e > it))
    throw new Error(
      `${t}: The provided "retries" value (${e}) is invalid - it cannot be less than ${at} or greater than ${it}`
    );
}
function $(t, e) {
  return e &&
    (typeof e != "object" ||
      Array.isArray(e) ||
      (typeof e == "object" && Object.keys(e).length > 0))
    ? { [t]: e }
    : {};
}
function zt(t, e) {
  if (t.length === 0) return e;
  const s = { [t.pop()]: e };
  return t.length === 0 ? s : zt(t, s);
}
function Kt(t, e) {
  return Object.keys(e || {}).reduce(
    (r, s) =>
      (typeof e[s] == "object" || Array.isArray(e[s])) && t[s]
        ? ((r[s] = Kt(t[s], e[s])), r)
        : ((r[s] = e[s]), r),
    Array.isArray(t) ? [...t] : { ...t }
  );
}
function Qt([t, ...e]) {
  return e.reduce(Kt, { ...t });
}
function is({
  clientLogger: t,
  customFetchApi: e = fetch,
  client: r = _e,
  defaultRetryWaitTime: s = Ft,
  retriableCodes: n = os,
}) {
  const o = async (a, i, c) => {
    const u = i + 1,
      l = c + 1;
    let p;
    try {
      if (
        ((p = await e(...a)),
        t({
          type: "HTTP-Response",
          content: { requestParams: a, response: p },
        }),
        !p.ok && n.includes(p.status) && u <= l)
      )
        throw new Error();
      return p;
    } catch (d) {
      if (u <= l) {
        const f = p == null ? void 0 : p.headers.get("Retry-After");
        return (
          await cs(f ? parseInt(f, 10) : s),
          t({
            type: "HTTP-Retry",
            content: {
              requestParams: a,
              lastResponse: p,
              retryAttempt: i,
              maxRetries: c,
            },
          }),
          o(a, u, c)
        );
      }
      throw new Error(
        V(
          `${
            c > 0
              ? `Attempted maximum number of ${c} network retries. Last message - `
              : ""
          }${re(d)}`,
          r
        )
      );
    }
  };
  return o;
}
async function cs(t) {
  return new Promise((e) => setTimeout(e, t));
}
function us({
  headers: t,
  url: e,
  customFetchApi: r = fetch,
  retries: s = 0,
  logger: n,
}) {
  Gt({ client: _e, retries: s });
  const o = { headers: t, url: e, retries: s },
    a = ls(n),
    i = is({ customFetchApi: r, clientLogger: a, defaultRetryWaitTime: Ft }),
    c = ds(i, o),
    u = fs(c),
    l = bs(c);
  return { config: o, fetch: c, request: u, requestStream: l };
}
function ls(t) {
  return (e) => {
    t && t(e);
  };
}
async function Jt(t) {
  const { errors: e, data: r, extensions: s } = await t.json();
  return {
    ...$("data", r),
    ...$("extensions", s),
    headers: t.headers,
    ...(e || !r
      ? {
          errors: {
            networkStatusCode: t.status,
            message: V(e ? Nt : jt),
            ...$("graphQLErrors", e),
            response: t,
          },
        }
      : {}),
  };
}
function ds(t, { url: e, headers: r, retries: s }) {
  return async (n, o = {}) => {
    const {
        variables: a,
        headers: i,
        url: c,
        retries: u,
        keepalive: l,
        signal: p,
      } = o,
      d = JSON.stringify({ query: n, variables: a });
    Gt({ client: _e, retries: u });
    const f = Object.entries({ ...r, ...i }).reduce(
      (g, [w, m]) => (
        (g[w] = Array.isArray(m) ? m.join(", ") : m.toString()), g
      ),
      {}
    );
    return (
      !f[ct] && !f[ut] && ((f[ct] = ss), (f[ut] = ns)),
      t(
        [
          c ?? e,
          { method: "POST", headers: f, body: d, signal: p, keepalive: l },
        ],
        1,
        u ?? s
      )
    );
  };
}
function fs(t) {
  return async (...e) => {
    if (Wt.test(e[0]))
      throw new Error(
        V(
          "This operation will result in a streamable response - use requestStream() instead."
        )
      );
    try {
      const r = await t(...e),
        { status: s, statusText: n } = r,
        o = r.headers.get("content-type") || "";
      return r.ok
        ? o.includes(We.json)
          ? Jt(r)
          : {
              errors: {
                networkStatusCode: s,
                message: V(`${Bt} ${o}`),
                response: r,
              },
            }
        : { errors: { networkStatusCode: s, message: V(n), response: r } };
    } catch (r) {
      return { errors: { message: re(r) } };
    }
  };
}
async function* ps(t) {
  const e = new TextDecoder();
  if (t.body[Symbol.asyncIterator])
    for await (const r of t.body) yield e.decode(r);
  else {
    const r = t.body.getReader();
    let s;
    try {
      for (; !(s = await r.read()).done; ) yield e.decode(s.value);
    } finally {
      r.cancel();
    }
  }
}
function hs(t, e) {
  return {
    async *[Symbol.asyncIterator]() {
      try {
        let r = "";
        for await (const s of t)
          if (((r += s), r.indexOf(e) > -1)) {
            const n = r.lastIndexOf(e),
              a = r
                .slice(0, n)
                .split(e)
                .filter((i) => i.trim().length > 0)
                .map((i) => i.slice(i.indexOf(dt) + dt.length).trim());
            a.length > 0 && (yield a),
              (r = r.slice(n + e.length)),
              r.trim() === "--" && (r = "");
          }
      } catch (r) {
        throw new Error(
          `Error occured while processing stream payload - ${re(r)}`
        );
      }
    },
  };
}
function ms(t) {
  return {
    async *[Symbol.asyncIterator]() {
      yield { ...(await Jt(t)), hasNext: !1 };
    },
  };
}
function ys(t) {
  return t
    .map((e) => {
      try {
        return JSON.parse(e);
      } catch (r) {
        throw new Error(`Error in parsing multipart response - ${re(r)}`);
      }
    })
    .map((e) => {
      const {
        data: r,
        incremental: s,
        hasNext: n,
        extensions: o,
        errors: a,
      } = e;
      if (!s)
        return {
          data: r || {},
          ...$("errors", a),
          ...$("extensions", o),
          hasNext: n,
        };
      const i = s.map(({ data: c, path: u, errors: l }) => ({
        data: c && u ? zt(u, c) : {},
        ...$("errors", l),
      }));
      return {
        data: i.length === 1 ? i[0].data : Qt([...i.map(({ data: c }) => c)]),
        ...$("errors", Ht(i)),
        hasNext: n,
      };
    });
}
function gs(t, e) {
  if (t.length > 0) throw new Error(Nt, { cause: { graphQLErrors: t } });
  if (Object.keys(e).length === 0) throw new Error(jt);
}
function ws(t, e) {
  var i, c;
  const r = (e ?? "").match(as),
    s = `--${r ? r[1] : "-"}`;
  if (
    !((i = t.body) != null && i.getReader) &&
    !((c = t.body) != null && c[Symbol.asyncIterator])
  )
    throw new Error("API multipart response did not return an iterable body", {
      cause: t,
    });
  const n = ps(t);
  let o = {},
    a;
  return {
    async *[Symbol.asyncIterator]() {
      var u;
      try {
        let l = !0;
        for await (const p of hs(n, s)) {
          const d = ys(p);
          a =
            ((u = d.find((y) => y.extensions)) == null
              ? void 0
              : u.extensions) ?? a;
          const f = Ht(d);
          (o = Qt([o, ...d.map(({ data: y }) => y)])),
            (l = d.slice(-1)[0].hasNext),
            gs(f, o),
            yield { ...$("data", o), ...$("extensions", a), hasNext: l };
        }
        if (l) throw new Error("Response stream terminated unexpectedly");
      } catch (l) {
        const p = Vt(l);
        yield {
          ...$("data", o),
          ...$("extensions", a),
          errors: {
            message: V(re(l)),
            networkStatusCode: t.status,
            ...$("graphQLErrors", p == null ? void 0 : p.graphQLErrors),
            response: t,
          },
          hasNext: !1,
        };
      }
    },
  };
}
function bs(t) {
  return async (...e) => {
    if (!Wt.test(e[0]))
      throw new Error(
        V(
          "This operation does not result in a streamable response - use request() instead."
        )
      );
    try {
      const r = await t(...e),
        { statusText: s } = r;
      if (!r.ok) throw new Error(s, { cause: r });
      const n = r.headers.get("content-type") || "";
      switch (!0) {
        case n.includes(We.json):
          return ms(r);
        case n.includes(We.multipart):
          return ws(r, n);
        default:
          throw new Error(`${Bt} ${n}`, { cause: r });
      }
    } catch (r) {
      return {
        async *[Symbol.asyncIterator]() {
          const s = Vt(r);
          yield {
            errors: {
              message: V(re(r)),
              ...$("networkStatusCode", s == null ? void 0 : s.status),
              ...$("response", s),
            },
            hasNext: !1,
          };
        },
      };
    }
  };
}
function Cs({ client: t, storeDomain: e }) {
  try {
    if (!e || typeof e != "string") throw new Error();
    const r = e.trim(),
      s = r.match(/^https?:/) ? r : `https://${r}`,
      n = new URL(s);
    return (n.protocol = "https"), n.origin;
  } catch (r) {
    throw new Error(`${t}: a valid store domain ("${e}") must be provided`, {
      cause: r,
    });
  }
}
function Xt({
  client: t,
  currentSupportedApiVersions: e,
  apiVersion: r,
  logger: s,
}) {
  const n = `${t}: the provided apiVersion ("${r}")`,
    o = `Currently supported API versions: ${e.join(", ")}`;
  if (!r || typeof r != "string") throw new Error(`${n} is invalid. ${o}`);
  const a = r.trim();
  e.includes(a) ||
    (s
      ? s({
          type: "Unsupported_Api_Version",
          content: { apiVersion: r, supportedApiVersions: e },
        })
      : console.warn(`${n} is likely deprecated or not supported. ${o}`));
}
function ge(t) {
  const e = t * 3 - 2;
  return e === 10 ? e : `0${e}`;
}
function Re(t, e, r) {
  const s = e - r;
  return s <= 0 ? `${t - 1}-${ge(s + 4)}` : `${t}-${ge(s)}`;
}
function vs() {
  const t = new Date(),
    e = t.getUTCMonth(),
    r = t.getUTCFullYear(),
    s = Math.floor(e / 3 + 1);
  return { year: r, quarter: s, version: `${r}-${ge(s)}` };
}
function As() {
  const { year: t, quarter: e, version: r } = vs(),
    s = e === 4 ? `${t + 1}-01` : `${t}-${ge(e + 1)}`;
  return [Re(t, e, 3), Re(t, e, 2), Re(t, e, 1), r, s, "unstable"];
}
function _s(t) {
  return (e) => ({ ...(e ?? {}), ...t.headers });
}
function Ss({ getHeaders: t, getApiUrl: e }) {
  return (r, s) => {
    const n = [r];
    if (s && Object.keys(s).length > 0) {
      const { variables: o, apiVersion: a, headers: i, retries: c } = s;
      n.push({
        ...(o ? { variables: o } : {}),
        ...(i ? { headers: t(i) } : {}),
        ...(a ? { url: e(a) } : {}),
        ...(c ? { retries: c } : {}),
      });
    }
    return n;
  };
}
const ft = "application/json",
  Is = "storefront-api-client",
  Es = "1.0.7",
  Ts = "X-Shopify-Storefront-Access-Token",
  Ps = "Shopify-Storefront-Private-Token",
  Ls = "X-SDK-Variant",
  $s = "X-SDK-Version",
  Rs = "X-SDK-Variant-Source",
  ce = "Storefront API Client";
function ks(t) {
  if (t && typeof window < "u")
    throw new Error(
      `${ce}: private access tokens and headers should only be used in a server-to-server implementation. Use the public API access token in nonserver environments.`
    );
}
function qs(t, e) {
  if (!t && !e)
    throw new Error(`${ce}: a public or private access token must be provided`);
  if (t && e)
    throw new Error(
      `${ce}: only provide either a public or private access token`
    );
}
function Ds({
  storeDomain: t,
  apiVersion: e,
  publicAccessToken: r,
  privateAccessToken: s,
  clientName: n,
  retries: o = 0,
  customFetchApi: a,
  logger: i,
}) {
  const c = As(),
    u = Cs({ client: ce, storeDomain: t }),
    l = { client: ce, currentSupportedApiVersions: c, logger: i };
  Xt({ ...l, apiVersion: e }), qs(r, s), ks(s);
  const p = xs(u, e, l),
    d = {
      storeDomain: u,
      apiVersion: e,
      ...(r ? { publicAccessToken: r } : { privateAccessToken: s }),
      headers: {
        "Content-Type": ft,
        Accept: ft,
        [Ls]: Is,
        [$s]: Es,
        ...(n ? { [Rs]: n } : {}),
        ...(r ? { [Ts]: r } : { [Ps]: s }),
      },
      apiUrl: p(),
      clientName: n,
    },
    f = us({
      headers: d.headers,
      url: d.apiUrl,
      retries: o,
      customFetchApi: a,
      logger: i,
    }),
    y = _s(d),
    g = Os(d, p),
    w = Ss({ getHeaders: y, getApiUrl: g });
  return Object.freeze({
    config: d,
    getHeaders: y,
    getApiUrl: g,
    fetch: (...C) => f.fetch(...w(...C)),
    request: (...C) => f.request(...w(...C)),
    requestStream: (...C) => f.requestStream(...w(...C)),
  });
}
function xs(t, e, r) {
  return (s) => {
    s && Xt({ ...r, apiVersion: s });
    const n = (s ?? e).trim();
    return `${t}/api/${n}/graphql.json`;
  };
}
function Os(t, e) {
  return (r) => (r ? e(r) : t.apiUrl);
}
function Yt(t, e, r = 255) {
  for (var s = t.toString().split(""), n = 0; n < s.length; n++) {
    var o = s[n].charCodeAt(0);
    o <= r && (s[n] = String.fromCharCode((s[n].charCodeAt(0) + e) % r));
  }
  return s.join("");
}
function Eo(t, e) {
  return Yt(t, 255 - e);
}
function pt(t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) e = ((e << 5) - e + t.charCodeAt(r)) | 0;
  return (e >>> 0).toString(36);
}
function To(t) {
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
let P;
const N = () => {
    var e;
    if (window._languageBase != null) return window._languageBase;
    if (P) return P;
    try {
      const r = document.getElementById("weglot-data");
      if (r)
        return JSON.parse(r.textContent).settings.language_from ==
          document.documentElement.lang
          ? ((P = ""), P)
          : ((P = "/" + document.documentElement.lang), P);
    } catch {}
    const t = Array.from(
      document.head.querySelectorAll('[rel="alternate"][hreflang]')
    );
    try {
      const r =
        ((e = document.head.querySelector(
          '[rel="alternate"][hreflang="x-default"]'
        )) == null
          ? void 0
          : e.getAttribute("href")) || "";
      if (new URL(r).pathname == window.location.pathname) return (P = ""), "";
    } catch {}
    for (let r of t)
      if (r.getAttribute("hreflang") !== "x-default") {
        const s = new URL(r.getAttribute("href"));
        let n = r.getAttribute("hreflang"),
          o = r.getAttribute("href");
        const a = document.documentElement.lang || "";
        if (a == n)
          if (a.includes("zh")) {
            if (s.pathname.includes("/zh-hans")) return (P = "/zh-hans"), P;
            if (s.pathname.includes("/zh-hant")) return (P = "/zh-hant"), P;
          } else {
            if (o && !o.includes(`/${n}/`)) {
              const i = n.split("-")[0];
              (o.includes(`/${i}/`) || o.endsWith(`/${i}`)) && (n = i);
            }
            return (P = "/" + n), P;
          }
      }
    return (P = ""), "";
  },
  Ms = () => document.documentElement.dataset.wfSite,
  Po = (t) => t.classList.contains("w-slider"),
  Zt = (t) => t.classList.contains("w-lightbox"),
  Lo = (t) => t.querySelectorAll(".w-slide"),
  Qe = (t, e) => {
    try {
      e.querySelectorAll("script").forEach((r) => {
        const s = JSON.parse(r.textContent || "{}");
        (s.items = [{ url: t }]), (r.textContent = JSON.stringify(s));
      });
    } catch {}
  },
  $o = (t, e) => {
    var r, s, n, o;
    switch (t.mediaContentType) {
      case "EXTERNAL_VIDEO":
        {
          const u = t,
            l = document.createElement("iframe");
          (l.src = u.embedUrl),
            l.classList.add("w-lightbox-embed"),
            (l.width = "940"),
            (l.height = "540");
          const p = document.createElement("div");
          p.append(l),
            ht(l.outerHTML, (r = u.previewImage) == null ? void 0 : r.url, e),
            p.remove();
        }
        break;
      case "VIDEO":
        const a = t,
          i = document.createElement("video");
        for (let u of a.sources) {
          const l = document.createElement("source");
          (l.type = u.mimeType), (l.src = u.url), i.append(l);
        }
        (i.className = "lightbox-video-gallery"),
          (i.poster = (s = a.previewImage) == null ? void 0 : s.url),
          (i.controls = !0),
          (i.muted = !0),
          (i.autoplay = !0),
          (i.loop = !0),
          (i.disablePictureInPicture = !0);
        const c = document.createElement("div");
        c.append(i),
          ht(i.outerHTML, (n = a.previewImage) == null ? void 0 : n.url, e),
          c.remove();
        break;
      case "IMAGE":
        Qe((o = t.image) == null ? void 0 : o.url, e);
        break;
    }
  },
  er = (t, e) => {
    let r = new URL(t);
    return (
      e.hasAttribute("max-width") &&
        r.searchParams.set("width", e.getAttribute("max-width")),
      e.hasAttribute("crop") &&
        r.searchParams.set("crop", e.getAttribute("crop")),
      e.hasAttribute("max-height") &&
        r.searchParams.set("height", e.getAttribute("max-height")),
      e.hasAttribute("pad-color") &&
        r.searchParams.set("pad_color", e.getAttribute("pad-color")),
      e.hasAttribute("padding-color") &&
        r.searchParams.set("pad_color", e.getAttribute("padding-color")),
      r
    );
  },
  Ro = (t, e, r) => {
    if ((r && t.tagName == "IMG" && t.setAttribute("alt", r), !e)) return;
    const s = er(e, t);
    if (Zt(t)) {
      const n = t.querySelector("img") ? t.querySelector("img") : t;
      n.tagName == "IMG"
        ? (n == null || n.setAttribute("src", s.toString()),
          n == null || n.removeAttribute("srcset"),
          n == null || n.removeAttribute("sizes"),
          r && (n == null || n.setAttribute("alt", r)))
        : (n.style.backgroundImage = `url("${s.toString()}")`),
        Qe(s.toString(), t),
        tr();
    } else
      t.tagName == "IMG"
        ? t.getAttribute("src") != s.toString() &&
          (t.setAttribute("src", s.toString()),
          t.removeAttribute("srcset"),
          t.removeAttribute("sizes"))
        : (t.style.backgroundImage = `url("${s.toString()}")`);
  },
  ht = (t, e, r) => {
    try {
      r.querySelectorAll("script").forEach((s) => {
        const n = JSON.parse(s.textContent || "{}");
        (n.items = [
          { type: "video", html: t, url: e, width: 1600, height: 900 },
        ]),
          (s.textContent = JSON.stringify(n));
      });
    } catch {}
  },
  Us = () => {
    window.Webflow.require("tabs") && window.Webflow.require("tabs").ready();
  },
  ko = ve(Us, 15),
  Ns = () => {
    const t = window.Webflow.require("slider");
    t && (t.destroy(), t.redraw(), t.ready()),
      document.dispatchEvent(
        new CustomEvent("wf.slider_restart", { bubbles: !0 })
      );
  },
  qo = ve(Ns, 15),
  Bs = () => {
    window.Webflow.require("lightbox") &&
      window.Webflow.require("lightbox").ready();
  },
  tr = ve(Bs, 350),
  Je = (t = document) => {
    var r;
    const e = "Last Published:";
    for (const s of t.childNodes)
      if (
        s.nodeType === Node.COMMENT_NODE &&
        (r = s.textContent) != null &&
        r.includes(e)
      ) {
        const n = s.textContent.trim().split(e)[1];
        if (n) return new Date(n).getTime();
      }
    return new Date().getTime();
  };
function mt() {
  if (document.documentElement.dataset.wfLocale)
    return document.documentElement.dataset.wfLocale.split("-");
  const t = Array.from(document.querySelectorAll("link[hreflang]"));
  if (t.length)
    for (let e of t) {
      const r = e.getAttribute("hreflang");
      if (r) {
        const [s, n] = r.split("-");
        if (
          n !== "default" &&
          (e.getAttribute("href") || "langinvalid") == window.location.href
        )
          return [s, n];
      }
    }
  return null;
}
function js() {
  document
    .querySelectorAll("smootify-search-discovery smootify-product")
    .forEach((t) => {
      t.hasAttribute("data-parent-id") || t.setAttribute("data-id", "filter");
    }),
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
}
const ke = "_smPriceOverride",
  yt = [
    "configurator-input",
    "configurator-file-input",
    "configurator-field",
    "configurator-radio",
    "configurator-dropdown",
    "configurator-checkbox",
    "configurator-select",
    "configurator-calculator",
    "configurator-dimension",
  ];
class Fs {
  constructor(e) {
    this.name = e;
  }
  baseUrl() {
    return `https://api.smootify.io/addon/${this.name}/${h.shopifySiteId}`;
  }
  async getData(e = "") {
    return await (await fetch(this.baseUrl() + e)).json();
  }
  async postData(e, r) {
    return await (
      await fetch(this.baseUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operation: e, data: r }),
      })
    ).json();
  }
}
function T(t) {
  requestAnimationFrame(() => {
    console.log(
      `%cSmootify%c${t}`,
      "padding: 2px; background-color: #ff6d2f; color: white; font-size: 10px; font-weight: 400; margin-right: 4px",
      "font-size: 10px"
    );
  });
}
const ne = "caches" in self;
class Ws {
  constructor() {
    b(this, "cache");
    b(this, "lastPublished");
  }
  async init() {
    ne &&
      ((this.cache = await caches.open("sm-v1")),
      (this.lastPublished = Je()),
      T(
        `Site last published on: ${new Date(
          this.lastPublished
        ).toLocaleDateString()}, cache system available: ${this.isAvailable()}`
      ));
  }
  async updateTTL(e, r = 10) {
    if (!ne || !this.cache) return;
    const s = (Date.now() + r * 60 * 1e3).toString();
    for (let n of await this.cache.keys())
      n.url.endsWith(e) && this.__updateTTL(n, s);
  }
  async __updateTTL(e, r) {
    requestAnimationFrame(async () => {
      let s;
      try {
        const n = await this.cache.match(e);
        n &&
          (n.headers.set("SM-Expiration", r),
          (s = e.url.split("?")[1]),
          this.cache.put(`/sm-product?${s}`, n));
      } catch {
        T("Failed to update  cache: " + s);
      }
    });
  }
  async setTTL(e, r, s = 10) {
    if (!ne || !this.cache) return;
    const n = Date.now() + s * 60 * 1e3,
      o = new Response(JSON.stringify(r), {
        headers: {
          "SM-Expiration": n.toString(),
          "Content-Type": "application/json",
          "SM-CreatedAt": Date.now().toString(),
        },
      });
    try {
      this.cache.put(`/sm-product?${e}`, o);
    } catch {
      T("Failed to put in cache: " + e);
    }
  }
  async getTTL(e) {
    if (!ne || !this.cache) return { data: null, expired: !0 };
    try {
      const r = await this.cache.match(`/sm-product?${e}`);
      if (r) {
        const s = await r.json(),
          n = Number(r.headers.get("SM-Expiration")),
          o = Number(r.headers.get("SM-CreatedAt")),
          a = Date.now() > n || o < this.lastPublished;
        return { data: s, expired: a, created: o };
      }
    } catch {
      return T("Failed to get from cache: " + e), { data: null, expired: !0 };
    }
    return { data: null, expired: !0 };
  }
  isAvailable() {
    return ne && !!this.cache;
  }
}
const B = new Ws(),
  qe = (t) => t instanceof Date,
  Vs = (t) => Object.keys(t).length === 0,
  Ve = (t) => t != null && typeof t == "object",
  gt = (t, ...e) => Object.prototype.hasOwnProperty.call(t, ...e),
  De = (t) => Ve(t) && Vs(t),
  Hs = () => Object.create(null),
  rr = (t, e) => {
    if (t === e) return {};
    if (!Ve(t) || !Ve(e)) return e;
    const r = Object.keys(t).reduce(
      (s, n) => (gt(e, n) || (s[n] = void 0), s),
      Hs()
    );
    return qe(t) || qe(e)
      ? t.valueOf() == e.valueOf()
        ? {}
        : e
      : Object.keys(e).reduce((s, n) => {
          if (!gt(t, n)) return (s[n] = e[n]), s;
          const o = rr(t[n], e[n]);
          return (De(o) && !qe(o) && (De(t[n]) || !De(e[n]))) || (s[n] = o), s;
        }, r);
  };
function H(t, e = {}) {
  let { scoped: r } = e,
    s = "";
  if (
    ((typeof t == "string" || t instanceof String) && (t = JSON.parse(t)),
    (typeof e == "string" || e instanceof String || e === !0) && (r = e),
    t.type === "root" && t.children.length > 0)
  )
    r
      ? (s += `
      <div class="${r === !0 ? "rte" : r}">
        ${H(t.children, e)}
      </div>
      `)
      : (s += H(t.children, e));
  else
    for (const n of t)
      switch (n.type) {
        case "paragraph":
          s += Ks(n, e);
          break;
        case "heading":
          s += Qs(n, e);
          break;
        case "list":
          s += Js(n, e);
          break;
        case "list-item":
          s += Xs(n, e);
          break;
        case "link":
          s += Ys(n, e);
          break;
        case "text":
          s += Zs(n, e);
          break;
      }
  return s;
}
function Gs(t, e) {
  return e && e[t] ? e[t] : null;
}
function zs(t) {
  if (!t && t != null && t.class) return "";
  const e = " ";
  return Object.keys(t)
    .map((r) => {
      if (t[r]) return `${e}${r}="${t[r]}"`;
    })
    .join("");
}
function j(t, e, r, s = {}) {
  return (s = { ...s, class: Gs(t, e) }), `<${t}${zs(s)}>${r}</${t}>`;
}
function Ks(t, e) {
  const { classes: r } = e;
  return j("p", r, H(t == null ? void 0 : t.children, e));
}
function Qs(t, e) {
  const { classes: r } = e,
    s = `h${t == null ? void 0 : t.level}`;
  return j(s, r, H(t == null ? void 0 : t.children, e));
}
function Js(t, e) {
  const { classes: r } = e,
    s = (t == null ? void 0 : t.listType) === "ordered" ? "ol" : "ul";
  return j(s, r, H(t == null ? void 0 : t.children, e));
}
function Xs(t, e) {
  const { classes: r } = e;
  return j("li", r, H(t == null ? void 0 : t.children, e));
}
function Ys(t, e) {
  const { classes: r } = e,
    s = {
      href: t == null ? void 0 : t.url,
      title: t == null ? void 0 : t.title,
      target: t == null ? void 0 : t.target,
    };
  return j("a", r, H(t == null ? void 0 : t.children, e), s);
}
function Zs(t, e) {
  var n;
  const { classes: r, newLineToBreak: s } = e;
  return t != null && t.bold && t != null && t.italic
    ? j("strong", r, j("em", r, t == null ? void 0 : t.value))
    : t != null && t.bold
    ? j("strong", r, t == null ? void 0 : t.value)
    : t != null && t.italic
    ? j("em", r, t == null ? void 0 : t.value)
    : s
    ? (n = t == null ? void 0 : t.value) == null
      ? void 0
      : n.replace(/\n/g, "<br>")
    : t == null
    ? void 0
    : t.value;
}
let wt = !1;
const en = async (t) => {
    var n, o, a;
    const { Webflow: e } = window;
    if (
      (document.documentElement.classList.add("wf-restarted"),
      !e ||
        !("destroy" in e) ||
        !("ready" in e) ||
        !("require" in e) ||
        (t && !t.length))
    )
      return;
    (n = e.require("lightbox")) == null || n.ready();
    const r = e.require("slider");
    r && (r.redraw(), r.ready()),
      (o = e.require("dropdown")) == null || o.ready(),
      (a = e.require("tabs")) == null || a.redraw();
    const s = e.require("rive");
    if ((s && (s.destroy(), s.init()), !h.options.avoidWebflowIXRestart)) {
      if (!t || t.includes("ix2")) {
        const i = e.require("ix2");
        if (i) {
          const { store: c, actions: u } = i,
            { ixData: l } = c.getState(),
            { eventState: p } = c.getState().ixSession,
            d = Object.entries(p);
          i.destroy();
          for (let f in l.eventTypeMap) {
            if (["PAGE_START", "PAGE_FINISH"].includes(f)) {
              const y = l.eventTypeMap[f];
              for (let g in y) {
                const w = d.find((m) => m[0].startsWith(g));
                w && w[1].started && delete l.events[g];
              }
            }
            if (f == "SCROLL_INTO_VIEW") {
              const y = l.eventTypeMap[f];
              for (let g in y) {
                const w = d.find((m) => m[0].startsWith(g));
                if (w) {
                  const m = w[1];
                  (m.triggered || m.elementVisible) && delete l.events[g];
                }
              }
            }
          }
          (l.site = { mediaQueries: l.mediaQueries }),
            i.init(l),
            await Promise.all(
              d.map((f) => {
                let [y] = f,
                  g = y.split(":")[0];
                l.events[g] && c.dispatch(u.eventStateChanged(...f));
              })
            );
        }
      }
      if (!t || t.includes("ix3")) {
        const i = e.require("ix3");
        if (i) {
          const c = i.getInstance();
          let u = Array.from(c.interactions.values());
          const l = Array.from(c.timelineDefs.values());
          u.forEach((p) => {
            p.triggers.some((d) => d[0] == "wf:load");
          }),
            await i.destroy(),
            await i.ready(),
            (c.interactions = new Map()),
            c.register(u, l),
            window.dispatchEvent(new CustomEvent("__wf_ix3_ready"));
        }
      }
      document.dispatchEvent(new Event("readystatechange")),
        document.dispatchEvent(new Event("resize"));
    }
    return (
      document.dispatchEvent(new CustomEvent("wf.restart")),
      wt ||
        (document
          .querySelectorAll('[data-ix-trigger="smootifyFirstWebflowRestart"]')
          .forEach((i) => {
            i.click();
          }),
        (wt = !0)),
      new Promise((i) => e.push(() => i(void 0)))
    );
  },
  tn = ve(en, 350);
let He = [];
function xe(t) {
  var r;
  const e = ((r = t.addresses) == null ? void 0 : r.nodes) || [];
  document.body.classList.toggle("has-addresses", e.length > 0),
    document.body.classList.toggle("no-addresses", e.length == 0),
    document.body.classList.toggle(
      "has-customer-names",
      !!t.firstName && !!t.lastName
    ),
    document.querySelectorAll("[customer-tagged]").forEach((s) => {
      const n = t.tags || [],
        o = (s.getAttribute("customer-tagged") || "").split(",");
      if (s.getAttribute("any") == "true") {
        if (o.some((a) => n.includes(a))) return;
        s.remove();
      } else if (!o.every((a) => n.includes(a))) {
        s.remove();
        return;
      }
      s.getAttribute("exclusive") == "true" &&
        (!o.every((a) => n.includes(a)) || n.length !== 1) &&
        s.remove();
    }),
    document.querySelectorAll("[customer-not-tagged]").forEach((s) => {
      const n = t.tags || [],
        o = (s.getAttribute("customer-not-tagged") || "").split(",");
      if (s.getAttribute("any") == "true")
        if (o.some((a) => n.includes(a))) s.remove();
        else return;
      else if (o.every((a) => n.includes(a))) {
        s.remove();
        return;
      } else return;
      s.getAttribute("exclusive") == "true" &&
        (!o.every((a) => n.includes(a)) || n.length !== 1) &&
        s.remove();
    }),
    document.querySelectorAll("[customer]").forEach((s) => {
      var o, a;
      switch (s.getAttribute("customer")) {
        case "first-name":
        case "firstName":
          s.textContent = t.firstName || "";
          break;
        case "last-name":
        case "lastName":
          s.textContent = t.lastName || "";
          break;
        case "display-name":
        case "displayName":
          s.textContent = t.displayName || "";
          break;
        case "email":
          const i =
            t.email ||
            ((o = t.emailAddress) == null ? void 0 : o.emailAddress) ||
            "";
          (s.textContent = i),
            s.tagName == "A" && s.setAttribute("href", `mailto:${i}`);
          break;
        case "phone":
          const c =
            t.phone ||
            ((a = t.phoneNumber) == null ? void 0 : a.phoneNumber) ||
            "";
          (s.textContent = c),
            s.tagName == "A" && s.setAttribute("href", `tel:${c}`);
          break;
        case "tags":
          {
            const u = t.tags || [];
            if (u.length == 0) s.remove();
            else {
              const l = s.cloneNode(!0);
              l.removeAttribute("customer");
              const p = document.createDocumentFragment(),
                d = (s.getAttribute("exclude") || "").split(",");
              for (let f of u)
                if (!d.includes(f)) {
                  const y = l.cloneNode(!0);
                  (y.textContent = f), p.append(y);
                }
              s.replaceWith(p);
            }
          }
          break;
        case "defaultAddress":
          t.defaultAddress
            ? (s.innerHTML = t.defaultAddress.name
                ? [t.defaultAddress.name, ...t.defaultAddress.formatted].join(
                    "</br>"
                  )
                : t.defaultAddress.formatted.join("</br>"))
            : (s.innerHTML = "");
          break;
      }
    });
}
function Oe() {
  document
    .querySelectorAll(
      '[customer-condition="logged-in"],[customer-tagged],[customer-not-tagged], [customer], [customer-metafield], [company], [company-metafield]'
    )
    .forEach((t) => {
      const e = new Comment(`Customer|${crypto.randomUUID()}`),
        r = { comment: e, el: t };
      He.push(r), t.replaceWith(e);
    });
}
async function rn(t) {
  var e;
  if (!t)
    Oe(),
      document.addEventListener(
        "smootify:search_discovery_global:render",
        () => {
          Oe();
        }
      ),
      document.addEventListener("smootify:metaobjects:rendered", () => {
        Oe();
      });
  else {
    He.forEach((o) => {
      o.comment.replaceWith(o.el);
    }),
      xe(t),
      document.addEventListener(
        "smootify:search_discovery_global:render",
        () => {
          xe(t);
        }
      ),
      document.addEventListener("smootify:metaobjects:rendered", () => {
        xe(t);
      }),
      (He = []);
    let r = await bt(t.metafields || []),
      s;
    t.companyContacts &&
      t.companyContacts.nodes &&
      t.companyContacts.nodes[0] &&
      t.companyContacts.nodes[0].company &&
      (s = (e = t.companyContacts) == null ? void 0 : e.nodes[0].company);
    let n = await bt((s == null ? void 0 : s.metafields) || []);
    we(document.body, r, "customer-metafield"),
      we(document.body, n, "company-metafield"),
      s
        ? document.querySelectorAll("[company]").forEach((o) => {
            switch (o.getAttribute("company")) {
              case "name":
                o.textContent = s.name || "";
                break;
            }
          })
        : document.querySelectorAll("[company]").forEach((o) => {
            o.remove();
          });
  }
  document.body.classList.toggle("is-user-logged-in", !!t);
}
async function bt(t) {
  let e = [];
  const r = [];
  for (let s of t || [])
    if (s)
      switch (s.type) {
        case "file_reference":
        case "metaobject_reference":
          s.value && r.push(s.value);
          break;
        case "list.file_reference":
        case "list.metaobject_reference":
          if (s.value) {
            const n = JSON.parse(s.value);
            r.push(...n);
          }
          break;
        case "product_reference":
        case "variant_reference":
        case "collection_reference":
        case "list.product_reference":
        case "list.variant_reference":
        case "list.collection_reference":
          break;
        default:
          e.push(s);
      }
  if (r.length) {
    const s = (await h.store.fetchNodes(r)).filter((n) => !!n);
    for (let n of t || [])
      if (n)
        switch (n.type) {
          case "file_reference":
          case "metaobject_reference":
            if (n.value) {
              const o = s.find((a) => a.id == (n == null ? void 0 : n.value));
              o && ((n.reference = o), e.push(n));
            }
            break;
          case "list.file_reference":
          case "list.metaobject_reference":
            if (n.value) {
              const o = JSON.parse(n == null ? void 0 : n.value),
                a = [];
              for (let i of o) {
                const c = s.find((u) => u.id == i);
                c && a.push(c);
              }
              a.length && ((n.references = a), e.push(n));
            }
            break;
        }
  }
  return e;
}
function sn(t, e) {
  if ((t.classList.remove("w-dyn-bind-empty"), !e)) {
    t.classList.add("loaded");
    return;
  }
  if (Zt(t)) {
    const r = t.querySelector("img") || t;
    if (r.tagName == "IMG")
      if (e != r.src) {
        const s = r.src || "";
        if (!s.includes("placeholder") && s.includes("cdn.prod.website")) {
          r.classList.add("loaded"), t.classList.add("loaded");
          const n = new Image();
          (n.onload = () => {
            r.setAttribute("src", e);
          }),
            (n.src = e);
        } else r.src = e;
        r.removeAttribute("srcset"),
          r.removeAttribute("sizes"),
          r.addEventListener(
            "load",
            () => {
              r.classList.add("loaded"), t.classList.add("loaded");
            },
            { once: !0 }
          ),
          r.addEventListener(
            "error",
            () => {
              r.classList.add("loaded"), t.classList.add("loaded");
            },
            { once: !0 }
          );
      } else r.classList.add("loaded");
    else (r.style.backgroundImage = `url("${e}")`), r.classList.add("loaded");
    Qe(e, t), tr();
    return;
  }
  if (t.tagName == "IMG")
    if (e != t.src) {
      const r = t.src || "";
      if (!r.includes("placeholder") && r.includes("cdn.prod.website")) {
        t.classList.add("loaded");
        const s = new Image();
        (s.onload = () => {
          t.setAttribute("src", e);
        }),
          (s.src = e);
      } else t.src = e;
      t.removeAttribute("srcset"),
        t.removeAttribute("sizes"),
        t.addEventListener(
          "load",
          () => {
            t.classList.add("loaded");
          },
          { once: !0 }
        ),
        t.addEventListener(
          "error",
          () => {
            t.classList.add("loaded");
          },
          { once: !0 }
        );
    } else t.classList.add("loaded");
  else (t.style.backgroundImage = `url("${e}")`), t.classList.add("loaded");
}
const nn = { some: 0, all: 1 };
function Do(t, e, { root: r, margin: s, amount: n = "some" } = {}) {
  const o = typeof t == "string" ? document.querySelectorAll(t) : [t],
    a = new WeakMap(),
    i = (u) => {
      u.forEach((l) => {
        const p = a.get(l.target);
        if (l.isIntersecting !== !!p)
          if (l.isIntersecting) {
            const d = e(l.target, l);
            typeof d == "function" ? a.set(l.target, d) : c.unobserve(l.target);
          } else typeof p == "function" && (p(l), a.delete(l.target));
      });
    },
    c = new IntersectionObserver(i, {
      root: r,
      rootMargin: s,
      threshold: typeof n == "number" ? n : nn[n],
    });
  return o.forEach((u) => c.observe(u)), () => c.disconnect();
}
function L(t) {
  return t ? (t.includes("-") || t.includes("_") ? t : je(t)) : "";
}
function Ct(t, e) {
  var s;
  if (t.querySelector("video")) return;
  const r = document.createElement("video");
  for (let n of e.sources) {
    const o = document.createElement("source");
    (o.type = n.mimeType), (o.src = n.url), r.append(o);
  }
  (r.poster = (s = e.previewImage) == null ? void 0 : s.url),
    t.querySelectorAll('button[name="play"],button[name="pause"]')
      ? ((r.controls = !1),
        (r.muted = !1),
        (r.autoplay = !1),
        (r.loop = !1),
        r.addEventListener("play", () => {
          t.querySelectorAll('button[name="play"]').forEach((n) => {
            n.style.display = "none";
          }),
            t.querySelectorAll('button[name="pause"]').forEach((n) => {
              n.style.display = "";
            });
        }),
        r.addEventListener("pause", () => {
          t.querySelectorAll('button[name="pause"]').forEach((n) => {
            n.style.display = "none";
          }),
            t.querySelectorAll('button[name="play"]').forEach((n) => {
              n.style.display = "";
            });
        }),
        r.addEventListener("ended", () => {
          t.querySelectorAll('button[name="pause"]').forEach((n) => {
            n.style.display = "none";
          }),
            t.querySelectorAll('button[name="play"]').forEach((n) => {
              n.style.display = "";
            });
        }),
        t.querySelectorAll('button[name="pause"]').forEach((n) => {
          n.style.display = "none";
        }),
        t.querySelectorAll('button[name="play"]').forEach((n) => {
          n.style.display = "";
        }),
        t.querySelectorAll('button[name="play"]').forEach((n) => {
          n.addEventListener("click", () => {
            r.load(), r.play();
          });
        }),
        t.querySelectorAll('button[name="pause"]').forEach((n) => {
          n.addEventListener("click", () => {
            r.pause();
          });
        }))
      : ((r.controls = !1), (r.muted = !0), (r.autoplay = !0), (r.loop = !0)),
    (r.style.width = "100%"),
    (r.style.height = "auto"),
    t.append(r);
}
function de(t, e) {
  const r = e.tagName;
  return r.includes("-") ? t.closest(r) == e : !0;
}
function we(t, e, r = "metafield") {
  e
    ? (t.querySelectorAll(`[${r}]`).forEach((s) => {
        var i, c, u, l, p;
        if (!de(s, t)) return;
        const n = s.hasAttribute("namespace")
            ? L(s.getAttribute("namespace"))
            : "custom",
          o = L(s.getAttribute(r)),
          a = e.find(
            (d) => (d == null ? void 0 : d.key) == o && d.namespace == n
          );
        if (!a || !a.value)
          (s.style.display = "none"), s.classList.add("w-condition-invisible");
        else {
          const d = a.value;
          switch (a.type) {
            case "boolean":
              (s.style.display = d == "true" ? "" : "none"),
                s.classList.toggle("w-condition-invisible", d !== "true");
              break;
            case "color":
              d &&
                s.style.setProperty(
                  s.hasAttribute("property")
                    ? s.getAttribute("property")
                    : "--metafield-color",
                  d
                );
              break;
            case "date":
              s.textContent = new Date(d).toLocaleDateString();
              break;
            case "date_time":
              s.textContent = new Date(d).toLocaleString();
              break;
            case "dimension":
              {
                const m = JSON.parse(d);
                let C = "";
                switch (m.unit) {
                  case "KILOGRAMS":
                    C = "KG";
                    break;
                  case "CENTIMETERS":
                    C = "cm";
                    break;
                  case "METERS":
                    C = "m";
                    break;
                  case "MILLIMETERS":
                    C = "mm";
                    break;
                  case "YARDS":
                    C = "yd";
                    break;
                  case "FEET":
                    C = "′";
                    break;
                  case "INCHES":
                    C = "″";
                    break;
                  case "GRAMS":
                    C = "g";
                    break;
                  case "OUNCES":
                    C = "oz";
                    break;
                  case "POUNDS":
                    C = "lb";
                    break;
                }
                s.innerHTML = m.value + ` <span class="unit">${C}</span>`;
              }
              break;
            case "json":
              document.dispatchEvent(
                new CustomEvent("smootify.devMetafield", {
                  detail: { element: s, metafield: a },
                })
              );
              break;
            case "money":
              {
                const m = JSON.parse(d);
                s.innerHTML = h.store.formatMoney(m.amount);
              }
              break;
            case "multi_line_text_field":
              s.innerHTML = (d || "").replace(/\n/gm, "<br/>");
              break;
            case "number_integer":
              s.hasAttribute("data-attr")
                ? s.setAttribute(
                    s.getAttribute("data-attr") || "data-attr",
                    d || ""
                  )
                : (s.innerHTML = d);
              break;
            case "number_decimal":
              const f = Number(d) || 0;
              s.dataset.digits
                ? (s.textContent = f.toFixed(Number(s.dataset.digits)))
                : (s.textContent = d);
              break;
            case "rating":
              break;
            case "rich_text_field":
              try {
                let m = H(d);
                (m = m.replace(/\n/gm, "<br/>")), (s.innerHTML = m);
              } catch {
                s.innerHTML = "";
              }
              break;
            case "single_line_text_field":
              s.hasAttribute("data-attr")
                ? s.setAttribute(
                    s.getAttribute("data-attr") || "data-attr",
                    d || ""
                  )
                : (s.innerHTML = d);
              break;
            case "url":
              s.setAttribute("href", d);
              break;
            case "list.link":
              const y = JSON.parse(d),
                g = document.createDocumentFragment();
              for (let m of y) {
                const C = s.cloneNode(!0);
                C.removeAttribute(r),
                  (C.textContent = m.text),
                  C.setAttribute("href", m.url),
                  g.append(C);
              }
              s.replaceWith(g);
              break;
            case "link":
              const w = JSON.parse(d);
              s.setAttribute("href", w.url), (s.textContent = w.text);
              break;
            case "volume":
            case "weight":
              {
                const m = JSON.parse(d);
                (s.textContent = m.value + " " + m.unit),
                  document.dispatchEvent(
                    new CustomEvent("smootify.devMetafield", {
                      detail: { element: s, metafield: a, jsonValue: m },
                    })
                  );
              }
              break;
            case "file_reference":
              {
                let m = "GenericFile";
                switch (
                  (d.includes("MediaImage")
                    ? (m = "MediaImage")
                    : d.includes("Video") && (m = "Video"),
                  m)
                ) {
                  case "GenericFile":
                    s.setAttribute("href", a.reference.url);
                    break;
                  case "MediaImage":
                    s.tagName == "IMG"
                      ? (s.removeAttribute("srcset"),
                        s.removeAttribute("sizes"),
                        s.setAttribute("alt", a.reference.alt || ""),
                        s.setAttribute(
                          "src",
                          er(
                            ((i = a.reference.image) == null
                              ? void 0
                              : i.url) || "",
                            s
                          ).toString()
                        ))
                      : s.tagName == "A"
                      ? s.setAttribute(
                          "href",
                          ((c = a.reference.image) == null ? void 0 : c.url) ||
                            ""
                        )
                      : (s.style.backgroundImage = `url("${
                          ((u = a.reference.image) == null ? void 0 : u.url) ||
                          ""
                        }")`);
                    break;
                  case "Video":
                    Ct(s, a.reference);
                    break;
                }
              }
              break;
            case "list.file_reference":
              {
                const m = JSON.parse(d),
                  C = s.getAttribute(r);
                (l = s.parentElement) == null ||
                  l.querySelectorAll(`[${r}-clone="${C}"]`).forEach((D) => {
                    D.remove();
                  });
                const E = document.createDocumentFragment();
                m.forEach((D, x) => {
                  var et;
                  const R = s.cloneNode(!0);
                  x > 0 && R.setAttribute(r + "-clone", C),
                    (R.style.display = ""),
                    R.classList.remove("w-condition-invisible");
                  let Ie = "GenericFile";
                  switch (
                    (D.includes("MediaImage")
                      ? (Ie = "MediaImage")
                      : D.includes("Video") && (Ie = "Video"),
                    Ie)
                  ) {
                    case "GenericFile":
                      R.setAttribute("href", a.references.nodes[x].url),
                        a.references.nodes[x].alt &&
                          (R.textContent = a.references.nodes[x].alt || "");
                      break;
                    case "MediaImage":
                      sn(
                        R,
                        (et = a.references.nodes[x].image) == null
                          ? void 0
                          : et.url
                      );
                      break;
                    case "Video":
                      Ct(R, a.references.nodes[x]);
                      break;
                  }
                  E.append(R);
                }),
                  s.replaceWith(E);
              }
              break;
            case "list.single_line_text_field":
              {
                const m = s.hasAttribute("separator")
                    ? (p = s.getAttribute("separator")) == null
                      ? void 0
                      : p.trim()
                    : ", ",
                  C = JSON.parse(d) || [];
                if (m == "repeat") {
                  t.querySelectorAll(`[data-clone="${o}"]`).forEach((x) => {
                    x.remove();
                  });
                  const E = document.createDocumentFragment();
                  let D = 0;
                  for (let x of C) {
                    const R = s.cloneNode(!0);
                    D > 0 &&
                      (R.removeAttribute(r), R.setAttribute("data-clone", o)),
                      D++,
                      (R.innerHTML = x),
                      E.append(R);
                  }
                  s.replaceWith(E);
                } else s.innerHTML = C.join(m);
              }
              break;
            case "metaobject_reference":
              a &&
                a.reference &&
                a.reference.fields &&
                (a.reference &&
                  a.reference.handle &&
                  s.querySelectorAll("a[metaobject-url]").forEach((m) => {
                    m.setAttribute(
                      "href",
                      m
                        .getAttribute("metaobject-url")
                        .replace("{handle}", a.reference.handle || "")
                    );
                  }),
                we(
                  s,
                  a.reference.fields.map((m) => ((m.namespace = "custom"), m)),
                  "metaobject"
                ));
              break;
            case "list.metaobject_reference":
              if (a && a.references && a.references.nodes.length) {
                const m = document.createDocumentFragment();
                for (let C of a.references.nodes) {
                  const E = s.cloneNode(!0);
                  s.classList.remove("w-condition-invisible"),
                    E.removeAttribute("metafield"),
                    we(
                      E,
                      C.fields.map((D) => ((D.namespace = "custom"), D)),
                      "metaobject"
                    ),
                    m.append(E);
                }
                s.replaceWith(m), tn();
              } else s.classList.add("w-condition-invisible");
              break;
            case "collection_reference":
            case "mixed_reference":
            case "page_reference":
            case "product_reference":
            case "variant_reference":
            case "list.collection_reference":
            case "list.color":
            case "list.date":
            case "list.date_time":
            case "list.dimension":
            case "list.mixed_reference":
            case "list.number_integer":
            case "list.number_decimal":
            case "list.page_reference":
            case "list.product_reference":
            case "list.rating":
            case "list.url":
            case "list.variant_reference":
            case "list.volume":
            case "list.weight":
              document.dispatchEvent(
                new CustomEvent("smootify.devMetafield", {
                  detail: { element: s, metafield: a },
                })
              );
              break;
          }
          (s.style.display = ""), s.classList.remove("w-condition-invisible");
        }
      }),
      t.querySelectorAll(`[if-${r}]`).forEach((s) => {
        var c;
        if (!de(s, t)) return;
        const n = s.hasAttribute("namespace")
            ? L(s.getAttribute("namespace"))
            : "custom",
          o = L(s.getAttribute("if-" + r)),
          a = e.find(
            (u) => (u == null ? void 0 : u.key) == o && u.namespace == n
          ),
          i = s.dataset.checkValue;
        if (!a || !a.value)
          (s.style.display = "none"),
            s.classList.add("w-condition-invisible"),
            r.includes("customer") && s.remove();
        else if (i) {
          let u = (a == null ? void 0 : a.value) != i;
          a.type.includes("list.") &&
            (u = !(
              (c = a == null ? void 0 : a.value) != null && c.includes(i)
            )),
            u &&
              ((s.style.display = "none"),
              s.classList.add("w-condition-invisible"),
              (r.includes("customer") || r.includes("company")) && s.remove());
        } else
          a.type.includes("number")
            ? (Number(a.value) || 0) <= 0
              ? (s.classList.add("w-condition-invisible"),
                r.includes("customer") && s.remove())
              : (s.classList.remove("w-condition-invisible"),
                (s.style.display = ""))
            : a.type.includes("boolean") &&
              (a.value !== "true"
                ? (s.classList.add("w-condition-invisible"),
                  (r.includes("customer") || r.includes("company")) &&
                    s.remove())
                : (s.classList.remove("w-condition-invisible"),
                  (s.style.display = "")));
      }),
      t.querySelectorAll(`[unless-${r}]`).forEach((s) => {
        if (!de(s, t)) return;
        const n = s.hasAttribute("namespace")
            ? L(s.getAttribute("namespace"))
            : "custom",
          o = L(s.getAttribute("unless-" + r)),
          a = e.find(
            (c) => (c == null ? void 0 : c.key) == o && c.namespace == n
          ),
          i = s.dataset.checkValue;
        if (a)
          if (a.type == "boolean")
            a.value == "true" &&
              ((s.style.display = "none"),
              s.classList.add("w-condition-invisible"));
          else if (i) {
            let c = (a == null ? void 0 : a.value) == i;
            a.type.includes("list.") &&
              (c = a == null ? void 0 : a.value.includes(i)),
              c &&
                ((s.style.display = "none"),
                s.classList.add("w-condition-invisible"),
                r.includes("customer") && s.remove());
          } else
            a.value &&
              ((s.style.display = "none"),
              s.classList.add("w-condition-invisible"));
        else
          (s.style.display = ""), s.classList.remove("w-condition-invisible");
      }))
    : t
        .querySelectorAll(`[${r}], [if-${r}], [unless-${r}]`)
        .forEach((s) => de(s, t) && (s.style.display = "none"));
}
const vt = "2025-10";
let fe = new Map();
const At = /\{\{\s*(\w+)\s*\}\}/;
class on {
  constructor(e) {
    b(this, "products", {});
    b(this, "productsToLoad", []);
    b(this, "_loadTimeout");
    b(this, "preloadListeners", {});
    b(this, "format");
    b(this, "latestCart");
    b(this, "options");
    b(this, "searchCache", new Map());
    b(this, "country");
    b(this, "language");
    b(this, "locationId");
    b(this, "_alreadyReloaded", new Set());
    b(this, "swatchesCache", {});
    b(this, "latestCustomer");
    b(this, "client");
    b(this, "acceptingNewLogin", !1);
    b(this, "buyerIdentity");
    b(this, "formatter");
    b(this, "patterns");
    b(this, "latestContextParams", {});
    (this.options = { token: e.t, store: e.s }),
      (this.client = Ds({
        storeDomain: `https://${e.s}.myshopify.com`,
        apiVersion: vt,
        publicAccessToken: e.t,
      }));
  }
  inContextParam(e = !1) {
    var r;
    if (
      ((this.latestContextParams = {
        country: this.country,
        locationId: this.locationId,
        buyer: this.buyerIdentity,
        language: this.language,
      }),
      this.language == "ZH_HK" && (this.language = "ZH_TW"),
      document.querySelector(".w-locales-list"))
    ) {
      const s = mt();
      s && s[0] && (this.language = s[0].toUpperCase());
    }
    if (e && (r = window.Shopify) != null && r.customerPrivacy) {
      const s = window.Shopify.customerPrivacy.currentVisitorConsent();
      return `@inContext(country: ${this.country || null}, language: ${
        this.language || null
      }, visitorConsent: {
  analytics: ${s.analytics == "yes" ? "true" : "false"},
  preferences:  ${s.preferences == "yes" ? "true" : "false"},
  marketing:  ${s.marketing == "yes" ? "true" : "false"},
  saleOfData:  ${s.sale_of_data == "yes" ? "true" : "false"}
}, preferredLocationId: ${this.locationId ? `"${this.locationId}"` : null}${
        this.buyerIdentity
          ? `, buyer: {customerAccessToken: "${
              this.buyerIdentity.customerAccessToken || ""
            }"${
              this.buyerIdentity.companyLocationId
                ? `, companyLocationId: "${this.buyerIdentity.companyLocationId}"`
                : ""
            }}`
          : ""
      }
  )`;
    }
    return `@inContext(country: ${this.country || null}, language: ${
      this.language || null
    }, preferredLocationId: ${this.locationId ? `"${this.locationId}"` : null}${
      this.buyerIdentity
        ? `, buyer: {customerAccessToken: "${
            this.buyerIdentity.customerAccessToken || ""
          }"${
            this.buyerIdentity.companyLocationId
              ? `, companyLocationId: "${this.buyerIdentity.companyLocationId}"`
              : ""
          }}`
        : ""
    }
  )`;
  }
  async updateCartNote(e = "") {
    var s;
    let r = (s = this.latestCart) == null ? void 0 : s.id;
    return (
      r || (r = (await this.cart()).id),
      await this.query(
        `mutation cartNoteUpdate($cartId: ID!, $note: String!) {
      cartNoteUpdate(cartId: $cartId, note: $note) {
        cart {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
        { cartId: r, note: e }
      )
    );
  }
  async goToCheckout() {
    var r, s, n, o;
    if (
      (this.latestCart || (await this.cart()),
      document.dispatchEvent(
        new CustomEvent(A.initiateCheckout, {
          detail: { cart: this.latestCart },
        })
      ),
      ["Draft Orders", "Name your price", "Product configurator"].some((a) =>
        h.loadedExtensions.includes(a)
      ) &&
        (this.latestCart.lines.nodes || []).some((c) =>
          (c.attributes || []).find((u) => u.key == ke)
        ))
    ) {
      const c = this.latestCart,
        u = ((r = c.buyerIdentity) == null ? void 0 : r.email) || void 0,
        l = c.note || "",
        p = c.attributes || [],
        f = await new Fs("draft-orders").postData(
          "new",
          await h.store.getCartAsDraftOrderData(u, l, p)
        );
      (s = f.data) != null && s.draftOrderCreate.draftOrder.invoiceUrl
        ? (window.location =
            (n = f.data) == null
              ? void 0
              : n.draftOrderCreate.draftOrder.invoiceUrl)
        : console.error(f);
      return;
    }
    const e = new URL((o = this.latestCart) == null ? void 0 : o.checkoutUrl);
    e.searchParams.append("logged_in", "true"),
      setTimeout(() => {
        window.location = e.toString();
      }, 100);
  }
  setupLocation() {
    this.locationId = localStorage.getItem("locationId") || void 0;
  }
  async setup() {
    this.setupLocation();
    const e = localStorage.getItem("_cToken");
    if (
      (e && this.options.token != e && (await S("_cart_id")),
      localStorage.setItem("_cToken", this.options.token),
      document.documentElement.lang)
    ) {
      if (
        localStorage.getItem("_manuallyChangedCountry") == "true" ||
        localStorage.getItem("_apiChangedCountry") == "true"
      ) {
        await this.setupFormatter();
        return;
      }
      let [r, s] = document.documentElement.lang.split("-");
      if (
        (s
          ? (localStorage.setItem("country", s.toUpperCase()),
            (this.country = s.toUpperCase()))
          : localStorage.removeItem("country"),
        r)
      ) {
        switch (r) {
          case "zh":
          case "ZH":
          case "pt":
          case "PT":
            s && (r = `${r}_${s}`.toUpperCase());
            break;
        }
        localStorage.setItem("language", r.toUpperCase()),
          (this.language = r.toUpperCase());
      } else localStorage.removeItem("language");
    }
    if (document.documentElement.dataset.wgTranslated) {
      let [r, s] = document.documentElement.dataset.wgTranslated.split("-");
      if (
        (s
          ? (localStorage.setItem("country", s.toUpperCase()),
            (this.country = s.toUpperCase()))
          : localStorage.removeItem("country"),
        r)
      ) {
        switch (r) {
          case "zh":
          case "ZH":
          case "pt":
          case "PT":
            s && (r = `${r}_${s}`.toUpperCase());
            break;
        }
        localStorage.setItem("language", r.toUpperCase()),
          (this.language = r.toUpperCase());
      } else localStorage.removeItem("language");
    }
    await this.setupFormatter();
  }
  async changeLocation(e) {
    localStorage.setItem("locationId", e),
      (this.locationId = e),
      await this.reloadProductsData();
  }
  async setupFormatter() {
    if (
      ((this.country = localStorage.getItem("country") || void 0),
      (this.language = localStorage.getItem("language") || void 0),
      (this.format = await this.getMoneyFormat()),
      await this.getLocalization(),
      !this.country && h.options.selectMarketBasedOnBrowserLanguage)
    ) {
      const e = navigator.languages.find((r) => r.includes("-"));
      if (e) {
        const [r, s] = e.split("-");
        s && (await this.changeCountryByCountryIsoCode(s));
      }
    } else if (!this.language) {
      const e = mt();
      if (Array.isArray(e)) {
        const [r, s] = e;
        !s && r
          ? ((this.language = r.toUpperCase()),
            await this.changeLanguageByCode(r.toUpperCase()))
          : s &&
            r &&
            ((this.country = s.toUpperCase()),
            (this.language = r.toUpperCase()),
            await this.changeLanguageByCode(r.toUpperCase()),
            await this.changeCountryByCountryIsoCode(s.toUpperCase()));
      }
    }
  }
  async loadCartUpsells(e, r = "BOTH") {
    const s = await this.query(
        `query productRecommendations($productId: ID!) {
      complementary: productRecommendations(productId: $productId, intent: COMPLEMENTARY) {
        id
      }
      related: productRecommendations(productId: $productId, intent: RELATED) {
        id
      }
    }`,
        { productId: e }
      ),
      n = new Set();
    if (r == "BOTH") {
      for (let o of s.complementary) n.add(o.id);
      for (let o of s.related) n.add(o.id);
    } else if (r == "RELATED") for (let o of s.related) n.add(o.id);
    else if (r == "COMPLEMENTARY") for (let o of s.complementary) n.add(o.id);
    return Array.from(n);
  }
  async loadProductsQuery(e, r = 3, s = "", n = "", o = "") {
    var c;
    let a = "";
    switch (e) {
      case "best-seller":
        a = ", sortKey: BEST_SELLING";
        break;
      case "created-at":
        a = ", sortKey: CREATED_AT, reverse: true";
        break;
      case "purchasable":
        a = ', query: "available_for_sale:true"';
        break;
      case "custom-query":
        (a = s ? `, query: "${s}"` : ""), n && (a += `, sortKey: ${n}`);
        break;
      case "specific-collection":
        return (
          ((c = (
            await this.query(
              `query getProductsOfCollection($first: Int, $handle: String!) ${this.inContextParam()} {
          collection(handle: $handle) {
           products(first: $first) {
              nodes {
                id
              } 
            }
          }  
        }`,
              { first: r, handle: o }
            )
          ).collection) == null
            ? void 0
            : c.products.nodes.map((l) => l.id)) || []
        );
    }
    return (
      await this.query(
        `query getProducts($first: Int) ${this.inContextParam()} {
          products(first: $first${a}) {
            nodes {
              id
              title
            } 
          }
      }`,
        { first: r }
      )
    ).products.nodes.map((u) => u.id);
  }
  async loadRecommendations(e, r, s = -1) {
    const o = (
      (
        await this.query(
          `query productRecommendations($productId: ID!, $intent: ProductRecommendationIntent) ${this.inContextParam()} {
      productRecommendations(productId: $productId, intent: $intent) {
        id
      }
    }`,
          { productId: e, intent: r.toUpperCase() }
        )
      ).productRecommendations || []
    ).map((a) => a.id);
    return s == -1 ? o : o.slice(0, s);
  }
  async newOrderByNumber(e) {
    if (h.options.newCustomerAccountsPublicKey)
      return await this.newCustomerQuery(`{
        customer {
          orders(first: 1, query: "order_number:${e}") {
            nodes {
              id
              billingAddress {
                formatted
                name
                company
              }
              shippingAddress {
                formatted
                name
                company
              }
              requiresShipping
              cancelReason
              cancelledAt
              createdAt
              email
              financialStatus
              locationName
              name
              note
              poNumber
              phone
              
              paymentInformation {
                paymentTerms {
                  nextDueAt
                  paymentTermsName
                }
                totalPaidAmount {
                  amount
                  currencyCode
                }
              }
              subtotal {
                amount
                currencyCode
              }
              totalPrice {
                amount
                currencyCode
              }
              totalRefunded {
                amount
                currencyCode
              }
              totalTax {
                amount
                currencyCode
              }
              totalShipping {
                amount
                currencyCode
              }
              fulfillments(first: 100) {
                nodes {
                  status
                  updatedAt
                  latestShipmentStatus
                  estimatedDeliveryAt
                  trackingInformation {
                    company
                    number
                    url
                  }
                }
                
              }
              lineItems(first: 100) {
                nodes {
                  id
                  customAttributes {
                    key
                    value
                  }
                  quantity
                  totalPrice {
                    amount
                  }
                  price {
                    amount
                  }
                  totalDiscount {
                    amount
                  }
                  unitPrice {
                    measurement {
                      referenceUnit
                      referenceValue
                    }
                    price {
                      amount
                    }
                  }
                  discountAllocations {
                    allocatedAmount {
                      amount
                    }
                  }
                  vendor
                  variantOptions {
                    name
                    value
                  }
                  name
                  image {
                    url
                  }
                }
                
              }
            }
          }
        }
        
        
      }`);
    {
      const r = await this.oldCustomerQuery(`
          orders(first: 1, query: "order_number:${e}") {
            nodes {
              id
              billingAddress {
                formatted
                name
                company
              }
              shippingAddress {
                formatted
                name
                company
              }
              cancelReason
              cancelledAt: canceledAt
              createdAt: processedAt
              email
              financialStatus
              name
              phone
              
              subtotal: subtotalPrice {
                amount
                currencyCode
              }
              totalPrice {
                amount
                currencyCode
              }
              totalRefunded {
                amount
                currencyCode
              }
              totalTax {
                amount
                currencyCode
              }
              totalShipping: totalShippingPrice {
                amount
                currencyCode
              }
              lineItems(first: 100) {
                nodes {
                 
                  customAttributes {
                    key
                    value
                  }
                  quantity
                  totalPrice: originalTotalPrice {
                    amount
                  }
                  
                  discountAllocations {
                    allocatedAmount {
                      amount
                    }
                  }
                
                  variant {
                    price {
                      amount
                    }
                    image {
                      url
                    }
                    product {
                      vendor
                      name: title
                    }
                    variantOptions: selectedOptions {
                      name
                      value
                    }
                  }
                }
                
              }
            }
          }`);
      return (
        (r.customer.orders.nodes = r.customer.orders.nodes.map(
          (s) => (
            (s.lineItems.nodes = s.lineItems.nodes.map(
              (n) => (
                (n = { ...n, ...n.variant }),
                (n = { ...n, ...(n.product || {}) }),
                n
              )
            )),
            s
          )
        )),
        r
      );
    }
  }
  async newOrder(e) {
    return await this.newCustomerQuery(`{
      order(id: "${e}") {
        id
        billingAddress {
          formatted
        }
        shippingAddress {
          formatted
        }
        requiresShipping
        cancelReason
        cancelledAt
        createdAt
        email
        financialStatus
        locationName
        name
        note
        poNumber
        phone
        
        paymentInformation {
          paymentTerms {
            nextDueAt
            paymentTermsName
          }
          totalPaidAmount {
            amount
            currencyCode
          }
        }
        subtotal {
          amount
          currencyCode
        }
        totalPrice {
          amount
          currencyCode
        }
        totalRefunded {
          amount
          currencyCode
        }
        totalTax {
          amount
          currencyCode
        }
        totalShipping {
          amount
          currencyCode
        }
        fulfillments(first: 100) {
          nodes {
            status
            updatedAt
            fulfillmentLineItems {
              nodes {
                lineItem {
                  id
                }
              }
            }
            latestShipmentStatus
            estimatedDeliveryAt
            trackingInformation {
              company
              number
              url
            }
          }
          
        }
        lineItems(first: 100) {
          nodes {
            id
            customAttributes {
              key
              value
            }
            quantity
            totalPrice {
              amount
            }
            price {
              amount
            }
            totalDiscount {
              amount
            }
            unitPrice {
              measurement {
                referenceUnit
                referenceValue
              }
              price {
                amount
              }
            }
            discountAllocations {
              allocatedAmount {
                amount
              }
            }
            vendor
            variantOptions {
              name
              value
            }
            name
            image {
              url
            }
          }
          
        }
      }
    }`);
  }
  async removeGiftCard(e) {
    var n;
    let r = (n = this.latestCart) == null ? void 0 : n.id;
    r || (r = (await this.cart()).id);
    const s = await this.query(
      `${U(this.parseMetafields("cart-item [metafield]", "metafield"))} 
      
      ${F}
mutation cartGiftCardCodesRemove($appliedGiftCardIds: [ID!]!, $cartId: ID!) {
  cartGiftCardCodesRemove(appliedGiftCardIds: $appliedGiftCardIds, cartId: $cartId) {
    cart {
            ...CartApiQuery
          }
          errors: userErrors {
            ...CartApiError
          }
  }
}
      `,
      { cartId: r, appliedGiftCardIds: [e] }
    );
    return s.cartGiftCardCodesRemove.errors.length > 0
      ? (this.onCartError(s.cartGiftCardCodesRemove.errors),
        s.cartGiftCardCodesRemove.errors)
      : (this.onCartChange(s.cartGiftCardCodesRemove.cart),
        s.cartGiftCardCodesRemove.cart);
  }
  async removeCoupon(e) {
    var a, i;
    e = e.toUpperCase();
    let r = (a = this.latestCart) == null ? void 0 : a.id;
    r || (r = (await this.cart()).id);
    let s = new Set();
    (i = this.latestCart) == null ||
      i.discountCodes.forEach((c) => {
        c.applicable && s.add(c.code);
      });
    let n = Array.from(s).filter((c) => c != e);
    const o = await this.query(
      `${U(this.parseMetafields("cart-item [metafield]", "metafield"))} 
      
      ${F}

      mutation cartDiscountCodesUpdate(
        $cartId: ID!
        $numCartLines: Int = 100,
        $discountCodes: [String!]
        ) {
        cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
          cart {
            ...CartApiQuery
          }
          errors: userErrors {
            ...CartApiError
          }
        }
      }`,
      { cartId: r, discountCodes: n }
    );
    return o.cartDiscountCodesUpdate.errors.length > 0
      ? (this.onCartError(o.cartDiscountCodesUpdate.errors),
        o.cartDiscountCodesUpdate.errors)
      : (this.onCartChange(o.cartDiscountCodesUpdate.cart),
        o.cartDiscountCodesUpdate.cart);
  }
  async cartDiscountCodesUpdate(e) {
    var o, a;
    e = e.toUpperCase();
    let r = (o = this.latestCart) == null ? void 0 : o.id;
    r || (r = (await this.cart()).id);
    let s = new Set();
    (a = this.latestCart) == null ||
      a.discountCodes.forEach((i) => {
        i.applicable && s.add(i.code);
      }),
      s.add(e);
    const n = await this.query(
      `${U(this.parseMetafields("cart-item [metafield]", "metafield"))} 
      
      ${F}

      mutation cartDiscountCodesUpdate(
        $cartId: ID!
        $numCartLines: Int = 100,
        $discountCodes: [String!]
        ) {
        cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
          cart {
            ...CartApiQuery
          }
          errors: userErrors {
            ...CartApiError
          }
        }
      }`,
      { cartId: r, discountCodes: Array.from(s) }
    );
    return n.cartDiscountCodesUpdate.errors.length > 0
      ? (this.onCartError(n.cartDiscountCodesUpdate.errors),
        n.cartDiscountCodesUpdate.errors)
      : (this.onCartChange(n.cartDiscountCodesUpdate.cart),
        n.cartDiscountCodesUpdate.cart);
  }
  async cartGifCardCodesUpdate(e) {
    var n;
    let r = (n = this.latestCart) == null ? void 0 : n.id;
    r || (r = (await this.cart()).id);
    const s = await this.query(
      `${U(this.parseMetafields("cart-item [metafield]", "metafield"))} 
      
      ${F}

      mutation cartGiftCardCodesUpdate(
        $cartId: ID!
        $numCartLines: Int = 100,
        $giftCardCodes: [String!]!
        ) {
        cartGiftCardCodesUpdate(cartId: $cartId, giftCardCodes: $giftCardCodes) {
          cart {
            ...CartApiQuery
          }
          errors: userErrors {
            ...CartApiError
          }
        }
      }`,
      { cartId: r, giftCardCodes: [e] }
    );
    return s.cartGiftCardCodesUpdate.errors.length > 0
      ? (this.onCartError(s.cartGiftCardCodesUpdate.errors),
        s.cartGiftCardCodesUpdate.errors)
      : (this.onCartChange(s.cartGiftCardCodesUpdate.cart),
        s.cartGiftCardCodesUpdate.cart);
  }
  async activateByToken(e, r, s) {
    const n = await this.query(
      `mutation customerActivate($id: ID!, $input: CustomerActivateInput!) {
  customerActivate(id: $id, input: $input) {
    customer {
     email
    }
    customerUserErrors {
      field
      message
    }
  }
}`,
      { id: e, input: { password: r, activationToken: s } }
    );
    if (n.customerActivate.customerUserErrors.length > 0)
      throw n.customerActivate.customerUserErrors;
    return await this.login(n.customerActivate.customer.email, r);
  }
  async resetByToken(e, r, s) {
    const n = await this.query(
      `mutation customerReset($id: ID!, $input: CustomerResetInput!) {
  customerReset(id: $id, input: $input) {
    customer {
      email
    }
    customerUserErrors {
       field
        message
    }
  }
}`,
      { id: e, input: { password: r, resetToken: s } }
    );
    if (n.customerReset.customerUserErrors.length > 0)
      throw n.customerReset.customerUserErrors;
    return await this.login(n.customerReset.customer.email, r);
  }
  async resetByUrl(e, r) {
    const s = await this.query(
      `mutation customerResetByUrl($password: String!, $resetUrl: URL!) {
        customerResetByUrl(password: $password, resetUrl: $resetUrl) {
          customer {
            email
          }
          customerUserErrors {
            field
            message
          }
        }
      }`,
      { password: e, resetUrl: r }
    );
    if (s.customerResetByUrl.customerUserErrors.length > 0)
      throw s.customerResetByUrl.customerUserErrors;
    return await this.login(s.customerResetByUrl.customer.email, e);
  }
  async recover(e) {
    const r = await this.query(
      `mutation customerRecover($email: String!) {
        customerRecover(email: $email) {
          customerUserErrors {
            field
            message
          }
        }
      }`,
      { email: e }
    );
    if (r.customerRecover.customerUserErrors.length > 0)
      throw r.customerRecover.customerUserErrors;
    return !0;
  }
  async acceptLoginNew() {
    if (
      window.location.search.includes("code") &&
      window.location.search.includes("state")
    ) {
      this.acceptingNewLogin = !0;
      let r = (await this.getShopId()).replace("gid://shopify/Shop/", "");
      const s = await Yr(
        r,
        h.options.newCustomerAccountsPublicKey,
        h.options.newCustomerLoginRedirect || window.location.origin
      );
      window.history.replaceState(null, "", window.location.pathname),
        s &&
          s.access_token &&
          (await k("__accessToken", {
            accessToken: s.access_token,
            expiresAt: Date.now() + s.expires_in * 1e3,
          }),
          await k("__id_token", s.id_token),
          await this.customerNew());
    } else await this.customerNew();
    const e = localStorage.getItem("_passwordlessRedirect");
    e &&
      (localStorage.removeItem("_passwordlessRedirect"), (window.location = e));
  }
  async queryCustomerWithCustomerAccountAPI(e, r, s = {}) {
    let n = (await this.getShopId()).replace("gid://shopify/Shop/", "");
    return (
      await (
        await fetch(
          `https://shopify.com/${n}/account/customer/api/${vt}/graphql`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: e },
            body: JSON.stringify({ operationName: "", query: r, variables: s }),
          }
        )
      ).json()
    ).data;
  }
  async newCustomerQuery(e, r = {}) {
    const s = await _("__accessToken");
    if (s && new Date(s.expiresAt) > new Date())
      return await this.queryCustomerWithCustomerAccountAPI(
        s.accessToken,
        e,
        r
      );
    throw new Error("not logged in");
  }
  async setCustomerMetafields(...e) {
    var r;
    try {
      for (let n of e)
        n.ownerId ||
          (n.ownerId = (r = this.latestCustomer) == null ? void 0 : r.id),
          n.namespace || (n.namespace = "custom");
      const s = await this.newCustomerQuery(
        `mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          key
          namespace
          value
          createdAt
          updatedAt
        }
        userErrors {
          field
          message
          code
        }
    }
}`,
        { metafields: e }
      );
      return s.metafieldsSet.userErrors.length ? s.metafieldsSet.userErrors : s;
    } catch (s) {
      return console.error(s), [{ message: s.message || "Unknown Error" }];
    }
  }
  customerNewFragment() {
    return ` id
    ${this.parseMetafields("[customer-metafield]", "customer-metafield")}
    displayName,
    emailAddress {
    emailAddress,
    marketingState
  },
  firstName,
  lastName,
  phoneNumber {
    phoneNumber
    marketingState
  }
  tags
  defaultAddress {
      formatted
      id
  }
  companyContacts(first: 1) {
    nodes {
      company {
        id
        name
        ${this.parseMetafields("[company-metafield]", "company-metafield")}
      }
      locations(first: 1) {
        nodes {
          id
        }
      }
    }
  }
  addresses(first: 10) {
    nodes {
      id
      name
      formatted
      address1
      address2
      city
      company
      firstName
      lastName
      phoneNumber
      territoryCode
      zip
      zoneCode
    }
  }`;
  }
  async associateCartWithoutToken() {
    this.buyerIdentity &&
      this.buyerIdentity.customerAccessToken &&
      (await this.associateCart(
        this.buyerIdentity.customerAccessToken,
        this.buyerIdentity.companyLocationId
      ),
      await this.cart(),
      await this.reloadProductsData());
  }
  async customerNew() {
    var r, s, n, o, a;
    const e = await _("__accessToken");
    if (e && new Date(e.expiresAt) > new Date()) {
      if (!e.customerAccessToken) {
        const i = await this.queryCustomerWithCustomerAccountAPI(
          e.accessToken,
          `mutation storefrontCustomerAccessTokenCreate {
  storefrontCustomerAccessTokenCreate {
    customerAccessToken
  }
}`
        );
        i &&
          i.storefrontCustomerAccessTokenCreate &&
          i.storefrontCustomerAccessTokenCreate.customerAccessToken &&
          ((e.customerAccessToken =
            i.storefrontCustomerAccessTokenCreate.customerAccessToken),
          await k("__accessToken", e));
      }
      if (
        (e.customerAccessToken &&
          (this.buyerIdentity = { customerAccessToken: e.customerAccessToken }),
        this.latestCustomer)
      )
        return I(A.userAuthChange, this.latestCustomer), this.latestCustomer;
      try {
        const i = await this.queryCustomerWithCustomerAccountAPI(
          e.accessToken,
          `{ 
        customer { 
         ${this.customerNewFragment()}
       }
      }`
        );
        if ((r = i.customer.companyContacts) != null && r.nodes.length)
          try {
            const c =
              (n =
                (s = i.customer.companyContacts) == null
                  ? void 0
                  : s.nodes[0].locations) == null
                ? void 0
                : n.nodes[0].id;
            c && (this.buyerIdentity.companyLocationId = c);
          } catch (c) {
            console.error(c);
          }
        return (
          (o = i.customer.emailAddress) != null &&
            o.marketingState &&
            (document.body.dataset.customerEmailStatus =
              (a = i.customer.emailAddress) == null
                ? void 0
                : a.marketingState.toLowerCase()),
          I(A.userAuthChange, i.customer),
          (this.latestCustomer = i.customer),
          i.customer
        );
      } catch {
        return S("__accessToken"), I(A.userAuthChange, null), null;
      }
    } else return S("__accessToken"), I(A.userAuthChange, null), null;
  }
  async customer() {
    const e = await _("__accessToken");
    if (e && new Date(e.expiresAt) > new Date()) {
      const r = await this.query(`{
          customer(customerAccessToken: "${e.accessToken}") {
            id,
            ${this.parseMetafields(
              "[customer-metafield]",
              "customer-metafield"
            )}
            displayName,
            email,
            firstName,
            lastName,
            tags,
            numberOfOrders,
            phone
            defaultAddress {
                name
                formatted
            }
          }
        }`);
      return I(A.userAuthChange, r.customer), r.customer;
    } else return S("__accessToken"), I(A.userAuthChange, null), null;
  }
  async oldCustomerQuery(e) {
    const r = await _("__accessToken");
    if (r && new Date(r.expiresAt) > new Date())
      return await this.query(`{
          customer(customerAccessToken: "${r.accessToken}") {
            ${e}
        }
      }`);
    throw new Error("not logged in");
  }
  async queryCustomer(e) {
    let r;
    try {
      return (
        h.options.newCustomerAccountsPublicKey
          ? (r = await this.newCustomerQuery(`{
          customer {
            ${e}
          }
        }`))
          : (r = await this.oldCustomerQuery(e)),
        r
      );
    } catch (s) {
      throw new Error("Failed to query customer", s.message);
    }
  }
  async renewToken() {
    const e = await _("__accessToken"),
      r = await this.query(
        `mutation customerAccessTokenRenew($customerAccessToken: String!) {
        customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
          customerAccessToken {
            accessToken,
            expiresAt
          }
          userErrors {
            field
            message
          }
        }
      }`,
        { customerAccessToken: e.accessToken }
      );
    return (
      await k("__accessToken", r.customerAccessTokenRenew.customerAccessToken),
      r.customerAccessTokenRenew
    );
  }
  async logout() {
    const e = await _("__accessToken");
    if ((S("_cart_id"), h.options.newCustomerAccountsPublicKey)) {
      const r = await _("__id_token");
      return r
        ? (S("__accessToken"),
          `https://shopify.com/${await this.getShopId()}/auth/logout?id_token_hint=${r}`)
        : (S("__accessToken"), I(A.userAuthChange, null), !0);
    } else {
      S("__accessToken");
      const r = this.query(
        `mutation customerAccessTokenDelete($customerAccessToken: String!) {
          customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
            deletedAccessToken
            deletedCustomerAccessTokenId
            userErrors {
              field
              message
            }
          }
        }`,
        { customerAccessToken: e.accessToken }
      );
      return I(A.userAuthChange, null), r;
    }
  }
  formatWithDelimiters(e, r = 2, s = ",", n = ".") {
    if (isNaN(e) || e == null) return "0";
    let a = (e / 100).toFixed(r).split("."),
      i = a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + s),
      c = a[1] ? n + a[1] : "";
    return i + c;
  }
  formatMoney(e, r = !1, s = !1) {
    typeof e == "string" &&
      (e.split(".")[1].length == 1 && (e += "0"),
      (e = Number(e.replace(".", ""))));
    let n = "",
      o = null;
    if (window.smCustomPriceFormat) return window.smCustomPriceFormat(e);
    if (document.documentElement.dataset.addTaxes == "true" && !s) {
      const c = Number(document.documentElement.dataset.taxRate) || 0;
      if (c > 0) {
        const u = 1 + c;
        (o = e),
          (e = Math.trunc(e * u)),
          (e = Math.round(e / 100)),
          (e = e * 100);
      } else {
        o = e;
        const u = 1 - c;
        (e = Math.trunc(e / u)), (e = Math.round(e / 100)), (e = e * 100);
      }
    }
    const a = this.format || "${{amount}}";
    switch (a.match(At)[1]) {
      case "amount":
        n = this.formatWithDelimiters(e, 2);
        break;
      case "amount_no_decimals":
        n = this.formatWithDelimiters(e, 0, ",");
        break;
      case "amount_with_comma_separator":
        n = this.formatWithDelimiters(e, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        n = this.formatWithDelimiters(e, 0, ".", ",");
        break;
      case "amount_with_apostrophe_separator":
        n = this.formatWithDelimiters(e, 2, "'", ".");
        break;
      case "amount_no_decimals_with_space_separator":
        n = this.formatWithDelimiters(e, 0, " ", " ");
        break;
      case "amount_with_space_separator":
        n = this.formatWithDelimiters(e, 2, " ", ",");
        break;
      case "amount_with_period_and_space_separator":
        n = this.formatWithDelimiters(e, 0, " ", ".");
        break;
    }
    if (this.formatter && h.options.useBrowserFormatter)
      return o != null && !r
        ? `<smootify-prop data-original-cents="${o}">${this.formatter.format(
            e / 100
          )}</smootify-prop>`
        : this.formatter.format(e / 100);
    const i = a.replace(At, n);
    return o != null && !r
      ? `<smootify-prop data-original-cents="${o}">${i}</smootify-prop>`
      : i;
  }
  async getShopId() {
    const e = await _("shopId");
    if (e) return e;
    const r = await this.query(`{
        shop {
          id
        }
      }`);
    return (
      await k("shopId", r.shop.id.replace("gid://shopify/Shop/", "")),
      r.shop.id.replace("gid://shopify/Shop/", "")
    );
  }
  async getMoneyFormat() {
    const e =
      h.options.cacheDuration > 0
        ? await Mr("moneyFormatV2")
        : await _("moneyFormatV2");
    if (e) return e;
    const r = await this.query(`query Shop {
        shop {
          moneyFormat
        }
      }`);
    return (
      h.options.cacheDuration > 0
        ? await Le(
            "moneyFormatV2",
            r.shop.moneyFormat,
            h.options.cacheDuration * 5
          )
        : await k("moneyFormatV2", r.shop.moneyFormat),
      r.shop.moneyFormat
    );
  }
  async getCartId() {
    return this.latestCart
      ? this.latestCart.id
      : new Promise((e) => {
          Ot(A.cartUpdated, (r) => {
            e(r.id);
          });
        });
  }
  async changeCountryByCountryIsoCode(e, r = !0) {
    const { localization: s } = await this.getLocalization(),
      n = s.availableCountries.find((o) => o.isoCode == e);
    n && this.changeCountry(n, !0, r);
  }
  async changeLanguageByCode(e, r = !0) {
    const { localization: s } = await this.getLocalization();
    s.availableLanguages.find((n) => n.isoCode == e) &&
      ((this.language = e),
      localStorage.setItem("language", e),
      r && (this.cart(), this.reloadProductsData()));
  }
  async changeCountry(e, r = !0, s = !0) {
    const n = this.country;
    (this.country = e.isoCode),
      r && localStorage.setItem("country", e.isoCode),
      localStorage.setItem("countryName", e.name);
    let o = this.format;
    const a = o.match(/\{\{[\s\S]*\}\}/gm),
      i = (o.replace(a[0], "").match(/\S*/gm) || []).filter((l) => !!l);
    h.options.useBrowserFormatter && this.tryToParseFormatter(e),
      i && i[0]
        ? (this.format = o.replace(i[0], e.currency.symbol))
        : (this.format = `${e.currency.symbol}${a[0]}`),
      await k("moneyFormatV2", this.format),
      document.querySelectorAll('[currency="isoCode"]').forEach((l) => {
        l.textContent = e.currency.isoCode;
      });
    const c = await this.getCartId(),
      u = this.latestCart;
    u.buyerIdentity.countryCode != e.isoCode &&
      (await this.query(`mutation {
        cartBuyerIdentityUpdate(
          cartId: "${c}"
          buyerIdentity: {
            countryCode: ${e.isoCode}
          }
        ) {
          cart {
            id
            buyerIdentity {
              countryCode
            }
          }
        }
        
      }`)),
      u.buyerIdentity.countryCode != e.isoCode ||
      (!n && this.latestContextParams.country != e.isoCode)
        ? (this.cart(), this.reloadProductsData())
        : requestAnimationFrame(() => {
            document
              .querySelectorAll('smootify-product[data-id^="gid://"]')
              .forEach((l) => {
                l.product &&
                  !l.alignVariantSearchParam &&
                  l.onVariantChange(
                    l.product.variants.nodes.find(
                      (p) => p.availableForSale == !0
                    ) || l.product.variants.nodes[0]
                  );
              });
          }),
      I(A.countryChanged, { country: e, oldCountry: n });
  }
  async _queryLocalization() {
    return await this.query(`query ${this.inContextParam()} {
      localization {

        availableLanguages {
          isoCode
          endonymName
        }

        availableCountries {
          currency {
            isoCode
            name
            symbol
          }
          availableLanguages {
            isoCode
            endonymName
          }
          isoCode
          name
        }
          language {
            isoCode
          }
        country {
          currency {
            isoCode
            name
            symbol
          }
          isoCode
          name
        }
      }
    }`);
  }
  tryToParseFormatter(e) {
    try {
      let s = navigator.languages.find((n) => n.endsWith(e.isoCode));
      this.formatter = new Intl.NumberFormat(
        s || e.availableLanguages[0].isoCode.toLowerCase() + "-" + e.isoCode,
        { style: "currency", currency: e.currency.isoCode }
      );
    } catch {}
  }
  async getLocalization() {
    const e = await rs("localization", () => this._queryLocalization(), 5),
      r = e.localization.country;
    h.options.useBrowserFormatter &&
      ((r.availableLanguages = [e.localization.language]),
      this.tryToParseFormatter(r));
    let s = this.format || (await this.getMoneyFormat());
    const n = s.match(/\{\{[\s\S]*\}\}/gm),
      o = (s.replace(n[0], "").match(/\S*/gm) || []).filter((a) => !!a);
    return (
      o && o[0]
        ? (this.format = s.replace(o[0], r.currency.symbol))
        : (this.format = `${r.currency.symbol}${n[0]}`),
      e
    );
  }
  async query(e, r, s = !1) {
    const {
      data: n,
      errors: o,
      extensions: a,
    } = await this.client.request(e, { variables: r });
    try {
      if (a && a.context && s) {
        const { country: i, language: c } = a.context;
        (this.country = i),
          document.querySelector(".w-locales-list") || (this.language = c);
      }
    } catch {}
    if (o && o.graphQLErrors && o.graphQLErrors.length) {
      if (h.isDevMode) {
        let i = e.split("(")[0].replace("query ", "").replace("mutation ", "");
        h.queries.push({
          name: i,
          query: e,
          variables: r,
          errors: o.graphQLErrors,
        });
      }
      throw o.graphQLErrors;
    }
    if (n) {
      if (h.isDevMode) {
        let i = e.split("(")[0].replace("query ", "").replace("mutation ", "");
        h.queries.push({ name: i, query: e, variables: r, data: n });
      }
      return n;
    }
    throw o;
  }
  async loginNew() {
    if (!h.options.newCustomerAccountsPublicKey) {
      h.isDevMode &&
        h.showContextErrorBanner(
          document.body,
          "To use Passwordless Login you must add the Public Key to your Smootify Options",
          "https://docs.smootify.io/js-utilities/options/",
          3e3
        );
      return;
    }
    let e = (await this.getShopId()).replace("gid://shopify/Shop/", "");
    await Zr(
      e,
      h.options.newCustomerAccountsPublicKey,
      h.options.newCustomerLoginRedirect || window.location.origin
    );
  }
  async search(
    e,
    r,
    s = 100,
    n = [],
    o = "",
    a = "",
    i = void 0,
    c = !1,
    u = "SHOW"
  ) {
    const l = [];
    for (let f of n) Array.isArray(f) ? l.push(...f) : l.push(f);
    let p = pt(
      JSON.stringify({
        query: e,
        cursorType: r,
        first: s,
        filters: n,
        collectionId: o,
        after: a,
        sortKey: i,
        reversed: c,
        unavailableProducts: u,
      })
    );
    if (((n = l), this.searchCache.has(p))) return this.searchCache.get(p);
    if (o) {
      const f = await this.query(
        `query SearchInCollection(
        $cId: ID!,
        $first: Int = 100,
        $productFilters: [ProductFilter!] = [],
        $after: String,
        $sortKey: ProductCollectionSortKeys
        $reverse: Boolean = false
      ) ${this.inContextParam()} {
        collection(id: $cId) {
          products(${r == "after" ? "first" : "last"}: $first, ${
          r == "after" ? "after" : "before"
        }: $after, reverse: $reverse, sortKey: $sortKey, filters: $productFilters) {
             pageInfo {
            hasNextPage
            endCursor
            hasPreviousPage
            startCursor
          }
          
            nodes {
              id
              title
            }
            filters {
              id
              label
              type
              values {
                label
                input
                count
                id
                swatch {
                  color
                  image {
                    previewImage {
                      url
                    }
                  }
                }
              }
            }
          }
         
        }
      }`,
        {
          cId: o,
          first: s,
          productFilters: n,
          query: e || "",
          after: a || null,
          sortKey: i,
          reverse: c,
          unavailableProducts: u,
        }
      );
      let y = 0;
      const g = f.collection.products.filters;
      if (f.collection.products.nodes.length <= s)
        y = f.collection.products.nodes.length;
      else {
        const m = g.find((C) => C.id == "filter.v.availability");
        if (m) for (let C of m.values) y += C.count;
      }
      const w = {
        totalCount: y,
        nodes: f.collection.products.nodes,
        productFilters: g,
        pageInfo: f.collection.products.pageInfo,
      };
      return this.searchCache.set(p, w), w;
    }
    const d = (
      await this.query(
        `
    query Search(
    $first: Int = 100,
    $productFilters: [ProductFilter!] = []
    $query: String = "",
    $after: String,
    $sortKey: SearchSortKeys,
    $reverse: Boolean = false,
    $unavailableProducts: SearchUnavailableProductsType = LAST
    ) ${this.inContextParam()} {
      search(unavailableProducts: $unavailableProducts, sortKey: $sortKey, reverse: $reverse, query: $query, types: [PRODUCT], ${
        r == "after" ? "first" : "last"
      }: $first, productFilters: $productFilters, ${
          r == "after" ? "after" : "before"
        }: $after) {
        totalCount
        nodes {
          ... on Product {
            id
            title
          }
        }
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
        productFilters  {
          id
          label
          presentation,
          type
          values {
            label
            input
            count
            id
            swatch {
                  color
                  image {
                    previewImage {
                      url
                    }
                  }
              }
          }
        }
      }
    }`,
        {
          first: s,
          productFilters: n,
          query: e || "",
          after: a || null,
          sortKey: i,
          reverse: c,
          unavailableProducts: u,
        }
      )
    ).search;
    return this.searchCache.set(p, d), d;
  }
  async loadAllColorPatterns() {
    if (this.patterns) return I(A.colorPatterns, this.patterns), this.patterns;
    const e = await B.getTTL("color_patterns");
    if (e.data && Array.isArray(e.data))
      (this.patterns = e.data),
        I(A.colorPatterns, this.patterns),
        e.expired &&
          requestAnimationFrame(async () => {
            const r = this._loadAllColorPatterns();
            I(A.colorPatterns, this.patterns),
              B.setTTL("color_patterns", r, 60),
              (this.patterns = r);
          });
    else {
      const r = await this._loadAllColorPatterns();
      return (
        B.setTTL("color_patterns", r, 60),
        (this.patterns = r),
        I(A.colorPatterns, this.patterns),
        this.patterns
      );
    }
  }
  async _loadAllColorPatterns() {
    const e = [];
    let r = !0,
      s = "";
    for (; r; ) {
      const n = await this.query(`{
        metaobjects(type: "shopify--color-pattern", first: 100${
          s ? `, after: "${s}"` : ""
        }) {
   	nodes {
      name: field(key: "label") {
            value
          },
      image: field(key: "image") {
          reference {
            ... on MediaImage {
                previewImage {
                 originalSrc
               }
              }
            }
           
        }
        color: field(key: "color") {
          value
        }
    }
    pageInfo {
        hasNextPage
        endCursor
    }
  }
}`);
      e.push(...n.metaobjects.nodes),
        (r = n.metaobjects.pageInfo.hasNextPage),
        (s = n.metaobjects.pageInfo.endCursor || "");
    }
    return e;
  }
  async getProducts() {
    return (
      await this.query(`
      ${nt}
      query Products(
        $first: Int = 100
      ) {
        products(first: $first) {
          nodes {
            ...Product
          }
        }
      }
      `)
    ).products.nodes;
  }
  async getSwatchFromPattern(e) {
    var s, n;
    if (!e) return null;
    const r = await this.loadAllColorPatterns();
    if (r && Array.isArray(r)) {
      let o = (r || []).find((a) => {
        var i;
        return (
          ((i = a == null ? void 0 : a.name) == null ? void 0 : i.value) == e
        );
      });
      return o
        ? {
            image: (s = o.image) == null ? void 0 : s.value,
            color: (n = o.color) == null ? void 0 : n.value,
          }
        : null;
    }
    return null;
  }
  async getMetaobjectSwatchById(e) {
    var s, n, o, a;
    if (this.swatchesCache[e]) return this.swatchesCache[e];
    const r = await this.query(`{
      metaobject(id: "${e}") {
        image: field(key: "image") {

          reference {
            ... on MediaImage {
              previewImage {
               originalSrc
             }
            }
          }
         
        }
        color: field(key: "color") {
          value
        }
      }
    }`);
    if (r.metaobject) {
      const i = {
        image:
          ((o =
            (n = (s = r.metaobject.image) == null ? void 0 : s.reference) ==
            null
              ? void 0
              : n.previewImage) == null
            ? void 0
            : o.originalSrc) || "",
        color: ((a = r.metaobject.color) == null ? void 0 : a.value) || "",
      };
      return (this.swatchesCache[e] = i), i;
    }
    return null;
  }
  async orders(e = 5, r, s) {
    return h.options.newCustomerAccountsPublicKey &&
      h.options.newCustomerAccountsPublicKey != ""
      ? this._newOrders(e, r, s)
      : this._oldOrders(e, r, s);
  }
  async subscriptions(e = 5, r, s) {
    return h.options.newCustomerAccountsPublicKey &&
      h.options.newCustomerAccountsPublicKey != ""
      ? this._newSubscriptions(e, r, s)
      : { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } };
  }
  async activateSubscription(e) {
    const r = await _("__accessToken");
    if (
      (e.startsWith("gid://shopify/SubscriptionContract/") ||
        (e = `gid://shopify/SubscriptionContract/${e}`),
      r)
    ) {
      if (!(new Date(r.expiresAt) > new Date()))
        return S("__accessToken"), [{ message: "Not logged in" }];
    } else return [{ message: "Not logged in" }];
    return (
      await this.queryCustomerWithCustomerAccountAPI(
        r.accessToken,
        `mutation subscriptionContractActivate($subscriptionContractId: ID!) {
  subscriptionContractActivate(subscriptionContractId: $subscriptionContractId) {
    contract {
      status
    }
    userErrors {
      field
      message
    }
  }
}`,
        { subscriptionContractId: e }
      )
    ).subscriptionContractActivate;
  }
  async cancelSubscription(e) {
    const r = await _("__accessToken");
    if (
      (e.startsWith("gid://shopify/SubscriptionContract/") ||
        (e = `gid://shopify/SubscriptionContract/${e}`),
      r)
    ) {
      if (!(new Date(r.expiresAt) > new Date()))
        return S("__accessToken"), [{ message: "Not logged in" }];
    } else return [{ message: "Not logged in" }];
    return (
      await this.queryCustomerWithCustomerAccountAPI(
        r.accessToken,
        `mutation subscriptionContractCancel($subscriptionContractId: ID!) {
  subscriptionContractCancel(subscriptionContractId: $subscriptionContractId) {
    contract {
      status
    }
    userErrors {
      field
      message
    }
  }
}`,
        { subscriptionContractId: e }
      )
    ).subscriptionContractCancel;
  }
  async pauseSubscription(e) {
    const r = await _("__accessToken");
    if (
      (e.startsWith("gid://shopify/SubscriptionContract/") ||
        (e = `gid://shopify/SubscriptionContract/${e}`),
      r)
    ) {
      if (!(new Date(r.expiresAt) > new Date()))
        return S("__accessToken"), [{ message: "Not logged in" }];
    } else return [{ message: "Not logged in" }];
    return (
      await this.queryCustomerWithCustomerAccountAPI(
        r.accessToken,
        `mutation subscriptionContractPause($subscriptionContractId: ID!) {
  subscriptionContractPause(subscriptionContractId: $subscriptionContractId) {
    contract {
      status
    }
    userErrors {
      field
      message
    }
  }
}`,
        { subscriptionContractId: e }
      )
    ).subscriptionContractPause;
  }
  async subscriptionById(e) {
    const r = await _("__accessToken");
    if (
      (e.startsWith("gid://shopify/SubscriptionContract/") ||
        (e = `gid://shopify/SubscriptionContract/${e}`),
      r)
    ) {
      if (!(new Date(r.expiresAt) > new Date()))
        return (
          S("__accessToken"),
          { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } }
        );
    } else
      return { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } };
    return (
      await this.queryCustomerWithCustomerAccountAPI(
        r.accessToken,
        `{
      customer {
        subscriptionContract(id: "${e}") {
             id
              originOrder {
              id
                name
                cancelReason
                billingAddress {
                  formatted
                }
                shippingAddress {
                  formatted
                }
              }
              billingPolicy {
                interval
                intervalCount {
                  count
                }
                maxCycles
                minCycles
              }
              createdAt
              currencyCode
              deliveryMethod {
                ... on SubscriptionDeliveryMethodShipping {
                __typename
                  address {
                    address1
                    address2
                    city
                    company
                    country
                    countryCode
                    firstName
                    lastName
                    name
                    phone
                    province
                    provinceCode
                    zip
                  }
                  shippingOption {
                   description
                   presentmentTitle
                    title
                  }
                }
                ... on SubscriptionDeliveryMethodPickup {
                __typename
                  pickupOption {
                   description
                   presentmentTitle
                    title
                  pickupAddress {
                    address1
                    address2
                    city
                    countryCode
                    phone
                    zoneCode
                    zip
                   }
                  }
                }
                ... on SubscriptionDeliveryMethodLocalDelivery {
                __typename
                  address {
                    address1
                    address2
                    city
                    company
                    country
                    countryCode
                    firstName
                    lastName
                    name
                    phone
                    province
                    provinceCode
                    zip
                  }
                  localDeliveryOption {
                    description
                    instructions
                    phone
                    presentmentTitle
                    title
                  }
                }
  
              }
              deliveryPolicy {
                interval
                intervalCount {
                  count
                }
              }
              deliveryPrice {
                amount
                currencyCode
              }
              id
              lastBillingAttemptErrorType
              lastPaymentStatus
              linesCount {
               count
              }
              nextBillingDate
              note
              status
              lines(first: 100) {
              nodes {
                currentPrice {
                  amount
                  currencyCode
                }
                lineDiscountedPrice {
                 amount
                 currencyCode
                }
                id
                image {
                  url
                }
                name
                quantity
                title
                sku
                variantTitle
                variantImage {
                 url
                }
                }
              }
              upcomingBillingCycles(first: 3) {
                nodes {
                  billingAttemptExpectedDate
                  cycleEndAt
                  cycleIndex
                  cycleStartAt
                  edited
                  skipped
                  status
                }
              }
          }
        }
      }`
      )
    ).customer.subscriptionContract;
  }
  async _newSubscriptions(e = 5, r, s) {
    const n = await _("__accessToken");
    if (n) {
      if (!(new Date(n.expiresAt) > new Date()))
        return (
          S("__accessToken"),
          { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } }
        );
    } else
      return { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } };
    return (
      await this.queryCustomerWithCustomerAccountAPI(
        n.accessToken,
        `{
      customer {
        subscriptionContracts(reverse: true, ${
          s == "before" ? "last" : "first"
        }: ${e}${
          r ? (s == "before" ? `, before: "${r}"` : `, after: "${r}"`) : ""
        }) {
          nodes {
             id
              originOrder {
                id
                name
                cancelReason
                billingAddress {
                  formatted
                }
                shippingAddress {
                  formatted
                }
              }
              billingPolicy {
                interval
                intervalCount {
                  count
                }
                maxCycles
                minCycles
              }
              createdAt
              currencyCode
              deliveryMethod {
                ... on SubscriptionDeliveryMethodShipping {
                __typename
                  address {
                    address1
                    address2
                    city
                    company
                    country
                    countryCode
                    firstName
                    lastName
                    name
                    phone
                    province
                    provinceCode
                    zip
                  }
                  shippingOption {
                   description
                   presentmentTitle
                    title
                  }
                }
                ... on SubscriptionDeliveryMethodPickup {
                __typename
                  pickupOption {
                   description
                   presentmentTitle
                    title
                  pickupAddress {
                    address1
                    address2
                    city
                    countryCode
                    phone
                    zoneCode
                    zip
                   }
                  }
                }
                ... on SubscriptionDeliveryMethodLocalDelivery {
                __typename
                  address {
                    address1
                    address2
                    city
                    company
                    country
                    countryCode
                    firstName
                    lastName
                    name
                    phone
                    province
                    provinceCode
                    zip
                  }
                  localDeliveryOption {
                    description
                    instructions
                    phone
                    presentmentTitle
                    title
                  }
                }
  
              }
              deliveryPolicy {
                interval
                intervalCount {
                  count
                }
              }
              deliveryPrice {
                amount
                currencyCode
              }
              id
              lastBillingAttemptErrorType
              lastPaymentStatus
              linesCount {
               count
              }
              nextBillingDate
              note
              status
              lines(first: 100) {
              nodes {
                currentPrice {
                  amount
                  currencyCode
                }
                lineDiscountedPrice {
                 amount
                 currencyCode
                }
                id
                image {
                  url
                }
                name
                quantity
                title
                sku
                variantTitle
                variantImage {
                 url
                }
                }
              }
              upcomingBillingCycles(first: 3) {
                nodes {
                  billingAttemptExpectedDate
                  cycleEndAt
                  cycleIndex
                  cycleStartAt
                  edited
                  skipped
                  status
                }
              }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    }`
      )
    ).customer.subscriptionContracts;
  }
  async _newOrders(e = 5, r, s) {
    const n = await _("__accessToken");
    if (n) {
      if (!(new Date(n.expiresAt) > new Date()))
        return (
          S("__accessToken"),
          { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } }
        );
    } else
      return { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } };
    return (
      await this.queryCustomerWithCustomerAccountAPI(
        n.accessToken,
        `{
      customer {
        orders(reverse: true, ${s == "before" ? "last" : "first"}: ${e}${
          r ? (s == "before" ? `, before: "${r}"` : `, after: "${r}"`) : ""
        }) {
          nodes {
              billingAddress {
                formatted
              }
              cancelReason
              cancelledAt
              email
              financialStatus
              fulfillments(first: 1) {
                nodes {
                  status
                }
              }
              id
              name
              note
              orderNumber: number
              phone
              processedAt
              shippingAddress {
                formatted
              }
              totalPrice {
                amount
              }
              totalRefunded {
                amount
              }
              lineItems(first: 100) {
                nodes {
                  id
                  customAttributes {
                    key
                    value
                  }
                  quantity
                  totalPrice {
                    amount
                  }
                  price {
                    amount
                  }
                  totalDiscount {
                    amount
                  }
                  unitPrice {
                    measurement {
                      referenceUnit
                      referenceValue
                    }
                    price {
                      amount
                    }
                  }
                  discountAllocations {
                    allocatedAmount {
                      amount
                    }
                  }
                  vendor
                  variantOptions {
                    name
                    value
                  }
                  name
                  image {
                    url
                  }
                }
                
              }
              totalTax {
                amount
              }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    }`
      )
    ).customer.orders;
  }
  async _oldOrders(e = 5, r, s) {
    const n = await _("__accessToken");
    if (n && !(new Date(n.expiresAt) > new Date()))
      return (
        S("__accessToken"),
        { nodes: [], pageInfo: { hasNextPage: !1, hasPreviousPage: !1 } }
      );
    const o = await this.query(`{
      customer(customerAccessToken: "${n.accessToken}") {
        orders(reverse: true, ${s == "before" ? "last" : "first"}: ${e}${
      r ? (s == "before" ? `, before: "${r}"` : `, after: "${r}"`) : ""
    }) {
          nodes {
              billingAddress {
                formatted
              }
              cancelReason
              canceledAt
              customerUrl
              email
              financialStatus
              fulfillmentStatus
              id
              name
              orderNumber
              phone
              processedAt
              shippingAddress {
                formatted
              }
              statusUrl
              totalPrice {
                amount
              }
              totalRefunded {
                amount
              }
              totalShippingPrice {
                amount
              }
              totalTax {
                amount
              }
              lineItems(first: 100) {
                nodes {
                  quantity
                  name: title
                  customAttributes {
                    key
                    value
                  }
                  totalPrice: originalTotalPrice {
                      amount
                  }
                  
                  totalDiscount: discountedTotalPrice {
                    amount
                  }
                  variant {
                    image {
                      url
                    }
                    price {
                        amount
                    }
                    variantOptions: selectedOptions {
                      name
                      value
                      
                    }
                    sku
                  }
                }
              }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    }`);
    return (
      (o.customer.orders.nodes = o.customer.orders.nodes.map(
        (a) => (
          (a.lineItems.nodes = a.lineItems.nodes.map(
            (i) => (
              (i = { ...i, ...i.variant }),
              (i = { ...i, ...(i.product || {}) }),
              i
            )
          )),
          a
        )
      )),
      o.customer.orders
    );
  }
  queueUpProductsLoad(e) {
    this._loadTimeout && clearTimeout(this._loadTimeout),
      e && this.productsToLoad.push(e),
      (this._loadTimeout = setTimeout(() => {
        this.country ? this.loadProductsData() : this.queueUpProductsLoad();
      }, 15));
  }
  async reloadProductsData() {
    (this.products = {}),
      document
        .querySelectorAll('smootify-product[data-id^="gid://"]')
        .forEach((e) => e.reload && e.reload());
  }
  nestedProperty(e) {
    for (const r in e)
      return typeof e[r] == "object"
        ? this.nestedProperty(e[r])
        : { [r]: e[r] };
  }
  async reloadExpiredData(e, r) {
    document
      .querySelectorAll(`smootify-product[data-id="${e}"]`)
      .forEach((s) => {
        let n = rr(r, s.product);
        try {
          for (let i in n) n[i] || delete n[i];
        } catch {}
        let o = !1;
        const a = Object.keys(n || {});
        if (a.length > 2) o = !0;
        else if (
          a.length == 2 &&
          a.includes("media") &&
          a.includes("metafields")
        )
          try {
            let i = n.media,
              c = n.metafields,
              u = Object.values(i.nodes).every(
                (p) => Object.keys(p).length == 1 && !!p.variantId
              ),
              l = Object.values(c).every((p) => {
                const d = pe(p, "references.nodes");
                return !!(
                  d &&
                  Object.values(d)
                    .map((f) => this.nestedProperty(f))
                    .every((f) => f.namespace == "custom")
                );
              });
            (!u || !l) && (o = !0);
          } catch (i) {
            console.error(i), (o = !0);
          }
        else
          (a.length == 1 && a.includes("media")) ||
          (a.length == 1 && a.includes("metafields"))
            ? pe(n, "media.nodes[0].variantId")
              ? (o = !1)
              : (o = !0)
            : a.length != 0 && (o = !0);
        o &&
          s.handleProductLoad &&
          (s.alignVariantSearchParam
            ? ((s.product = r),
              s.handleProductLoadNoEvents(r, !0),
              requestAnimationFrame(() => {
                s.dispatchEvent(new CustomEvent("smootify:reload"));
              }))
            : (s.handleProductLoad(r, !0),
              requestAnimationFrame(() => {
                s.dispatchEvent(new CustomEvent("smootify:reload"));
              })));
      });
  }
  preparseMetafields(e, r) {
    let s = fe.get(e) || new Set();
    document.querySelectorAll(e).forEach((n) => {
      const o = n.hasAttribute("namespace")
          ? je(n.getAttribute("namespace"))
          : "custom",
        a = je(n.getAttribute(r));
      s.has(o + "." + a) || s.add(o + "." + a);
    }),
      fe.set(e, s);
  }
  async fetchNodes(e) {
    return (
      await this.query(`{
      nodes(ids: ${JSON.stringify(e)}) {
        id
        ... on GenericFile {
            url
            alt
          }
          ... on Video {
            previewImage {
              url
            }
            sources {
              url
              format
              height
              mimeType
              width
            }
          }
          ... on Metaobject {
              handle
              fields {
                key
                type
                value
                 reference {
                  ${q}
                }
                references(first: 100) {
                  nodes {
                   ${q}
                  }
                }
              }
          }
          ... on MediaImage {
            alt
            image {
              url
            }
          }
      }
    }`)
    ).nodes;
  }
  parseMetafields(e, r, s = document.documentElement) {
    let n = fe.get(e) || new Set(),
      o = !e.includes("cart-item"),
      a = [];
    n.forEach((l) => {
      const [p, d] = l.split(".");
      a.push({ key: d, namespace: p });
    }),
      e.includes("customer") &&
        s
          .querySelectorAll(
            "customer-metafields-editor input, customer-metafields-editor file-input"
          )
          .forEach((l) => {
            const p = l.hasAttribute("namespace")
                ? L(l.getAttribute("namespace"))
                : "custom",
              d = L(l.getAttribute("name") || "");
            d &&
              (n.has(p + "." + d) ||
                (n.add(p + "." + d), a.push({ key: d, namespace: p })));
          }),
      s.querySelectorAll(e).forEach((l) => {
        const p = l.hasAttribute("namespace")
          ? L(l.getAttribute("namespace"))
          : "custom";
        let d = l.getAttribute(r);
        const f = L(d);
        n.has(p + "." + f) ||
          (n.add(p + "." + f), a.push({ key: f, namespace: p }));
      });
    const i = e.replace(r, "if-" + r);
    s.querySelectorAll(i).forEach((l) => {
      const p = l.hasAttribute("namespace")
          ? L(l.getAttribute("namespace"))
          : "custom",
        d = l.getAttribute("if-" + r);
      if (!d) return;
      const f = L(d);
      n.has(p + "." + f) ||
        (n.add(p + "." + f), a.push({ key: f, namespace: p }));
    });
    const c = e.replace(r, "unless-" + r);
    if (
      (s.querySelectorAll(c).forEach((l) => {
        const p = l.hasAttribute("namespace")
            ? L(l.getAttribute("namespace"))
            : "custom",
          d = l.getAttribute("unless-" + r);
        if (!d) return;
        const f = L(d);
        n.has(p + "." + f) ||
          (n.add(p + "." + f), a.push({ key: f, namespace: p }));
      }),
      r.includes("customer") || r.includes("company"))
    )
      return a.length
        ? `metafields(identifiers: ${JSON.stringify(a).replace(
            /"([^(")"]+)":/g,
            "$1:"
          )}) {
        type
        value
        key
        namespace
        
      }`
        : "";
    let u = o
      ? `reference {
                  ${q}
                }
                references(first: 100) {
                  nodes {
                   ${q}
                  }
                }`
      : "";
    return (
      window._metafieldsDefsFilter &&
        (a = window._metafieldsDefsFilter(e, r, a)),
      a.length
        ? `metafields(identifiers: ${JSON.stringify(a).replace(
            /"([^(")"]+)":/g,
            "$1:"
          )}) {
      type
      value
      key
      namespace
      references(first: 100) {
        nodes {
          ... on GenericFile {
            url
            alt
          }
          ... on Video {
            previewImage {
              url
            }
            sources {
              url
              format
              height
              mimeType
              width
            }
          }
          ... on Metaobject {
              handle
              fields {
                key
                type
                value
                 reference {
                  ${q}
                  ... on Metaobject {
              handle
              fields {
                key
                type
                value
                 reference {
                  ${q}
                }
                references(first: 100) {
                  nodes {
                   ${q}
                  }
                }
              }
          }
                }
                references(first: 100) {
                  nodes {
                   ${q}
                   ... on Metaobject {
              handle
              fields {
                key
                type
                value
                 ${u}
              }
          }
                  }
                }
              }
          }
          ... on MediaImage {
            alt
            image {
              url
            }
          }
        }
        
      }
      reference {
        ... on GenericFile {
          url
          alt
        }
        ... on Metaobject {
              handle
              fields {
                key
                type
                value
                reference {
                  ${q}
                  ... on Metaobject {
              handle
              fields {
                key
                type
                value
                ${u}
              }
          }
                }
                references(first: 100) {
                  nodes {
                   ${q}
                   ... on Metaobject {
              handle
              fields {
                key
                type
                value
                ${u}
              }
          }
                  }
                }
              }
        }
        ... on Video {
          previewImage {
            url
          }
          sources {
            url
            format
            height
            mimeType
            width
          }
        }
        ... on MediaImage {
          alt
          image {
            url
          }
        }
      }
    }`
        : ""
    );
  }
  async loadAllProducts(e, r = "") {
    const s = [];
    let n = !0,
      o = "";
    for (; n; ) {
      const a = await this.query(`${e} {
        products(first: 100${o ? `, after: "${o}"` : ""}${ // PATCHED HERE: replaced 200 with 100
        r ? `, query: "${r}"` : ""
      }) {
        nodes {
          ...Product
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
      }`);
      s.push(...a.products.nodes),
        (n = a.products.pageInfo.hasNextPage),
        (o = a.products.pageInfo.endCursor || "");
    }
    return s;
  }
  async preloadAllProducts(e, r, s = "") {
    const n = [];
    let o = !0,
      a = "";
    for (; o; ) {
      const i = await this.query(`${r} {
        products(first: 50${a ? `, after: "${a}"` : ""}${
        s ? `, query: "${s}"` : ""
      }) {
        nodes {
          ...Product
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
      }`);
      for (let c of i.products.nodes)
        B.setTTL(c.id + e, c, h.options.cacheDuration),
          s && this.reloadExpiredData(c.id, c);
      localStorage.setItem("_lastPreloadedDate" + e, Date.now().toString()),
        n.push(...i.products.nodes),
        n.length && T(`${s || "Preloaded"} ${n.length} products | ${e}`),
        (o = i.products.pageInfo.hasNextPage),
        (a = i.products.pageInfo.endCursor || "");
    }
    return n;
  }
  async preloadProductsNew(e, r) {
    this.preloadListeners[e] = !0;
    let s = Number(localStorage.getItem("_lastPreloadedDate" + e)) || 0;
    if (s == 0) T(`Preloading products | ${e}`), this.preloadAllProducts(e, r);
    else {
      const n = new Date(s).toISOString();
      await this.preloadAllProducts(
        e,
        r,
        `updated_at:>'${n}' OR created_at:>'${n}'`
      );
    }
  }
  async preloadProducts(e, r) {
    this.preloadListeners[e] = !0;
    let s = Number(localStorage.getItem("_lastPreloadedDate" + e)) || 0;
    const n = Je();
    let o = s > 0 ? s + h.options.cacheDuration * 6e4 : 0;
    n > s &&
      (T(`Webflow site published after last cached date | ${e}`),
      Br(),
      (o = 0));
    let a = Number(localStorage.getItem("_nextPreloadDate" + e)) || 0;
    if (Date.now() > o) {
      T(`Preloading products | ${e}`);
      const i = await this.loadAllProducts(r);
      for (let c of i) await Le(c.id + e, c, h.options.cacheDuration);
      T(`Preloaded ${i.length} products | ${e}`),
        localStorage.setItem("_lastPreloadedDate" + e, Date.now().toString());
    } else if (Date.now() > a) {
      const i = new Date(s).toISOString(),
        c = await this.loadAllProducts(r, `updated_at:>'${i}'`);
      T(`Updated products: ${c.length} | ${e}`);
      for (let d of c) await Le(d.id + e, d, h.options.cacheDuration);
      const u = await Ur(e);
      await Or(u),
        localStorage.setItem("_lastPreloadedDate" + e, Date.now().toString());
      const l = (h.options.cacheDuration / 4) * 1e3 * 60,
        p = Date.now() + l;
      T("Scheduled check at: " + new Date(p).toLocaleString() + " | " + e),
        localStorage.setItem("_nextPreloadDate" + e, p.toString());
    } else
      T("Next cache check in " + (a - Date.now()) / 1e3 + "s | " + e),
        setTimeout(() => {
          this.preloadProducts(e, r);
        }, a - Date.now());
  }
  async loadProductsData() {
    const e = `${nt(
        this.parseMetafields("smootify-product [metafield]", "metafield"),
        this.parseMetafields(
          "smootify-product [variant-metafield], smootify-variant [variant-metafield]",
          "variant-metafield"
        ),
        !!document.querySelector("dynamic-property"),
        !!document.querySelector("variant-swatches [option]"),
        !!document.querySelector("smootify-add-to-cart[use-magic-box]")
      )}`,
      r = this.inContextParam(),
      s = "_" + pt(e + r);
    let n = new Set();
    if (h.options.cacheDuration > 0) {
      const i = h.options.productsBase;
      let c = window.location.pathname.includes(`/${i}/`),
        u = c ? document.documentElement.dataset.wfItemSlug : "";
      for (let l of this.productsToLoad) {
        const p = l + s,
          d = await B.getTTL(p);
        d.data &&
          ((this.products[p] = d.data),
          d.data._context
            ? Object.entries(this.latestContextParams)
                .filter((y) => !!y[1])
                .some((y) => d.data._context[y[0]] != y[1]) &&
              ((d.expired = !0), delete this.products[p])
            : ((d.expired = !0), delete this.products[p]),
          c &&
            u &&
            d.data.handle == u &&
            (Date.now() - (d.created || 0)) / 1e3 > 100 &&
            (d.expired = !0),
          d.expired && n.add(l));
      }
    }
    const o = this.productsToLoad.filter((i) => !!this.products[i + s]);
    for (let i of o)
      this.products[i + s] &&
        I(A.productLoaded, { product: this.products[i + s], id: i });
    const a = this.productsToLoad.filter((i) => !this.products[i + s]);
    if (
      (h.options.preload &&
        !this.preloadListeners[s] &&
        B.isAvailable() &&
        h.options.cacheDuration > 0 &&
        ((this.preloadListeners[s] = !0),
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.preloadProductsNew(s, e);
          });
        }, 1500)),
      n.size)
    ) {
      const i = [];
      Array.from(n).forEach((c) => {
        this._alreadyReloaded.has(c) ||
          (this._alreadyReloaded.add(c), i.push(c));
      }),
        requestAnimationFrame(() => {
          this.__load(e, s, i, r, !0);
        });
    }
    return a.length == 0
      ? this.products
      : (await this.__load(e, s, a, r), this.products);
  }
  async __load(e, r, s, n, o = !1) {
    let a;
    if (((s = Array.from(new Set(s))), s.length == 0)) return;
    try {
      a = await this.query(`
      ${e}
      query ProductsById ${n} {
      ${s.map(
        (c) => `${c.replace(
          "gid://shopify/Product/",
          "Product_"
        )}:product (id: "${c}") {
            ...Product
         }
         `
      )}
      }
      `);
    } catch (c) {
      if (c[0] && c[0].message) {
        h.isDevMode &&
          h.showContextErrorBanner(document.body, c[0].message, "", 3e3);
        return;
      }
      console.error(c);
      return;
    }
    const i = this.inContextParam();
    for (let c in a) {
      const u = c.replace("Product_", "gid://shopify/Product/"),
        l = this.cleanupProductsData(a[c]);
      (this.products[u + r] = l),
        h.options.cacheDuration > 0 &&
          B.isAvailable() &&
          n == i &&
          B.setTTL(u + r, this.products[u + r], h.options.cacheDuration),
        o
          ? this.reloadExpiredData(u, a[c])
          : I(A.productLoaded, { product: a[c], id: u });
    }
  }
  async loadVariantData(e) {
    let r;
    try {
      return (
        (r = await this.query(`
      query VariantById ${this.inContextParam()} {
        ${Fr(e)}
      }
      `)),
        r.node
      );
    } catch (s) {
      if (s[0] && s[0].message) {
        h.isDevMode &&
          h.showContextErrorBanner(document.body, s[0].message, "", 3e3);
        return;
      }
      console.error(s);
      return;
    }
  }
  cleanupProductsData(e) {
    return (
      e &&
        e.options &&
        (e.options = e.options.map(
          (r) => (
            (r.values = r.values.filter((s) =>
              e.variants.nodes.find((n) =>
                n.selectedOptions.find((o) => o.name == r.name && o.value == s)
              )
            )),
            r
          )
        )),
      e && (e._context = this.latestContextParams),
      e
    );
  }
  async getProductMetafields(e, r) {
    return (
      await this.query(`
    {
      product(id: "${e}") {
      ${r.map(
        (
          n
        ) => `${n.identifier}: metafield(namespace: "${n.namespace}", key: "${n.key}") {
          value
          type
        }
       `
      )}
     }
  }`)
    ).product;
  }
  onCartChange(e) {
    this.latestCart &&
      e.id == this.latestCart.id &&
      (e.checkoutUrl = this.latestCart.checkoutUrl),
      (this.latestCart = e),
      requestAnimationFrame(() => {
        const r = e.id.split("/").pop(),
          { token: s, store: n } = h.store.options;
        document.querySelectorAll("a[shopify-link]").forEach((o) => {
          let a = o.getAttribute("shopify-link") || "cart",
            i = 0;
          const c = e.lines.nodes
            .map((u) => {
              var f;
              const l =
                  (f = u == null ? void 0 : u.merchandise) == null
                    ? void 0
                    : f.id.split("/").pop(),
                p = u == null ? void 0 : u.quantity;
              let d = "";
              if (
                (l && (d = `${l}:${p}`),
                u.lineComponents && (i += u.lineComponents.length),
                u.attributes)
              ) {
                const y = {};
                for (let g of u.attributes) g.value && (y[g.key] = g.value);
                if (Object.keys(y).length) {
                  const g = JSON.stringify(y);
                  if (g) {
                    const w = btoa(g);
                    (d += `?properties=${w}`), i++;
                  }
                }
              }
              return d || null;
            })
            .filter((u) => !!u)
            .join(",");
          a == "cart" &&
            (i == 0
              ? (a = "cart/" + c + "?storefront=true&access_token=" + s.trim())
              : i == 1
              ? (a = "cart/" + c + "&storefront=true&access_token=" + s.trim())
              : (a = `cart/?cart=${encodeURIComponent(r)}`)),
            o.setAttribute("href", `https://${n}.myshopify.com/${a}`);
        });
      }),
      I(A.cartUpdated, e);
  }
  onCartError(e) {
    I(A.errors, e);
  }
  async addBoxToCart(e, r, s = !1) {
    e.forEach((n, o) => {
      (n.attributes = n.attributes || []),
        o == 0
          ? (r.discount_percentage &&
              ((r._i = Yt(r.discount_percentage, 7)),
              delete r.discount_percentage),
            n.attributes.push({ key: "_boxData", value: JSON.stringify(r) }))
          : n.attributes.push({ key: "_boxID", value: r.id });
    }),
      await h.store.cartLinesAdd(e, s, !0);
  }
  async cartLinesUpdateQuantity(e) {
    var o, a, i, c, u;
    let r = (o = this.latestCart) == null ? void 0 : o.id;
    r || (r = (await this.cart()).id);
    const s = this.latestCart.lines.nodes;
    for (let l of e) {
      const p = s.find((d) => d.id == l.id);
      p &&
        ((i = (a = p.sellingPlanAllocation) == null ? void 0 : a.sellingPlan) !=
          null &&
          i.id &&
          (l.sellingPlanId =
            (u =
              (c = p.sellingPlanAllocation) == null ? void 0 : c.sellingPlan) ==
            null
              ? void 0
              : u.id),
        p.attributes && (l.attributes = p.attributes));
    }
    const n = await this.query(
      `${U(this.parseMetafields("cart-item [metafield]", "metafield"))} 

      
      
      ${F}

      mutation cartLinesUpdate(
        $cartId: ID!, 
        $numCartLines: Int = 100,
        $lines: [CartLineUpdateInput!]!
        )  ${this.inContextParam(!0)} {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart  {
            ...CartApiQuery
          }
          errors: userErrors {
            ...CartApiError
          }
        }
      }`,
      { cartId: r, lines: e }
    );
    return n.cartLinesUpdate.errors.length > 0
      ? (this.onCartError(n.cartLinesUpdate.errors),
        n.cartLinesUpdate.cart && this.onCartChange(n.cartLinesUpdate.cart),
        n.cartLinesUpdate.errors)
      : (this.onCartChange(n.cartLinesUpdate.cart), n.cartLinesUpdate.cart);
  }
  async cartLinesRemove(e, r = !0) {
    var o;
    let s = (o = this.latestCart) == null ? void 0 : o.id;
    s || (s = (await this.cart()).id);
    const n = await this.query(
      `${U(this.parseMetafields("cart-item [metafield]", "metafield"))} 
      
      ${F}
      mutation cartLinesRemove (
        $cartId: ID!, 
        $lineIds: [ID!]!
        $numCartLines: Int = 100
        ) ${this.inContextParam(!0)}  {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
            ...CartApiQuery
          }
          errors: userErrors {
            ...CartApiError
          }
        }
      }`,
      { cartId: s, lineIds: e }
    );
    return r
      ? n.cartLinesRemove.errors.length > 0
        ? (this.onCartError(n.cartLinesRemove.errors), n.cartLinesRemove.errors)
        : (I(A.removedFromCart, e),
          this.onCartChange(n.cartLinesRemove.cart),
          n.cartLinesRemove.cart)
      : n.cartLinesRemove.cart || n.cartLinesRemove.errors;
  }
  async associateCart(e, r) {
    const s = await _("_cart_id");
    return (
      await this.query(
        `mutation cartBuyerIdentityUpdate($buyerIdentity: CartBuyerIdentityInput!, $cartId: ID!) {
        cartBuyerIdentityUpdate(buyerIdentity: $buyerIdentity, cartId: $cartId) {
          cart {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
        {
          buyerIdentity: { customerAccessToken: e, companyLocationId: r },
          cartId: s,
        }
      )
    ).cartBuyerIdentityUpdate;
  }
  async associateCartCountry(e) {
    const r = await _("_cart_id");
    return (
      await this.query(
        `mutation cartBuyerIdentityUpdate($buyerIdentity: CartBuyerIdentityInput!, $cartId: ID!) {
        cartBuyerIdentityUpdate(buyerIdentity: $buyerIdentity, cartId: $cartId) {
          cart {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
        { buyerIdentity: { countryCode: e }, cartId: r }
      )
    ).cartBuyerIdentityUpdate;
  }
  async login(e, r) {
    const s = await this.query(
      `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            field
            message
          }
        }
      }`,
      { input: { email: e, password: r } }
    );
    if (s.customerAccessTokenCreate.customerUserErrors.length == 0)
      return (
        await k(
          "__accessToken",
          s.customerAccessTokenCreate.customerAccessToken
        ),
        this.associateCart(
          s.customerAccessTokenCreate.customerAccessToken.accessToken
        ),
        this.customer()
      );
    throw s.customerAccessTokenCreate.customerUserErrors;
  }
  async register(e) {
    const r = await this.query(
      `
          mutation customerCreate($input: CustomerCreateInput!) {
            customerCreate(input: $input) {
              customer {
               id
              }
              customerUserErrors {
                field
                message
              }
            }
          }
          `,
      { input: { ...e } }
    );
    if (r.customerCreate.customerUserErrors.length == 0)
      return await this.login(e.email, e.password);
    throw r.customerCreate.customerUserErrors;
  }
  async predictiveSearch(e, r, s = 10) {
    const n = this.parseMetafields("[metafield]", "metafield", r);
    return (
      await this.query(
        `${jr}
        query Search(
          $limit: Int = 10, 
          $query: String!
          $limitScope: PredictiveSearchLimitScope = EACH
          $types: [PredictiveSearchType!] = [PRODUCT, QUERY],
          $searchableFields: [SearchableField!] = [BODY, PRODUCT_TYPE, TAG, TITLE, VARIANTS_SKU, VENDOR, VARIANTS_TITLE]
        ) ${this.inContextParam()} {
        predictiveSearch(query: $query, limit: $limit, types: $types, searchableFields: $searchableFields, limitScope: $limitScope)  {
          products {
            
              ...Product
              ${n}
          }
          queries {
            
              styledText,
              text
            
          }
        }
      }`,
        { query: e, limit: s }
      )
    ).predictiveSearch;
  }
  async cartLinesAdd(e, r = !1, s = !0, n = "") {
    var i;
    let o = (i = this.latestCart) == null ? void 0 : i.id;
    o || (o = (await this.cart()).id);
    const a = await this.query(
      `${U(this.parseMetafields("cart-item [metafield]", "metafield"))} 
      
      ${F}
      mutation cartLinesAdd (
        $cartId: ID!, 
        $lines: [CartLineInput!]!
        $numCartLines: Int = 100
        ) ${this.inContextParam(!0)}  {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            ...CartApiQuery
          }
          errors: userErrors {
            ...CartApiError
          }
          warnings {
            code
            message
            target
          }
        }
      }`,
      { cartId: o, lines: e }
    );
    if (
      a.cartLinesAdd.errors.length > 0 ||
      a.cartLinesAdd.warnings.length > 0
    ) {
      if (n) {
        const c = a.cartLinesAdd.cart.lines.nodes
          .filter(
            (u) =>
              !!(u.attributes || []).find(
                (l) => l.key == "_bundleUid" && l.value == n
              )
          )
          .map((u) => u.id);
        this.cartLinesRemove(c),
          this.onCartError(
            a.cartLinesAdd.errors.length
              ? a.cartLinesAdd.errors
              : a.cartLinesAdd.warnings
          );
      } else
        this.onCartError(
          a.cartLinesAdd.errors.length
            ? a.cartLinesAdd.errors
            : a.cartLinesAdd.warnings
        ),
          a.cartLinesAdd.cart && this.onCartChange(a.cartLinesAdd.cart);
      return a.cartLinesAdd.errors;
    } else
      return (
        s &&
          I(A.addedToCart, {
            lines: e,
            cart: a.cartLinesAdd.cart,
            goToCheckout: r,
          }),
        r && (await this.goToCheckout()),
        s && this.onCartChange(a.cartLinesAdd.cart),
        a.cartLinesAdd.cart
      );
  }
  async updateCartAttributes(e) {
    var s;
    let r = (s = this.latestCart) == null ? void 0 : s.id;
    return (
      r || (r = (await this.cart()).id),
      await this.query(
        `mutation cartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!) {
        cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
          cart {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
        { cartId: r, attributes: e }
      )
    );
  }
  async clearCart() {
    const e = this.latestCart || (await this.cart());
    if (e.lines.nodes.length)
      return await this.cartLinesRemove(e.lines.nodes.map((r) => r.id));
  }
  async deleteCart() {
    await S("_cart_id"), await this.cart();
  }
  async getCartAsDraftOrderData(e, r, s = []) {
    const n = h.store.latestCart || (await h.store.cart());
    let o = [],
      a = 0;
    for (let u of n.lines.nodes) {
      const l = {};
      if (!u.sellingPlanAllocation) {
        if (
          ((l.quantity = u.quantity || 1),
          (l.variantId = u.merchandise.id),
          u.attributes && u.attributes.length)
        ) {
          l.customAttributes = u.attributes || [];
          const p = l.customAttributes.find((d) => d.key == ke);
          p &&
            ((l.customAttributes = l.customAttributes.filter(
              (d) => d.key != ke
            )),
            (l.priceOverride = {
              amount: p.value,
              currencyCode: n.cost.totalAmount.currencyCode || "USD",
            }));
        }
        if (u.lineComponents && u.lineComponents.length) {
          if (
            u.lineComponents.find((d) =>
              (d.attributes || []).find((f) => f.key == "_boxData")
            )
          )
            for (let d of u.lineComponents) {
              const f = {};
              (f.quantity = d.quantity || 1),
                (f.variantId = d.merchandise.id),
                d.attributes &&
                  d.attributes.length &&
                  (f.customAttributes = d.attributes || []),
                o.push(f);
            }
          else {
            a++,
              (l.uuid = crypto.randomUUID().replace(/-/gm, "")),
              (l.bundleComponents = u.lineComponents.map((y) => ({
                variantId: y.merchandise.id,
                quantity: y.quantity || 1,
                uuid: crypto.randomUUID().replace(/-/gm, ""),
              })));
            let d =
                `Items: 
` +
                u.lineComponents.map(
                  (y) => `${y.merchandise.product.title} x ${y.quantity}`
                ).join(`
`),
              f = `Bundle (${a})`;
            s.push({ key: f, value: d });
          }
          delete l.variantId;
        }
        o.push(l);
      }
    }
    o = o.filter((u) => !!u.variantId);
    const i = h.store.latestCustomer,
      c = { input: { lineItems: o, customAttributes: s } };
    return (
      r && (c.input.note = r),
      i && i.id && (c.customerId = i.id),
      e && (c.email = e),
      n.cost.subtotalAmount.currencyCode &&
        (c.input.presentmentCurrencyCode = n.cost.subtotalAmount.currencyCode),
      c
    );
  }
  async cart(e = !0) {
    var s;
    const r = await _("_cart_id");
    if (
      (fe.get("cart-item [metafield]") ||
        this.preparseMetafields("cart-item [metafield]", "metafield"),
      r)
    )
      try {
        const n = await this.query(
          `query CartQuery(
              $cartId: ID!
              $numCartLines: Int = 100
            ) ${this.inContextParam(!0)} {
              cart(id: $cartId) {
                ...CartApiQuery
              }
            }
          
            ${U(this.parseMetafields("cart-item [metafield]", "metafield"))}
          `,
          { cartId: r },
          !0
        );
        return n.cart == null
          ? (await S("_cart_id"), this.cart())
          : this.country &&
            n.cart.buyerIdentity.countryCode != this.country &&
            !((s = n.cart.buyerIdentity.customer) != null && s.id)
          ? (await this.associateCartCountry(this.country), this.cart())
          : (n.cart.buyerIdentity.countryCode &&
              e &&
              (document.querySelector(".w-locales-list") ||
                (localStorage.getItem("_apiChangedCountry") == "true"
                  ? this.country &&
                    n.cart.buyerIdentity.countryCode != this.country &&
                    this.changeCountryByCountryIsoCode(this.country, !1)
                  : (n.cart.buyerIdentity.countryCode &&
                      this.changeCountryByCountryIsoCode(
                        n.cart.buyerIdentity.countryCode,
                        !1
                      ),
                    (this.country = n.cart.buyerIdentity.countryCode)))),
            this.onCartChange(n.cart),
            n.cart);
      } catch (n) {
        return (
          T(`Error getting cart: ${n[0].message}`),
          await S("_cart_id"),
          this.cart()
        );
      }
    else {
      const n = {},
        o = await _("__accessToken");
      o &&
        (new Date(o.expiresAt) > new Date()
          ? (n.buyerIdentity = { customerAccessToken: o.accessToken })
          : S("__accessToken"));
      const a = await this.query(
        `#graphql
            mutation cartCreate(
              $input: CartInput!
              $numCartLines: Int = 100
            ) ${this.inContextParam(!0)} {
              cartCreate(input: $input) {
                cart {
                  ...CartApiQuery
                }
                errors: userErrors {
                  ...CartApiError
                }
              }
            }
            ${U(this.parseMetafields("cart-item [metafield]", "metafield"))}
            ${F}`,
        { input: n },
        !0
      );
      return a.cartCreate.cart == null
        ? (await S("__accessToken"), this.cart())
        : (await k("_cart_id", a.cartCreate.cart.id),
          this.onCartChange(a.cartCreate.cart),
          a.cartCreate.cart);
    }
  }
}
const an = "1.0.6",
  xo = "smootify-add-to-cart",
  Oo = "smootify-cart",
  Mo = "smootify-product",
  Uo = "smootify-variant",
  No = "smootify-price",
  cn = "smootify-search",
  un = "smootify-search-page",
  ln = "smootify-search-discovery",
  Bo = "login-form",
  jo = "register-form",
  Fo = "logout-form",
  Wo = "customer-orders",
  Vo = "recover-form",
  Ho = "reset-form",
  Go = "filter-list",
  zo = "filter-search",
  Ko = "filter-select",
  Qo = "filter-dropdown",
  Jo = "filter-swatches",
  Xo = "filter-price",
  Yo = "filter-checkbox",
  dn = [
    {
      name: "Search & discovery",
      load: async () =>
        document.querySelector(ln) &&
        v(
          () => import("./index.BeqDsNX5.js"),
          __vite__mapDeps([0, 1, 2]),
          import.meta.url
        ),
    },
    {
      name: "Search",
      load: async () =>
        document.querySelector(un) &&
        v(
          () => import("./index.CtY1Vlek.js"),
          __vite__mapDeps([3, 1, 2, 4]),
          import.meta.url
        ),
    },
    {
      name: "Predictive Search",
      load: async () =>
        document.querySelector(cn) &&
        v(
          () => import("./index.D9FpL3Sf.js"),
          __vite__mapDeps([5, 6]),
          import.meta.url
        ),
    },
    {
      name: "Cart Upsell",
      load: () =>
        v(
          () => import("./index.RAwXw8B0.js"),
          __vite__mapDeps([7, 8]),
          import.meta.url
        ),
    },
    {
      name: "Store Locator",
      load: async () =>
        document.querySelector("store-locator") &&
        v(
          () => import("./index.oLzKeBr2.js"),
          __vite__mapDeps([9, 10]),
          import.meta.url
        ),
    },
    {
      name: "Magic Box",
      load: async () =>
        document.querySelector("smootify-magic-box") &&
        v(
          () => import("./index.8w28wUEI.js"),
          __vite__mapDeps([11, 12, 13]),
          import.meta.url
        ),
    },
    {
      name: "Wishlist",
      load: async () =>
        document.querySelector(
          'wishlist-toggle, smootify-product[data-id="wishlist"], [wishlist="count"]'
        ) &&
        v(
          () => import("./index.CFnnzxFw.js"),
          __vite__mapDeps([14, 15, 16]),
          import.meta.url
        ),
    },
    {
      name: "Last Viewed",
      load: async () => {
        const t = h.options.productsBase;
        (document.querySelector('smootify-product[data-id="last-viewed"]') ||
          window.location.pathname.includes(`/${t}/`)) &&
          v(
            () => import("./index.DvyL1BIv.js"),
            __vite__mapDeps([17, 15, 16]),
            import.meta.url
          );
      },
    },
  ],
  fn = [
    {
      name: "Product File Upload",
      load: async () =>
        document.querySelector("file-uploader, dynamic-property") &&
        v(
          () => import("./index.JoAArBaS.js"),
          __vite__mapDeps([18, 19, 20]),
          import.meta.url
        ),
    },
    {
      name: "Newsletter Subscription",
      load: async () =>
        document.querySelector("newsletter-subscribe") &&
        v(
          () => import("./index.oxbpll45.js"),
          __vite__mapDeps([21, 12]),
          import.meta.url
        ),
    },
    {
      name: "Draft Orders",
      load: async () =>
        v(() => import("./index.BE2Qfuxr.js"), [], import.meta.url),
      unload: () => {
        document
          .querySelectorAll("smootify-cart[data-draft]")
          .forEach((t) => t.removeAttribute("data-draft"));
      },
    },
    {
      name: "Name your price",
      load: async () =>
        document.querySelector("name-your-price") &&
        v(() => import("./index.DG7_sVa9.js"), [], import.meta.url),
      unload: () => {
        document.querySelectorAll("name-your-price").forEach((t) => t.remove());
      },
    },
    {
      name: "Metaobject creator",
      load: async () =>
        document.querySelector("metaobject-creator") &&
        v(
          () => import("./index.B6IHhWVl.js"),
          __vite__mapDeps([22, 12]),
          import.meta.url
        ),
      unload: () => {
        document
          .querySelectorAll("metaobject-creator")
          .forEach((t) => t.remove());
      },
    },
    {
      name: "Product configurator",
      load: async () =>
        document.querySelector(yt.join(",")) &&
        v(
          () => import("./index.Dq8-kq8J.js").then((t) => t.i),
          __vite__mapDeps([23, 24]),
          import.meta.url
        ),
      unload: () => {
        document.querySelectorAll(yt.join(",")).forEach((t) => t.remove());
      },
    },
  ];
function pn(t, e) {
  try {
    if (!t) return "";
    const r = new URL(t);
    for (let s of e) r.searchParams.set(s[0], s[1]);
    return r.toString().replace(r.origin, "");
  } catch {
    return "";
  }
}
function hn() {
  document.querySelectorAll("product-slider").forEach((t) => {
    var n;
    const e = t.querySelector(".w-slider"),
      r = t.querySelector(".w-dyn-item smootify-product"),
      s = t.querySelector("swiper-container");
    if (e && r) {
      const o = e.querySelector(".w-slider-mask"),
        a = Array.from(e.querySelectorAll(".w-slide")),
        i = a[0].cloneNode(!0);
      a.forEach((l) => l.remove());
      const c = document.createDocumentFragment();
      t.querySelectorAll(".w-dyn-item").forEach((l) => {
        const p = i.cloneNode(!0);
        p.append(l), c.append(p);
      }),
        o == null || o.append(c);
      const u = (n = window.Webflow) == null ? void 0 : n.require("slider");
      u && (u.redraw(), u.ready()),
        t.querySelectorAll(".w-dyn-list").forEach((l) => l.remove());
    } else if (s && r) {
      const o = Array.from(s.querySelectorAll("swiper-slide")),
        a = o[0].cloneNode(!0);
      o.forEach((c) => c.remove());
      const i = document.createDocumentFragment();
      t.querySelectorAll(".w-dyn-item").forEach((c) => {
        const u = a.cloneNode(!0);
        u.append(c), i.append(u);
      }),
        s == null || s.append(i),
        t.querySelectorAll(".w-dyn-list").forEach((c) => c.remove());
    }
  });
}
async function mn() {
  const t = document.querySelectorAll("dynamic-swiper");
  if (t.length) {
    document
      .querySelectorAll("dynamic-swiper swiper-container")
      .forEach((r) => r.setAttribute("init", "false"));
    const { register: e } = await v(
      async () => {
        const { register: r } = await import(
          "./swiper-element-bundle.C3JH5JOF.js"
        );
        return { register: r };
      },
      [],
      import.meta.url
    );
    e(),
      t.forEach((r) => {
        const s = r.querySelector("swiper-container");
        if (!s) {
          r.remove();
          return;
        }
        const n = Array.from(r.querySelectorAll("swiper-slide")),
          o = n[0].cloneNode(!0);
        n.forEach((u) => u.remove());
        const a = document.createDocumentFragment();
        r.querySelectorAll(".w-dyn-item, .sm-dyn-item").forEach((u) => {
          const l = o.cloneNode(!0);
          l.append(u), a.append(l);
        }),
          s.append(a),
          r.querySelectorAll(".w-dyn-list").forEach((u) => u.remove());
        const i = r.querySelector('script[type="application/json"]'),
          c = i ? JSON.parse(i.textContent || "{}") : {};
        i == null || i.remove(), Object.assign(s, c), s.initialize();
      });
  }
}
function yn(t) {
  const e = document.createElement("script");
  (e.type = "speculationrules"), (e.textContent = t), document.body.append(e);
}
function gn(t, e, r) {
  if (
    HTMLScriptElement.supports &&
    HTMLScriptElement.supports("speculationrules")
  ) {
    const s = {
      prerender: [
        { where: { href_matches: `/${t}/*` }, eagerness: "moderate" },
        { where: { href_matches: `/${e}/*` }, eagerness: "conservative" },
        { where: { href_matches: `/${r}/*` }, eagerness: "conservative" },
      ],
    };
    yn(JSON.stringify(s));
    return;
  }
}
const _t = { "Magic Box": !0 },
  wn = {
    showOnlyActiveImages: !1,
    productsBase: "product",
    collectionsBase: "collection",
    vendorsBase: "vendor",
    accountBase: "account",
    invalidProductRedirectUrl: "/",
    newCustomerAccountsPublicKey: "",
    orderPageUrl: "/account/order",
    subscriptionPageUrl: "/account/subscription",
    selectMarketBasedOnBrowserLanguage: !1,
    enableAutoTrack: !0,
    cacheDuration: 0,
    useBrowserFormatter: !1,
    preload: !0,
    avoidWebflowIXRestart: !1,
    activeImagesMode: "position",
  },
  bn = { calculatedAtCheckout: "Calculated at checkout" };
class Cn {
  constructor() {
    b(this, "store");
    b(this, "on", Mt);
    b(this, "once", Ot);
    b(this, "withLatest", Vr);
    b(this, "when", Wr);
    b(this, "until", ot);
    b(this, "options");
    b(
      this,
      "isDevMode",
      window.location.hostname.includes("localhost") ||
        window.location.hostname.includes(".webflow.io") ||
        window.location.hostname.includes("canvas.webflow.com") ||
        (window.location.hostname == "localhost" &&
          (document.documentElement.dataset.wfDomain || "").includes(
            ".webflow.io"
          ))
    );
    b(this, "shopifySiteId");
    b(this, "labels");
    b(
      this,
      "isPreviewMode",
      window.location.hostname.includes("canvas.webflow.com")
    );
    b(this, "loadedExtensions", []);
    b(this, "plan", "free");
    b(this, "authorizedDomains", []);
    b(this, "queries", []);
    b(this, "utmParams", "");
    (this.options = { ...wn, ...(window.SmootifyUserOptions || {}) }),
      (this.labels = { ...bn, ...(window.SmootifyLabels || {}) }),
      this.isPreviewMode
        ? ((this.options.preload = !1),
          window.addEventListener("message", (e) => {
            var r;
            ((r = e == null ? void 0 : e.data) == null ? void 0 : r.type) ==
              "pageHref" &&
              this.showContextErrorBanner(
                document.body,
                "Page change in preview is not supported, exit preview to change the CMS item",
                "",
                5e3
              );
          }),
          ["interactive", "complete"].includes(document.readyState)
            ? this.onLoad()
            : addEventListener("DOMContentLoaded", () => {
                this.onLoad();
              }))
        : ["interactive", "complete"].includes(document.readyState)
        ? this.onLoad()
        : addEventListener("DOMContentLoaded", () => {
            this.onLoad();
          });
  }
  onLoad() {
    this.options.preload &&
      (this.options.cacheDuration || (this.options.cacheDuration = 10),
      gn(
        this.options.productsBase,
        this.options.collectionsBase,
        this.options.vendorsBase
      )),
      this.beforeStore(),
      this.getStore();
  }
  beforeStore() {
    hn(), mn();
  }
  showContextErrorBanner(e, r, s, n = 0) {
    v(() => import("./error-banner.Bo6DkNvX.js"), [], import.meta.url).then(
      () => {
        const o = document.createElement("smootify-error-banner");
        (o.textContent = r),
          s && o.setAttribute("data-url", s),
          e.append(o),
          n != 0 && setTimeout(() => o.remove(), n);
      }
    );
  }
  async getCurrencyCode() {}
  async loadProduct(e) {
    return new Promise((r) => {
      this.store.queueUpProductsLoad(e),
        ot(
          A.productLoaded,
          (s) => {
            r(s.product);
          },
          (s) => s.id == e
        );
    });
  }
  async enableAnalytics(e = !1) {
    try {
      (await v(() => import("./evn.BFjiJtWp.js"), [], import.meta.url)).init(e);
    } catch {}
  }
  getProductUrl(e) {
    const r = window.smootifyProductsBase || this.options.productsBase;
    return this.utmParams.length > 0
      ? `${N()}/${r}/${e.replace(/_/gm, "")}?${this.utmParams}`
      : `${N()}/${r}/${e.replace(/_/gm, "")}`;
  }
  getCollectionUrl(e) {
    const r = window.smootifyCollectionsBase || this.options.collectionsBase;
    return this.utmParams.length > 0
      ? `${N()}/${r}/${e}?${this.utmParams}`
      : `${N()}/${r}/${e}`;
  }
  getVendorUrl(e) {
    const r = window.smootifyVendorsBase || this.options.vendorsBase;
    let s = (e || "").toLowerCase().replace(/ /gm, "-");
    return this.utmParams.length > 0
      ? `${N()}/${r}/${s}?${this.utmParams}`
      : `${N()}/${r}/${s}`;
  }
  applyUTMParams(e) {
    (this.utmParams = new URLSearchParams(e).toString()),
      document.querySelectorAll('a[href^="/"]').forEach((r) => {
        const s = pn(r.href, e);
        s && r.setAttribute("href", s);
      });
  }
  getAccountUrl() {
    const e = window.smootifyAccountPage || this.options.accountBase;
    return `${N()}/${e}`;
  }
  isAccountPage() {
    const e =
      N() + "/" + (window.smootifyAccountPage || this.options.accountBase);
    return window.location.pathname == e;
  }
  isAccountFolder() {
    const e =
      N() + "/" + (window.smootifyAccountPage || this.options.accountBase);
    let r =
      window.location.pathname.startsWith(e) &&
      window.location.pathname.split("/").length > 2;
    return (
      r &&
      (["login", "register", "reset", "activate", "recover"].some((s) =>
        window.location.pathname.includes(s)
      )
        ? !1
        : r)
    );
  }
  async getSmootifyTokenType() {
    const e = Ms();
    try {
      const s = await (
        await fetch(`https://cdn.smootify.io/keys/${e}.json?v=${Je()}`)
      ).json();
      return (
        Array.isArray(s.a) || (s.a = []),
        (s.s = s.s.replace(".myshopify.com", "").replace("https://", "")),
        (s.w = (s.w || "").replace("https://", "")),
        s.w.endsWith("/") && (s.w = s.w.slice(0, -1)),
        s
      );
    } catch {
      return new Error("NOT_FOUND");
    }
  }
  showErrorBanner(
    e = `To connect your custom domain "${window.location.hostname}" you need an active Smootify Plan`
  ) {
    v(() => import("./banner.DfZjeCyo.js"), [], import.meta.url).then(() => {
      const r = document.createElement("smootify-banner");
      (r.textContent = e), document.body.append(r);
    });
  }
  showBanner() {
    v(() => import("./banner.DfZjeCyo.js"), [], import.meta.url).then(() => {
      const e = document.createElement("smootify-banner");
      (e.textContent = this.isPreviewMode
        ? "Preview mode"
        : "Made with Smootify"),
        document.body.append(e);
    });
  }
  handleToken(e) {
    if (e instanceof Error)
      return this.showErrorBanner("Project not Connected"), !1;
    if (
      (e.i &&
        (this.shopifySiteId = e.i.replace("gid://shopify/Metaobject/", "")),
      (e.p = e.p == "true"),
      e.l ? (this.plan = e.l) : e.p && (this.plan = "premium"),
      e.p || new Date(e.e || 0).getTime() > Date.now())
    ) {
      const r = e.w
        .split("|")
        .filter((n) => !!n)
        .map(
          (n) => (
            (n = n.trim()),
            (n = n.replace("https://", "")),
            (n = n.endsWith("/") ? n.substring(0, n.length - 1) : n),
            (n =
              !n.startsWith("www.") && !n.startsWith("www2.") ? "www." + n : n),
            n
          )
        );
      this.authorizedDomains = r;
      const s = window.location.hostname.startsWith("www")
        ? window.location.hostname
        : "www." + window.location.hostname;
      if (document.documentElement.dataset.wgTranslated) {
        const n = document.documentElement.lang.includes("-")
            ? document.documentElement.lang.split("-")
            : document.documentElement.lang.split("_"),
          a = s
            .replace("www.", "")
            .split(".")
            .filter((u) => !n.includes(u))[0],
          i = this.authorizedDomains[0].replace("www.", "").split(".");
        if (
          (i.pop(),
          i.join("") == a || s.includes("webflow.io") || this.isDevMode)
        )
          return !0;
      }
      return (e.p &&
        s.includes("server.wized.com") &&
        window.top !== window.self) ||
        this.authorizedDomains.some((n) => n == s) ||
        this.isDevMode
        ? !0
        : (e.p
            ? this.showErrorBanner(
                `You have to enable the custom domain "${window.location.hostname}" on Smootify Dashboard`
              )
            : this.showErrorBanner(),
          !1);
    } else
      return this.isDevMode
        ? (e.p || this.showBanner(), !0)
        : (this.showErrorBanner(), !1);
  }
  canUseExtension(e, r) {
    return _t[r]
      ? e.a.includes(r)
      : this.isDevMode
      ? !0
      : e.a.includes(r) || ["lite", "server"].includes(e.l || "");
  }
  canUseServerExtension(e, r) {
    if (_t[r]) return e.a.includes(r) && e.l == "server";
    if (e.a.includes(r) && this.isDevMode && e.i && e.p && e.l == "server")
      return !0;
    if (!e.p) {
      const s = new Date(e.e || 0).getTime();
      return (
        e.a.includes(r) &&
        e.w == window.location.hostname &&
        e.i &&
        s > Date.now() &&
        e.l == "server"
      );
    }
    return (
      e.a.includes(r) &&
      e.w == window.location.hostname &&
      e.i &&
      e.p &&
      e.l == "server"
    );
  }
  async loadExtensions(e) {
    const r = [];
    for (let s of dn)
      this.canUseExtension(e, s.name) &&
        (this.loadedExtensions.push(s.name), r.push(s.load()));
    await Promise.all(r);
  }
  async loadServerExtensions(e) {
    const r = [];
    for (let s of fn)
      this.canUseServerExtension(e, s.name)
        ? (this.loadedExtensions.push(s.name), r.push(s.load()))
        : s.unload && s.unload();
    r.length && (await Promise.all(r));
  }
  async getStore() {
    if (this.store) return this.store;
    let e = await this.getSmootifyTokenType();
    if (!this.handleToken(e)) return;
    this.isDevMode &&
      setTimeout(() => {
        v(
          () => import("./index.DpV46Msm.js"),
          __vite__mapDeps([25, 26]),
          import.meta.url
        ).then((o) => {
          o.showDebugger();
        });
      }, 300);
    const r = e;
    if (
      ((this.store = new on(r)),
      (window.Smootify = h.getPublicApis()),
      await this.store.setup(),
      this.on(A.userAuthChange, (o) => {
        var a, i;
        if (
          (setTimeout(() => {
            document.body.classList.add("customer-status-loaded");
          }, 50),
          o)
        )
          !((a = this.store.latestCart) != null && a.buyerIdentity.email) &&
            !(
              (i = this.store.latestCart) != null && i.buyerIdentity.customer
            ) &&
            this.store.associateCartWithoutToken();
        else if (
          (this.isAccountFolder() || this.isAccountPage()) &&
          !this.store.acceptingNewLogin
        ) {
          if (this.isPreviewMode) {
            this.showContextErrorBanner(
              document.body,
              "This page is accessible only from logged in customers and will be redirected on published site",
              "",
              3e3
            );
            return;
          }
          h.options.accountPageRedirectTo
            ? h.options.accountPageRedirectTo == "passwordless-login"
              ? this.store.loginNew()
              : (window.location = h.options.accountPageRedirectTo)
            : (window.location = "/");
        }
        rn(o);
      }),
      this.options.newCustomerAccountsPublicKey &&
      this.options.newCustomerAccountsPublicKey != ""
        ? await this.store.acceptLoginNew()
        : await this.store.customer(),
      await Promise.all([
        this.store.cart(),
        B.init(),
        v(
          () => import("./product-wrapper.C2adtZyt.js"),
          __vite__mapDeps([27, 2]),
          import.meta.url
        ),
        v(
          () => import("./general.BYak0XSB.js"),
          __vite__mapDeps([28, 29]),
          import.meta.url
        ),
        v(
          () => import("./index.BzGkKh7y.js"),
          __vite__mapDeps([30, 31, 12, 26]),
          import.meta.url
        ),
        this.loadExtensions(r),
        this.loadServerExtensions(r),
      ]),
      window.Shopify)
    )
      window.Shopify.shop = r.s + ".myshopify.com";
    else {
      const [o, a] = (document.documentElement.lang || "en").split("-");
      window.Shopify = {
        ...(window.Shopify || {}),
        theme: "Smootify",
        designMode: !1,
        locale: o,
        shop: r.s + ".myshopify.com",
        country: a || "",
        routes: { root: "/" },
      };
    }
    const s = new URLSearchParams(window.location.search),
      n = Array.from(s.entries()).filter((o) => o[0].startsWith("utm_"));
    return (
      n.length > 0 &&
        requestAnimationFrame(() => {
          this.applyUTMParams(n);
        }),
      this.plan == "server"
        ? v(
            () => import("./file-input.NRzV0WbT.js"),
            __vite__mapDeps([32, 19, 20]),
            import.meta.url
          )
        : document.querySelectorAll("file-input").forEach((o) => o.remove()),
      requestAnimationFrame(() => {
        I(A.apiLoaded),
          document
            .querySelectorAll('script[type="smootify-load"]')
            .forEach((o) => {
              const a = o.cloneNode(!0);
              a.setAttribute(
                "type",
                a.getAttribute("data-type") || "text/javascript"
              ),
                a.removeAttribute("defer"),
                a.removeAttribute("async"),
                o.after(a),
                o.remove();
            }),
          requestAnimationFrame(() => {
            this.store.loadAllColorPatterns();
          });
      }),
      this.store
    );
  }
  getPublicApis() {
    return (
      T("v" + an),
      {
        getCartAsDraftOrderData: async (e, r, s = []) =>
          h.store.getCartAsDraftOrderData(e, r, s),
        removeCartLines: async (e, r = !0) => h.store.cartLinesRemove(e, r),
        updateCartLines: async (e) => h.store.cartLinesUpdateQuantity(e),
        getProductsById: async (e) => {
          h.store.productsToLoad.push(...e);
          const r = await h.store.loadProductsData();
          return Object.values(r).reduce((s, n) => ((s[n.id] = n), s), {});
        },
        setCustomerMetafields: async (...e) =>
          await h.store.setCustomerMetafields(...e),
        applyGiftCard: async (e) => await this.store.cartGifCardCodesUpdate(e),
        formatMoney: (e, r = !0, s = !0) => this.store.formatMoney(e, r, s),
        addBoxToCart: async (e, r, s) => {
          const n = { id: crypto.randomUUID() };
          r &&
            (r.title && (n.title = r.title),
            r.image && (n.image = r.image),
            r.___dp && (n.discount_percentage = r.___dp)),
            await this.store.addBoxToCart(e, n, s);
        },
        clearCart: () => this.store.clearCart(),
        reloadCart: () => this.store.cart(),
        passwordlessLogin: () => this.store.loginNew(),
        query: (e, r = {}) => this.store.query(e, r, !1),
        queryCustomer: (e) => this.store.queryCustomer(e),
        enableAnalytics: (e) => this.enableAnalytics(e),
        applyCouponCode: (e) => this.store.cartDiscountCodesUpdate(e),
        changeCountryByIsoCode: (e) => (
          localStorage.removeItem("_manuallyChangedCountry"),
          localStorage.setItem("_apiChangedCountry", "true"),
          this.store.changeCountryByCountryIsoCode(e)
        ),
        changeMarketLanguage: (e) => this.store.changeLanguageByCode(e),
        addToCart: (e, r = !1) => this.store.cartLinesAdd(e, r, !0),
        getCartID: async () =>
          this.store.latestCart
            ? this.store.latestCart.id
            : (await this.store.cart()).id,
        getCart: async () =>
          this.store.latestCart
            ? this.store.latestCart
            : await this.store.cart(),
      }
    );
  }
}
const h = new Cn();
var vn = new TextEncoder();
function An(t) {
  return vn.encode(t);
}
function _n(t, e) {
  return new TextDecoder(e).decode(t);
}
function Sn(t) {
  return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
}
var Y = Symbol("isPatchedModule");
function sr(t) {
  try {
    return new URL(t), !0;
  } catch {
    return !1;
  }
}
function St(t, e) {
  const s = Object.getOwnPropertySymbols(e).find((n) => n.description === t);
  if (s) return Reflect.get(e, s);
}
var X = class extends Response {
    static isConfigurableStatusCode(t) {
      return t >= 200 && t <= 599;
    }
    static isRedirectResponse(t) {
      return X.STATUS_CODES_WITH_REDIRECT.includes(t);
    }
    static isResponseWithBody(t) {
      return !X.STATUS_CODES_WITHOUT_BODY.includes(t);
    }
    static setUrl(t, e) {
      if (!t || t === "about:" || !sr(t)) return;
      const r = St("state", e);
      r
        ? r.urlList.push(new URL(t))
        : Object.defineProperty(e, "url", {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !1,
          });
    }
    static parseRawHeaders(t) {
      const e = new Headers();
      for (let r = 0; r < t.length; r += 2) e.append(t[r], t[r + 1]);
      return e;
    }
    constructor(t, e = {}) {
      var r;
      const s = (r = e.status) != null ? r : 200,
        n = X.isConfigurableStatusCode(s) ? s : 200,
        o = X.isResponseWithBody(s) ? t : null;
      if ((super(o, { ...e, status: n }), s !== n)) {
        const a = St("state", this);
        a
          ? (a.status = s)
          : Object.defineProperty(this, "status", {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !1,
            });
      }
      X.setUrl(e.url, this);
    }
  },
  K = X;
K.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304];
K.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
var In = Symbol("kRawRequest");
function nr(t, e) {
  Reflect.set(t, In, e);
}
function or() {
  if (typeof navigator < "u" && navigator.product === "ReactNative") return !0;
  if (typeof process < "u") {
    const t = process.type;
    return t === "renderer" || t === "worker"
      ? !1
      : !!(process.versions && process.versions.node);
  }
  return !1;
}
var En = /(%?)(%([sdijo]))/g;
function Tn(t, e) {
  switch (e) {
    case "s":
      return t;
    case "d":
    case "i":
      return Number(t);
    case "j":
      return JSON.stringify(t);
    case "o": {
      if (typeof t == "string") return t;
      const r = JSON.stringify(t);
      return r === "{}" || r === "[]" || /^\[object .+?\]$/.test(r) ? t : r;
    }
  }
}
function ue(t, ...e) {
  if (e.length === 0) return t;
  let r = 0,
    s = t.replace(En, (n, o, a, i) => {
      const c = e[r],
        u = Tn(c, i);
      return o ? n : (r++, u);
    });
  return (
    r < e.length && (s += ` ${e.slice(r).join(" ")}`),
    (s = s.replace(/%{2,2}/g, "%")),
    s
  );
}
var Pn = 2;
function Ln(t) {
  if (!t.stack) return;
  const e = t.stack.split(`
`);
  e.splice(1, Pn),
    (t.stack = e.join(`
`));
}
var $n = class extends Error {
    constructor(t, ...e) {
      super(t),
        (this.message = t),
        (this.name = "Invariant Violation"),
        (this.message = ue(t, ...e)),
        Ln(this);
    }
  },
  Q = (t, e, ...r) => {
    if (!t) throw new $n(e, ...r);
  };
Q.as = (t, e, r, ...s) => {
  if (!e) {
    const n = s.length === 0 ? r : ue(r, ...s);
    let o;
    try {
      o = Reflect.construct(t, [n]);
    } catch {
      o = t(n);
    }
    throw o;
  }
};
var Rn = {},
  kn = Object.defineProperty,
  qn = (t, e) => {
    for (var r in e) kn(t, r, { get: e[r], enumerable: !0 });
  },
  Ge = {};
qn(Ge, {
  blue: () => xn,
  gray: () => ze,
  green: () => Mn,
  red: () => On,
  yellow: () => Dn,
});
function Dn(t) {
  return `\x1B[33m${t}\x1B[0m`;
}
function xn(t) {
  return `\x1B[34m${t}\x1B[0m`;
}
function ze(t) {
  return `\x1B[90m${t}\x1B[0m`;
}
function On(t) {
  return `\x1B[31m${t}\x1B[0m`;
}
function Mn(t) {
  return `\x1B[32m${t}\x1B[0m`;
}
var Se = or(),
  ar = class {
    constructor(t) {
      b(this, "prefix");
      (this.name = t), (this.prefix = `[${this.name}]`);
      const e = It("DEBUG"),
        r = It("LOG_LEVEL");
      e === "1" || e === "true" || (typeof e < "u" && this.name.startsWith(e))
        ? ((this.debug = oe(r, "debug") ? O : this.debug),
          (this.info = oe(r, "info") ? O : this.info),
          (this.success = oe(r, "success") ? O : this.success),
          (this.warning = oe(r, "warning") ? O : this.warning),
          (this.error = oe(r, "error") ? O : this.error))
        : ((this.info = O),
          (this.success = O),
          (this.warning = O),
          (this.error = O),
          (this.only = O));
    }
    extend(t) {
      return new ar(`${this.name}:${t}`);
    }
    debug(t, ...e) {
      this.logEntry({
        level: "debug",
        message: ze(t),
        positionals: e,
        prefix: this.prefix,
        colors: { prefix: "gray" },
      });
    }
    info(t, ...e) {
      this.logEntry({
        level: "info",
        message: t,
        positionals: e,
        prefix: this.prefix,
        colors: { prefix: "blue" },
      });
      const r = new Un();
      return (s, ...n) => {
        r.measure(),
          this.logEntry({
            level: "info",
            message: `${s} ${ze(`${r.deltaTime}ms`)}`,
            positionals: n,
            prefix: this.prefix,
            colors: { prefix: "blue" },
          });
      };
    }
    success(t, ...e) {
      this.logEntry({
        level: "info",
        message: t,
        positionals: e,
        prefix: `✔ ${this.prefix}`,
        colors: { timestamp: "green", prefix: "green" },
      });
    }
    warning(t, ...e) {
      this.logEntry({
        level: "warning",
        message: t,
        positionals: e,
        prefix: `⚠ ${this.prefix}`,
        colors: { timestamp: "yellow", prefix: "yellow" },
      });
    }
    error(t, ...e) {
      this.logEntry({
        level: "error",
        message: t,
        positionals: e,
        prefix: `✖ ${this.prefix}`,
        colors: { timestamp: "red", prefix: "red" },
      });
    }
    only(t) {
      t();
    }
    createEntry(t, e) {
      return { timestamp: new Date(), level: t, message: e };
    }
    logEntry(t) {
      const {
          level: e,
          message: r,
          prefix: s,
          colors: n,
          positionals: o = [],
        } = t,
        a = this.createEntry(e, r),
        i = (n == null ? void 0 : n.timestamp) || "gray",
        c = (n == null ? void 0 : n.prefix) || "gray",
        u = { timestamp: Ge[i], prefix: Ge[c] };
      this.getWriter(e)(
        [u.timestamp(this.formatTimestamp(a.timestamp))]
          .concat(s != null ? u.prefix(s) : [])
          .concat(Et(r))
          .join(" "),
        ...o.map(Et)
      );
    }
    formatTimestamp(t) {
      return `${t.toLocaleTimeString("en-GB")}:${t.getMilliseconds()}`;
    }
    getWriter(t) {
      switch (t) {
        case "debug":
        case "success":
        case "info":
          return Nn;
        case "warning":
          return Bn;
        case "error":
          return jn;
      }
    }
  },
  Un = class {
    constructor() {
      b(this, "startTime");
      b(this, "endTime");
      b(this, "deltaTime");
      this.startTime = performance.now();
    }
    measure() {
      this.endTime = performance.now();
      const t = this.endTime - this.startTime;
      this.deltaTime = t.toFixed(2);
    }
  },
  O = () => {};
function Nn(t, ...e) {
  if (Se) {
    process.stdout.write(
      ue(t, ...e) +
        `
`
    );
    return;
  }
  console.log(t, ...e);
}
function Bn(t, ...e) {
  if (Se) {
    process.stderr.write(
      ue(t, ...e) +
        `
`
    );
    return;
  }
  console.warn(t, ...e);
}
function jn(t, ...e) {
  if (Se) {
    process.stderr.write(
      ue(t, ...e) +
        `
`
    );
    return;
  }
  console.error(t, ...e);
}
function It(t) {
  var e;
  return Se ? Rn[t] : (e = globalThis[t]) == null ? void 0 : e.toString();
}
function oe(t, e) {
  return t !== void 0 && t !== e;
}
function Et(t) {
  return typeof t > "u"
    ? "undefined"
    : t === null
    ? "null"
    : typeof t == "string"
    ? t
    : typeof t == "object"
    ? JSON.stringify(t)
    : t.toString();
}
var Fn = class extends Error {
    constructor(t, e, r) {
      super(
        `Possible EventEmitter memory leak detected. ${r} ${e.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`
      ),
        (this.emitter = t),
        (this.type = e),
        (this.count = r),
        (this.name = "MaxListenersExceededWarning");
    }
  },
  ir = class {
    static listenerCount(t, e) {
      return t.listenerCount(e);
    }
    constructor() {
      (this.events = new Map()),
        (this.maxListeners = ir.defaultMaxListeners),
        (this.hasWarnedAboutPotentialMemoryLeak = !1);
    }
    _emitInternalEvent(t, e, r) {
      this.emit(t, e, r);
    }
    _getListeners(t) {
      return Array.prototype.concat.apply([], this.events.get(t)) || [];
    }
    _removeListener(t, e) {
      const r = t.indexOf(e);
      return r > -1 && t.splice(r, 1), [];
    }
    _wrapOnceListener(t, e) {
      const r = (...s) => (this.removeListener(t, r), e.apply(this, s));
      return Object.defineProperty(r, "name", { value: e.name }), r;
    }
    setMaxListeners(t) {
      return (this.maxListeners = t), this;
    }
    getMaxListeners() {
      return this.maxListeners;
    }
    eventNames() {
      return Array.from(this.events.keys());
    }
    emit(t, ...e) {
      const r = this._getListeners(t);
      return (
        r.forEach((s) => {
          s.apply(this, e);
        }),
        r.length > 0
      );
    }
    addListener(t, e) {
      this._emitInternalEvent("newListener", t, e);
      const r = this._getListeners(t).concat(e);
      if (
        (this.events.set(t, r),
        this.maxListeners > 0 &&
          this.listenerCount(t) > this.maxListeners &&
          !this.hasWarnedAboutPotentialMemoryLeak)
      ) {
        this.hasWarnedAboutPotentialMemoryLeak = !0;
        const s = new Fn(this, t, this.listenerCount(t));
        console.warn(s);
      }
      return this;
    }
    on(t, e) {
      return this.addListener(t, e);
    }
    once(t, e) {
      return this.addListener(t, this._wrapOnceListener(t, e));
    }
    prependListener(t, e) {
      const r = this._getListeners(t);
      if (r.length > 0) {
        const s = [e].concat(r);
        this.events.set(t, s);
      } else this.events.set(t, r.concat(e));
      return this;
    }
    prependOnceListener(t, e) {
      return this.prependListener(t, this._wrapOnceListener(t, e));
    }
    removeListener(t, e) {
      const r = this._getListeners(t);
      return (
        r.length > 0 &&
          (this._removeListener(r, e),
          this.events.set(t, r),
          this._emitInternalEvent("removeListener", t, e)),
        this
      );
    }
    off(t, e) {
      return this.removeListener(t, e);
    }
    removeAllListeners(t) {
      return t ? this.events.delete(t) : this.events.clear(), this;
    }
    listeners(t) {
      return Array.from(this._getListeners(t));
    }
    listenerCount(t) {
      return this._getListeners(t).length;
    }
    rawListeners(t) {
      return this.listeners(t);
    }
  },
  cr = ir;
cr.defaultMaxListeners = 10;
var Wn = "x-interceptors-internal-request-id";
function Tt(t) {
  return globalThis[t] || void 0;
}
function Vn(t, e) {
  globalThis[t] = e;
}
function Hn(t) {
  delete globalThis[t];
}
var Xe = class {
  constructor(t) {
    (this.symbol = t),
      (this.readyState = "INACTIVE"),
      (this.emitter = new cr()),
      (this.subscriptions = []),
      (this.logger = new ar(t.description)),
      this.emitter.setMaxListeners(0),
      this.logger.info("constructing the interceptor...");
  }
  checkEnvironment() {
    return !0;
  }
  apply() {
    const t = this.logger.extend("apply");
    if (
      (t.info("applying the interceptor..."), this.readyState === "APPLIED")
    ) {
      t.info("intercepted already applied!");
      return;
    }
    if (!this.checkEnvironment()) {
      t.info("the interceptor cannot be applied in this environment!");
      return;
    }
    this.readyState = "APPLYING";
    const r = this.getInstance();
    if (r) {
      t.info("found a running instance, reusing..."),
        (this.on = (s, n) => (
          t.info('proxying the "%s" listener', s),
          r.emitter.addListener(s, n),
          this.subscriptions.push(() => {
            r.emitter.removeListener(s, n),
              t.info('removed proxied "%s" listener!', s);
          }),
          this
        )),
        (this.readyState = "APPLIED");
      return;
    }
    t.info("no running instance found, setting up a new instance..."),
      this.setup(),
      this.setInstance(),
      (this.readyState = "APPLIED");
  }
  setup() {}
  on(t, e) {
    const r = this.logger.extend("on");
    return this.readyState === "DISPOSING" || this.readyState === "DISPOSED"
      ? (r.info("cannot listen to events, already disposed!"), this)
      : (r.info('adding "%s" event listener:', t, e),
        this.emitter.on(t, e),
        this);
  }
  once(t, e) {
    return this.emitter.once(t, e), this;
  }
  off(t, e) {
    return this.emitter.off(t, e), this;
  }
  removeAllListeners(t) {
    return this.emitter.removeAllListeners(t), this;
  }
  dispose() {
    const t = this.logger.extend("dispose");
    if (this.readyState === "DISPOSED") {
      t.info("cannot dispose, already disposed!");
      return;
    }
    if (
      (t.info("disposing the interceptor..."),
      (this.readyState = "DISPOSING"),
      !this.getInstance())
    ) {
      t.info("no interceptors running, skipping dispose...");
      return;
    }
    if (
      (this.clearInstance(),
      t.info("global symbol deleted:", Tt(this.symbol)),
      this.subscriptions.length > 0)
    ) {
      t.info("disposing of %d subscriptions...", this.subscriptions.length);
      for (const e of this.subscriptions) e();
      (this.subscriptions = []),
        t.info("disposed of all subscriptions!", this.subscriptions.length);
    }
    this.emitter.removeAllListeners(),
      t.info("destroyed the listener!"),
      (this.readyState = "DISPOSED");
  }
  getInstance() {
    var t;
    const e = Tt(this.symbol);
    return (
      this.logger.info(
        "retrieved global instance:",
        (t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name
      ),
      e
    );
  }
  setInstance() {
    Vn(this.symbol, this),
      this.logger.info("set global instance!", this.symbol.description);
  }
  clearInstance() {
    Hn(this.symbol),
      this.logger.info("cleared global instance!", this.symbol.description);
  }
};
function ur() {
  return Math.random().toString(16).slice(2);
}
var Ke = class extends Xe {
  constructor(t) {
    (Ke.symbol = Symbol(t.name)),
      super(Ke.symbol),
      (this.interceptors = t.interceptors);
  }
  setup() {
    const t = this.logger.extend("setup");
    t.info("applying all %d interceptors...", this.interceptors.length);
    for (const e of this.interceptors)
      t.info('applying "%s" interceptor...', e.constructor.name),
        e.apply(),
        t.info("adding interceptor dispose subscription"),
        this.subscriptions.push(() => e.dispose());
  }
  on(t, e) {
    for (const r of this.interceptors) r.on(t, e);
    return this;
  }
  once(t, e) {
    for (const r of this.interceptors) r.once(t, e);
    return this;
  }
  off(t, e) {
    for (const r of this.interceptors) r.off(t, e);
    return this;
  }
  removeAllListeners(t) {
    for (const e of this.interceptors) e.removeAllListeners(t);
    return this;
  }
};
function Gn() {
  const t = (e, r) => {
    (t.state = "pending"),
      (t.resolve = (s) => {
        if (t.state !== "pending") return;
        t.result = s;
        const n = (o) => ((t.state = "fulfilled"), o);
        return e(s instanceof Promise ? s : Promise.resolve(s).then(n));
      }),
      (t.reject = (s) => {
        if (t.state === "pending")
          return (
            queueMicrotask(() => {
              t.state = "rejected";
            }),
            r((t.rejectionReason = s))
          );
      });
  };
  return t;
}
var W,
  Z,
  he,
  kt,
  Ye =
    ((kt = class extends Promise {
      constructor(e = null) {
        const r = Gn();
        super((s, n) => {
          r(s, n), e == null || e(r.resolve, r.reject);
        });
        Te(this, Z);
        Te(this, W);
        b(this, "resolve");
        b(this, "reject");
        rt(this, W, r),
          (this.resolve = se(this, W).resolve),
          (this.reject = se(this, W).reject);
      }
      get state() {
        return se(this, W).state;
      }
      get rejectionReason() {
        return se(this, W).rejectionReason;
      }
      then(e, r) {
        return le(this, Z, he).call(this, super.then(e, r));
      }
      catch(e) {
        return le(this, Z, he).call(this, super.catch(e));
      }
      finally(e) {
        return le(this, Z, he).call(this, super.finally(e));
      }
    }),
    (W = new WeakMap()),
    (Z = new WeakSet()),
    (he = function (e) {
      return Object.defineProperties(e, {
        resolve: { configurable: !0, value: this.resolve },
        reject: { configurable: !0, value: this.reject },
      });
    }),
    kt),
  Pt = async (t) => {
    try {
      return {
        error: null,
        data: await t().catch((r) => {
          throw r;
        }),
      };
    } catch (e) {
      return { error: e, data: null };
    }
  },
  be = class extends Error {
    constructor(t) {
      super(t),
        (this.name = "InterceptorError"),
        Object.setPrototypeOf(this, be.prototype);
    }
  },
  ae = Symbol("kRequestHandled"),
  M = Symbol("kResponsePromise"),
  Ze = class {
    constructor(t) {
      (this.request = t), (this[ae] = !1), (this[M] = new Ye());
    }
    respondWith(t) {
      Q.as(
        be,
        !this[ae],
        'Failed to respond to the "%s %s" request: the "request" event has already been handled.',
        this.request.method,
        this.request.url
      ),
        (this[ae] = !0),
        this[M].resolve(t);
    }
    errorWith(t) {
      Q.as(
        be,
        !this[ae],
        'Failed to error the "%s %s" request: the "request" event has already been handled.',
        this.request.method,
        this.request.url
      ),
        (this[ae] = !0),
        this[M].resolve(t);
    }
  };
async function Ce(t, e, ...r) {
  const s = t.listeners(e);
  if (s.length !== 0) for (const n of s) await n.apply(t, r);
}
function lr(t, e = !1) {
  return e
    ? Object.prototype.toString.call(t).startsWith("[object ")
    : Object.prototype.toString.call(t) === "[object Object]";
}
function me(t, e) {
  try {
    return t[e], !0;
  } catch {
    return !1;
  }
}
function zn(t) {
  return new Response(
    JSON.stringify(
      t instanceof Error
        ? { name: t.name, message: t.message, stack: t.stack }
        : t
    ),
    {
      status: 500,
      statusText: "Unhandled Exception",
      headers: { "Content-Type": "application/json" },
    }
  );
}
function Kn(t) {
  return (
    t != null && t instanceof Response && me(t, "type") && t.type === "error"
  );
}
function Qn(t) {
  return (
    lr(t, !0) && me(t, "status") && me(t, "statusText") && me(t, "bodyUsed")
  );
}
function Jn(t) {
  return t == null || !(t instanceof Error) ? !1 : "code" in t && "errno" in t;
}
async function dr(t) {
  const e = async (o) =>
      o instanceof Error
        ? (t.onError(o), !0)
        : Kn(o)
        ? (t.onRequestError(o), !0)
        : Qn(o)
        ? (await t.onResponse(o), !0)
        : lr(o)
        ? (t.onError(o), !0)
        : !1,
    r = async (o) => {
      if (o instanceof be) throw n.error;
      return Jn(o)
        ? (t.onError(o), !0)
        : o instanceof Response
        ? await e(o)
        : !1;
    };
  t.emitter.once("request", ({ requestId: o }) => {
    o === t.requestId &&
      t.controller[M].state === "pending" &&
      t.controller[M].resolve(void 0);
  });
  const s = new Ye();
  t.request.signal &&
    (t.request.signal.aborted
      ? s.reject(t.request.signal.reason)
      : t.request.signal.addEventListener(
          "abort",
          () => {
            s.reject(t.request.signal.reason);
          },
          { once: !0 }
        ));
  const n = await Pt(async () => {
    const o = Ce(t.emitter, "request", {
      requestId: t.requestId,
      request: t.request,
      controller: t.controller,
    });
    return await Promise.race([s, o, t.controller[M]]), await t.controller[M];
  });
  if (s.state === "rejected") return t.onError(s.rejectionReason), !0;
  if (n.error) {
    if (await r(n.error)) return !0;
    if (t.emitter.listenerCount("unhandledException") > 0) {
      const o = new Ze(t.request);
      await Ce(t.emitter, "unhandledException", {
        error: n.error,
        request: t.request,
        requestId: t.requestId,
        controller: o,
      }).then(() => {
        o[M].state === "pending" && o[M].resolve(void 0);
      });
      const a = await Pt(() => o[M]);
      if (a.error) return r(a.error);
      if (a.data) return e(a.data);
    }
    return t.onResponse(zn(n.error)), !0;
  }
  return n.data ? e(n.data) : !1;
}
function fr(t) {
  const e = Object.getOwnPropertyDescriptor(globalThis, t);
  return typeof e > "u" ||
    (typeof e.get == "function" && typeof e.get() > "u") ||
    (typeof e.get > "u" && e.value == null)
    ? !1
    : typeof e.set > "u" && !e.configurable
    ? (console.error(
        `[MSW] Failed to apply interceptor: the global \`${t}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`
      ),
      !1)
    : !0;
}
function Xn(t, e) {
  const r = new Uint8Array(t.byteLength + e.byteLength);
  return r.set(t, 0), r.set(e, t.byteLength), r;
}
var pr = class {
    constructor(t, e) {
      (this.NONE = 0),
        (this.CAPTURING_PHASE = 1),
        (this.AT_TARGET = 2),
        (this.BUBBLING_PHASE = 3),
        (this.type = ""),
        (this.srcElement = null),
        (this.currentTarget = null),
        (this.eventPhase = 0),
        (this.isTrusted = !0),
        (this.composed = !1),
        (this.cancelable = !0),
        (this.defaultPrevented = !1),
        (this.bubbles = !0),
        (this.lengthComputable = !0),
        (this.loaded = 0),
        (this.total = 0),
        (this.cancelBubble = !1),
        (this.returnValue = !0),
        (this.type = t),
        (this.target = (e == null ? void 0 : e.target) || null),
        (this.currentTarget = (e == null ? void 0 : e.currentTarget) || null),
        (this.timeStamp = Date.now());
    }
    composedPath() {
      return [];
    }
    initEvent(t, e, r) {
      (this.type = t), (this.bubbles = !!e), (this.cancelable = !!r);
    }
    preventDefault() {
      this.defaultPrevented = !0;
    }
    stopPropagation() {}
    stopImmediatePropagation() {}
  },
  Yn = class extends pr {
    constructor(t, e) {
      super(t),
        (this.lengthComputable =
          (e == null ? void 0 : e.lengthComputable) || !1),
        (this.composed = (e == null ? void 0 : e.composed) || !1),
        (this.loaded = (e == null ? void 0 : e.loaded) || 0),
        (this.total = (e == null ? void 0 : e.total) || 0);
    }
  },
  Zn = typeof ProgressEvent < "u";
function eo(t, e, r) {
  const s = [
      "error",
      "progress",
      "loadstart",
      "loadend",
      "load",
      "timeout",
      "abort",
    ],
    n = Zn ? ProgressEvent : Yn;
  return s.includes(e)
    ? new n(e, {
        lengthComputable: !0,
        loaded: (r == null ? void 0 : r.loaded) || 0,
        total: (r == null ? void 0 : r.total) || 0,
      })
    : new pr(e, { target: t, currentTarget: t });
}
function hr(t, e) {
  if (!(e in t)) return null;
  if (Object.prototype.hasOwnProperty.call(t, e)) return t;
  const s = Reflect.getPrototypeOf(t);
  return s ? hr(s, e) : null;
}
function Me(t, e) {
  return new Proxy(t, to(e));
}
function to(t) {
  const {
      constructorCall: e,
      methodCall: r,
      getProperty: s,
      setProperty: n,
    } = t,
    o = {};
  return (
    typeof e < "u" &&
      (o.construct = function (a, i, c) {
        const u = Reflect.construct.bind(null, a, i, c);
        return e.call(c, i, u);
      }),
    (o.set = function (a, i, c) {
      const u = () => {
        const l = hr(a, i) || a,
          p = Reflect.getOwnPropertyDescriptor(l, i);
        return typeof (p == null ? void 0 : p.set) < "u"
          ? (p.set.apply(a, [c]), !0)
          : Reflect.defineProperty(l, i, {
              writable: !0,
              enumerable: !0,
              configurable: !0,
              value: c,
            });
      };
      return typeof n < "u" ? n.call(a, [i, c], u) : u();
    }),
    (o.get = function (a, i, c) {
      const u = () => a[i],
        l = typeof s < "u" ? s.call(a, [i, c], u) : u();
      return typeof l == "function"
        ? (...p) => {
            const d = l.bind(a, ...p);
            return typeof r < "u" ? r.call(a, [i, p], d) : d();
          }
        : l;
    }),
    o
  );
}
function ro(t) {
  return [
    "application/xhtml+xml",
    "application/xml",
    "image/svg+xml",
    "text/html",
    "text/xml",
  ].some((r) => t.startsWith(r));
}
function so(t) {
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}
function no(t, e) {
  const r = K.isResponseWithBody(t.status) ? e : null;
  return new K(r, {
    url: t.responseURL,
    status: t.status,
    statusText: t.statusText,
    headers: oo(t.getAllResponseHeaders()),
  });
}
function oo(t) {
  const e = new Headers(),
    r = t.split(/[\r\n]+/);
  for (const s of r) {
    if (s.trim() === "") continue;
    const [n, ...o] = s.split(": "),
      a = o.join(": ");
    e.append(n, a);
  }
  return e;
}
async function Lt(t) {
  const e = t.headers.get("content-length");
  return e != null && e !== "" ? Number(e) : (await t.arrayBuffer()).byteLength;
}
var ie = Symbol("kIsRequestHandled"),
  ao = or(),
  Ue = Symbol("kFetchRequest"),
  io = class {
    constructor(t, e) {
      (this.initialRequest = t),
        (this.logger = e),
        (this.method = "GET"),
        (this.url = null),
        (this[ie] = !1),
        (this.events = new Map()),
        (this.uploadEvents = new Map()),
        (this.requestId = ur()),
        (this.requestHeaders = new Headers()),
        (this.responseBuffer = new Uint8Array()),
        (this.request = Me(t, {
          setProperty: ([r, s], n) => {
            switch (r) {
              case "ontimeout": {
                const o = r.slice(2);
                return this.request.addEventListener(o, s), n();
              }
              default:
                return n();
            }
          },
          methodCall: ([r, s], n) => {
            var o;
            switch (r) {
              case "open": {
                const [a, i] = s;
                return (
                  typeof i > "u"
                    ? ((this.method = "GET"), (this.url = $t(a)))
                    : ((this.method = a), (this.url = $t(i))),
                  (this.logger = this.logger.extend(
                    `${this.method} ${this.url.href}`
                  )),
                  this.logger.info("open", this.method, this.url.href),
                  n()
                );
              }
              case "addEventListener": {
                const [a, i] = s;
                return (
                  this.registerEvent(a, i),
                  this.logger.info("addEventListener", a, i),
                  n()
                );
              }
              case "setRequestHeader": {
                const [a, i] = s;
                return (
                  this.requestHeaders.set(a, i),
                  this.logger.info("setRequestHeader", a, i),
                  n()
                );
              }
              case "send": {
                const [a] = s;
                this.request.addEventListener("load", () => {
                  if (typeof this.onResponse < "u") {
                    const l = no(this.request, this.request.response);
                    this.onResponse.call(this, {
                      response: l,
                      isMockedResponse: this[ie],
                      request: c,
                      requestId: this.requestId,
                    });
                  }
                });
                const i = typeof a == "string" ? An(a) : a,
                  c = this.toFetchApiRequest(i);
                (this[Ue] = c.clone()),
                  (
                    ((o = this.onRequest) == null
                      ? void 0
                      : o.call(this, {
                          request: c,
                          requestId: this.requestId,
                        })) || Promise.resolve()
                  ).finally(() => {
                    if (!this[ie])
                      return (
                        this.logger.info(
                          "request callback settled but request has not been handled (readystate %d), performing as-is...",
                          this.request.readyState
                        ),
                        ao && this.request.setRequestHeader(Wn, this.requestId),
                        n()
                      );
                  });
                break;
              }
              default:
                return n();
            }
          },
        })),
        J(
          this.request,
          "upload",
          Me(this.request.upload, {
            setProperty: ([r, s], n) => {
              switch (r) {
                case "onloadstart":
                case "onprogress":
                case "onaboart":
                case "onerror":
                case "onload":
                case "ontimeout":
                case "onloadend": {
                  const o = r.slice(2);
                  this.registerUploadEvent(o, s);
                }
              }
              return n();
            },
            methodCall: ([r, s], n) => {
              switch (r) {
                case "addEventListener": {
                  const [o, a] = s;
                  return (
                    this.registerUploadEvent(o, a),
                    this.logger.info("upload.addEventListener", o, a),
                    n()
                  );
                }
              }
            },
          })
        );
    }
    registerEvent(t, e) {
      const s = (this.events.get(t) || []).concat(e);
      this.events.set(t, s), this.logger.info('registered event "%s"', t, e);
    }
    registerUploadEvent(t, e) {
      const s = (this.uploadEvents.get(t) || []).concat(e);
      this.uploadEvents.set(t, s),
        this.logger.info('registered upload event "%s"', t, e);
    }
    async respondWith(t) {
      if (((this[ie] = !0), this[Ue])) {
        const s = await Lt(this[Ue]);
        this.trigger("loadstart", this.request.upload, { loaded: 0, total: s }),
          this.trigger("progress", this.request.upload, {
            loaded: s,
            total: s,
          }),
          this.trigger("load", this.request.upload, { loaded: s, total: s }),
          this.trigger("loadend", this.request.upload, { loaded: s, total: s });
      }
      this.logger.info(
        "responding with a mocked response: %d %s",
        t.status,
        t.statusText
      ),
        J(this.request, "status", t.status),
        J(this.request, "statusText", t.statusText),
        J(this.request, "responseURL", this.url.href),
        (this.request.getResponseHeader = new Proxy(
          this.request.getResponseHeader,
          {
            apply: (s, n, o) => {
              if (
                (this.logger.info("getResponseHeader", o[0]),
                this.request.readyState < this.request.HEADERS_RECEIVED)
              )
                return (
                  this.logger.info("headers not received yet, returning null"),
                  null
                );
              const a = t.headers.get(o[0]);
              return (
                this.logger.info('resolved response header "%s" to', o[0], a), a
              );
            },
          }
        )),
        (this.request.getAllResponseHeaders = new Proxy(
          this.request.getAllResponseHeaders,
          {
            apply: () => {
              if (
                (this.logger.info("getAllResponseHeaders"),
                this.request.readyState < this.request.HEADERS_RECEIVED)
              )
                return (
                  this.logger.info(
                    "headers not received yet, returning empty string"
                  ),
                  ""
                );
              const n = Array.from(t.headers.entries()).map(
                ([o, a]) => `${o}: ${a}`
              ).join(`\r
`);
              return this.logger.info("resolved all response headers to", n), n;
            },
          }
        )),
        Object.defineProperties(this.request, {
          response: {
            enumerable: !0,
            configurable: !1,
            get: () => this.response,
          },
          responseText: {
            enumerable: !0,
            configurable: !1,
            get: () => this.responseText,
          },
          responseXML: {
            enumerable: !0,
            configurable: !1,
            get: () => this.responseXML,
          },
        });
      const e = await Lt(t.clone());
      this.logger.info("calculated response body length", e),
        this.trigger("loadstart", this.request, { loaded: 0, total: e }),
        this.setReadyState(this.request.HEADERS_RECEIVED),
        this.setReadyState(this.request.LOADING);
      const r = () => {
        this.logger.info("finalizing the mocked response..."),
          this.setReadyState(this.request.DONE),
          this.trigger("load", this.request, {
            loaded: this.responseBuffer.byteLength,
            total: e,
          }),
          this.trigger("loadend", this.request, {
            loaded: this.responseBuffer.byteLength,
            total: e,
          });
      };
      if (t.body) {
        this.logger.info("mocked response has body, streaming...");
        const s = t.body.getReader(),
          n = async () => {
            const { value: o, done: a } = await s.read();
            if (a) {
              this.logger.info("response body stream done!"), r();
              return;
            }
            o &&
              (this.logger.info("read response body chunk:", o),
              (this.responseBuffer = Xn(this.responseBuffer, o)),
              this.trigger("progress", this.request, {
                loaded: this.responseBuffer.byteLength,
                total: e,
              })),
              n();
          };
        n();
      } else r();
    }
    responseBufferToText() {
      return _n(this.responseBuffer);
    }
    get response() {
      if (
        (this.logger.info(
          "getResponse (responseType: %s)",
          this.request.responseType
        ),
        this.request.readyState !== this.request.DONE)
      )
        return null;
      switch (this.request.responseType) {
        case "json": {
          const t = so(this.responseBufferToText());
          return this.logger.info("resolved response JSON", t), t;
        }
        case "arraybuffer": {
          const t = Sn(this.responseBuffer);
          return this.logger.info("resolved response ArrayBuffer", t), t;
        }
        case "blob": {
          const t =
              this.request.getResponseHeader("Content-Type") || "text/plain",
            e = new Blob([this.responseBufferToText()], { type: t });
          return (
            this.logger.info("resolved response Blob (mime type: %s)", e, t), e
          );
        }
        default: {
          const t = this.responseBufferToText();
          return (
            this.logger.info(
              'resolving "%s" response type as text',
              this.request.responseType,
              t
            ),
            t
          );
        }
      }
    }
    get responseText() {
      if (
        (Q(
          this.request.responseType === "" ||
            this.request.responseType === "text",
          "InvalidStateError: The object is in invalid state."
        ),
        this.request.readyState !== this.request.LOADING &&
          this.request.readyState !== this.request.DONE)
      )
        return "";
      const t = this.responseBufferToText();
      return this.logger.info('getResponseText: "%s"', t), t;
    }
    get responseXML() {
      if (
        (Q(
          this.request.responseType === "" ||
            this.request.responseType === "document",
          "InvalidStateError: The object is in invalid state."
        ),
        this.request.readyState !== this.request.DONE)
      )
        return null;
      const t = this.request.getResponseHeader("Content-Type") || "";
      return typeof DOMParser > "u"
        ? (console.warn(
            "Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."
          ),
          null)
        : ro(t)
        ? new DOMParser().parseFromString(this.responseBufferToText(), t)
        : null;
    }
    errorWith(t) {
      (this[ie] = !0),
        this.logger.info("responding with an error"),
        this.setReadyState(this.request.DONE),
        this.trigger("error", this.request),
        this.trigger("loadend", this.request);
    }
    setReadyState(t) {
      if (
        (this.logger.info(
          "setReadyState: %d -> %d",
          this.request.readyState,
          t
        ),
        this.request.readyState === t)
      ) {
        this.logger.info("ready state identical, skipping transition...");
        return;
      }
      J(this.request, "readyState", t),
        this.logger.info("set readyState to: %d", t),
        t !== this.request.UNSENT &&
          (this.logger.info('triggerring "readystatechange" event...'),
          this.trigger("readystatechange", this.request));
    }
    trigger(t, e, r) {
      const s = e[`on${t}`],
        n = eo(e, t, r);
      this.logger.info('trigger "%s"', t, r || ""),
        typeof s == "function" &&
          (this.logger.info('found a direct "%s" callback, calling...', t),
          s.call(e, n));
      const o =
        e instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events;
      for (const [a, i] of o)
        a === t &&
          (this.logger.info(
            'found %d listener(s) for "%s" event, calling...',
            i.length,
            t
          ),
          i.forEach((c) => c.call(e, n)));
    }
    toFetchApiRequest(t) {
      this.logger.info("converting request to a Fetch API Request...");
      const e = t instanceof Document ? t.documentElement.innerText : t,
        r = new Request(this.url.href, {
          method: this.method,
          headers: this.requestHeaders,
          credentials: this.request.withCredentials ? "include" : "same-origin",
          body: ["GET", "HEAD"].includes(this.method.toUpperCase()) ? null : e,
        }),
        s = Me(r.headers, {
          methodCall: ([n, o], a) => {
            switch (n) {
              case "append":
              case "set": {
                const [i, c] = o;
                this.request.setRequestHeader(i, c);
                break;
              }
              case "delete": {
                const [i] = o;
                console.warn(
                  `XMLHttpRequest: Cannot remove a "${i}" header from the Fetch API representation of the "${r.method} ${r.url}" request. XMLHttpRequest headers cannot be removed.`
                );
                break;
              }
            }
            return a();
          },
        });
      return (
        J(r, "headers", s),
        nr(r, this.request),
        this.logger.info("converted request to a Fetch API Request!", r),
        r
      );
    }
  };
function $t(t) {
  return typeof location > "u"
    ? new URL(t)
    : new URL(t.toString(), location.href);
}
function J(t, e, r) {
  Reflect.defineProperty(t, e, { writable: !0, enumerable: !0, value: r });
}
function co({ emitter: t, logger: e }) {
  return new Proxy(globalThis.XMLHttpRequest, {
    construct(s, n, o) {
      e.info("constructed new XMLHttpRequest");
      const a = Reflect.construct(s, n, o),
        i = Object.getOwnPropertyDescriptors(s.prototype);
      for (const u in i) Reflect.defineProperty(a, u, i[u]);
      const c = new io(a, e);
      return (
        (c.onRequest = async function ({ request: u, requestId: l }) {
          const p = new Ze(u);
          this.logger.info("awaiting mocked response..."),
            this.logger.info(
              'emitting the "request" event for %s listener(s)...',
              t.listenerCount("request")
            ),
            (await dr({
              request: u,
              requestId: l,
              controller: p,
              emitter: t,
              onResponse: async (f) => {
                await this.respondWith(f);
              },
              onRequestError: () => {
                this.errorWith(new TypeError("Network error"));
              },
              onError: (f) => {
                this.logger.info("request errored!", { error: f }),
                  f instanceof Error && this.errorWith(f);
              },
            })) ||
              this.logger.info(
                "no mocked response received, performing request as-is..."
              );
        }),
        (c.onResponse = async function ({
          response: u,
          isMockedResponse: l,
          request: p,
          requestId: d,
        }) {
          this.logger.info(
            'emitting the "response" event for %s listener(s)...',
            t.listenerCount("response")
          ),
            t.emit("response", {
              response: u,
              isMockedResponse: l,
              request: p,
              requestId: d,
            });
        }),
        c.request
      );
    },
  });
}
var mr = class extends Xe {
    constructor() {
      super(mr.interceptorSymbol);
    }
    checkEnvironment() {
      return fr("XMLHttpRequest");
    }
    setup() {
      const t = this.logger.extend("setup");
      t.info('patching "XMLHttpRequest" module...');
      const e = globalThis.XMLHttpRequest;
      Q(!e[Y], 'Failed to patch the "XMLHttpRequest" module: already patched.'),
        (globalThis.XMLHttpRequest = co({
          emitter: this.emitter,
          logger: this.logger,
        })),
        t.info(
          'native "XMLHttpRequest" module patched!',
          globalThis.XMLHttpRequest.name
        ),
        Object.defineProperty(globalThis.XMLHttpRequest, Y, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.XMLHttpRequest, Y, {
            value: void 0,
          }),
            (globalThis.XMLHttpRequest = e),
            t.info(
              'native "XMLHttpRequest" module restored!',
              globalThis.XMLHttpRequest.name
            );
        });
    }
  },
  yr = mr;
yr.interceptorSymbol = Symbol("xhr");
function z(t) {
  return Object.assign(new TypeError("Failed to fetch"), { cause: t });
}
var uo = [
    "content-encoding",
    "content-language",
    "content-location",
    "content-type",
    "content-length",
  ],
  Ne = Symbol("kRedirectCount");
async function lo(t, e) {
  if (e.status !== 303 && t.body != null) return Promise.reject(z());
  const r = new URL(t.url);
  let s;
  try {
    s = new URL(e.headers.get("location"), t.url);
  } catch (o) {
    return Promise.reject(z(o));
  }
  if (!(s.protocol === "http:" || s.protocol === "https:"))
    return Promise.reject(z("URL scheme must be a HTTP(S) scheme"));
  if (Reflect.get(t, Ne) > 20)
    return Promise.reject(z("redirect count exceeded"));
  if (
    (Object.defineProperty(t, Ne, { value: (Reflect.get(t, Ne) || 0) + 1 }),
    t.mode === "cors" && (s.username || s.password) && !Rt(r, s))
  )
    return Promise.reject(
      z('cross origin not allowed for request mode "cors"')
    );
  const n = {};
  return (
    (([301, 302].includes(e.status) && t.method === "POST") ||
      (e.status === 303 && !["HEAD", "GET"].includes(t.method))) &&
      ((n.method = "GET"),
      (n.body = null),
      uo.forEach((o) => {
        t.headers.delete(o);
      })),
    Rt(r, s) ||
      (t.headers.delete("authorization"),
      t.headers.delete("proxy-authorization"),
      t.headers.delete("cookie"),
      t.headers.delete("host")),
    (n.headers = t.headers),
    fetch(new Request(s, n))
  );
}
function Rt(t, e) {
  return (
    (t.origin === e.origin && t.origin === "null") ||
    (t.protocol === e.protocol &&
      t.hostname === e.hostname &&
      t.port === e.port)
  );
}
var fo = class extends TransformStream {
    constructor() {
      console.warn(
        "[Interceptors]: Brotli decompression of response streams is not supported in the browser"
      ),
        super({
          transform(t, e) {
            e.enqueue(t);
          },
        });
    }
  },
  po = class extends TransformStream {
    constructor(t, ...e) {
      super({}, ...e);
      const r = [super.readable, ...t].reduce((s, n) => s.pipeThrough(n));
      Object.defineProperty(this, "readable", {
        get() {
          return r;
        },
      });
    }
  };
function ho(t) {
  return t
    .toLowerCase()
    .split(",")
    .map((e) => e.trim());
}
function mo(t) {
  if (t === "") return null;
  const e = ho(t);
  if (e.length === 0) return null;
  const r = e.reduceRight(
    (s, n) =>
      n === "gzip" || n === "x-gzip"
        ? s.concat(new DecompressionStream("gzip"))
        : n === "deflate"
        ? s.concat(new DecompressionStream("deflate"))
        : n === "br"
        ? s.concat(new fo())
        : ((s.length = 0), s),
    []
  );
  return new po(r);
}
function yo(t) {
  if (t.body === null) return null;
  const e = mo(t.headers.get("content-encoding") || "");
  return e ? (t.body.pipeTo(e.writable), e.readable) : null;
}
var gr = class extends Xe {
    constructor() {
      super(gr.symbol);
    }
    checkEnvironment() {
      return fr("fetch");
    }
    async setup() {
      const t = globalThis.fetch;
      Q(!t[Y], 'Failed to patch the "fetch" module: already patched.'),
        (globalThis.fetch = async (e, r) => {
          const s = ur(),
            n =
              typeof e == "string" && typeof location < "u" && !sr(e)
                ? new URL(e, location.href)
                : e,
            o = new Request(n, r);
          e instanceof Request && nr(o, e);
          const a = new Ye(),
            i = new Ze(o);
          if (
            (this.logger.info("[%s] %s", o.method, o.url),
            this.logger.info("awaiting for the mocked response..."),
            this.logger.info(
              'emitting the "request" event for %s listener(s)...',
              this.emitter.listenerCount("request")
            ),
            await dr({
              request: o,
              requestId: s,
              emitter: this.emitter,
              controller: i,
              onResponse: async (l) => {
                this.logger.info("received mocked response!", {
                  rawResponse: l,
                });
                const p = yo(l),
                  d = p === null ? l : new K(p, l);
                if ((K.setUrl(o.url, d), K.isRedirectResponse(d.status))) {
                  if (o.redirect === "error") {
                    a.reject(z("unexpected redirect"));
                    return;
                  }
                  if (o.redirect === "follow") {
                    lo(o, d).then(
                      (f) => {
                        a.resolve(f);
                      },
                      (f) => {
                        a.reject(f);
                      }
                    );
                    return;
                  }
                }
                this.emitter.listenerCount("response") > 0 &&
                  (this.logger.info('emitting the "response" event...'),
                  await Ce(this.emitter, "response", {
                    response: d.clone(),
                    isMockedResponse: !0,
                    request: o,
                    requestId: s,
                  })),
                  a.resolve(d);
              },
              onRequestError: (l) => {
                this.logger.info("request has errored!", { response: l }),
                  a.reject(z(l));
              },
              onError: (l) => {
                this.logger.info("request has been aborted!", { error: l }),
                  a.reject(l);
              },
            }))
          )
            return (
              this.logger.info(
                "request has been handled, returning mock promise..."
              ),
              a
            );
          this.logger.info(
            "no mocked response received, performing request as-is..."
          );
          const u = o.clone();
          return t(o).then(async (l) => {
            if (
              (this.logger.info("original fetch performed", l),
              this.emitter.listenerCount("response") > 0)
            ) {
              this.logger.info('emitting the "response" event...');
              const p = l.clone();
              await Ce(this.emitter, "response", {
                response: p,
                isMockedResponse: !1,
                request: u,
                requestId: s,
              });
            }
            return l;
          });
        }),
        Object.defineProperty(globalThis.fetch, Y, {
          enumerable: !0,
          configurable: !0,
          value: !0,
        }),
        this.subscriptions.push(() => {
          Object.defineProperty(globalThis.fetch, Y, { value: void 0 }),
            (globalThis.fetch = t),
            this.logger.info(
              'restored native "globalThis.fetch"!',
              globalThis.fetch.name
            );
        });
    }
  },
  wr = gr;
wr.symbol = Symbol("fetch");
const br = new Ke({
  name: "sm-interceptor",
  interceptors: [new yr(), new wr()],
});
br.apply();
async function go(t) {
  const r = (
    await h.store.query(`{
        productByHandle(handle: "${t}") {
          id,
          title
          handle
          description: descriptionHtml,
          published_at: publishedAt,
          created_at: createdAt,
          vendor
          type: productType
          tags

        }    
    }`)
  ).productByHandle;
  return (r.id = r.id.split("/").pop()), new Response(JSON.stringify(r));
}
async function ye() {
  var r;
  const t = await h.store.cart(),
    e = {
      token: t.checkoutUrl.split("/").pop() || "",
      note: t.note || "",
      items_subtotal_price: Number(t.cost.subtotalAmount.amount) * 100,
      total_price: Number(t.cost.totalAmount.amount) * 100,
      attributes: t.attributes.reduce((s, n) => ((s[n.key] = n.value), s), {}),
      currency:
        ((r = t.lines.nodes[0]) == null
          ? void 0
          : r.cost.totalAmount.currencyCode) || "EUR",
      item_count: t.totalQuantity,
      items: t.lines.nodes.map((s) => {
        var o, a, i, c, u, l;
        const n = Number(s.cost.amountPerQuantity.amount) * 100;
        return {
          key: s.merchandise.id,
          id: s.merchandise.product.id.split("/").pop(),
          variant_id: s.merchandise.id.split("/").pop(),
          quantity: s.quantity,
          handle: s.merchandise.product.handle,
          vendor: "",
          featured_image: {
            url: (o = s.merchandise.image) == null ? void 0 : o.url,
            alt: ((a = s.merchandise.image) == null ? void 0 : a.altText) || "",
          },
          image: (i = s.merchandise.image) == null ? void 0 : i.url,
          price: n,
          original_price: n,
          discounted_price: n,
          total_discount: 0,
          discounts: [],
          product_id: s.merchandise.product.id.split("/").pop(),
          options_with_values: s.merchandise.selectedOptions,
          variant_title: s.merchandise.title,
          requires_shipping: s.merchandise.requiresShipping,
          quantity_rule: {
            min: (c = s.merchandise.quantityRule) == null ? void 0 : c.minimum,
            max: (u = s.merchandise.quantityRule) == null ? void 0 : u.maximum,
            increment:
              (l = s.merchandise.quantityRule) == null ? void 0 : l.increment,
          },
          product_has_only_default_variant:
            s.merchandise.title == "Default Title",
          variant_options: s.merchandise.selectedOptions.map((p) => p.value),
        };
      }),
    };
  return new Response(JSON.stringify(e));
}
async function Be(t) {
  const e =
      t.headers.get("content-type") || "application/x-www-form-urlencoded",
    r = new Response(t.clone().body);
  switch (e) {
    case "application/x-www-form-urlencoded":
      return Object.fromEntries(new URLSearchParams(await r.text()).entries());
    case "application/json":
      return await r.json();
    default:
      return await r.text();
  }
}
async function wo(t, e) {
  var r;
  switch (!0) {
    case t.url.includes("/cdn/fonts"):
      console.log(t.url);
      break;
    case t.url.endsWith("cart.js"):
      e.respondWith(await ye());
      break;
    case t.url.includes("/apps/ba-rev"):
      e.respondWith(new Response(JSON.stringify({})));
      break;
    case t.url.includes("/products/") && t.url.includes(".js"):
      const s = (r = t.url.split("/").pop()) == null ? void 0 : r.split(".")[0];
      s && e.respondWith(await go(s));
      break;
    case ["/apps/", "/a/", "/community/", "/tools/"].some((n) =>
      t.url.includes(n)
    ) && !t.url.includes(".myshopify"):
      {
        const n = t.url.replace(
          window.location.hostname,
          `${h.store.options.store}.myshopify.com`
        );
        e.respondWith(
          await fetch(
            `https://api.smootify.io/cors/${
              h.shopifySiteId
            }/?url=${encodeURIComponent(n)}`
          )
        );
      }
      break;
  }
}
async function bo(t, e) {
  var r, s;
  switch (!0) {
    case t.url.includes("/api/unstable/graphql.json") &&
      !t.url.includes(".myshopify.com"):
      const n = await Be(t),
        o = JSON.stringify(n);
      if (o.includes("query bannerQuery") || o.includes("consentManagement")) {
        const a = t.clone(),
          i = `https://${h.store.options.store}.myshopify.com/api/unstable/graphql.json`;
        e.respondWith(await fetch(i, a));
      }
      break;
    case t.url.endsWith("cart/update.js"):
      {
        const a = await Be(t),
          i = JSON.stringify(a);
        if (i.includes("attributes[")) {
          let c =
            ((r = h.store.latestCart) == null ? void 0 : r.attributes) || [];
          for (let u in a) {
            const l = a[u] || "";
            let p = u.replace("attributes[", "").replace("]", "");
            (c = c.filter((d) => d.key !== p)), c.push({ key: p, value: l });
          }
          await h.store.updateCartAttributes(c), e.respondWith(await ye());
        } else if (i.includes("note"))
          await h.store.updateCartNote(a.note || ""), e.respondWith(await ye());
        else if (i.includes("attributes"))
          try {
            const { attributes: c } = JSON.parse(i);
            let u =
              ((s = h.store.latestCart) == null ? void 0 : s.attributes) || [];
            for (let l in c) {
              const p = c[l] || "";
              let d = l.replace("attributes[", "").replace("]", "");
              (u = u.filter((f) => f.key !== d)), u.push({ key: d, value: p });
            }
            await h.store.updateCartAttributes(u), e.respondWith(await ye());
          } catch (c) {
            console.error(c);
          }
      }
      break;
    case t.url.endsWith("cart/add.js"):
      {
        const a = await Be(t),
          i = await h.store.cartLinesAdd(
            (a.items || []).map((c) => {
              const u = {
                quantity: c.quantity,
                merchandiseId: `gid://shopify/ProductVariant/${c.id}`,
                attributes: [],
              };
              if (
                (c.selling_plan &&
                  (u.selling_plan = `gid://shopify/SellingPlan/${c.selling_plan}`),
                c.properties)
              )
                for (let l in c.properties) {
                  const p = c.properties[l];
                  u.attributes.push({ key: l, value: p });
                }
              return u;
            })
          );
        e.respondWith(new Response(JSON.stringify({ items: i.lines.nodes })));
      }
      break;
  }
}
br.on("request", async ({ request: t, controller: e }) => {
  try {
    switch (t.method) {
      case "GET":
        return wo(t, e);
      case "POST":
        return bo(t, e);
    }
  } catch (r) {
    console.error(r);
  }
});
async function Co() {
  var p, d;
  const t = Array.from(
    document.querySelectorAll(".w-locales-item a[hreflang]")
  );
  if (!t.length) return;
  const e = [];
  let r = [];
  t.forEach((f) => {
    const y = f.getAttribute("hreflang");
    if (y) {
      let [g, w] = y.split("-"),
        m = f.getAttribute("href");
      (m = m != null && m.endsWith("/") ? m : m + "/"),
        g == "zh" && r.push("zh-hans", "zh-hant");
      const C = {
        language: g,
        country: w,
        currentHref: m,
        el: f,
        linkWithoutLocale:
          m != null && m.startsWith(`/${g}/`) ? m.replace(`/${g}`, "") : m,
      };
      if (r.length)
        for (let E of r)
          m != null &&
            m.startsWith(`/${E}/`) &&
            (C.linkWithoutLocale = m.replace(`/${E}`, ""));
      e.push(C),
        f.addEventListener("click", async (E) => {
          E.preventDefault(),
            E.stopImmediatePropagation(),
            E.stopPropagation(),
            w && (await h.store.changeCountryByCountryIsoCode(w, !1)),
            g && (await h.store.changeLanguageByCode(g.toUpperCase(), !1)),
            (window.location = f.href);
        });
    }
  });
  let s = window.location.pathname;
  for (let f of e) {
    s = s.startsWith(`/${f.language}/`) ? s.replace(`/${f.language}/`, "/") : s;
    for (let y of r) s.startsWith(`/${y}/`) && (s = s.replace(`/${y}/`, "/"));
    s = `${s}/` == `/${f.language}/` ? s.replace(`/${f.language}`, "/") : s;
  }
  const n = e[0].language,
    { productsBase: o, collectionsBase: a } = h.options;
  let i = window.location.pathname.includes(`/${o}/`),
    c = window.location.pathname.includes(`/${a}/`);
  const u =
      document.documentElement.dataset.wfItemSlug ||
      window.location.pathname.split("/").pop(),
    l = e.map((f) => f.language);
  if (i) {
    if (u)
      try {
        const f = h.store.language,
          y = await h.store.query(`query Products @inContext(language: ${f}) {
            product(handle: "${u}") {
               id
               title
               handle
            }
        }`);
        let g = {};
        if (y.product && y.product.id) {
          g[f.toLowerCase()] = u;
          for (let w of l)
            if (!g[w])
              try {
                const m = await h.store
                  .query(`query Products @inContext(language: ${w.toUpperCase()}) {
            product(id: "${y.product.id}") {
               handle
            }
        }`);
                g[w.toLowerCase()] =
                  ((p = m.product) == null ? void 0 : p.handle) || u;
              } catch (m) {
                console.error(m), (g[w.toLowerCase()] = u);
              }
          for (let w of e)
            if (w.linkWithoutLocale == "" || w.linkWithoutLocale == "/") {
              let m = s.replace(u, g[w.language]);
              w.language == n
                ? w.el.setAttribute("href", m)
                : w.el.setAttribute("href", `/${w.language}${m}`);
            }
          return;
        }
      } catch (f) {
        console.error(f);
      }
  } else if (c && u)
    try {
      const f = h.store.language,
        y = await h.store.query(`query Collections @inContext(language: ${f}) {
            collection(handle: "${u}") {
               id
               title
               handle
            }
        }`);
      let g = {};
      if (y.collection && y.collection.id) {
        g[f.toLowerCase()] = u;
        for (let w of l)
          if (!g[w])
            try {
              const m = await h.store
                .query(`query Collections @inContext(language: ${w.toUpperCase()}) {
            collection(id: "${y.collection.id}") {
               handle
            }
        }`);
              g[w.toLowerCase()] =
                ((d = m.collection) == null ? void 0 : d.handle) || u;
            } catch (m) {
              console.error(m), (g[w.toLowerCase()] = u);
            }
        for (let w of e)
          if (w.linkWithoutLocale == "" || w.linkWithoutLocale == "/") {
            let m = s.replace(u, g[w.language]);
            w.language == n
              ? w.el.setAttribute("href", m)
              : w.el.setAttribute("href", `/${w.language}${m}`);
          }
        return;
      }
    } catch (f) {
      console.error(f);
    }
  for (let f of e)
    (f.linkWithoutLocale == "" || f.linkWithoutLocale == "/") &&
      (f.language == n
        ? f.el.setAttribute("href", s)
        : f.el.setAttribute("href", `/${f.language}${s}`));
}
function vo() {
  const t = new URLSearchParams(window.location.search);
  t.get("discount") && window.Smootify.applyCouponCode(t.get("discount"));
}
function Ao() {
  document.addEventListener("smootify:loaded", () => {
    Co(),
      vo(),
      document.querySelector(".w-richtext[policy]") &&
        v(() => import("./policies.yEVxjs1h.js"), [], import.meta.url);
  });
}
document.querySelector('script[src*="gsap"]')
  ? window.CustomEase ||
    v(() => import("./CustomEase.CAy9b7o4.js"), [], import.meta.url).then(
      (t) => {
        window.gsap
          ? (gsap.registerPlugin(t.CustomEase),
            (window.CustomEase = t.CustomEase))
          : window.addEventListener("load", () => {
              window.gsap &&
                (gsap.registerPlugin(t.CustomEase),
                (window.CustomEase = t.CustomEase));
            });
      }
    )
  : (T("Importing GSAP"),
    v(() => import("./index.C7nC7rGg.js"), [], import.meta.url).then((t) => {
      (window.gsap = t.gsap),
        v(() => import("./CustomEase.CAy9b7o4.js"), [], import.meta.url).then(
          (e) => {
            (window.CustomEase = e.CustomEase),
              gsap.registerPlugin(window.CustomEase);
          }
        );
    }));
js();
if (window.location.pathname.startsWith("/account/activate/")) {
  const [t, e, r, s] = window.location.pathname.split("/").filter((n) => !!n);
  r &&
    s &&
    !window.location.search.includes("token") &&
    (window.location =
      "/" + (h.options.accountBase + `/activate?id=${r}&token=${s}`));
}
if (window.location.pathname.startsWith("/activate-account/")) {
  const [t, e, r] = window.location.pathname.split("/").filter((s) => !!s);
  e &&
    r &&
    !window.location.search.includes("token") &&
    (window.location =
      "/" + (h.options.accountBase + `/activate?id=${e}&token=${r}`));
}
if (window.location.pathname.startsWith("/account/reset/")) {
  const [t, e, r, s] = window.location.pathname.split("/").filter((n) => !!n);
  r &&
    s &&
    !window.location.search.includes("token") &&
    (window.location =
      "/" + (h.options.accountBase + `/reset?id=${r}&token=${s}`));
}
if (window.location.pathname.startsWith("/reset-account/")) {
  const [t, e, r] = window.location.pathname.split("/").filter((s) => !!s);
  e &&
    r &&
    !window.location.search.includes("token") &&
    (window.location =
      "/" + (h.options.accountBase + `/reset?id=${e}&token=${r}`));
}
const [_o, So] = (document.documentElement.lang || "en").split("-");
window.Shopify = {
  ...(window.Shopify || {}),
  designMode: !1,
  theme: "Smootify",
  locale: _o,
  country: So || "",
  routes: { root: "/" },
};
document
  .querySelectorAll("smootify-product .w-condition-invisible")
  .forEach((t) => {
    t.remove();
  });
Ao();
window.location.pathname.startsWith("/password") &&
  document.referrer &&
  new URL(document.referrer).hostname != window.location.hostname &&
  h.showContextErrorBanner(
    document.body,
    "Your Shopify store is password protected",
    ""
  );
document.addEventListener("smootify:taxRateChanged", () => {
  document
    .querySelectorAll("smootify-prop[data-original-cents]")
    .forEach((t) => {
      t.textContent = h.store.formatMoney(Number(t.dataset.originalCents), !0);
    });
});
export {
  T as $,
  xo as A,
  Jo as B,
  Oo as C,
  Ko as D,
  Qo as E,
  Go as F,
  Xo as G,
  To as H,
  Do as I,
  un as J,
  cn as K,
  Bo as L,
  _ as M,
  k as N,
  Eo as O,
  Mo as P,
  Po as Q,
  jo as R,
  h as S,
  Zt as T,
  Qe as U,
  Uo as V,
  tr as W,
  Lo as X,
  $o as Y,
  ht as Z,
  v as _,
  A as a,
  q as a0,
  tn as b,
  we as c,
  Ro as d,
  sn as e,
  I as f,
  er as g,
  No as h,
  ko as i,
  ke as j,
  Fo as k,
  Wo as l,
  pe as m,
  Vo as n,
  Mt as o,
  Ho as p,
  Lr as q,
  qo as r,
  je as s,
  rn as t,
  Fs as u,
  ve as v,
  Vr as w,
  ln as x,
  Yo as y,
  zo as z,
};
