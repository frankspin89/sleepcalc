class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ["themes/sleepcalculator/assets/css"],
    }),
    require('tailwindcss')('./themes/sleepcalculator/assets/css/tailwind.config.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./themes/sleepcalculator/layouts/**/*.html'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }],
      fontFace: true,
      whitelist: ['pagination'],
    }),
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),
  ]
}