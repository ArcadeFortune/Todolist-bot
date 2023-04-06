module.exports = {
    data: {
        name: `finishTodoFromMenu`,
    },
    async execute(interaction, client) {
        const todoListId = interaction.values[0].substring(1);
        const todoToFinish = getAnswer();

        interaction.channel.messages.fetch(todoListId).then((todoList) => {
            var todoString = getEmbed(todoList);
            var todoArray = listify(todoString);
            finishTask(todoArray, todoToFinish, "[COMMITTED]", "[FINISHED]");
            var newTodoString = stringify(todoArray);
            replaceEmbed(todoList, newTodoString);
            deleteMenu();

            console.log(interaction.user.tag, "finished task " + todoArray[todoToFinish]);
            console.log("Updated list to:\n" + newTodoString);            
        });

        // console.log("todoString:", todoString);
        // console.log(todoArray)
        // console.log("newlist:", todoArray)

        function getAnswer() {
            return parseInt(interaction.values[0][0]);
        }

        function getEmbed(todoList) {
            return todoList.embeds[0].data.description;
        }

        function listify(string) {
            return string.split("\n");
        }

        function finishTask(todoArray, todoToFinish, oldWord, newWord) {
            todoArray[todoToFinish] =
                newWord + todoArray[todoToFinish].slice(oldWord.length);
        }

        function stringify(array) {
            return array.join("\n");
        }

        function replaceEmbed(todoList, newTodoList) {
            var newEmbed = todoList.embeds[0].data;
            newEmbed.description = newTodoList;
            todoList.edit({
                embeds: [newEmbed],
            });
        }

        function deleteMenu() {
            interaction.message.delete();
        }
    },
};
