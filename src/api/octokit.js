import { Octokit } from 'octokit';
const octokit = new Octokit();
export async function userData(targetUser) {
  try {
    const response = await octokit.request('GET /users/{username}', {
      username: targetUser,
      headers: {
        'X-GitHub-Api-Version': '2026-03-10',
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
