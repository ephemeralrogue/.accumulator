import { Subcommand } from '@sapphire/plugin-subcommands';
import createChildLogger from '../../../lib/telemetry/logger';
import resourceCreateModal from '../../service/compendium/resourceCreateModel';

export default class Compendium extends Subcommand {
	constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
		super(context, {
			...options,
			name: '.compendium',
			description: 'a suite of commands for managing .compendium',
			subcommands: [
				{
					name: 'create',
					chatInputRun: 'compendiumCreate',
				},
				{
					name: 'read',
					chatInputRun: 'compendiumRead',
				},
				{
					name: 'update',
					chatInputRun: 'compendiumUpdate',
				},
				{
					name: 'delete',
					chatInputRun: 'compendiumDelete',
				}
			]
		});
	}

	public registerApplicationCommands(registry: Subcommand.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName('.compendium')
				.setDescription('a suite of commands for managing the compendium')
				.addSubcommand(subcommand =>
					subcommand //
						.setName('create')
						.setDescription('Create a new entry into .compendium')
				)
				.addSubcommand(subcommand =>
					subcommand //
						.setName('read')
						.setDescription('Read an existing entry from .compendium')
				)
				.addSubcommand(subcommand =>
					subcommand //
						.setName('update')
						.setDescription('Update an existing entry in .compendium')
				)
				.addSubcommand(subcommand =>
					subcommand //
						.setName('delete')
						.setDescription('Delete an existing entry from .compendium')
				)
		);
	}

	public async compendiumCreate(interaction: Subcommand.ChatInputCommandInteraction) {
		
		if (interaction.user.bot) return;

		const logger = createChildLogger('compendiumCreate');

		try {
			await interaction.showModal(resourceCreateModal);
		} catch (error) {
			logger.error(error);
		}
		
	}
}
