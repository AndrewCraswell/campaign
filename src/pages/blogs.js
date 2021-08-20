// Example {PrismicAuthor.url}.js file

import React from 'react'
import { graphql } from 'gatsby'
import { Card, Col, Row } from 'react-bootstrap'

export const AuthorTemplate = (props ) => {
 const {data}=props
console.log(data.allPrismicBlogs.nodes)
 //   console.log("ss",props.data, Object.keys(props))
  return (
  <div>
      
      <Row>
      {data.allPrismicBlogs.nodes&&data.allPrismicBlogs.nodes.map((item)=>{
          return <Col xs={12} md={6} xl={4} lg={4}>
          <Card>
          <Card.Body>
              {console.log(item.data.title.text)}
            <Card.Title>{item.data.title.text}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            
          </Card.Body>
        </Card>
        </Col>
      })}
      </Row>
  </div>
  )
}

export const query = graphql`
  query Blogs {
    allPrismicBlogs {
        nodes {
          data {
            title {
              text
            }
            description {
              html
            }
            created_by {
              text
            }
          }
        }
      }
    
  }
`

export default AuthorTemplate