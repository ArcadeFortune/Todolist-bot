module.exports = {
    data: {
        name: `removeTodoFromMenu`,
    },
    async execute(interaction, client) {
        const selectedTaskString =
            interaction.message.components[0].components[0].data.options[
                interaction.values[0].slice(0, -19)
            ].label; //lol
        const todoListId = interaction.values[0].slice(1); //extract the passed value as id
        const todoToRemove = interaction.values[0].slice(0, -19); //and the index to remove from list
        interaction.channel.messages.fetch(todoListId).then((msg) => {
            //need to modify the todo list (need to fetch)
            var todoString = msg.embeds[0].data.description; //store todo as string
            var todoList = todoString.split("\n"); //store todo as array
            todoList.splice(todoToRemove, 1); //remove the todo from list
            var newEmbed = msg.embeds[0].data; //retrieve the current embed
            var newEmbedDescription = todoList.join("\n"); //update the list
            newEmbed.description = newEmbedDescription; //replace the updated list in the embed
            msg.edit({
                //edit the embed
                embeds: [newEmbed],
            });
            interaction.deferUpdate(); //synonym for do nothing, if i delete this line it will show an error message
            interaction.message.delete(); //delete the used menu

            console.log(interaction.user.tag, "wants to delete task", selectedTaskString);
            console.log("Updated list to:\n" + newEmbedDescription);
        });
    },
};
