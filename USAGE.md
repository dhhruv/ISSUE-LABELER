# GitHub Issue Label Extractor
The GitHub Issue Label Extractor is a tool designed to automate the process of extracting labels from GitHub issue descriptions and assigning them to the respective issues. This tool aims to help open-source maintainers by reducing their workload and ensuring that the labeling of issues is accurate and consistent.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation
To get started with the GitHub Issue Label Extractor, follow these steps:

1. **Clone the Repository**: Use the command below to clone this repository to your local machine.

    ```bash
    git clone https://github.com/dhhruv/ISSUE-LABELER.git
    ```
2. **Install Dependencies**: After navigating to the cloned repository directory, install the project dependencies by executing the command below:

    ```bash
    npm install
    ```
3. **Set Up Access Token**: Generate a personal access token (PAT) with the necessary permissions to add labels to issues. The token should have the `repo` scope. 

> ## :warning: Important Note Regarding Personal Access Tokens
> 
> A Personal Access Token (PAT) is a crucial security credential and should be handled with utmost caution. Here are some best practices to keep in mind:
> 
> - **Never share your PAT**: Your PAT is like a password. Keep it secret to prevent unauthorized access to your repository.
> 
> - **Restrict scopes**: When creating a PAT, only assign the necessary permissions (or 'scopes'). For this tool, you only need the `repo` scope.
> 
> - **Regenerate PATs regularly**: Limit potential damage from a compromised token by regenerating your PATs from time to time.
> 
> - **Revoke PATs when necessary**: If you suspect your token has been exposed or if it's not needed anymore, revoke it without delay.
> 
> Remember, good security isn't just about strong systems but also about safe practices. Careful handling of PATs is a big part of this.


Instructions to create a PAT can be found [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

4. **Configure the Token**: Navigate to the settings of your GitHub repository and create a new repository secret named `PAT_ISSUE_LABELER`. Paste your generated access token as the secret's value. This secret is used by the GitHub Actions workflow for GitHub API authentication.

5. **Enable GitHub Actions**: This tool utilizes GitHub Actions to automate the labeling process. Ensure GitHub Actions is enabled in your repository. You can do this from the "Actions" tab of your repository.

## Usage
The GitHub Issue Label Extractor works automatically to add labels to new issues based on pre-configured keywords. Here's how to use it:

1. **Create an Issue**: Navigate to your repository's issue tracker and create a new issue. Be sure to provide a detailed and descriptive title and body.

2. **Labels Added Automatically**: Once the issue is created, the GitHub Actions workflow will trigger the Issue Label Extractor. It will analyze the issue's title and body, extract labels based on predefined keywords, and add them to the issue.

3. **Review and Edit Labels**: After labels are added, review them to ensure they accurately represent the issue. If necessary, you can manually edit or remove labels.

4. **Enjoy a Streamlined Workflow**: With the Issue Label Extractor, you save time and achieve a more consistent labeling across your repository, enhancing project management.

## Configuration
The GitHub Issue Label Extractor comes with a default set of keyword-label mappings. To customize these mappings according to your needs:

1. Open the `labeler.js` file in your repository.
2. Locate the `keywordToLabelMap` array. It contains the current mappings between keywords and labels.
3. Adjust the mappings as required, maintaining the structure `{ keywords: ['keyword1', 'keyword2'], label: 'label' }`.
4. Save your changes and commit and push the updated file.

From now on, the GitHub Actions workflow will use your customized mappings.

## Contributing
Your contributions to the GitHub Issue Label Extractor are greatly appreciated! You can contribute in several ways:

- Open an issue to report a bug or propose a feature.
- Submit a pull request with your enhancements or bug fixes.

## License
This project is licensed under the MIT License. Please refer to the [LICENSE](LICENSE) file for more details.