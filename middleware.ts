import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

//public routes
const isPublicRoute = createRouteMatcher(['/']);

export default clerkMiddleware((auth, request) => {
    if(!isPublicRoute(request)) {
        auth().protect();
    }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};