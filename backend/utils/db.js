import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../../db.json');

// Configure lowdb to write to JSON file
const adapter = new JSONFile(file);
const db = new Low(adapter, { breeds: [] });

// Read data from JSON file, this will also create the file if it doesn't exist
await db.read();

export { db };