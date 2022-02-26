import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"

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

const Image = props => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "images/example.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
  cardImages: allFile(
    filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "project-img"}}
  ) {
    edges {
      node {
        base
        childImageSharp {
          gatsbyImageData(height: 180, layout: FULL_WIDTH)
        }
      }
    }
  }
  detailsImages: allFile(
    filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "project-img"}}
  ) {
    edges {
      node {
        base
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED)
        }
      }
    }
  }
}
`)
  // console.log("props", props)

  // return <Img  fluid={data.placeholderImage.targetImg.fluid}  objectFit="cover" style={{width:"100%"}} alt="project-image"/>
  if (props.type === "details-image") {
    let targetImg = data.detailsImages.edges.filter(
      i => i.node.base === props.filename
    )[0]
    return (
      <GatsbyImage
        image={targetImg.node.childImageSharp.gatsbyImageData}
        objectFit="cover"
        style={{ width: "100%" }}
        alt="project-image"
      />
    )
  } else if (props.type === "card-image") {
    let targetImg = data.cardImages.edges.filter(
      i => i.node.base === props.filename
    )[0]
    return (
      <GatsbyImage
      image={targetImg.node.childImageSharp.gatsbyImageData}
        objectFit="cover"
        style={{ height: "180px" }}
        alt="project-image"
      />
    )
  }
  // console.log(data.images)
}

export default Image
