import { Layout, Page, EmptyState } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = {open: false};
  render(){
    const emptyState = !store.get('ids');
    return (
      <Page>
        <TitleBar 
          primaryAction={{
            content:'Select prod',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker 
          resourceType="Product"
          showVariants={true}
          open={this.state.open}
          onSelection={(src)=> this.handleSelection(src)}
          onCancel={ () => this.setState({ open: false })}
        />
        { emptyState ? (
          <Layout>
            <EmptyState
              heading="LALALA"
              action={{
                content:'Select products',
                onAction: () => this.setState({open:true}),
              }}
              image={img}
            >
              <p>Select products to see the console.log hhh</p>
            </EmptyState>
          </Layout>
        ) : (
          <ResourceListWithProducts />
        )}
      </Page>
    )
  };

  handleSelection = (src) => {
    const idsFromSrc = src.selection.map((prod)=> prod.id);
    this.setState({ open: false })
    console.log(src);
    store.set('ids',idsFromSrc)
  }
};

export default Index;