# Amath Solver (Secure AI Version)

## 🚀 Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your OpenAI API key securely in Vercel:
   - Go to your project on [Vercel](https://vercel.com/)
   - Settings → Environment Variables
   - Add:
     - `OPENAI_API_KEY=your_secret_api_key_here`

3. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

✅ Your key is never exposed to the frontend.  
✅ Each session has a limit of 5 word problem solutions.  
✅ No user data is stored or logged.
