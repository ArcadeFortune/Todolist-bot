module.exports = {
    data: {
        name: `removeList`,
    },
    async execute(interaction, client) {
        interaction.message.delete();
        console.log("User wants deleted the todo list");

        interaction
            .reply({ content: "dasfaaaa", fetchReply: true })
            .then(() => {
                interaction.channel
                    .awaitMessages({
                        time: 30000,
                        errors: ["time"],
                    })
                    .then((collected) => {
                        interaction.followUp(
                            `${
                                collected.first().author
                            } got the correct answer!`
                        );
                    })
                    .catch((collected) => {
                        interaction.followUp(
                            "Looks like nobody got the answer this time."
                        );
                    });
            });
    },
};
