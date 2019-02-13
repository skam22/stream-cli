import { Command, flags } from '@oclif/command';
import emoji from 'node-emoji';
import chalk from 'chalk';
import path from 'path';

import { auth } from '../../utils/auth';

export class ModerateFlag extends Command {
    static flags = {
        user: flags.string({
            char: 'u',
            description: chalk.green.bold('ID of user.'),
            exclusive: ['message'],
            required: false,
        }),
        message: flags.string({
            char: 'm',
            description: chalk.green.bold('ID of message.'),
            exclusive: ['user'],
            required: false,
        }),
    };

    async run() {
        const { flags } = this.parse(ModerateFlag);

        try {
            const client = await auth(
                path.join(this.config.configDir, 'config.json'),
                this
            );

            if (flags.user) {
                await client.flagUser(flags.user);

                this.log(
                    `The user ${flags.user} has been flagged!`,
                    emoji.get('bangbang')
                );
                this.exit(0);
            } else if (flags.message) {
                await client.flagMessage(flags.message);

                this.log(
                    `The message ${flags.user} has been flagged!`,
                    emoji.get('bangbang')
                );
                this.exit(0);
            } else {
                this.warn(
                    `Please pass a valid command. Use the command ${chalk.green.bold(
                        'moderate:flag --help'
                    )} for more information.`
                );
                this.exit(0);
            }
        } catch (err) {
            this.error(err, { exit: 1 });
        }
    }
}

ModerateFlag.description = 'Flag users and messages.';
