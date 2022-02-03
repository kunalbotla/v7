import path from 'path'
import fs from 'fs'

export default function (_, res) {
    const folder = 'images';
    const dir = path.resolve('./public', folder);
    const filenames = fs.readdirSync(dir);
    const images = filenames.map(name => path.join('/', folder, name))
    res.statusCode = 200;
    res.json(images);
}