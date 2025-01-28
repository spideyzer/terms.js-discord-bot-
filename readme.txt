# Discord Bot

 This is a Discord bot that allows users to accept terms and conditions through an interactive button system. Once the terms are accepted, the user is assigned a specified role in
the server. This bot is designed to automate the process of accepting terms and assigning roles, ensuring a smooth and user-friendly experience for new members.

## Features

- **Terms and Conditions Panel:** A custom embed with a button that lets users view the server's terms and conditions.
- **Role Assignment:** After accepting the terms, the bot automatically assigns a specified role to the user.
- **Ephemeral Responses:** The bot uses ephemeral messages to send private responses to users, ensuring their interactions are discreet.
- **Customizable Terms:** You can easily edit the terms and conditions, the role ID, and other details to fit your server’s needs.

## Prerequisites

Before using the bot, make sure you have the following:

- **Node.js** installed (version 16.9.0 or higher).
- A **Discord bot token**. You can get one by creating a bot on the [Discord Developer Portal](https://discord.com/developers/applications).
- **A server with at least one role** that can be assigned to members.
- **A server channel** where the panel will be sent.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/horizon-discord-bot.git
    cd horizon-discord-bot
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your **.env** file with the following environment variables:

    ```ini
    TOKEN=your_discord_bot_token
    ```

4. Replace the following placeholders in the code:
    - `ROLE_ID` - The ID of the role to assign to users after they accept the terms.
    - `GUILD_ID` - Your Discord server's ID.
    - `CHANNEL_ID` - The ID of the channel where the terms and conditions panel will be sent.

5. Start the bot:

    ```bash
    node index.js
    ```

## Usage

Once the bot is online, it will send a message in the specified channel with a "View Terms" button. When users click the button, they will be shown the terms and conditions. If they accept, the bot will assign them the specified role.

## Customization

To change the terms and conditions text, the role ID, or the channel where the bot sends the panel, simply edit the following variables in the code:
- `ROLE_ID` - The ID of the role to assign.
- `CHANNEL_ID` - The ID of the channel to send the message.
- `termsEmbed` - Modify the embed message to change the terms and conditions text or add custom images.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [discord.js](https://discord.js.org/) - A powerful library for interacting with the Discord API.
- [dotenv](https://www.npmjs.com/package/dotenv) - A module to load environment variables from a `.env` file.

