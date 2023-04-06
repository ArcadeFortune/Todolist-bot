module.exports = {
    data: {
        name: `removeList`,
    },
    async execute(interaction, client) {
        interaction.message.delete();
        console.log(interaction.user.tag, "deleted the todo list");
    },
};
