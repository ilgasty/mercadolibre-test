module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transforma archivos JS y JSX usando Babel
  },
  transformIgnorePatterns: [
    'node_modules/(?!axios)', // Excluye axios de la regla que ignora node_modules
  ],
};