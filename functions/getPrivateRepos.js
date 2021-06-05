const fetch = require('node-fetch');

const url = 'https://api.github.com/user/repos';

exports.handler = async () => {
    return await fetch(`${url}?visibility=private&affiliation=owner`, {
		headers: {
			Accept: 'application/vnd.github.v3+json',
			Authorization: `token ${process.env.GH_TOKEN}`,
		},
	})
		.then(resp => {
            console.log(resp);
            return resp.json();
        })
		.then(data => {
			return {
				statusCode: 200,
				headers: { 'Content-Type': 'application/json' },
			};
		});
}