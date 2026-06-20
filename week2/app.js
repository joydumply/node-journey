import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

async function combineParallel(files) {
	const promises = files.map((file) => readFile(file, 'utf-8'));

	const results = await Promise.all(promises);

	return results.join('\n');
}

try {
	const baseDir = 'md';
	const files = await readdir(baseDir, { recursive: true }); // получаю все файлы

	const mdFiles = files
		.filter((file) => file.endsWith('.md'))
		.map((file) => join(baseDir, file)); // фильтрую по расширению .md

	const t0 = performance.now();
	const mdText = await combineParallel(mdFiles);

	const t1 = performance.now();
	console.log(`Время чтения: ${(t1 - t0).toFixed(2)} ms`);

	await writeFile('result.md', mdText, 'utf-8');
} catch (err) {
	console.error(err);
	process.exit(1);
}

function myPromiseAll(promises) {
	return new Promise((resolve, reject) => {
		const results = [];
		let completed = 0;
		const total = promises.length;

		if (total === 0) {
			resolve([]);
			return;
		}

		promises.forEach((promise, index) => {
			Promise.resolve(promise).then(
				(value) => {
					results[index] = value;
					completed++;
					if (completed === total) {
						resolve(results);
					}
				},
				(error) => {
					reject(error);
				}
			);
		});
	});
}
