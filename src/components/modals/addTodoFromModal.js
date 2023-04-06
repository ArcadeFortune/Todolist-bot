module.exports = {
    data: {
        name: `addTodoFromModal`,
    },
    async execute(interaction, client) {
        const newTask = interaction.fields.getTextInputValue("newTodo"); //store new task name
        var newEmbed = interaction.message.embeds[0].data; //store current todo list
        var newEmbedDescription = newEmbed.description //store current description from todo list
        
        if (newEmbedDescription === undefined) {
            //adding to an empty description will show an undefined, which is ugly
            newEmbedDescription = "- " + newTask;
        } else {
            newEmbedDescription += "\n- " + newTask; //adding the new task
        }

        newEmbed.description = newEmbedDescription //update the list
        interaction.message.edit({
            //edit todo as expected
            embeds: [newEmbed],
        });
        interaction.deferUpdate(); //synonym for do nothing, if i delete this line it will show an error message
    
        console.log(interaction.user.tag, "wants to add", newTask);
        console.log("Updated the list to:\n" + newEmbedDescription);
    },
};
