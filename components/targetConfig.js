import { Card, DisplayText, ChoiceList, TextField,Form, FormLayout } from '@shopify/polaris';
import { useCallback, useState } from 'react';

function IncludePage() {
  const [selected, setSelected] = useState(['all']);
  const [urlInp, setUrlInp] = useState('');
  const [urlExc, setUrlExc] = useState('');

  const handleChange = useCallback(
    (value) => {
      console.log('choose display on which page',value)
      setSelected(value)
    }, 
    []
  );

  const handleUrlInp = useCallback(
    (value) => {
      console.log('url provided',value)
      setUrlInp(value)
    },
    [],
  );
  const handleUrlExc = useCallback(
    (val) => console.log(val),
    []
  );

  const renderUrlInp = useCallback(
    (isSelected) =>
      isSelected && (
        <TextField
          label=""
          labelHidden
          onChange={handleUrlInp}
          value={urlInp}
        />
      ),
    [handleUrlInp, urlInp],
  );

  const renderPageToExc = useCallback(
    (isSelected) =>
      isSelected && (
        <TextField 
          labelHidden
          onChange={handleUrlExc}
          value={urlExc}
        />
      ),
    [handleUrlExc, urlExc]
  )

  return (
    <FormLayout.Group>
      <ChoiceList
        title="Display on page:"
        choices={[
          {label: 'All pages', value: 'all'},
          {label: 'Homepage only', value: 'homepage'},
          {label: 'Only on page with URL', value: 'url',renderChildren:renderUrlInp},
          {label:'Pages to exclude',value:'exclude',renderChildren:renderPageToExc}
        ]}
        selected={selected}
        onChange={handleChange}
      />
    </FormLayout.Group>
  );
}

class TargetConfigPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <Card>
        <Form>
          <FormLayout>
            <DisplayText size="small">Target Configuration</DisplayText>
            <IncludePage />
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default TargetConfigPage;