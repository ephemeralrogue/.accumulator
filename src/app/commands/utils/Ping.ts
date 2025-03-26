import { isMessageInstance } from '@sapphire/discord.js-utilities';
import { Command } from '@sapphire/framework';
import { MessageFlags } from 'discord.js';

export default class Ping extends Command {
	constructor(context: Command.LoaderContext) {
		super(context, {
			name: 'ping',
			description: 'Replies with "Pong"'
		});
	}

	registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder.setName('ping').setDescription('Ping bot to see if it is alive')
		);
	}

	async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const msg = await interaction.reply({
			content: 'Ping?',
			flags: MessageFlags.Ephemeral,
		});
	
		try {
			const diff = msg.createdTimestamp - interaction.createdTimestamp;
			const ping = Math.round(this.container.client.ws.ping);
			return interaction.followUp(`Pong 🏓! (Round trip took: ${diff}ms. Heartbeat: ${ping}ms.)`);
		} catch (error) {
			return interaction.followUp('Failed to retrieve ping :(');
		}
	}
}