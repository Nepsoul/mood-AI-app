import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  //off middleware
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], //regex for what to run or not
};
