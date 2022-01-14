const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // 주소창에 source주소로 들어가면 강제로 destination주소로 바꿈
        // *는 뒤에 오는 문자 그대로 받음
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      }
    ]
  },

  // rewrites는 유저가 URL 변화를 볼 수 없음, api key를 가려줄 떄 유용함
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}
