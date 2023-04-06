const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    data: {
        name: `finishTodo`,
    },
    async execute(interaction, client) {
        var todoString = getEmbed();
        var todoList = listify(todoString);
        var options = optionify(todoList, "[COMMITTED]");
        var menu = buildSelectMenu(
            "finishTodoFromMenu",
            "Select task to mark as finished",
            options
        );
        canFinishWithThose(options) ? await reply(menu) : await cancelReply()

        console.log("------------------------------");
        console.log(interaction.user.tag, "wants to finish a task...");

        // console.log(todoString, "\n")
        // console.log(todoList, "\n")
        // console.log(options)

        function getEmbed() {
            return interaction.message.embeds[0].data.description;
        }

        function listify(string) {
            return string.split("\n");
        }

        function optionify(list, keyword) {
            var options = [];
            var l = 0;
            for (var i = 0; i < list.length; i++) {
                if (list[i].slice(0, keyword.length) === keyword) {
                    options[i - l] = {
                        label: list[i].substring(keyword.length + 1),
                        value: i.toString() + interaction.message.id,
                    };
                } else {
                    l++;
                }
            }
            return options;
        }

        function buildSelectMenu(customId, placeholder, options) {
            return new StringSelectMenuBuilder()
                .setCustomId(customId)
                .setMinValues(1)
                .setMaxValues(1)
                .setPlaceholder(placeholder)
                .addOptions(options);
        }

        function canFinishWithThose(options) {
            if (options.length == 0) {
                return false;
            } else {
                return true;
            }
        }

        function reply(menu) {
            return interaction.reply({
                components: [new ActionRowBuilder().addComponents(menu)],
            });
        }

        function cancelReply() {
            return interaction.reply({
                content: "You can't finish anything.",
                ephemeral: true,
            });
        }
    },
};
