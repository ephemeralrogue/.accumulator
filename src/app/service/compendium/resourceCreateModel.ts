import {
	ActionRowBuilder,
	ModalActionRowComponentBuilder,
	ModalBuilder,
	TextInputBuilder,
	TextInputStyle
} from 'discord.js';

const resourceNameField = new TextInputBuilder()
	.setCustomId('resourceName')
	.setLabel(`What's the name of the resource?`)
	.setStyle(TextInputStyle.Short)
	.setRequired(true);

const resourceURLField = new TextInputBuilder()
	.setCustomId('resourceURL')
	.setLabel(`What's the URL of the resource?`)
	.setStyle(TextInputStyle.Short)
	.setRequired(true);

const resourceDescriptionField = new TextInputBuilder()
	.setCustomId('resourceDescription')
	.setLabel(`What's the description of the resource?`)
	.setStyle(TextInputStyle.Paragraph)
	.setRequired(true);

const resourceTagField = new TextInputBuilder()
	.setCustomId('resourceTag')
	.setLabel(
		`What tags are associated with the resource? \n
		Please separate tags with commas.`
	)
	.setStyle(TextInputStyle.Paragraph)
	.setRequired(true);

const resourceNameActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>()
	.addComponents(resourceNameField);

const resourceURLActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>()
	.addComponents(resourceURLField);

const resourceDescriptionActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>()
	.addComponents(resourceDescriptionField);

const resourceTagActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>()
	.addComponents(resourceTagField);

const resourceCreateModal = new ModalBuilder()
	.setCustomId('resourceCreateModal')
	.setTitle('Create a new resource')
	.addComponents(
		resourceNameActionRow,
		resourceURLActionRow,
		resourceDescriptionActionRow,
		resourceTagActionRow
	);

export default resourceCreateModal;