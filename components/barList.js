import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Banner, Card } from '@shopify/polaris';

const GET_CLIENT_ID = gql`
  query {
    shop{
      id
      name
    }
  }
`;

class BarList extends React.Component{
  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e,id){
    console.log(id)
  }

  render(){
    return (
      <Query query={GET_CLIENT_ID}>
        {({data, loading, error}) => {
          if(loading) return <div>Loading...</div>;
          if(error) return <Banner status="critical">{error.message}</Banner>
          console.log(data);
          // #toUpdate: to fetch from database
          const arrs = [{'name':'ijji','geo':'china','achievements':253,'id':2},{'name':'fe','geo':'nz','achievements':76,'id':3}]
          
          return (
            <Card>
              <table style={{width:'100%',padding:'2%'}}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Geo target</th>
                    <th>Actions</th>
                    <th>Achievements</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    arrs.map((item, idx)=>{
                      return (
                        <tr style={{textAlign:'center',lineHeight:3}} key={idx}>
                          <td>{item.name}</td>
                          <td>{item.geo}</td>
                          <td><button onClick={(e) => this.props.handleEditId(item.id)} style={{borderColor:'transparent',background:'#000',color:'#fff',borderRadius:5}}>Edit</button></td>
                          <td>{item.achievements}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </Card>
          )
        }}
      </Query>
    )
  }
}

export default BarList;