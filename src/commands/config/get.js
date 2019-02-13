import { Command } from '@oclif/command';
import Table from 'cli-table';
import emoji from 'node-emoji';
import chalk from 'chalk';
import path from 'path';

import { credentials } from '../../utils/config';

export class ConfigGet extends Command {
    async run() {
        const config = path.join(this.config.configDir, 'config.json');
        const { apiKey, apiSecret } = await credentials(config, this);

        if (apiKey && apiSecret) {
            const table = new Table({
                head: ['API Key', 'API Secret'],
                colWidths: [25, 75],
            });

            table.push([apiKey, apiSecret]);

            this.log(table.toString());
            this.exit(0);
        } else {
            this.error(
                chalk.red(
                    `Credentials not found. Run ${chalk.bold(
                        'chat init'
                    )} to generate a configuration file. ${emoji.get(
                        'pensive'
                    )}`
                ),
                { exit: 1 }
            );
        }
    }
}

ConfigGet.description = 'Retrieves API config credentials for CLI.';
