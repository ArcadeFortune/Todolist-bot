const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("edit_channel_name")
        .setDescription("2 Name changes per 10 minutes!!")
        .addStringOption((option) =>
            option
                .setName("name")
                .setDescription("Set a new name!")
                .setRequired(true)
        )
        .addChannelOption((option) =>
            option
                .setName("channel")
                .setDescription("Specify channel, if not, then this channel")
        ),

    async execute(interaction, client) {
        const newName = interaction.options.getString("name"); //set variable from user input
        var newChannel = interaction.channel; //default variable
        const oldChannel = newChannel.name //old channels name since otherwise will be overwritten
        if (interaction.options.getChannel("channel")) { //check if user made a specific input
            newChannel = interaction.options.getChannel("channel");
        }
        await interaction.deferReply(); //console.log
        const channel = await client.channels.cache.get(newChannel.id); //get channel accordingly
        await channel.edit({ name: newName }); //change name accordingly
        await interaction.editReply(`Changed ${oldChannel} to ${newName}`); //console.log
    },
};