import { exec } from 'child_process';

exec('node scripts/banner-generator.mjs', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});