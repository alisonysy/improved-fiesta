import { Card, DisplayText, ChoiceList, TextField,Form, FormLayout } from '@shopify/polaris';
import { useCallback, useState, useEffect } from 'react';
import SelectCountries from '../snippets/selectCountries';
import DisplaySchedule from '../snippets/displaySchedule';

function IncludePage(props) {
  const [selected, setSelected] = useState(['all']);
  const [urlInp, setUrlInp] = useState('');
  const [urlExc, setUrlExc] = useState('');

  const handleUrlInp = useCallback(
    (value) => {
      setUrlInp(value);
    },
    [],
  );
  const handleUrlExc = useCallback(
    (val) => {
      setUrlExc(val);
    },
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

  useEffect(()=>{
    let sl = selected[0];
    switch(sl){
      case 'all':
        props.handleDisplayOnPage('all',undefined);
        break;
      case 'homepage':
        props.handleDisplayOnPage('home',undefined);
        break;
      case 'url':
        props.handleDisplayOnPage('url',urlInp);
        break;
      case 'exclude':
        props.handleDisplayOnPage('exclude',urlExc);
        break;
    }
  },[urlInp,urlExc,selected])

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
        onChange={(nw) => setSelected(nw)}
      />
    </FormLayout.Group>
  );
}

class TargetConfigPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }

  render(){
    return (
      <Card>
        <Form>
          <FormLayout>
            <div style={{fontSize:'18px',padding:'1.5em 0 0 1em'}}>Target Configuration</div>
            <IncludePage handleDisplayOnPage={(sec,url)=> this.props.handleDisplayOnPage(sec,url)}/>
            <SelectCountries shipsToCountries={this.props.shipsToCountries} handleSelectedTargets={this.props.handleSelectedTargets}/>
            <DisplaySchedule handleTimeSetting={this.props.handleTimeSetting}/>
          </FormLayout>
        </Form>
      </Card>
    )
  }
}

export default TargetConfigPage;