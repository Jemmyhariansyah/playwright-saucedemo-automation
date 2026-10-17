const superAdmin = {
  validUser: {
    email: process.env.SUPERADMIN_EMAIL || "standard_user",
    password: process.env.SUPERADMIN_PASSWORD || "secret_sauce",
  },

  invalidUser: {
    email: "standard_userss",
    password: "secret_sauce",
  },

  invalidPassword: {
    email: "standard_user",
    password: "secret_sauceeee_dong",
  },
};

export { superAdmin };
