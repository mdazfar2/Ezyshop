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

### Set up guildines

**Follow these steps to setup EzyShop on your local machine 👇**

- Fork the Repository

- Clone the forked repository to you local system.

```bash
  git clone https://github.com/<your-github-username>/Ezyshop.git
```

- Create a new branch to make your changes.

```bash
   git checkout -b <your_branch_name>
```

- Track and stage your changes.

```bash
   # Track the changes
   git status

   # Add changes to Index
   git add .
```

- Commit your changes.

```bash
   git commit -m "your_commit_message"
```

- Run Linter and Fix Issues.
- Ensure your code follows the project’s style guidelines.

```bash
npm run lint
# Use --fix to auto-correct issues where possible
npm run lint -- --fix
```

- Build the Project Locally.
- Confirm that your changes don’t break the build.
- if possible, attach a screenshot of the successful build.

```bash
npm run build
```

- Push your committed changes to the remote repo.

```bash
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