import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Logo = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "fg_logo_wall.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Image
      fixed={data.headerImage.childImageSharp.fixed}
      className="pagelogo"
      alt={siteTitle}
      imgStyle={{
        objectFit: "none",
        objectPosition: "50% 50%",
      }}
    />
  )
}

export default Logo
