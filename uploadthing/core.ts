import { createUploadthing, type FileRouter } from "uploadthing/next";

import {auth} from '@clerk/nextjs';

const f = createUploadthing();

const handleAuth = () => {
    const {userId} = auth();

    if(!userId) throw new Error("No autorizado");
    return {userId};
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    logoEmpresa: f({image:{maxFileSize: "4MB", maxFileCount: 1}})
    .middleware(() => handleAuth())
    .onUploadComplete(()=>{}),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
