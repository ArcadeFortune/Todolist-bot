const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
//3 buttons: [todo] [mark complete]
//1 button:  [add]
//i need to save a list of all todo entries somehow
module.exports = {
    data: new SlashCommandBuilder()
        .setName('todo')
        .setDescription('omg you gay ffs'),

    async execute(interaction, client) {

        const embed = new EmbedBuilder()
            .setTitle("To Do:")
			.setDescription(' ')
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            
        const add = new ButtonBuilder()
            .setCustomId('addTodo')
            .setLabel('Add a todo')
            .setStyle(ButtonStyle.Success);

        const remove = new ButtonBuilder()
        .setCustomId('removeTodo')
        .setLabel('Remove a todo')
        .setStyle(ButtonStyle.Danger);

        const edit = new ButtonBuilder()
        .setCustomId('editTodo')
        .setLabel('Edit a todo')
        .setStyle(ButtonStyle.Primary);
        

        await interaction.reply({
            content: "oreno2do",
            components: [new ActionRowBuilder().addComponents(add, edit, remove)],
            embeds: [embed]
        });
    }
}