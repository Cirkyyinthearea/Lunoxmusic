const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const delay = require('delay');

module.exports = {
  name: 'volume',
  description: 'Set the volume of the current player.',
  category: 'Music',
  inVc: true,
  sameVc: true,
  player: true,
  options: [
    {
      name: 'amount',
      description: 'The number of volume which you want to set.',
      type: ApplicationCommandOptionType.Number,
      required: false,
      min_value: 1,
      max_value: 100,
    },
  ],
  run: async (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    const value = interaction.options.getNumber('amount');
    
    if (!value) {
        
      const embed = new EmbedBuilder()
        .setColor(client.color)
        .setDescription(`\`🔊\` | Current player volume: \`${player.filters.volume * 100}%\``);
      
      return interaction.reply({ embeds: [embed], ephemeral: true });
    } else {
      await player.setVolume(value / 100);

      const embed = new EmbedBuilder()
        .setColor(client.color)
        .setDescription(`\`🔊\` | Volume has been set to: \`${player.filters.volume * 100}%\``);

      await delay(2000);
      return interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};