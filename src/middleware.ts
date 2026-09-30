export { default } from "next-auth/middleware";

export const config = {
  // Protege todas as rotas que comecem por /dashboard
  matcher: ["/dashboard/:path*"],
};