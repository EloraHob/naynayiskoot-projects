import styles from "./page.module.css";
import Image from "next/image";

// This might not be correct
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";


/* This function tells AWS where to find the access keys while keeping 
   the keys hidden as env variables so users can't perform malicious tasks.
   
   ** NOTE **
   In AWS SDK v3, AWS.config.update is no longer valid. Instead, syntax has 
   been changed so only the necessary services can be explicitly imported. 
*/

/* old config stuff:
    AWS.config.update({
        bucketName: process.env.S3_BUCKET_NAME,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
        region: process.env.AWS_REGION 
    });
*/

// new config stuff:
const config = {
    // Telling AWS where to go:
    bucketName: process.env.S3_BUCKET_NAME,
    region: process.env.AWS_ACCESS_KEY_ID,
    // Telling AWS who you are:
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
}


/* Per Gemini:
    Instead of listObjectsV2, you'll now use a function 
    called `listObjects` from the V3 SDK.
*/

/* Per Next.js Docs:
    To use a remote image, the `src` property should be a URL string.
    
    Since Next.js does not have access to remote files during the 
    build process, you'll need to provide the `width`, `height` and 
    optional `blurDataURL` props manually.
    
    The `width` and `height` attributes are used to infer the correct 
    aspect ratio of image and avoid layout shift from the image 
    loading in. The `width` and `height` do not determine the rendered 
    size of the image file.

    If you are accessing images from a source without knowledge of 
    the images' sizes, there are several things you can do: Use `fill`.

    The `fill` prop allows your image to be sized by its parent element. 
    Consider using CSS to give the image's parent element space on the 
    page along sizes prop to match any media query break points. You can 
    also use `object-fit` with `fill`, `contain`, or `cover`, and `object-position`
    to define how the image should occupy that space.

    When using `fill`, the parent element must have `position: relative`.
    This is necessary for the proper rendering of the image element in
    that layout mode.

    When using `fill`, the parent element must have `display: block`.
    This is the default for <div> elements but should be specified otherwise.

    https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
    https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages
    https://nextjs.org/docs/app/building-your-application/optimizing/images

*/


export default function Page() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                A logo will go here I think.
            </header>
            <main className={styles.main}>
                <div>
                    Stuff will go here. Don&#39;t fret.
                </div>
            </main>
        </div>
    );
}

/* 
  selectedImg;
  pastPics[];

  chooseRandImg() {
    selectedImg = math.rand(1-[num imgs in folder]);

    // If every img has been chosen before, reset array.
    if (pastPics.length = [num imgs in folder]) {
        pastPics.emptyArray; //IDK 
    }

    // If img has already been displayed, pick a new img.
    if (pastPics.contains(selectedImg) {
        chooseRandImg;
    }
    // If img has NOT been displayed previously, log & display it.
    else {
        pastPics.add(selectedImg);
        return selectedImg; // should this go outside of else statement?
    }
  }

*/