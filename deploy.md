# Firebase Deployment Guide

## Quick Setup

1. **Login to Firebase**:
```bash
firebase login
```

2. **Create Firebase Project** (if you don't have one):
```bash
firebase projects:create your-project-name
```

3. **Update `.firebaserc`** with your project ID:
```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

4. **Install dependencies** (skip native modules):
```bash
npm install --ignore-scripts
```

5. **Build the app**:
```bash
npm run build
```

6. **Deploy**:
```bash
firebase deploy --only hosting
```

## Alternative: Use GitHub Actions

Create `.github/workflows/firebase-deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci --ignore-scripts
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
```

## Files Created:
- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Project configuration

Your app will be available at: `https://your-project-id.web.app`