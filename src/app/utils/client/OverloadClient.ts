import { SapphireClient } from '@sapphire/framework';
import { getRootData } from '@sapphire/pieces';
import type { ClientOptions } from 'discord.js';
import { join } from 'path';

export default class OverloadClient extends SapphireClient {

	private rootData = getRootData();
	
	public constructor(options: ClientOptions) {
		super(options);

		this.stores.get('listeners').registerPath(join(this.rootData.root, 'events'));
	}
}