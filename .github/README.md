<div align="center">
    <br>
    <img
        src="./assets/design-compendium-emblem.png" 
        alt="the lvnacy emblem, a gray circle with a large black 'V' superimposed."
        width="256px"
    />
    <br>
    <h1>.accumulator</h1>
    <i>
        The companion Discord Bot for The Design Compendium
    </i>
    <br>
</div>

<div align="center">
    •
    <a href="https://bsky.app/profile/lvnacy.xyz/">L V N A C Y Bluesky</a>
    •
    <a href="https://discord.gg/nh7mqGEfbw">L V N A C Y Discord</a>
    •
    <br>
</div>
<br>
<br>

# Contents
- [High Level](#high-level)
- [Project Overview](#project-overview)
- [.accumulator](#accumulator)
- [Why?](#why)
- [Contributing to the Project](#contributing)
    - [Bot Stack](#bot-stack)
    - [Getting Started](#getting-started)
<br>
<br>
<div align='center'>
    <img
        src='./assets/design-compendium-github.jpg'
        alt='The Design Compendium header. Two pencils are lined up to one side, 
            with the words "The Design Compendium" in the center, all over a 
            yellow background'
    />
</div>
<br>

# high level
The Design Compendium is a resource for graphic designers and developers. When completed, this will present a simple frontend where users can select a tag and be served resources centered around that tag in the realms of design and code.

![A sketch with a cloud of emblems for the different technologies in use, including node.js, Next.js, GraphQL, and MongoDB, surrounded by simple notes explaining how they'll work together.](./assets/design-compendium-tech-stack.PNG "Web Stack Concept")

[Back to Contents](#contents)

# project overview
The Design Compendium consists of three parts:

1. **.compendium**: the database containing the resource documents
2. **.accumulator**: the method by which CRUD operations are run on **.compendium**
3. **.studio**: the frontend to display tags and resources

![sketch of project design. Three circles are super imposed over a rectangle. Inside the rectangle is the title of the project. The bottom circle holds a sketch of a cylinder with the MongoDB logo; above it is the graphQL logo. The word '.compendium' is written along the outside of the circle. The circle to the upper right has the Discord logo inside it with the word '.accumulator' written along the outside. Arrows connect the cicles to describe the relationship between the two. The third circle sits to upper left of the first and contains the Next.js logo with the word '.studio' circumscribed along the outside. Arrows connect this circle with the first to describe their relationship.](./assets/design-compendium-workflow-2.png "Design Compendium workflow diagram")

The GraphQL API is built into the Next.js app, using the routing system. Right 
now, the front end and API is intertwined. Part of the roadmap includes 
decoupling the two, so any database may be used, and a REST API may be 
substituted if preferred.

For details on the frontend and API, see [**.studio**][studio].

[Back to Contents](#contents)

# .accumulator
This is **.accumulator**, the companion Discord bot for The Design Compendium. 
It will be designed to interface directly with **.compendium** on which to run 
CRUD operations. Contributions work through discussions in order to ensure 
only high quality resources are included in **.compendium** and displayed in 
**.studio**: 

![sketch showing contribution of resources workflow. The GitHub Logo sits over the text 'GitHub discussions' added to the Discord logo sitting underneath the text 'Discord forums' with a bracket funneling everything into 'Discord bot' that is pointing to the MongoDB logo](./assets/design-compendium-contribution-flow.png "Resource Contribution Workflow")

**.accumulator** is currently in development and not yet active. The structure of the bot is built. Hell even the subcommand structure is designed. All that needs doing is to write the CRUD logic.

[Back to Contents](#contents)

# why?
Why the fuck am I doing this? I needed something to motivate me to actually 
learn frontend development. Also, I got tired of running through lists of 
resources and finding them poorly vetted. Some of the READMEs out there, while 
fairly comprehensive, are incredibly outdated.

Why the fuck is this thing designed this way? I settled on this project design 
as a way to play with and understand relationships between different parts. 
This isn't quite a microservices-oriented system, but it also isn't a 
self-composed project. In addition to the parts that move data around are the 
layers of interaction above the app, those conversations I hope will take 
place around resource submissions and discussions.

[Back to Contents](#contents)

# contributing
Interested in building on this? Fork the project, do some writing, submit a 
pull request. If you're unfamiliar with building a Discord bot, there are 
innumerable resource available to help get you started. I started with the 
[Discord.js guide][guide] and moved into the [slash-create library][create] 
once I needed more functionality than discord.js provided.

If you're familiar with booting up Discord bots in JS/TS, this project should 
be easy enough to move around in.

## bot stack
This is your average discord bot written in TS, running in Node v22+. The 
bot is built with minimal dependencies:  
- [discord.js](https://discord.js.org) library to interact with the 
[Discord API](https://discord.com/developers/docs/intro),
- [sapphire](https://www.sapphirejs.dev), a command framework as an extension 
of discord.js,
- [esLint](https://eslint.org), a code linter for keeping code consistent 
across all files,
- [dotenv](https://www.dotenv.org/docs) for configuring and utilizing `.env` 
files,
- a [mongodb](https://mongodb.github.io/node-mongodb-native/) node driver, for 
connecting and interaction with an instance of MongoDB Atlas,
- [pino](https://getpino.io/), a lightweight logger, and
- [pnpm](pnpm.io) as the package manager.

## getting started
Fork this repository. copy the `.env.template`, rename it to `.env`, and fill 
out the fields with your credentials. you'll need:
- a bot token, application id, and public key from Discord. You can find those 
in the [Discord Developer Portal][discord-dev] when you create an app, and
- a URI connection string from [MongoDB Atlas](https://mongodb.com)

You may also want to install Docker and Docker Compose, if you want to run the 
bot in a container.  
  
Once all the fields are filled out, you can:
```bash
pnpm install
```
then
```bash
pnpm start
```
to run the bot locally through Node in your dev environment, or:
```bash
docker compose up
```
to run the bot in a Docker container.  
  
If all works well, you should see your bot active in your Discord server once 
you invite it. To test it, run the `/ping` command.

Come find me in my [Discord server][server] if you have questions or ideas.

<!-- Links -->
[studio]: https://github.com/ephemeralrogue/.studio
[guide]: https://discordjs.guide/#before-you-begin
[create]: https://slash-create.js.org/
[discord-dev]: https://discord.com/developers
[server]: https://discord.gg/nh7mqGEfbw