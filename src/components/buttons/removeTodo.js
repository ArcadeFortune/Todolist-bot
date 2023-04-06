const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    data: {
        name: `removeTodo`,
    },
    async execute(interaction, client) {
        const currentTodo = interaction.message.embeds[0].description; //store current todo entries
        const interactionId = interaction.message.id; //store current todo id in order to modify later

        if (!currentTodo) {
            //if todo is empty then warn user
            interaction.reply({
                content: "You can't delete anything.",
                ephemeral: true,
            });
        } else {
            var todoString = currentTodo; //current todo as string
            var todoList = todoString.split("\n"); //current todo as array
            var optionList = []; //array to place the options for later
            for (var i = 0; i < todoList.length; i++) {
                //for each todo entry:
                optionList[i] = {
                    //create an option to choose from (so user can decide what to delete)
                    label: todoList[i].substring(2),
                    value: i.toString() + interactionId, //pass the interaction id in order to modify later
                };
            }

            var menu = new StringSelectMenuBuilder()
                .setCustomId(`removeTodoFromMenu`)
                .setMinValues(1)
                .setMaxValues(1)
                .setPlaceholder("Select task to remove")
                .addOptions(optionList);
                
            await interaction.reply({
                components: [new ActionRowBuilder().addComponents(menu)],
            });

            console.log("------------------------------")
            console.log(interaction.user.tag, "wants to delete a task...")
        }
    },
};
