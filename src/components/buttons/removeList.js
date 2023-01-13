module.exports = {
    data: {
        name: `removeList`,
    },
    async execute(interaction, client) {
        interaction.message.delete();
        console.log("User deleted the todo list");
    },
};
