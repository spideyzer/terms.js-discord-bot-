const { Client, GatewayIntentBits, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const TOKEN = process.env.TOKEN; // Add your bot's token in a .env file
const ROLE_ID = '1324620442215911496'; // Replace with the ID of the role to assign
const GUILD_ID = '1197826599043743764'; // Replace with your server's ID
const CHANNEL_ID = '1333730331622248448'; // Replace with the channel ID where the panel should be sent

client.once('ready', async () => {
    console.log(`${client.user.username} is online!`);

    // Fetch the channel where the panel will be sent
    const channel = await client.channels.fetch(CHANNEL_ID);

    const termsEmbed = new EmbedBuilder()
        .setTitle('Welcome to HORIZON!')
        .setDescription(
            'Click the button below to view and accept our Terms and Conditions to gain access to the server.'
        )
        .setImage('https://via.placeholder.com/300') // Replace with your banner image URL
        .setColor('#ff0000')
        .setFooter({ text: 'HORIZON', iconURL: 'https://via.placeholder.com/100' }); // Replace with your footer image URL

    const termsButton = new ButtonBuilder()
        .setCustomId('show_terms')
        .setLabel('View Terms')
        .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(termsButton);

    await channel.send({ embeds: [termsEmbed], components: [row] });
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    const { customId, member } = interaction;

    if (customId === 'show_terms') {
        const termsEmbed = new EmbedBuilder()
            .setTitle('Terms and Conditions')
            .setDescription(
                'Please read and accept the following terms and conditions to proceed:\n\n1. Respect all members.\n2. No spamming or advertising.\n3. Follow the server rules.\n\nClick the "Accept" button below to confirm.'
            )
            .setThumbnail('https://via.placeholder.com/150') // Replace with your image URL
            .setColor('#ff0000')
            .setFooter({ text: 'HORIZON', iconURL: 'https://via.placeholder.com/100' }); // Replace with your footer image URL

        const acceptButton = new ButtonBuilder()
            .setCustomId('accept_terms')
            .setLabel('Accept')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder().addComponents(acceptButton);

        await interaction.reply({ embeds: [termsEmbed], components: [row], ephemeral: true });
    } else if (customId === 'accept_terms') {
        const role = interaction.guild.roles.cache.get(ROLE_ID);
        if (!role) return interaction.reply({ content: 'Role not found.', ephemeral: true });

        if (member.roles.cache.has(ROLE_ID)) {
            return interaction.reply({ content: 'You have already accepted the terms.', ephemeral: true });
        }

        await member.roles.add(role);
        return interaction.reply({ content: 'Thank you for accepting the terms. The role has been assigned.', ephemeral: true });
    }
});

client.login(TOKEN);
