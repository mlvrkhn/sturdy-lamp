import { useEffect, useState } from 'react';

async function getRepos(filter) {
    const repos = await fetch('api/getPrivateRepos')
        .then(resp => resp.json());

        return repos.filter(repo => repo.name.indexOf(filter) === 0); 
}

export default function Repos() {
    const [reposList, setReposList] = useState([]);

    useEffect(() => {
        getRepos('task-html').then(
            data => setReposList(data));
    }, []);

    return (
        <ul>
            lista
            {reposList.map((repo, i) => <li key={`repo-${i}`}>{repo.name}</li>)}
        </ul>
    )
}