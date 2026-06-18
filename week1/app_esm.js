import { readdir, readFile, writeFile } from 'fs/promises';
import {join} from 'path';

try {
	const files = await readdir('md/', { recursive: true }); // получаю все файлы

	const mdFiles = files.filter((file) => file.endsWith('.md')); // фильтрую по расширению .md

	let textToWrite = '';
	for (const file of mdFiles) {
		const res = await readFile(join('md/', file), 'utf-8');

		textToWrite += `Filename: ${file}\n\n`;
		textToWrite += res;
		textToWrite += '\n\n====================\n\n';
	}

	await writeFile('result.md', textToWrite, 'utf-8');


} catch (err) {
	console.error(err);
	process.exit(1);
}
