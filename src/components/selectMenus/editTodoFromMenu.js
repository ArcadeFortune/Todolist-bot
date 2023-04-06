const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require("discord.js");

module.exports = {
    data: {
        name: `editTodoFromMenu`,
    },
    async execute(interaction, client) {
        const selectedTaskString = interaction.message.components[0].components[0].data.options[interaction.values[0].slice(0, -19)].label //lol
        todoListId = interaction.values[0].slice(1); //extract the passed value as id
        todoToEdit = interaction.values[0].slice(0, -19); //and the index to edit from list | i need this to be global idk hwo i can pass it to the editTodoFromModal.js file

        const modal = new ModalBuilder()
            .setCustomId(`editTodoFromModal`)
            .setTitle(`How would you like to rename the task?`);

        const textInput = new TextInputBuilder()
            .setCustomId(`newTodo`)
            .setLabel(`Rename task`)
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
            .setPlaceholder(selectedTaskString);
        // console.log(interaction)

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));
        await interaction.showModal(modal);

        console.log(interaction.user.tag, "wants to edit task", selectedTaskString)
    },
};