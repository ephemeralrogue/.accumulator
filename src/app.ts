import {
	type ClientOptions,
	GatewayIntentBits,
	Partials
} from 'discord.js';
import { SapphireClient, type SapphireClientOptions } from '@sapphire/framework';
import '@sapphire/plugin-subcommands';
import createChildLogger from './lib/telemetry/logger.js';
import type { Logger } from 'pino';

const Log: Logger = createChildLogger('app', 'sapphireClient');
Log.info('Starting the fucking Bot...');

try {

	const client: SapphireClient = initializeClient();

	client.login(process.env.DISCORD_BOT_TOKEN);

} catch(error) {

	Log.error(error);

}

function initializeClient() {

	const clientOptions: ClientOptions = {
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMembers,
			GatewayIntentBits.GuildPresences,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.GuildMessageReactions,
			GatewayIntentBits.GuildModeration
		],
		partials: [
			Partials.Message,
			Partials.Channel,
			Partials.Reaction,
			Partials.User
		],
		loadMessageCommandListeners: true,
	};

	const sapphireClientOptions: SapphireClientOptions = {
		baseUserDirectory: 'app'
	};

	const options = Object.assign(clientOptions, sapphireClientOptions);

	return new SapphireClient(options);
}