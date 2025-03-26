import { Listener } from '@sapphire/framework';
import MongoDBUtils from '../../lib/database/MongoDBUtils';
import createChildLogger from '../../lib/telemetry/logger.js';
import type { Client } from 'discord.js';
import type { Db } from 'mongodb';
import type { Logger } from 'pino';

const Log: Logger = createChildLogger('Event:ClientReady');

export class ClientReady extends Listener {
	/**
	 * @param {Listener.LoaderContext} context
	 */
	constructor(context: Listener.LoaderContext, options: Listener.Options) {
		super(context, {
			...options,
			// Any Listener options you want here
			name: 'ready',
			once: true,
			event: 'ready'
		});
	}

	public async run(client: Client) {
		Log.info('Loading Event:ClientReady');

		if (client.user === null) {
			Log.error('Client is null', 'Error processing event ClientReady');
			return;
		}

		const { username, id } = client.user;
		Log.info(`ClientReady: ${username}#${id}`);

		try {
			
			Log.info(`${process.env.APP_NAME} is getting ready ...`);

			client.user.setActivity(`${process.env.DISCORD_BOT_ACTIVITY}`);
			client.guilds.cache.forEach(guild => {
				Log.info(`${process.env.APP_NAME} is active for: ${guild.id}, ${guild.name}`);
			});

			const db: Db = await MongoDBUtils.connect(`${process.env.MONGODB_DATABASE}`)
				// .catch(error => Log.error(error, 'Error connecting to MongoDB'));
			
			if (db === null) {
				Log.error('Database is null', 'Error processing event ClientReady');
				return;
			} else {
				Log.info(`Connected to MongoDB: ${process.env.MONGODB_DATABASE}`);
			}

			Log.info(`${process.env.APP_NAME} is ready! Logged in as ${client.user.tag}`);
			
		} catch(error) {
			Log.error(
				error,
				'Error processing event ClientReady'
			);
		}
	}
}
