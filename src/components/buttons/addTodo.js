const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require("discord.js");

module.exports = {
    data: {
        name: `addTodo`,
    },
    async execute(interaction, client) {
        // console.log(interaction.message.id)
        // console.log(interaction.message.embeds[0])
        // console.log(interaction.message.embeds[0].data)
        // console.log(interaction.message.embeds[0].Embed)
        // console.log(interaction.message.embeds[0].description)
        // console.log(interaction.message.embeds[0].data.description)

        // var newEmbed = interaction.message.embeds[0].data
        // newEmbed.description = "no"
        // interaction.channel.messages.fetch(interaction.message.id).then(msg => msg.edit({
        //     embeds: [newEmbed]
        // }));
        const modal = new ModalBuilder()
            .setCustomId(`addTodoFromModal`)
            .setTitle(`Which task would you like to add?`);

        const textInput = new TextInputBuilder()
            .setCustomId(`newTodo`)
            .setLabel(`New task`)
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));
        await interaction.showModal(modal);

        console.log("------------------------------");
        console.log(interaction.user.tag, "is adding a new task...");
    },
};
