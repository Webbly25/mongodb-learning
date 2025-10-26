const { MongoClient } = require('mongodb');

async function runGetStarted() {
	const uri = 'mongodb://root:root@localhost:27017';
	const client = new MongoClient(uri);

	try {
		const database = client.db('sample_mflix');
		const movies = database.collection('movies');
		// Queries for a movie that has a title value of 'Back to the Future'
		const query = { title: 'Back to the Future' };
		const movie = await movies.findOne(query);
		console.log(movie);
	} finally {
		await client.close();
	}
}

runGetStarted().catch(console.dir);
