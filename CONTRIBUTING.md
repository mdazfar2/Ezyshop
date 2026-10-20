# Ezyshop Contributing Guidelines


Thank you for taking the time to contribute to Ezyshop World. Your help is essential for keeping it great.


Please take a moment to read the following guidelines before contributing:

> **⚠️IMPORTANT**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**
>
> **An automated process has been implemented to ensure the timely management of Pull Requests (PRs) on this platform.**
>
> **PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**
>
>**Additionally, PRs that are improperly linted or have a failing build will not be merged. Ensure that your code passes linting checks and builds successfully before submitting your PR.**

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them.

## How to contribute

To get started, look at the existing [**create a new issue**](https://github.com/mdazfar2/Ezyshop/issues)!

### Setup Guidelines

**Follow these steps to setup EzyShop on your local machine 👇**

1. **Fork and Clone the Repository**
   ```bash
   git clone https://github.com/<your-github-username>/Ezyshop.git
   cd Ezyshop
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Copy `.env.example` to create your `.env` file:
     ```bash
     cp .env.example .env
     ```
   - Fill in your `DATABASE_URL` (MongoDB Atlas connection string), `NEXTAUTH_SECRET`, and SMTP credentials (`SMTP_USER`, `SMTP_PASS`).
   - In MongoDB Atlas, ensure **Network Access** allows `0.0.0.0/0` (Allow Access from Anywhere) so your database is accessible.

4. **Generate Prisma Client**
   - Run this command to generate the latest Prisma Client types according to `prisma/schema.prisma`:
     ```bash
     npx prisma generate
     ```
   > **Note:** This command reads `prisma/schema.prisma` and creates TypeScript types for all models (`User`, `Seller`, `Product`, etc.). Run this whenever you install dependencies or modify `schema.prisma`.

5. **Sync Database Schema with MongoDB (`npx prisma db push`)**
   - Push your Prisma schema directly to your MongoDB Atlas database:
     ```bash
     npx prisma db push
     ```
   > **Note:** Because MongoDB is NoSQL, `prisma db push` connects directly to your MongoDB Atlas cluster, initializes the `ezyshop` database, and creates all collections (`User`, `Seller`, `Product`, `Order`, `Question`, etc.) and unique indexes automatically. You do **not** need to run this command on Vercel — running it locally will update the cloud database for production as well.

6. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

7. **Create a New Branch for Your Feature / Bug Fix**
   ```bash
   git checkout -b <your_branch_name>
   ```

8. **Test and Build Locally Before Submitting (`npm run build`)**
   - Check linting:
     ```bash
     npm run lint
     # Or fix issues automatically:
     npm run lint -- --fix
     ```
   - **Build the project locally:**
     ```bash
     npm run build
     ```
   > **Note:** Always run `npm run build` locally before pushing or creating a PR. This compiles Next.js in production mode, verifies all TypeScript types, and ensures your changes will build successfully on Vercel without deployment errors.

9. **Commit and Push Changes**
   ```bash
   # Check status and stage changes
   git status
   git add .

   # Commit with a descriptive message
   git commit -m "feat/fix: your descriptive message"

   # Push to your remote branch
   git push origin <your_branch_name>
   ```

- Go to your forked repository on GitHub and click on `Compare & pull request`.

- Add an appropriate title and description to your pull request explaining your changes and efforts done.

- Click on `Create pull request`.

- Congrats! 🥳 You've made your first pull request to this project repo.

### Guidelines for good commit message

1. **Be Concise and Descriptive**: Summarize the change in a way that’s easy to understand at a glance.
2. **Use the Imperative Mood**: Write as if giving a command (e.g., `Add`, `Fix`, `Update`), which is a convention in many projects.
3. **Include Context**: Provide context or reason for the change if it’s not immediately obvious from the summary.
4. **Reference Issues and Pull Requests**: Include `issue numbers` or PR references if the commit addresses them.
5. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

## Reporting Issues

- Before submitting an issue, please search to ensure it has not already been reported.

- When creating a new issue, provide as much detail as possible, including:

1. The steps to reproduce the issue
2. What was expected to happen and what actually happened
3. Screenshots or logs, if applicable
4. Information about your environment (OS, browser, etc.)

### Feature Requests

- Feel free to open an issue to request a new feature.
- Provide as much context and detail as possible. Why is the feature important? How do you envision it being used?
- Consider outlining how you think the feature could be implemented.

### Updating Documentation

- If you make changes to the code, please update relevant documentation (README.md etc.).
- Keep documentation clear, concise, and up-to-date.

> **⚠️IMPORTANT**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether > it's already opened or raised by you, and then create a Pull Request.**
>
> **An automated process has been implemented to ensure the timely management of Pull Requests (PRs) on this platform.**
>
> **PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**
>
>**Additionally, PRs that are improperly linted or have a failing build will not be merged. Ensure that your code passes linting checks and builds successfully before submitting your PR.**

>**Don't forget to check .env.example for better insight of the environment variable**