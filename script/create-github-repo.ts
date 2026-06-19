// Script to create a GitHub repository for the Artcomp Slovenia website
// Uses Replit's GitHub connection for authentication

import { Octokit } from '@octokit/rest';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function createRepository() {
  try {
    const accessToken = await getAccessToken();
    const octokit = new Octokit({ auth: accessToken });

    // Get the authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);

    // Create the repository
    const repoName = 'artcomp-slovenia-website';
    
    try {
      const { data: repo } = await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        description: 'Artcomp Slovenia - AI Consulting & Strategy Website',
        private: false,
        auto_init: false,
        has_issues: true,
        has_projects: false,
        has_wiki: false,
      });

      console.log(`\nRepository created successfully!`);
      console.log(`Repository URL: ${repo.html_url}`);
      console.log(`Clone URL (HTTPS): ${repo.clone_url}`);
      console.log(`Clone URL (SSH): ${repo.ssh_url}`);
      
      console.log(`\n--- Next Steps ---`);
      console.log(`Run the following commands to push your code:\n`);
      console.log(`git init`);
      console.log(`git add .`);
      console.log(`git commit -m "Initial commit: Artcomp Slovenia website"`);
      console.log(`git branch -M main`);
      console.log(`git remote add origin ${repo.clone_url}`);
      console.log(`git push -u origin main`);
      
      return repo;
    } catch (error: any) {
      if (error.status === 422) {
        console.log(`Repository '${repoName}' already exists.`);
        const { data: existingRepo } = await octokit.repos.get({
          owner: user.login,
          repo: repoName,
        });
        console.log(`Repository URL: ${existingRepo.html_url}`);
        return existingRepo;
      }
      throw error;
    }
  } catch (error) {
    console.error('Error creating repository:', error);
    throw error;
  }
}

createRepository();
