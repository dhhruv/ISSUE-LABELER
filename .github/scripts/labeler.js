const core = require('@actions/core');
const github = require('@actions/github');
const nlp = require('compromise');
const _ = require('lodash');

async function run() {
  try {
    const issueTitle = github.context.payload.issue.title;
    const issueBody = github.context.payload.issue.body;
    const issueNumber = github.context.payload.issue.number;

    const keywordToLabelMap = [
      { keywords: ['bug', 'error', 'issue', 'defect', 'problem'], label: 'bug' },
      { keywords: ['feature', 'enhancement', 'request'], label: 'enhancement' },
      { keywords: ['documentation', 'docs'], label: 'documentation' },
      { keywords: ['help', 'support', 'guidance'], label: 'help wanted' },
      { keywords: ['question', 'query', 'clarification'], label: 'question' },
      { keywords: ['invalid', 'not valid', 'inaccurate'], label: 'invalid' },
      { keywords: ['wontfix', 'won\'t fix', 'cannot fix', 'will not fix'], label: 'wontfix' },
      { keywords: ['beginner', 'starter', 'newbie', 'easy task'], label: 'good first issue' },
      { keywords: ['performance', 'speed', 'optimization', 'efficiency'], label: 'performance' },
      { keywords: ['security', 'vulnerability', 'breach', 'threat', 'encryption', 'authorization'], label: 'security' },
      { keywords: ['refactoring', 'cleanup', 'code quality', 'code organization'], label: 'refactoring' },
      { keywords: ['test', 'unit test', 'integration test', 'testing', 'code coverage'], label: 'testing' },
      { keywords: ['deployment', 'deploy', 'release', 'production'], label: 'deployment' },
      { keywords: ['dependency', 'library', 'package', 'third-party', 'libraries'], label: 'dependency' },
      { keywords: ['ui', 'ux', 'interface', 'user interface', 'design'], label: 'design' },
      { keywords: ['memory', 'leak', 'memory management', 'garbage collection'], label: 'memory' },
      { keywords: ['database', 'db', 'data', 'sql', 'nosql'], label: 'database' },
      { keywords: ['network', 'connection', 'http', 'https', 'connectivity'], label: 'network' },
      { keywords: ['api', 'rest', 'graphql', 'endpoint', 'request', 'response'], label: 'api' },
      { keywords: ['logging', 'log', 'debug', 'info', 'warn', 'error'], label: 'logging' },
      { keywords: ['compatibility', 'compatible', 'cross-platform', 'browser compatibility'], label: 'compatibility' },
      { keywords: ['migration', 'migrate', 'upgrade', 'data transfer'], label: 'migration' },
      { keywords: ['internationalization', 'i18n', 'translation'], label: 'internationalization' },
      { keywords: ['localization', 'l10n', 'locale', 'region'], label: 'localization' },
    ];
    

    const token = core.getInput('repo-token', { required: true });
    const octokit = github.getOctokit(token);

    let labelsToAdd = [];

    const issueContent = issueTitle + ' ' + issueBody;
    
    const doc = nlp(issueContent.toLowerCase());

    keywordToLabelMap.forEach(mapping => {
      if (_.some(mapping.keywords, keyword => doc.has(keyword))) {
        labelsToAdd.push(mapping.label);
      }
    });

    if (labelsToAdd.length > 0) {
      await octokit.rest.issues.addLabels({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: issueNumber,
        labels: labelsToAdd,
      });
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
