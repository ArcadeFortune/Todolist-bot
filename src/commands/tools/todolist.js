const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");
//3 buttons: [todo] [mark complete]
//1 button:  [add]
//i need to save a list of all todo entries somehow
module.exports = {
    data: new SlashCommandBuilder()
        .setName("todo")
        .setDescription("omg you gay ffs"),

    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle("To Do:")
            .setDescription(" ")
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

        const add = new ButtonBuilder()
            .setCustomId("addTodo")
            .setLabel("Add Task")
            .setStyle(ButtonStyle.Success);

        const commit = new ButtonBuilder()
            .setCustomId("commitTodo")
            .setLabel("Commit Task")
            .setStyle(ButtonStyle.Primary);

        const finish = new ButtonBuilder()
            .setCustomId("finishTodo")
            .setLabel("Finish Task")
            .setStyle(ButtonStyle.Success);

        const edit = new ButtonBuilder()
            .setCustomId("editTodo")
            .setLabel("Edit Task")
            .setStyle(ButtonStyle.Secondary);

        const remove = new ButtonBuilder()
            .setCustomId("removeTodo")
            .setLabel("Remove Task")
            .setStyle(ButtonStyle.Danger);

        const removeList = new ButtonBuilder()
            .setCustomId("removeList")
            .setLabel("Delete List")
            .setStyle(ButtonStyle.Danger);

        await interaction.reply({
            content: "oreno2do",
            components: [
                new ActionRowBuilder().addComponents(
                    add,
                    edit,
                    commit,
                    finish,
                    remove
                ),
                new ActionRowBuilder().addComponents(removeList),
            ],
            embeds: [embed],
        });
    },
};
