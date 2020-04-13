# Vibe Website

This repo generates files for static hosted website: https://vibe.us.

## How to deploy
Enter following command to Slack #bot-github channel.
```
/github deploy vibeus/vibe-website
```

- Select branch `master`
- Set Environment `production` to deploy to https://vibe.us, or `staging` to deploy to https://vibe-beta.com
- Set Task `sync-blogs` if you want to sync latest changes from Dropbox Paper before deployment

Click `Create` to create a deployment.

Notes:
1. When task is set to `sync-blogs`, deployment will fail if blog post contains PNG image that are larger
than 3MB. Either reduce the image size (e.g. use smaller size, or convert it to JPG), or contact @jiulongw
to override this limit.
2. If `sync-blogs` was used to deploy to staging, there is no need to add `sync-blogs` in production deployment
after validating in the beta environment.
