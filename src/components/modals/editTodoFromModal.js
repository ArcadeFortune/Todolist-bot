module.exports = {
    data: {
        name: `editTodoFromModal`,
    },
    async execute(interaction, client) {
        const newTask = interaction.fields.getTextInputValue("newTodo"); //store new task name

        await interaction.channel.messages.fetch(todoListId).then((msg) => {
            var todoString = msg.embeds[0].data.description; //store todo as string
            var todoList = todoString.split("\n"); //store todo as array
            todoList.splice(todoToEdit, 1); //remove the todo from list
            todoList.splice(todoToEdit, 0, "- " + newTask); //add the new Task to the list
            var newEmbed = msg.embeds[0].data; //retrieve the current embed
            let newEmbedDescription = todoList.join("\n"); //update the list

            newEmbed.description = newEmbedDescription; //replace the updated list in the embed
            msg.edit({
                //edit todo as expected
                embeds: [newEmbed],
            });
            interaction.deferUpdate(); //synonym for do nothing, if i delete this line it will show an error message
            interaction.message.delete(); //delete the used menu

            console.log("User wants to edit this task into", newTask);
            console.log("Updated list to:\n" + newEmbedDescription);
        });
    },
};
