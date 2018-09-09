import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css';

const IndexPage = ({ data: {
  allWordpressWpToy: {
    edges: toys
  },
  allWordpressWpPet: {
    edges: pets
  }
} }) => (
  <div className={styles.container}>
    <div className={styles.toys}>
      {
        toys.map(toy => (
          <div className={styles.box} style={{background: 'rebeccapurple'}}>
            <h1>{toy.node.title}</h1>
            <h6>{toy.node.acf.description}</h6>
          </div>
        ))
      }
    </div>
    <div className={styles.pets}>
      {
        pets.map(pet => (
          <div className={styles.box} style={{background: 'lightgreen'}}>
            <h1>{pet.node.title}</h1>
            <h6>{pet.node.acf.description} </h6>
          </div>
        ))
      }
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query WOW {
    allWordpressWpToy{
      edges{
        node{
          title
          acf{
            description
          }
        }
      }
    }
      allWordpressWpPet{
      edges{
        node{
          title
          acf{
            description
          }
        }
      }
    }
  }`;
