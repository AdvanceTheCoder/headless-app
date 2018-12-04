import React, { Component } from 'react';
import axios from 'axios';
import './Article.css';

class Article extends Component{

    state = {
        nodes: []
    };
    
    async componentDidMount() {
      await this.refresh();
    }
    
    async refresh() {
      // AJAX fetch server/node/rest?_format=json and setState with the response data
      try {
        // const axios = await ajax() // wait for an initialized axios object
        const response = await axios.get('http://backenddrupal.test/api/v1/articles/list') // wait for the POST AJAX request to complete
        
        if (response.data) {
          // setState will trigger repaint
          console.log(response.data)
          this.setState({ nodes: response.data })
        }
        } catch (e) {
        alert(e)
      }
    }

    render(){
  
      return (
        <div>
          <table>
            <thead>
              <tr>
                <td>NID</td>
                <td>Title</td>
              </tr>
            </thead>
            <tbody>
                {this.state.nodes.map((node, index) => {
                  // iterate over the nodes array and map them to "li" elements
                  return (
                    <tr key={index}>
                      <td>{node.nid}</td>
                      <td><a href={node.path} >{node.title}</a></td>
                    </tr>
                  )
                  })}
            </tbody>
          </table>
        </div>
      );
    };
};

export default Article;