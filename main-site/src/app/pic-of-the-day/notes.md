# This is a collection of personal notes and thoughts while I work on this project. 

## Tech Stack Considerations
 
I'm torn between using an external CDN or relying on Vercel's built-in Edge thing. I don't really understand all of this. 

Local Storage or Cloud Storage? Gemini suggests local to start, with considerations for cloud management in the future. I don't like bloat, and if I know this collection will grow over time, I don't want to create more work for myself in the future by sticking with a solution that won't last. I think the better question here is really, 'which cloud storage solution should I use?' There's a lot of options. 

Gemini now suggests having *both* a cloud storage solution AND a CDN rather than relying solely on the CDN to host and serve the images. 

If I just rely on Vercel's built-in CDN capabilities, I will likely use a cloud storage solution to store the collection of images. 
I could go with AWS tools S3 and CloudFront as the CDN and cloud storage solutions, giving me some good AWS experience. 
I could stick with Cloudflare, which is known to be beginner-friendly. Might present problems later if I decide to integrate AWS later. 

I'm going to stick with AWS S3 and CloudFront for this project. I'm not in a rush to get this project set up, and using AWS would be industry relevant and look better on a resume. 