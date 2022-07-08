/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://www.google.com.br'],
  },
  /* configuração dos CORS */
  /* !Obs: sempre que fizer alguma alteração nesse arquivo de configuração nextConfig, precisa reiniciar o servido. */
  headers: async () => {
    return [
      {
        // source - qual api sera liberada
        source: '/api/:path*',
        // headers - lista de headers que serão liberados
        headers: [
          {key: 'Access-Control-Allow-Origin', value: '*'}
        ]
      }
    ]
  }
}

module.exports = nextConfig
