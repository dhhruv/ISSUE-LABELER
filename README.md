<p align="center">
  <img src="https://github.com/dhhruv/ISSUE-LABELER/assets/72680045/9748a7a5-4458-4470-9e58-08a0c33898b1.png">
  <h2 align="center" style="margin-top: -4px !important;">ISSUE-LABELER: Automated Issue Labeling for GitHub</h2>
  <p align="center">
    <a href="https://github.com/dhhruv/ISSUE-LABELER/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-informational">
    </a>
    <a href="https://nodejs.org/">
    	<img src="https://img.shields.io/badge/Node.js-v14-informational">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/JavaScript-ES6-green">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/GitHub%20Actions-CI/CD-blue">
    </a>
  </p>
</p>
<p align="center">
	<img src="http://ForTheBadge.com/images/badges/built-with-love.svg">
</p>
<p align="center">   
	<a href="https://dev.to/dhhruv/issue-labeler-1epe">
    	<img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white">
    </a>
</p>



A project submitted for the GitHub + DEV 2023 Hackathon. This tool assists maintainers by extracting labels from the bodies of GitHub issues.

## Category Submission

Maintainer Must-Haves

## App Link

You can find Issue Labeler [here](https://github.com/dhhruv/ISSUE-LABELER)

## Description

This tool is an aid for open-source maintainers. It is designed to automatically extract labels from GitHub issue descriptions and add them to the issue. This means maintainers do not have to manually label issues, reducing their workload and ensuring that issues are labeled accurately and consistently.

## Screenshots

These screenshots demonstrate the Issue Labeler in action on five different issues. Once each issue is created, the GitHub Actions workflow triggers and the tool starts its work.

1. **First Issue:**

    ![First issue labels](https://github.com/dhhruv/ISSUE-LABELER/blob/master/.images/issue-1.png)

2. **Second Issue:**

    ![Second issue labels](https://github.com/dhhruv/ISSUE-LABELER/blob/master/.images/issue-2.png)

3. **Third Issue:**

    ![Third issue labels](https://github.com/dhhruv/ISSUE-LABELER/blob/master/.images/issue-3.png)

4. **Fourth Issue:**

    ![Fourth issue labels](https://github.com/dhhruv/ISSUE-LABELER/blob/master/.images/issue-4.png)

5. **Fifth Issue:**

    ![Fifth issue labels](https://github.com/dhhruv/ISSUE-LABELER/blob/master/.images/issue-5.png)


## Link to Source Code

You can see how we built Issue Labeler by checking out the [source code](https://github.com/dhhruv/ISSUE-LABELER)

## Background

This project was inspired by the need to streamline the workflow for open-source maintainers. We observed that labelling issues was a recurring task that could be automated to save maintainers time and effort. We chose to participate in the Maintainer Must-Haves category for the GitHub + DEV 2023 Hackathon, as we believed this was a valuable tool that could assist many maintainers.

## How We Built It

We utilized GitHub Actions to create a workflow that triggers whenever a new issue is created. This workflow runs a script that analyzes the issue description and extracts labels based on predefined keywords. The script then adds these labels to the issue.

We also made use of GitHub Codespaces to develop and test our code. This made it easy for our team to collaborate and ensured that we had a consistent development environment.

During the project, we learned a great deal about GitHub Actions and Codespaces, including how to create custom workflows and how to set up a development environment in Codespaces.

## Team

- **Dhruv Panchal**: [GitHub](https://github.com/dhhruv) | [DEV](https://dev.to/dhhruv)
- **Jayati Thakkar**: [GitHub](https://github.com/jayatithakkar) | [DEV](https://dev.to/jayatithakkar)

## Permissive License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Additional Resources/Info

Want to learn more about how to use Issue Labeler? Check out our [Usage Guide](USAGE.md). You can also contribute to this project by submitting a pull request or opening an issue on GitHub.

