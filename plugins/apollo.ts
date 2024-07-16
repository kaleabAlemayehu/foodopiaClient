export default defineNuxtPlugin((nuxtApp) => {
  // access cookie for auth
  const cookie = useCookie("token");

  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    // `client` can be used to differentiate logic on a per client basis.

    // apply apollo client token
    token.value = token.value ? `Bearer ${cookie.value}` : ``;
  });
});
