const list = document.querySelector('#repo-list');

async function loadStarredRepos() {
  try {
    const response = await fetch('events.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const repos = await response.json();

    list.innerHTML = repos
      .map(
        (repo) => `
          <li class="repo-item">
            <p class="repo-name">${repo.owner}/${repo.name}</p>
            <p class="repo-meta">⭐ ${repo.stargazers_count.toLocaleString()} stars · ${repo.language}</p>
            <p class="repo-description">${repo.description}</p>
          </li>
        `
      )
      .join('');
  } catch (error) {
    list.innerHTML = `<li class="repo-item">Unable to load starred repositories.</li>`;
    console.error(error);
  }
}

loadStarredRepos();
