import {
	GatewayIntentBits,
	Partials
} from 'discord.js';
import OverloadClient from './utils/client/OverloadClient.js';
import '@sapphire/plugin-subcommands';
import createChildLogger from './utils/logger/logger.js';

const Log = createChildLogger('app', 'sapphireClient');

const client = initializeClient();

client.login(process.env.DISCORD_BOT_TOKEN).catch(error => Log.error(error));

function initializeClient() {
	const clientOptions = {
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMembers,
			GatewayIntentBits.GuildVoiceStates,
			GatewayIntentBits.GuildPresences,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.GuildMessageReactions,
			GatewayIntentBits.GuildModeration,
			GatewayIntentBits.DirectMessages,
			GatewayIntentBits.GuildMessageReactions,
		],
		partials: [
			Partials.Message,
			Partials.Channel,
			Partials.Reaction,
			Partials.User
		],
	};
	return new OverloadClient(clientOptions);
}