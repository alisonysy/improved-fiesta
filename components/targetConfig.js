import { Card, Collapsible, ChoiceList, TextField,Form, FormLayout } from '@shopify/polaris';
import { useCallback, useState, useEffect } from 'react';
import SelectCountries from '../snippets/selectCountries';
import DisplaySchedule from '../snippets/displaySchedule';
import SectionHead from '../snippets/sectionHead';

function IncludePage(props) {
  const [selected, setSelected] = useState(
    props.dspOnPage.selected && props.dspOnPage.selected.length >0?
      props.dspOnPage.selected
      :
      ['all']
    );
  const [urlInp, setUrlInp] = useState(
    props.dspOnPage && props.dspOnPage.url && props.dspOnPage.url.length > 0?
      props.dspOnPage.url
      :
      ''
    );
  const [urlExc, setUrlExc] = useState(
    props.dspOnPage && props.dspOnPage.url && props.dspOnPage.url.length > 0?
      props.dspOnPage.url
      :
      ''
    );

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
    this.state = {
      sectionActive:true,
    };
  }

  render(){
    return (
      <Card>
        <SectionHead 
          handleToggle={(active) => this.setState({sectionActive:active})}
          headerTxt="Target configuration"
          sectionActive={this.state.sectionActive}
        />
        <Collapsible open={this.state.sectionActive} >
          <FormLayout> 
            <IncludePage 
              handleDisplayOnPage={(sec,url)=> this.props.handleDisplayOnPage(sec,url)}
              dspOnPage={this.props.dspOnPage}
            />
            <SelectCountries 
              shipsToCountries={this.props.shipsToCountries} 
              handleSelectedTargets={this.props.handleSelectedTargets}
              selectedTargets={this.props.selectedTargets}
            />
            <DisplaySchedule 
              handleTimeSetting={this.props.handleTimeSetting}
              scheduleTime={this.props.scheduleTime}
            />
          </FormLayout>
        </Collapsible>  
      </Card>
    )
  }
}

export default TargetConfigPage;