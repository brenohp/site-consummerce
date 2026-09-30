import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(_req) {
    // Parâmetro renomeado com sublinhado para evitar o aviso de não utilizado
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};