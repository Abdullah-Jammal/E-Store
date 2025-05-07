type NavbarLinks = {
  name: string;
  href: string;
};

export const dropDownMenu: NavbarLinks[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/cart",
    name: "Cart",
  },
  {
    href: "/products",
    name: "Products",
  },
  {
    href: "/orders",
    name: "Orders",
  },
  {
    href: "/reviews",
    name: "Reviews",
  },
  {
    href: "/favorites",
    name: "Favorites",
  },
  {
    href : "/admin/sales",
    name : "dashboard"
  }
];

export const links = {
  HOME: {
    href: "/",
    name: "Home",
  },
  ABOUT: {
    href: "/about",
    name: "About",
  },
  CART: {
    href: "/cart",
    name: "Cart",
  },
  PRODUCTS: {
    href: "/products",
    name: "Products",
  },
  ORDERS: {
    href: "/orders",
    name: "Orders",
  },
  REVIEWS: {
    href: "/reviews",
    name: "Reviews",
  },
  FAVORIATE: {
    href: "/favorites",
    name: "Favorites",
  },
  SIGNUP: {
    href: "/sign-up",
    name: "Sign-up",
  },
  SIGNIN: {
    href: "/sign-in",
    name: "Sign-in",
  },
} as const;


export const adminLinks:NavbarLinks[] = [
  {
    href : "/admin/sales",
    name : "sales"
  },
  {
    href : "/admin/products",
    name : "my products"
  },
  {
    href : "/admin/products/create",
    name : "create product"
  },
]