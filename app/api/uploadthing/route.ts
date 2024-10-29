// Resource: https://v6.docs.uploadthing.com/getting-started/appdir & https://v6.docs.uploadthing.com/api-reference/server#createroutehandler
// Copy paste (be careful with imports)

import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    isDev: process.env.NODE_ENV === 'development',
    token: process.env.UPLOADTHING_SECRET,
  }
});