import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Mektup Yolla | Online Mektup Gönderme, Online Mektup Yaz',
  description = 'MektupYolla.com ile sevdiklerinize kolayca online mektup gönderin! Kişiselleştirilmiş mektuplar yaz ve kolayca gönder. Online mektup göndermenin en pratik yolu!',
  keywords = 'mektup gönder, fiziksel mektup, online mektup, sevgiliye mektup, askere mektup, cezaevine mektup, mektup yazdırma, mektup servisi',
  ogImage = 'https://mektupyolla.com/og-image.jpg',
  twitterImage = 'https://mektupyolla.com/twitter-image.jpg',
  canonical = 'https://mektupyolla.com/'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content="MektupYolla - Fiziksel Mektup Gönderme Servisi | Online Mektup Yazdırma" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MektupYolla" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content="MektupYolla - Fiziksel Mektup Gönderme Servisi" />
      <meta property="og:description" content="Sevdiklerinize fiziksel mektup gönderin! Online mektup yazın, özelleştirin ve adresine teslim edilsin." />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="MektupYolla" />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content="MektupYolla - Fiziksel Mektup Gönderme Servisi" />
      <meta property="twitter:description" content="Sevdiklerinize fiziksel mektup gönderin! Online mektup yazın, özelleştirin ve adresine teslim edilsin." />
      <meta property="twitter:image" content={twitterImage} />
      <meta property="twitter:creator" content="@mektupyolla" />

      {/* Additional SEO */}
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content="#6366f1" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MektupYolla",
          "url": "https://mektupyolla.com",
          "description": "Fiziksel mektup gönderme servisi",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mektupyolla.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO
