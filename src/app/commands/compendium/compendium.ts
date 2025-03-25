import { Subcommand } from '@sapphire/plugin-subcommands';
import createChildLogger from '@/app/utils/logger/logger';
import MongoDbUtils from '@/app/utils/database/MongoDBUtils';

const connect = MongoDbUtils.connect(`${process.env.MONGODB_DATABASE}`);

export default class Compendium extends Subcommand {
	constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
		super(context, {
			name: '.compendium',
			description: 'a suite of commands for managing .compendium',
			subcommands: [
				{
					name: 'insert',
					chatInputRun: 'compendiumInsert',
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
						.setName('insert')
						.setDescription('Insert a new entry into .compendium')
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

	public async compendiumInsert(interaction: Subcommand.ChatInputCommandInteraction) {
		const logger = createChildLogger('compendiumInsert');
		return interaction.reply({ content: 'Hello world!' });
	}
}
